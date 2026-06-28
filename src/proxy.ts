// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request:NextRequest){
//     return NextResponse.redirect(new URL('/',request.url))
// }


// export const config = {
//     matcher:"/profile"
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  // console.log(request.headers.get('user-agent'))
  // return NextResponse.redirect(new URL('/', request.url))

  // // second method for proxy(middleware responses)
  // if(request.nextUrl.pathname === '/profile'){
  //   // this will redirect the request to the new URL, and the URL in the browser will also change
  //   // return NextResponse.redirect(new URL('/hello', request.url))

  //   // this will rewrite the request to the new URL, but the URL in the browser will remain the same
  //   return NextResponse.rewrite(new URL('/hello', request.url))
  // }

  const response = NextResponse.next();
  // const themePreference = request.cookies.get("theme")
  // we can use this cookies function to get the cookies from the request and set the cookies in the response
  const cookieStore = await cookies();
  const themePreference = cookieStore.get("theme")
  if (!themePreference) {
    // response.cookies.set("theme", "dark")
    cookieStore.set("theme","dark")
  }
  response.headers.set("custom-header","custom-value")
  return response;
}

// export const config = {
//   matcher: '/profile',
// }