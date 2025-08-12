import UnderConstruction from '@components/layout/UnderConstruction';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/$item')({
    head: () => ({
        meta: [{
            title: "Noweb | Pages"
        }]
    }),
    component: RouteComponent,
})

function RouteComponent() {
    const { item } = Route.useParams();
    return (
        <UnderConstruction>
            <p>Param: {item}</p>
        </UnderConstruction>
    )
}
