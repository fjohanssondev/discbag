import DiscItem from "./DiscItem";
import type { DiscProps } from "./DiscItem";

interface Bag {
  name: string;
  createdAt: Date;
  discs: DiscProps[];
  updatedAt: Date;
}

const Bag: React.FC<Bag> = ({ name, createdAt, updatedAt, discs }) => {

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