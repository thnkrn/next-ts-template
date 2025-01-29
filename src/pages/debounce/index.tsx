import { useEffect, useState } from 'react'

const Debounce = () => {
  const [input, setInput] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(input), 500)
    return () => clearTimeout(handler)
  }, [input])

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  )
}

export default Debounce
