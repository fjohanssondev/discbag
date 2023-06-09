import type { IDisc } from "types/types";
import DiscView from "./DiscView";

interface IDiscView {
  name: string
  id: string
  manufacturer: string
  type: string
  speed: number
  fade: number
  turn: number
  glide: number
}

const DiscList = ({ discs }: { discs: IDisc[] }) => {

  return (
    <section className="mt-8">
      <div className="md:container md:mx-auto">
        <div className="grid grid-cols-2 auto-rows-max md:grid-cols-4 gap-6">
          {discs?.map(disc => (
            <DiscView key={disc.id} {...disc as IDiscView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiscList