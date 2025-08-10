import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/our-careers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/our-careers/"!</div>
}
