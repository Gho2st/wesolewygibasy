import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

export async function GET(request, { params }) {
  const pathSegments = params.path;

  // Tworzenie ścieżki do folderu w katalogu public na podstawie przekazanych segmentów
  const folderPath = join(process.cwd(), "public", ...pathSegments);

  console.log(folderPath);

  try {
    // Pobieranie listy plików w folderze
    const files = readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file)) // Filtrowanie tylko plików graficznych
      .map((file) => join("/", ...pathSegments, file)); // Tworzenie ścieżek URL do plików

    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json(
      { error: "Folder not found or no images in the folder" },
      { status: 404 }
    );
  }
}
