import useFetchHooksData from 'components/hooks/useFetchHooksData'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface Props {
  serverData: ITodo
  serverFetchTime: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data: ITodo = await response.json()
  const serverFetchTime = new Date().toISOString()

  console.log('Server-side data fetched:', data)

  return {
    props: {
      serverData: data,
      serverFetchTime,
    },
  }
}

const Fetch = ({ serverData, serverFetchTime }: Props) => {
  const [clientData, setClientData] = useState<ITodo | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [clientFetchTime, setClientFetchTime] = useState<string | null>(null)

  const { dataHooks, loadingHooks, error, fetchHooksData } = useFetchHooksData()

  console.log('Server-side data rendered on page load:', serverData)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //       const data: ITodo = await response.json()
  //       setClientData(data)
  //       setClientFetchTime(new Date().toISOString())

  //       console.log('Client-side data fetched:', data)
  //     } catch (error) {
  //       console.error('Error fetching client-side data:', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchData()
  // }, [])

  console.log('render')

  useEffect(() => {
    const fetchHooks = async () => {
      await fetchHooksData()
      setClientData(dataHooks)
    }

    fetchHooks()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Server-Side vs Client-Side Data Fetching</h1>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Server-Side Data:</h2>
        <p className="text-gray-500">Fetched at: {serverFetchTime}</p>
        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(serverData, null, 2)}</pre>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Client-Side Data:</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="text-gray-500">Fetched at: {clientFetchTime || 'Error fetching data'}</p>
            <pre className="bg-gray-100 p-2 rounded">
              {clientData ? JSON.stringify(clientData, null, 2) : 'Error fetching data'}
            </pre>
          </>
        )}
      </div>
    </div>
  )
}

export default Fetch
