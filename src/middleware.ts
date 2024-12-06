import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const studioPath = "/studio";

  if (url.pathname.startsWith(studioPath)) {
    const basicAuth = req.headers.get("authorization");
    const username = process.env.CLIENT_USERNAME;
    const password = process.env.CLIENT_PASSWORD;

    if (!basicAuth) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Studio"',
        },
      });
    }

    const [user, pass] = atob(basicAuth.split(" ")[1]).split(":");
    if (user !== username || pass !== password) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  }

  return NextResponse.next();
}
