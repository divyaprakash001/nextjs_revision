// set dynamicParams to false to generate static pages for all product IDs and return 404 when a product ID is not found
export const dynamicParams = false;
// set false in case of blog,smaller or more fixed number of pagesg, you can pre -render all the pages at build time. But in case of ecommerce, we can have thousands of products, so we don't want to generate static pages for all product IDs.

// set true in case of ecommerce, we can have thousands of products, so we don't want to generate static pages for all product IDs. Instead, we can generate static pages for the most popular products and generate the rest of the pages on demand when a user requests them.

export async function generateStaticParams() {
 return [
    {id:"1"},
    {id:"2"},
    {id:"3"},
 ];
}


export default async function ProductDetailsPage({ params }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    return (
        <>
            <h1>
                Product {id} details rendered at {new Date().toLocaleTimeString()}
            </h1>
        </>
    )
}