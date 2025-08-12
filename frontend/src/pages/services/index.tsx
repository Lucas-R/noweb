import UnderConstruction from '@components/layout/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [{
      title: "NEX | Services"
    }]
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <UnderConstruction />
}
