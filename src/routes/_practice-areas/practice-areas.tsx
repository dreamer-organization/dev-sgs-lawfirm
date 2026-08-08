import PracticeAreasPage from '@/pages/practice-areas'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_practice-areas/practice-areas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PracticeAreasPage />
}
