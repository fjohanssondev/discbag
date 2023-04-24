import React from 'react'
import { discType } from 'utils/discType';

export interface DiscProps {
  id: string;
  name: string;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
  manufacturer: string;
  type: string;
}

const DiscItem: React.FC<DiscProps> = ({ name, speed, glide, turn, fade, manufacturer, type }) => {
  return (
    <article className='flex items-center border border-slate-300 rounded-sm p-4 mb-4'>
      <h4 className='font-bold'>{name}</h4>
      <div className='ml-8'>
        <ul className='flex items-center gap-2'>
          <li className='text-sm'>Speed: {speed}</li>
          <li className='text-sm'>Glide: {glide}</li>
          <li className='text-sm'>Turn: {turn}</li>
          <li className='text-sm'>Fade: {fade}</li>
        </ul>
      </div>
      <div className='ml-auto'>
        <ul className='flex items-center gap-2'>
          <li className='text-sm'>{manufacturer}</li>
          <li className='text-sm'>{discType(type)}</li>
        </ul>
      </div>
    </article>
  )
}

export default DiscItem