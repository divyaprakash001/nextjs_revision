import Link from "next/link";

export default function ProductPage(){
    return (
        <>
            <h1>Featured Product</h1>
            <Link href={"/productt/1"}>Product 1</Link>
            <Link href={"/productt/2"}>Product 2</Link>
            <Link href={"/productt/3"}>Product 3</Link>
            <h2 className="text-xl font-bold mb-2">Category</h2>
            <Link href={"/productt/category/electronics"}>Electronics</Link>
            <Link href={"/productt/category/books"}>Books</Link>
        </>
    )
}