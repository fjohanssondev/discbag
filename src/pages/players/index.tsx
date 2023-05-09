import PlayerCard from "~/components/Players/PlayerCard";
import { api } from "~/utils/api"

const Players = () => {

  const { data: users } = api.user.all.useQuery();

  return (
    <div>
      <h1 className="text-4xl font-semibold">Find Players</h1>
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {users?.map(user => (
          <PlayerCard key={user.id} {...user} />
        ))}
      </section>
    </div>
  )
}

export default Players