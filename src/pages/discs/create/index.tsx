import { Form } from "houseform"
import { useRouter } from "next/router";
import Field from "~/components/CreateDisc/Field";
import { api } from "~/utils/api";

interface FormValues {
  name: string
  description: string
  manufacturer: string
  speed: number
  glide: number
  turn: number
  fade: number
}

const CreateDisc = () => {

  const { mutate } = api.disc.create.useMutation();
  const router = useRouter();

  const handleSubmit = (values: FormValues) => {
    mutate({
      name: values.name,
      description: values.description,
      manufacturer: values.manufacturer,
      speed: Number(values.speed),
      glide: Number(values.glide),
      turn: Number(values.turn),
      fade: Number(values.fade)
    })

    void router.push('/')
  }

  return (
    <section>
      <div className="md:container md:mx-auto px-4">
        <div className="mt-24 mb-2">
          <h1 className="text-4xl font-semibold">Create disc</h1>
        </div>
        <div>
          <Form onSubmit={(values: FormValues) => handleSubmit(values)}>
            {({ submit }: { submit: () => void }) => (
              <div className="flex flex-col">
                <Field name="name" />
                <Field multine={true} name="description" />
                <Field name="manufacturer" />
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
      </div>
    </section>
  )
}

export default CreateDisc