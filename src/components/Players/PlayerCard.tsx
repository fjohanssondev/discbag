import Image from "next/image";
import Link from "next/link";
import type { IBag } from "../../../types/types"

interface PlayerProps {
  id: string;
  name: string | null;
  image: string | null;
  bags: IBag[];
}

const PlayerCard: React.FC<PlayerProps> = ({ id, name, image, bags}) => {
  return (
    <article className="bg-white shadow p-4">
      <Link href={`/players/${id}`} className="flex items-center">
        <Image className="rounded-full" width={50} height={50} src={image || ''} alt="" />
        <div className="ml-3">
          <h2 className="font-medium text-sm">{name}</h2>
          <p className="text-xs text-gray-500">Amount of bags: {bags?.length}</p>
        </div>
      </Link>  
    </article>
  )
}

export default PlayerCard