import Link from 'next/link'
import React from 'react'
import { discType } from 'utils/discType'

interface IDiscView {
  name: string
  id: string
  manufacturer: string
  type: string
  speed: number
  fade: number
  turn: number
  glide: number
}

const DiscView: React.FC<IDiscView> = ({ name, id, manufacturer, type, speed, fade, turn, glide }) => {
  return (
    <Link href={`/discs/product/${id}`}>
      <article className='flex flex-col flex-1 border border-slate-300 bg-gray-50 rounded p-6 shadow'>
        <h3>{name} {manufacturer && <span className='text-slate-400 text-xs italic'>{` - ${manufacturer}`}</span>}</h3>
        <h4 className='text-xs text-slate-400 italic'>{discType(type)}</h4>
        <div className='flex mt-4'>
          <span className='text-sm text-slate-400 italic'>{speed}&nbsp;|&nbsp;</span>
          <span className='text-sm text-slate-400 italic'>{glide}&nbsp;|&nbsp;</span>
          <span className='text-sm text-slate-400 italic'>{turn}&nbsp;|&nbsp;</span>
          <span className='text-sm text-slate-400 italic'>{fade}&nbsp;|&nbsp;</span>
        </div>
      </article>
    </Link>
  )
}

export default DiscView