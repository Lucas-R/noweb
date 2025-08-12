import UnderConstruction from '@components/layout/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact-us/')({
    head: () => ({
        meta: [{
            title: "Noweb | Contact us"
        }]
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return <UnderConstruction />
}
