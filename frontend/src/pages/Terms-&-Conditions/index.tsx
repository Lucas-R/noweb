import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Terms-&-Conditions/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/Terms-&-Conditions/"!</div>
}
