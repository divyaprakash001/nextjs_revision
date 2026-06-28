"use client"
import { useState } from 'react'
import { useEffect } from 'react'

function Page() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch("/comments")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <div>
      profile <br/>
      
    </div>
  )
}

export default Page
