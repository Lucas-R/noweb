import UnderConstruction from '@components/layout/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Terms-&-Conditions/')({
    head: () => ({
        meta: [{
            title: "NEX | Terms & conditions"
        }]
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return <UnderConstruction />
}
