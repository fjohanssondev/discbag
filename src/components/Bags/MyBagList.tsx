import type { IBag } from "types/types"
import Bag from "./Bag"

const MyBagList: React.FC<{ bags: IBag[] }> = ({ bags }) => {

  return (
    <div>
      {bags.map((bag) => (
        <Bag key={bag.id} {...bag} />
      ))}
    </div>
  )
}

export default MyBagList