import { Metadata } from "next";


type Props = {params:Promise<{productId:string}>};

export const generateMetadata = async ({params,}:Props) : Promise<Metadata> =>{
  const id = (await params).productId;
  const title = await new Promise((resolve)=>{
    setTimeout(() => {
      resolve(`iPhone ${id}`)
    }, 100);
  })
  return {
    title:`Product ${title}`,
  }
}


function getRandomNumber(count:number):number{
  return Math.floor(Math.random()*count)
}


export default async function ProductDetails({params,}:Props) {
  
    const productId = (await params).productId
    // const random = getRandomNumber(2);
    // if (random ==1) {
    //   throw new Error("Random number cannot be 1")
    // }


  return (
    <div>
        <h1>Details of product {productId}</h1>
    </div>
  )
}

