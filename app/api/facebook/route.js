import { NextResponse } from "next/server";

export async function GET() {
  const PAGE_ID = "804821782910864";
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
  const timestamp = Date.now(); // Dodajemy timestamp do URL-a zeby uniknac tego ze nie wyswietla sie przez cache

  const url = `https://graph.facebook.com/v22.0/${PAGE_ID}/feed?limit=3&fields=message,created_time,attachments{media}&access_token=${ACCESS_TOKEN}&nocache=${timestamp}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("FB API response status:", response.status);
    console.log("FB API response data:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
