
export const Product = async()=>{
  await new Promise((resolve)=> setTimeout(resolve,2000));
  return(
    <>
    <div className="ctext-lg font-bold">Product</div>
    </>
  )
}
