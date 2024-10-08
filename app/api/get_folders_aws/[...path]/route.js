import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "eu-central-1",
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

async function getImagesInFolder(folderPrefix, bucketName) {
  const commandParams = {
    Bucket: bucketName,
    Prefix: folderPrefix,
    Delimiter: "/",
  };

  try {
    const command = new ListObjectsV2Command(commandParams);
    const response = await s3Client.send(command);

    // Filter objects to get images and return the first image
    const images = (response.Contents || []).filter((object) =>
      object.Key.endsWith(".jpg")
    );

    if (images.length > 0) {
      // Use Buffer to decode file name as UTF-8
      const fileNameBuffer = Buffer.from(images[0].Key, "utf-8");
      return fileNameBuffer.toString("utf-8");
    }

    return null;
  } catch (err) {
    console.error("Error fetching objects from S3:", err);
    return null;
  }
}

export async function GET(request, { params }) {
  const pathSegments = params.path; // Example: ['stanczyka']
  const bucketName = "wesolewygibasy";
  const prefix = pathSegments.join("/") + "/"; // Ensure the prefix ends with a "/"
  const prelink = "https://wesolewygibasy.s3.eu-central-1.amazonaws.com/";

  console.log("Fetching folders from S3 for prefix:", prefix);

  try {
    const commandParams = {
      Bucket: bucketName,
      Prefix: prefix,
      Delimiter: "/", // Use delimiter to separate folders
    };

    const command = new ListObjectsV2Command(commandParams);
    const response = await s3Client.send(command);

    // Extract folders within the specified prefix
    const folders = (response.CommonPrefixes || []).map(
      async (commonPrefix) => {
        // Use Buffer to decode folder name as UTF-8
        const folderNameBuffer = Buffer.from(
          commonPrefix.Prefix.replace(prefix, "").replace(/\/$/, ""),
          "utf-8"
        );
        const folderName = folderNameBuffer.toString("utf-8");

        const folderPrefix = `${prefix}${folderName}/`;
        const firstImageKey = await getImagesInFolder(folderPrefix, bucketName);

        return {
          folderName: folderName,
          imageUrl: firstImageKey ? `${prelink}${firstImageKey}` : null,
        };
      }
    );

    // Wait for all folder promises to resolve
    const resolvedFolders = await Promise.all(folders);

    // Return JSON with resolved folders and their image URLs
    return NextResponse.json(resolvedFolders);
  } catch (err) {
    console.error("Error fetching objects from S3:", err);
    return NextResponse.json(
      { error: "Unable to scan directory" },
      { status: 500 }
    );
  }
}
