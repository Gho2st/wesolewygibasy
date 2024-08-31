import fs from "fs";
import path, { join } from "path";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const pathSegments = params.path;

  const directoryPath = join(process.cwd(), "public", ...pathSegments);

  console.log(directoryPath);

  try {
    const files = fs.readdirSync(directoryPath);
    const folders = files.filter((file) =>
      fs.statSync(path.join(directoryPath, file)).isDirectory()
    );

    return NextResponse.json(folders);
  } catch (err) {
    return NextResponse.json(
      { error: "Unable to scan directory" },
      { status: 500 }
    );
  }
}
