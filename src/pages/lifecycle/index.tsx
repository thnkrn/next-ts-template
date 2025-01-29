import { useEffect, useState } from 'react'

const MessageComponent = () => {
  useEffect(() => {
    console.log('MessageComponent mounted')

    return () => {
      console.log('MessageComponent unmounted')
    }
  }, [])

  return <p className="mt-2 text-green-500">Hello! I am a toggled message.</p>
}

const LifecycleDemo = () => {
  const [counter, setCounter] = useState(0)
  const [showMessage, setShowMessage] = useState(true)

  // ComponentDidMount: Runs only once when the component is first rendered
  useEffect(() => {
    console.log('Component mounted: LifecycleDemo')

    // Cleanup (ComponentWillUnmount): Happens when the component is unmounted
    return () => {
      console.log('Component unmounted: LifecycleDemo')
    }
  }, [])

  // ComponentDidUpdate: Runs every time the counter changes
  useEffect(() => {
    console.log('Counter updated:', counter)
  }, [counter])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">React Lifecycle Demo</h1>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Counter</h2>
        <p>Current count: {counter}</p>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCounter(counter + 1)}
        >
          Increment Counter
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Toggle Message</h2>
        <button
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setShowMessage(!showMessage)}
        >
          Toggle Message
        </button>
        {showMessage && <MessageComponent />}
      </div>
    </div>
  )
}

export default LifecycleDemo
