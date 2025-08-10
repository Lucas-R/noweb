import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portifolio/$item')({
    component: RouteComponent,
})

function RouteComponent() {
    const { item } = Route.useParams();
    return <div>Portifolio: {item}</div>
}
