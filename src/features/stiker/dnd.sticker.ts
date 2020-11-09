import { Observable, fromEvent } from 'rxjs'
import { filter, map, switchMap, takeUntil } from 'rxjs/operators'

export type MouseEventDiv = React.MouseEvent<HTMLDivElement, MouseEvent>

const docMouseMove$ = fromEvent<MouseEvent>(document, 'mousemove')
const docMouseUp$ = fromEvent<MouseEvent>(document, 'mouseup')

export const mouseDND = (
  targetMouseDown$:  Observable<MouseEventDiv>
) => 
  targetMouseDown$.pipe(
    switchMap(() => 
      docMouseMove$.pipe(
        takeUntil(docMouseUp$),
        map(event => ({
          coord: {
            x: event.pageX,
            y: event.pageY
          }
        })),
        filter(({ coord }) => coord.x >= 0 && coord.y >= 0)
      )
    )
  )