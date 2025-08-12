import UnderConstruction from '@components/layout/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [{
      title: "Noweb | Services"
    }]
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <UnderConstruction />
}
