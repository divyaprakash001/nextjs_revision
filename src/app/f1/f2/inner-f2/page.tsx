import React from 'react'
import Link from 'next/link'

function InnerF2() {
  return (
    <>
    <h1>
      Inner F2 Page
    </h1>
    <div>
        <Link href={"/f1/f2"}>F2</Link> <br />
        <Link href={"/f3"}>F3</Link> <br />
        <Link href={"/f5"}>F5</Link>
    </div>
    </>
  )
}

export default InnerF2
