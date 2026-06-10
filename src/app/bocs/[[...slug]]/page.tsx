import React from 'react'


async function page({params}:{params:Promise<{slug:string}>}) {
    const slug = (await params).slug;
    if (slug?.length ==2)  {
        return (
            <h1>viewing docs for topic {slug[0]} and subtopic {slug[1]}</h1>
        );
    }else if (slug?.length ==1)  {
        return (
            <h1>viewing docs for topic {slug[0]}</h1>
        );
    }
  return (
    <div>
      bocs home page {slug}
      {/* [[...slug]] acts as optional */}
    </div>
  )
}

export default page


// in page name it is [[...slug]] means optional