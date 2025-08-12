import UnderConstruction from '@components/layout/UnderConstruction';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/perfil/$username')({
    head: () => ({
        meta: [{
            title: "NEX | Perfil"
        }]
    }),
    component: RouteComponent,
})

function RouteComponent() {
    const { username } = Route.useParams();
    return (
        <UnderConstruction>
            <p>user: {username}</p>
        </UnderConstruction>
    )
}
