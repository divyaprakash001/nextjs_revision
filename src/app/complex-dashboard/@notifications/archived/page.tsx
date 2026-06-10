import React from 'react'
import '@/app/global.css';
import { Card } from '@/components/card';
import Link from 'next/link';


function Archived() {
  return (
    <>
    <Card>
      Archived
      <div>
        <Link href={"/complex-dashboard"}>Default</Link>
      </div>
    </Card>
    </>
  )
}

export default Archived
