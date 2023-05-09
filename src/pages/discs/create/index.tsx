import { Form, Field as HouseField } from "houseform"
import { useRouter } from "next/router";
import Field from "~/components/CreateDisc/Field";
import { api } from "~/utils/api";

interface FormValues {
  name: string
  description: string
  manufacturer: string
  mold?: string
  type: "PUTTER" | "MIDRANGE" | "FAIRWAY_DRIVER" | "DISTANCE_DRIVER"
  speed: number
  glide: number
  turn: number
  fade: number
  stability: string
}

const CreateDisc = () => {

  const { mutate } = api.disc.create.useMutation();
  const router = useRouter();

  const handleSubmit = (values: FormValues) => {
    mutate({
      name: values.name,
      description: values.description,
      speed: Number(values.speed),
      glide: Number(values.glide),
      turn: Number(values.turn),
      fade: Number(values.fade),
      manufacturer: values.manufacturer,
      mold: values.mold,
      stability: values.stability,
      type: values.type,
    })

  }

  return (
    <section>
        <div className="mt-24 mb-2">
          <h1 className="text-4xl font-semibold">Create disc</h1>
        </div>
        <div>
          <Form onSubmit={(values: FormValues) => handleSubmit(values)}>
            {({ submit }: { submit: () => void }) => (
              <div className="flex flex-col">
                <Field name="name" />
                <Field multine={true} name="description" />
                <HouseField
                  name="manufacturer"
                  initialValue={"INNOVA_DISCS"}
                >
                  {({ value, setValue, onBlur, errors }) => (
                    <>
                      <label className="text-sm mt-6" htmlFor="select">Manufacturer</label>
                      <select
                        className="border border-gray-300 rounded-sm text-sm text-slate-800 px-4 py-2 mt-2 mb-2"
                        value={value}
                        id="select"
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={onBlur}
                      >
                        <option value="INNOVA_DISCS">Innova Discs</option>
                        <option value="DISCRAFT">Discraft</option>
                        <option value="DYNAMIC_DISCS">Dynamic Discs</option>
                        <option value="LATITUDE_64">Latitude 64</option>
                        <option value="WESTSIDE_DISCS">Westside Discs</option>
                        <option value="PRODIGY_DISC">Prodigy Disc</option>
                        <option value="MVP_DISC_SPORTS">MVP Disc Sports</option>
                        <option value="AXIOM_DISCS">Axiom Discs</option>
                        <option value="STREAMLINE_DISCS">Streamline Discs</option>
                        <option value="LEGACY_DISCS">Legacy Discs</option>
                        <option value="GATEWAY_DISC_SPORTS">Gateway Disc Sports</option>
                        <option value="KASTAPLAST">Kastaplast</option>
                        <option value="DISCMANIA">Discmania</option>
                      </select>
                      {errors.map((error) => (
                        <p key={error}>{error}</p>
                      ))}
                    </>
                  )}
                </HouseField>
                <Field name="mold" />
                <HouseField
                  name="stability"
                  initialValue={""}
                >
                  {({ value, setValue, onBlur, errors }) => (
                    <>
                      <label className="text-sm mt-6" htmlFor="select">Stability</label>
                      <select
                        className="border border-gray-300 rounded-sm text-sm text-slate-800 px-4 py-2 mt-2 mb-2"
                        value={value}
                        id="select"
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={onBlur}
                      >
                        <option value="OVERSTABLE">Overstable</option>
                        <option value="STABLE">Stable</option>
                        <option value="UNDERSTABLE">Understable</option>
                      </select>
                      {errors.map((error) => (
                        <p key={error}>{error}</p>
                      ))}
                    </>
                  )}
                </HouseField>
                <HouseField
                  name="type"
                  initialValue={"PUTTER"}
                >
                  {({ value, setValue, onBlur, errors }) => (
                    <>
                      <label className="text-sm mt-6" htmlFor="select">Type</label>
                      <select
                        className="border border-gray-300 rounded-sm text-sm text-slate-800 px-4 py-2 mt-2 mb-2"
                        value={value}
                        id="select"
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={onBlur}
                      >
                        <option value="PUTTER">Putter</option>
                        <option value="MIDRANGE">Midrange</option>
                        <option value="FAIRWAY_DRIVER">Fairway Driver</option>
                        <option value="DISTANCE_DRIVER">Distance Driver</option>
                      </select>
                      {errors.map((error) => (
                        <p key={error}>{error}</p>
                      ))}
                    </>
                  )}
                </HouseField>
                <div className="flex flex-wrap gap-4">
                  <Field name="speed" type="number" />
                  <Field name="glide" type="number" />
                  <Field name="turn" type="number" />
                  <Field name="fade" type="number" />
                </div>
                <button className="flex justify-center items-center py-2 mt-4 rounded-sm text-emerald-50 bg-emerald-500 hover:bg-emerald-400" onClick={submit}>Submit</button>
              </div>
            )}
          </Form>
        </div>
    </section>
  )
}

export default CreateDisc