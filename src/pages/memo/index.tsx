import { useCallback, useMemo, useState } from 'react'

const Memo = () => {
  const [count, setCount] = useState(0)
  const [otherState, setOtherState] = useState(0)

  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation')
    return count * 2
  }, [count])

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <p>otherState: {otherState}</p>
      <button onClick={increment}>Increment Count</button>
      <button onClick={() => setOtherState((prev) => prev + 1)}>Update Other State</button>
    </div>
  )
}

export default Memo
