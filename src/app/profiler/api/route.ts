import { headers,cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest){
    // option to retrive the request headers --------------------------------
    const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"))


    // second option to retrieve headers -------------------------------------
    const headersList = await headers()
    const auth = headersList.get('Authorization')

    const theme  = request.cookies.get("theme")
    console.log(theme)

    // second option to set and get the cookies using cookies function
    const cookiesStore = await cookies()
    cookiesStore.set("resultPerPage","20")
    console.log(cookiesStore.get("resultPerPage"))

    if(auth){
        // setting the custom response headers
        return new Response("<h1>You are authorized</h1>", {
            headers: {
                "Content-Type": "application/json",
                // first approach to set the cookie
                "Set-Cookie":"theme=dark"
            },
            status: 200
        })
    }
    
    // setting the custom response headers
    return new Response("<h1>Unauthorized</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie":"theme=dark"
        },
        status: 401
    })
}