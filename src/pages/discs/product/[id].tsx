import Link from "next/link"
import { useRouter } from "next/router"
import { api } from "~/utils/api"

const DiscPage = () => {

  const router = useRouter()
  const { id } = router.query

  const { data: disc } = api.disc.getById.useQuery({
    id: id as string
  })

  return (
    <section>
      <div className="md:container md:mx-auto px-4 mt-12">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">{disc?.name}</h1>
          <Link href="/bag" className="flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 text-sm text-indigo-50 px-4 py-2 rounded">Add to bag</Link>
        </div>
      </div>
    </section>
  )
}

export default DiscPage