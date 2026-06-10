import Counter from "./counter"

export const metadata = {
    title:'Counter App'
}

// we cannot use metedata in client component

function CounterPage() {
   
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default CounterPage
