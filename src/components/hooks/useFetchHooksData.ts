import { useState } from 'react'
// interface ITodo {
//   userId: number
//   id: number
//   title: string
//   completed: boolean
// }

const useFetchHooksData = () => {
  const [dataHooks, setDataHooks] = useState<ITodo>()
  const [loadingHooks, setLoadingHooks] = useState(false)
  const [error, setError] = useState<Error>()

  const fetchHooksData = async () => {
    setLoadingHooks(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const resj: ITodo = await response.json()
      setDataHooks(resj)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoadingHooks(false)
    }
  }

  return { dataHooks, loadingHooks, error, fetchHooksData }
}

export default useFetchHooksData
