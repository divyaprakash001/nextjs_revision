import React from 'react'
import { cookies } from 'next/headers';

export const metadata = {
  title:"About Divya Prakash"
}


export default async function about() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log("theme", theme);
  console.log("about server components")
  return (
    <div>
      This is about page {new Date().toLocaleTimeString()}
    </div>
  )
}

