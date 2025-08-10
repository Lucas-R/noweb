import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$post')({
    component: RouteComponent,
})

function RouteComponent() {
    const { post } = Route.useParams();
    return <div>Blog: {post}</div>
}
