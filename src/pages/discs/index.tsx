import { useId, useState } from "react"
import DiscList from "~/components/DiscList"
import { api } from "~/utils/api"

const Discs = () => {

  const label = useId()

  const [page, setPage] = useState(0)

  const { data, fetchNextPage } = api.disc.all.useInfiniteQuery({
    limit: 16
  },
  {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  }
  );

  const handleFetchNextPage = async () => {
    await fetchNextPage();
    setPage(prev => prev + 1)
  };

  const handleFetchPreviousPage = () => {
    setPage(prev => prev - 1)
  };

  const discs = data?.pages[page]?.discs

  return (
    <div>
        <div className="flex flex-col mt-12">
          <h1 className="text-4xl font-semibold">Discs</h1>
          <form className="flex flex-col mt-4">
            <label className="mb-2" htmlFor={label}>Search</label>
            <input className="border p-3 text-sm" id={label} type="search" placeholder="Search discs..." />
          </form>
          <DiscList discs={discs} />
          <div className="flex justify-center mt-10 gap-4">
          <button disabled={page === 0} className="flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 text-sm text-indigo-50 px-4 py-2 rounded" onClick={() => void handleFetchPreviousPage()}>Previous</button>
          <button disabled={data?.pages[page]?.nextCursor === undefined} className="flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 text-sm text-indigo-50 px-4 py-2 rounded" onClick={() => void handleFetchNextPage()}>Next</button>
          </div>
        </div>
    </div>
  )
}

export default Discs