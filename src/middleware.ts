import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default  clerkMiddleware(async(auth, req: NextRequest ) => {
  const { pathname } = req.nextUrl;
 
  // Define public routes
  const publicRoutes = ['/home', '/sign-in', '/about'];

  // Define protected routes
  const protectedRoutes = [
    '/shop', '/myAccount', '/sofa', '/bed', '/chairs', '/table',
    '/checkout', '/success', '/cancel', '/contact','/blogs','/studio'
  ];

  // Check if the user is authenticated
  const user = (await auth()).userId;

  // If the user is not logged in and trying to access protected routes, redirect to sign-in
  if (!user && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
  

  // If it's a public route or the user is authenticated for a protected route, allow the request
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};