import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next(); // Allow access if logged in
  },
  {
    pages: {
      signIn: "/admin/login", // Redirect here if not logged in
    },
  }
);

// Apply to /admin and any subpaths
export const config = {
  matcher: ["/admin/:path*"],
};
    