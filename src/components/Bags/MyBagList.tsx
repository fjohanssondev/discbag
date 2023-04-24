import { api } from "~/utils/api";
import Bag from "./Bag";

const MyBagList = () => {

  const { data: bags } = api.bag.getAllMyActiveBags.useQuery()

  return (
    <div>
      {bags?.map((bag) => (
        <Bag key={bag.id} {...bag} />
      ))}
    </div>
  )
}

export default MyBagList