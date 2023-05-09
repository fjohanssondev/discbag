import { useRouter } from "next/router"
import { api } from "~/utils/api"

const Profile = () => {

  const router = useRouter()
  const { id } = router.query
  const { data: user } = api.user.getById.useQuery({
    id: id as string
  })

  return (
    <div>
      <h1 className="text-3xl font-semibold">{user?.name}</h1>
    </div>
  )
}

export default Profile