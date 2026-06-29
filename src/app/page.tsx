import Link from "next/link";

export default function Home() {
  console.log("home route")
  return (
    <>
    <div>
     <h1> Welcome home !</h1>
     <Link href={"/"}>Home</Link>
     <Link href={"/blog"}>Blog</Link>
     <Link href={"/products"}>Products</Link> <br />
     <Link href={"/articles/breaking-news-123?lang=en"}>Read in english</Link>
     <Link href={"/articles/breaking-news-123?lang=fr"}>Read in french</Link>
    </div>



    </>
  )
}


