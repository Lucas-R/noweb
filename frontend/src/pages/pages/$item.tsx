import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/$item')({
    component: RouteComponent,
})

function RouteComponent() {
    const { item } = Route.useParams();
    return <div>Pages: {item}</div>
}
