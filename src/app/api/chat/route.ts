import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const apiUrl = process.env.FLOWISE_API_URL;
    
    if (!apiUrl) {
      return NextResponse.json({ error: "Missing API URL configuring" }, { status: 500 });
    }

    const response = await fetch(
      apiUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "PostmanRuntime/7.35.0"
        },
        body: JSON.stringify(body),
        cache: 'no-store'
      }
    );
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API Proxy Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
