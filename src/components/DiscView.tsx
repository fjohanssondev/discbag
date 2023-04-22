import Link from 'next/link'
import React from 'react'

interface IDiscView {
  name: string
  description: string | null
  id: string
}

const DiscView: React.FC<IDiscView> = ({ name, description, id }) => {
  return (
    <Link href={`/discs/product/${id}`}>
      <article className='border border-slate-300 bg-gray-50 rounded p-6 shadow'>
        <h3>{name}</h3>
        <p>{description}</p>
      </article>
    </Link>
  )
}

export default DiscView