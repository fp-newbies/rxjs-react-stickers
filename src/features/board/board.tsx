import React from 'react'
const c = require('./board.sass')

interface Props { }

export const Board: React.FC<Props> = ({ children }) => {
  return (
    <div className={c.board}>
      {children}
    </div>
  )
}

Board.displayName = 'Board'
