import UnderConstruction from '@components/layout/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-us/')({
    head: () => ({
        meta: [{
            title: "NEX | About us"
        }]
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return <UnderConstruction />
}
