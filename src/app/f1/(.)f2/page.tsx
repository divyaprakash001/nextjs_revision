import React from 'react'

function page() {
  return (
    <>
      <h1>(.) intercepted f2</h1>
    </>
  )
}

export default page

/*
(.)   => to match segments on the same level
(..)  => to match segments one level above
(..)(..)  => to match segments two level above
(...)  => to match segments root level inception
*/ 