import UnderConstruction from '@components/layout/UnderConstruction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy/')({
  head: () => ({
    meta: [{
      title: "Noweb | Privacy policy"
    }]
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <UnderConstruction />
}
