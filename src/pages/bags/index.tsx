import MyBagList from '~/components/Bags/MyBagList'
import { api } from '~/utils/api'

const Bags = () => {

  const { data: bags } = api.bag.getAllMyBags.useQuery()

  return (
    <section className='flex flex-col min-h-screen'>
      <h1 className='text-4xl font-semibold'>My bags</h1>
      {bags?.length > 0 ? (
        <MyBagList bags={bags} />
      ) : (
        <div className='flex justify-center self-center'>
          <div className='flex flex-col items-center border border-gray-400 rounded-md p-4 bg-gray-50'>
            <h2 className='font-semibold'>Create your first bag</h2>
            <p className='text-sm max-w-md text-center mt-2 mb-4 text-gray-500'>Start your Discbag-journey by creating your first bag and adding discs to it.</p>
            <button className='flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 text-sm text-indigo-50 px-4 py-2 rounded'>Create bag</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Bags