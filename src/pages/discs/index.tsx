import DiscList from "~/components/DiscList"

const Discs = () => {

  return (
    <div>
      <div className="md:container md:mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col mt-12">
          <h1 className="text-4xl font-semibold">Discs</h1>
          <DiscList />
        </div>
      </div>
    </div>
  )
}

export default Discs