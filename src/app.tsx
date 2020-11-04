import React from 'react'
import { Board } from './features/board'
import { Sticker } from './features/stiker'

interface Props { }

export const App: React.FC<Props> = (props) => {
  return (
    <Board>
      <Sticker/>
    </Board>
  )
}

App.displayName = 'App'
