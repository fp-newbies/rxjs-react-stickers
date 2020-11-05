import React from 'react'
import * as c from './sticker.sass'

interface Props { }

export const Sticker: React.FC<Props> = (props) => {
  return (
    <div className={c.sticker} data-active={false}>
      <div className={c.head}>
        <div className={c.remove}></div>
      </div>
      <div className={c.body}>
        <textarea placeholder="Write something ..."></textarea>
      </div>
    </div>
  )
}

Sticker.displayName = 'Sticker'
