// "use client";
import {use} from "react";
import Link from 'next/link'

export default async function NewsArticle({
    params,searchParams
    }:{
    params:Promise<{articleId:string}>;
    searchParams : Promise<{lang?:"en" | "es" | "fr"}>;
}) {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;

    // if using in client component, we need to do like this and remove async from function
    // const {articleId} = use(params);
    // const {lang = "en"} = use(searchParams);
  return (
    <div>
      <h1>article 123 {articleId}</h1>
      <p>readingt the article in {lang}</p>
        
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=sp`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  )
}


