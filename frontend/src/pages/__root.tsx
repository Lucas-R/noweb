import Menu from '@components/layout/Menu'
import Footer from '@components/layout/Footer'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <Menu />
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
        </>
    ),
})