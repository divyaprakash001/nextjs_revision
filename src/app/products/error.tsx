"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";


function ErrorBoundary({error,reset}:{error:Error,reset : ()=> void;}) {
    const router = useRouter()
    const reload = ()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        })
    }
  return (
    <div>
      {error.message}
      <button onClick={()=>reload()}>Try Again</button>
    </div>
  )
}

export default ErrorBoundary


/*

component hierarchy


<Layout>
    <Template>
        <ErrorBoundary fallback={<Error/>}>
            <Suspense fallback = {<Loading/>}>
                <ErrorBoundary fallback={<NotFound/>}>
                    <Page/>
                </ErrorBoundary>
            </Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
*/ 