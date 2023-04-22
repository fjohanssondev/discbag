
const CreateDisc = () => {
  return (
    <section>
      <div className="md:container md:mx-auto px-4">
        <div className="mt-24">
          <h1 className="text-4xl font-semibold">Create disc</h1>
        </div>
        <form>
          <div className="mt-8">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">
              <input type="text" name="name" id="name" className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">
              <input type="text" name="name" id="name" className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">
              <input type="text" name="name" id="name" className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CreateDisc