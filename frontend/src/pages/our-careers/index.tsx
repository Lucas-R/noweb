import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/our-careers/')({
  head: () => ({
    meta: [{
      title: "Noweb | Our careers"
    }]
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/our-careers/"!</div>
}
