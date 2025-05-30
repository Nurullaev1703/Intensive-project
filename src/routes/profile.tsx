import { createFileRoute } from '@tanstack/react-router'
import { ProfilePage } from '../pages/profile/ProfilePage'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProfilePage />
}
