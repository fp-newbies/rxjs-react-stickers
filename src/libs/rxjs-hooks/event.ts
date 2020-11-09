import { useCallback } from 'react'
import { Subject } from 'rxjs'
import { useConstant } from '../react-hooks/constant'

export const useRxEvent = <E>(): [(e: E) => void, Subject<E>] => {
  const event$ = useConstant(() => new Subject<E>())

  const handleEvent = useCallback((e: E) => { event$.next(e) }, [])

  return [handleEvent, event$]
}
