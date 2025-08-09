import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import '@styles/global.css'
import { ReactQueryProvider } from '@libs/query'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </StrictMode>,
  )
}