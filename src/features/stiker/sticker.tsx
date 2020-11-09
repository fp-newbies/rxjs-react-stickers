import React from 'react'
import { useRxEvent, useRxState } from '../../libs/rxjs-hooks'
import { mouseDND, MouseEventDiv } from './dnd.sticker'
const c = require('./sticker.sass')

interface Props { }

export const Sticker: React.FC<Props> = (props) => {
  const [onMouseDown, mouseDown$] = useRxEvent<MouseEventDiv>()
  const { coord } = useRxState(
    mouseDown$,
    { coord: { x: 0, y: 0 } },
    mouseDND
  );

  return (
    <div
      className={c.sticker}
      data-active={false}
      style={{ top: coord.y, left: coord.x }}
      onMouseDown={onMouseDown}
    >
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
