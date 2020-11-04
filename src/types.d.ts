declare type DOMEvent<T = Element> = Event & {
  currentTarget: T
  target: Element
}