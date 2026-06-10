import React from 'react'
import '../../global.css';
import { Card } from '@/components/card';
import Link from 'next/link';

function UserAnalytics() {
  return (
    <Card>
      UserAnalytics
      <div>
        <Link href={"/complex-dashboard/latest-user"}>Latest User</Link>        
      </div>
    </Card>
  )
}

export default UserAnalytics
