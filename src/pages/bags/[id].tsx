import { useRouter } from "next/router"


const BagPage = () => {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div>BagPage</div>
  )
}

export default BagPage