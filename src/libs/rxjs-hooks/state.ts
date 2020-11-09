import { useEffect, useState } from 'react'
import { Observable } from 'rxjs'

export const useRxState = <S, T = S>(
  _stream$: Observable<S>,
  defaultState: (T | (() => T)) = undefined,
  pipe?: (stream$: Observable<S>) => Observable<T>,
) => {
  const [state, setState] = useState(defaultState)

  useEffect(() => {
    const stream$ = pipe ? pipe(_stream$) : _stream$ 
    // @ts-ignore TODO: typing subscribe
    const subcription = stream$.subscribe(setState)
    return () => {
      subcription.unsubscribe()
    }
  }, [])

  return state
}