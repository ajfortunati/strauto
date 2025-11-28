import { useState } from 'react'

import { LoginPage } from './pages'

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />
  }

  return <h1>Welcome to the Strauto web app!</h1>
}
