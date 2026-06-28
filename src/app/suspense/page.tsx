import { Card } from '@/components/card';
import Spinner from '@/components/Spinner'
import React, { Suspense } from 'react'

async function Blog(){
    await new Promise((resolve)=> setTimeout(resolve,2000))
    return <>
    <div>Blog content loaded</div>
    </>
}

async function Profile(){
    await new Promise((resolve)=> setTimeout(resolve,3000))
    return <>
    <div>Profile content loaded</div>
    </>
}

function page() {

    // const HeavyComponent = React.lazy(()=> import('@/components/LineChart'))
    
    return (
        <div>
            {/* suspense solve the problem of asynchronous data loading */}
            {/* suspense is also useful for handling loading states in React applications */}
            {/* suspense solve the issue of  hydration */}
            {/* suspense enables html streaming that improves the user experience */}
           <Suspense fallback={<Spinner/>}>
                <Card>
                   <Profile/>
                </Card>
            </Suspense>
            <Card><div>Hello world card</div></Card>
           <Suspense fallback={<Spinner/>}>
                <Card>
                   <Blog/>
                </Card>
            </Suspense>
        </div>
    )
}

export default page
