import { NextResponse } from "next/server";

export async function GET() {
  const PAGE_ID = "804821782910864";
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  const url = `https://graph.facebook.com/v22.0/${PAGE_ID}/feed?limit=3&fields=message,created_time,attachments{media}&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store", // ważne!
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
