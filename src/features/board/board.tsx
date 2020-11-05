import React from 'react'
import * as c from './board.sass';

interface Props { }

export const Board: React.FC<Props> = ({ children }) => {
  return (
    <div className={c.board}>
      {children}
    </div>
  )
}

Board.displayName = 'Board'
