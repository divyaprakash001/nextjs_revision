import React from 'react'
import LineChart from '@/components/line-chart'

function BarChart(){
    return(
        <h1>This is bar chart</h1>
    )
}

function dashboardPage() {
  return (
    <div>
        <BarChart/>
        original dashboard page
      <LineChart/>
    </div>
  )
}

export default dashboardPage
