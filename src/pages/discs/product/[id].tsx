import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import { Field, Form } from "houseform";

import Modal from "~/components/Modal"
import { api } from "~/utils/api"
import { discType } from "utils/discType";
import Toast from "~/components/Toast";

const DiscPage = () => {

  const router = useRouter()
  const { id } = router.query

  const { data: disc } = api.disc.getById.useQuery({
    id: id as string
  })

  const { data: bags } = api.bag.getAllMyBags.useQuery()

  const { mutate } = api.bag.addDiscToBag.useMutation()

  const [showToast, setShowToast] = useState(false)

  const addToBag = (bagId: string) => {
    try {

      mutate({
        bagId: bagId,
        discId: id as string
      })
      
      setShowToast(prev => !prev)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
        {showToast && <Toast title="Success!" disc={disc?.name} description="was added to your bag"/>}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">{disc?.name}</h1>
            <p className="text-sm text-gray-500 pt-1">{discType(disc?.type as string)} | {disc?.manufacturer}</p>
            <p>{disc?.description}</p>
            <div className="mt-8">
              <ul className="flex items-center gap-2">
                <li className="text-sm">Speed: {disc?.speed}</li>
                <li className="text-sm">Glide: {disc?.glide}</li>
                <li className="text-sm">Turn: {disc?.turn}</li>
                <li className="text-sm">Fade: {disc?.fade}</li>
              </ul>
            </div>
          </div>
          <div>
            <Modal buttonText="Add to bag">
              { /* TODO: Refactor later */}
              <Form onSubmit={({ bag }: { bag: string }) => void addToBag(bag)}>
                {({ submit }: { submit: () => void }) => (
                  <div>
                    <Field<string>
                      name="bag"
                    >
                      {({ value, setValue, onBlur, errors }) => {
                        return (
                          <div className="flex flex-col mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="disc">
                              What bag do you want to add this disc to?
                            </label>
                            <select
                              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                              name="disc"
                              id="disc"
                              value={value}
                              onChange={(e) => setValue(e.target.value)}
                              onBlur={onBlur}
                            >
                              <optgroup label="My bags">
                                {bags?.map((bag) => (
                                  <option key={bag.id} value={bag.id}>{bag.name}</option>
                                ))}
                              </optgroup>
                            </select>
                            {errors.map((error) => (
                              <p key={error}>{error}</p>
                            ))}
                          </div>
                        );
                      }}
                    </Field>
                    <button className="flex w-full justify-center items-center bg-indigo-500 hover:bg-indigo-400 text-sm text-indigo-50 px-4 py-2 rounded" onClick={submit}>Add to bag</button>
                  </div>
                )}
              </Form>
            </Modal>
          </div>
          </div>
    </section>
  )
}

export default DiscPage