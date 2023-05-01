import type { IBag } from "types/types";
import DiscItem from "./DiscItem";

const Bag: React.FC<IBag> = ({ name, createdAt, updatedAt, discs }) => {

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm">Created at: {createdAt.toDateString()}</p>
      <p className="text-sm">Last updated: {updatedAt.toDateString()}</p>
      <div className="mt-4">
        {discs?.map((disc) => (
          <DiscItem key={disc.id} {...disc} />
        ))}
      </div>
    </div>
  )
}

export default Bag