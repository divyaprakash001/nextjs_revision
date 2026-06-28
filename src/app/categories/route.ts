// it will run in build time and will be cached for 60 seconds
export const dynamic = "force-static";
export const revalidate=60;  // in seconds

export async function GET() {
    const categories = [
        {id:1, name:"Electronics"},
        {id:2, name:"Books"},
        {id:3, name:"Clothing"},
        {id:4, name:"Home & Garden"},
    ];


    return Response.json(categories)

}