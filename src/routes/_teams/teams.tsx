import TeamsPage from '@/pages/our-teams'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_teams/teams')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TeamsPage />
}
