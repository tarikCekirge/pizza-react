import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'

const App = () => {
  return (
    <RouterProvider router={router} future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }} ></RouterProvider>
  )
}

export default App
