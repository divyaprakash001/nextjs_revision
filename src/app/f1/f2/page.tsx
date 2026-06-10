import React from 'react'
import Link from 'next/link';

function F1() {
  return (
    <>
    <h1>
      F2 Page
    </h1>
    <div>
        <Link href={"/f1"}>F1</Link><br />
        <Link href={"/f4"}>F4</Link><br />
    </div>
    </>
  )
}

export default F1;


/*
(.)   => to match segments on the same level
(..)  => to match segments one level above
(..)(..)  => to match segments two level above
(...)  => to match segments root level inception
*/ 