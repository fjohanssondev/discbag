import { api } from "~/utils/api";
import DiscView from "./DiscView";

const DiscList = () => {

  const { data: discs } = api.disc.all.useQuery();

  return (
    <section className="mt-8">
      <div className="md:container md:mx-auto">
        <div className="grid grid-cols-6 gap-6">
          {discs?.map(disc => (
            <DiscView key={disc.id} name={disc.name} id={disc.id} description={disc.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiscList