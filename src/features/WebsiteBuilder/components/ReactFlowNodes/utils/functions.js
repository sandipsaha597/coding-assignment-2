import { renderMode } from '../../../../../constants/renderMode'

export const pointerEventsNoneIfEditor = (mode) => {
  const isEditor = mode === renderMode.editor
  return { pointerEvents: isEditor ? 'none' : 'auto' }
}
