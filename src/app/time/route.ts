// doing caching in the route handler is not supported yet, so we have to force static rendering for now
export const dynamic = "force-static";
// Revalidate the data every 10 seconds
// it means that the data will be cached for 10 seconds, and after that, it will be revalidated and fetched again from the server
export const revalidate = 10;

export async function GET() {
    return Response.json({time:new Date().toLocaleTimeString()});
}