import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      console.error('URL parameter is missing');
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const apiKey = process.env.API_KEY; // Достаем API_KEY из .env
    if (!apiKey) {
      console.error('API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'API_KEY is not set on the server' },
        { status: 500 }
      );
    }

    const screenshotUrl = `https://api.screenshotone.com/take?access_key=${apiKey}&url=${encodeURIComponent(
      url
    )}&format=jpg&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=false&block_trackers=true&delay=0&timeout=60&response_type=by_format&image_quality=80`;

    console.log(`Requesting screenshot from URL: ${screenshotUrl}`);

    const response = await fetch(screenshotUrl);

    if (!response.ok) {
      console.error(`Screenshot API error: ${response.statusText}`);
      return NextResponse.json(
        { error: 'Error fetching screenshot from ScreenshotOne' },
        { status: 500 }
      );
    }

    const imageBuffer = await response.arrayBuffer();
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
