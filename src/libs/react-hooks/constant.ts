import React from 'react'

export const useConstant = <T>(fn: () => T): T => {
  const ref = React.useRef<T>()

  if (!ref.current) {
    ref.current = fn()
  }

  return ref.current
}