import React from 'react'
import '@/app/global.css';
import { Card } from '@/components/card';
import Link from 'next/link';


function Archived() {
  return (
    <>
    <Card>
      Latest users
      <Link href={"/complex-dashboard"}>User default</Link>
    </Card>
    </>
  )
}

export default Archived
