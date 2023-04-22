import { api } from "~/utils/api";

const Discs = () => {

  const { data: discs } = api.disc.all.useQuery();

  return (
    <div>
      <h1 className="text-4xl">Discs</h1>
      <div>{discs?.map(disc => (
      <div key={disc.id}>{disc.name}</div>
    ))}</div>
    </div>
  )
}

export default Discs