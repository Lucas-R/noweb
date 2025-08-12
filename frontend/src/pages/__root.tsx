import { createRootRoute, Outlet } from '@tanstack/react-router'
import Template from '@template/index'

export const Route = createRootRoute({
    component: () => (
        <Template>
            <Outlet />
        </Template>
    ),
})