import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "eu-central-1",
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export async function GET(request, { params }) {
  const pathSegments = params.path; // Example: ['stanczyka', 'zaczytani']
  const bucketName = "wesolewygibasy";
  const prefix = pathSegments.join("/") + "/"; // Ensure the prefix ends with a "/"
  const prelink = "https://wesolewygibasy.s3.eu-central-1.amazonaws.com/";

  console.log("Fetching images from S3 for prefix:", prefix);

  try {
    const commandParams = {
      Bucket: bucketName,
      Prefix: prefix,
      Delimiter: "/", // Use delimiter to separate folders if needed
    };

    const command = new ListObjectsV2Command(commandParams);
    const response = await s3Client.send(command);

    // Extract image URLs
    const images = (response.Contents || [])
      .filter((object) => /\.(jpg|jpeg|png|gif)$/i.test(object.Key)) // Filter only image files
      .map((object) => ({
        fileName: object.Key.split("/").pop(),
        imageUrl: `${prelink}${object.Key}`,
      }));

    // console.log("Images:", images);

    return NextResponse.json(images);
  } catch (err) {
    console.error("Error fetching objects from S3:", err);
    return NextResponse.json(
      { error: "Unable to fetch images from S3" },
      { status: 500 }
    );
  }
}
