import { Field as HouseForm } from "houseform";
import { z } from "zod";

interface IField {
  name: string;
  type?: string;
  multine?: boolean;
}

const Field: React.FC<IField> = ({ name, multine = false, type = 'text' }) => {
  return (
    <HouseForm name={name} initialValue={""} onSubmitValidate={type === 'text' ? z.string().min(1, 'You need to atleast type one character') : z.preprocess(Number, z.number())}>
      {({ value, setValue, onBlur, errors }) => (
        <div className="flex flex-col">
          <label className="text-sm mt-6" htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
          {multine ? (
            <>
              <textarea
                className="border border-gray-300 rounded-sm text-sm text-slate-800 px-4 py-2 my-4"
                id={name}
                value={value}
                required
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
              />
              {errors.map((error) => (
                <p className="text-xs text-rose-700 italic" key={error}>{error}</p>
              ))}
            </>
          ) : (
            <>
              <input
                className="border border-gray-300 rounded-sm text-sm text-slate-800 px-4 py-2 mt-2 mb-2"
                type={type}
                id={name}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
              />
              {errors.map((error) => (
                <p className="text-xs text-rose-700 italic" key={error}>{error}</p>
              ))}
            </>
            
          )}
        </div>
      )}
    </HouseForm>
  )
}

export default Field