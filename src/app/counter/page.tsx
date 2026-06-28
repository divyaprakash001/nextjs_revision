import Counter from "./counter"

export const metadata = {
    title:'Counter App'
}

// we cannot use metedata in client component

function CounterPage() {
   console.log('CounterPage rendered')
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default CounterPage
