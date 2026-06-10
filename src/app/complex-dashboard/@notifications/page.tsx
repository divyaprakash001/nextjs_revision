import React from 'react'
import '../../global.css';
import { Card } from '@/components/card';
import Link from 'next/link';


function Notification() {
  return (
    <>
    <Card>
      Notification
      <div>
        <Link href={"/complex-dashboard/archived"}>Archieved</Link>
      </div>
    </Card>
    </>
  )
}

export default Notification
