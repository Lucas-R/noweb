import UnderConstruction from '@components/layout/UnderConstruction';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$post')({
    head: () => ({
        meta: [{
            title: "Noweb | blog"
        }]
    }),
    component: RouteComponent,
})

function RouteComponent() {
    const { post } = Route.useParams();
    return (
        <UnderConstruction>
            <p>Param: {post}</p>
        </UnderConstruction>
    )
}
