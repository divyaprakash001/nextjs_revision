import React from 'react'

function InterceptedF4() {
  return (
    <>
    (..)(..)  Intercepted f4 page upto two level
    </>
  )
}

export default InterceptedF4


/*
(.)   => to match segments on the same level
(..)  => to match segments one level above
(..)(..)  => to match segments two level above
(...)  => to match segments root level inception
*/ 