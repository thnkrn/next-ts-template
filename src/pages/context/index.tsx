import { createContext, useContext } from 'react'

const ThemeContext = createContext('light')

const Context = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  )
}

const ChildComponent = () => {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <p>The current theme is {theme}</p>
    </div>
  )
}

export default Context
