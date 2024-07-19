import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getMousePosition } from '../../utils/functions'

export const useDragAndMove = ({
  dragItemPosition,
  defaultDragItemPosition,
  onDrag = () => {},
}) => {
  // dragItemRef: pass this to dragItem element
  const dragItemRef = useRef(null)
  const initialMousePosition = useRef({ x: null, y: null })
  // isDragging: state showing if the element is getting dragged or not
  const [isDragging, setIsDragging] = useState(false)
  // calculated draggedShadow position from viewport

  const initialDragItemPosition = useRef(
    defaultDragItemPosition ?? {
      x: null,
      y: null,
    }
  )
  const isControlled = dragItemPosition ? true : false
  const [dragItemPositionUncontrolled, setDragItemPositionUncontrolled] =
    useState(initialDragItemPosition.current)

  const handleOnMouseDown = useCallback((e) => {
    setIsDragging(true)
    initialDragItemPosition.current = {
      x: dragItemRef.current.offsetLeft,
      y: dragItemRef.current.offsetTop,
    }
    initialMousePosition.current = getMousePosition(e)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      /* wrapping the updating part in requestAnimation frame gives smoother animation, 
      better performance and reduces re-renders drastically */
      requestAnimationFrame(() => {
        const currentMousePosition = getMousePosition(e)
        const calculatedNewPosition = {
          x:
            currentMousePosition.x -
            initialMousePosition.current.x +
            initialDragItemPosition.current.x,
          y:
            currentMousePosition.y -
            initialMousePosition.current.y +
            initialDragItemPosition.current.y,
        }
        if (isControlled === false) {
          setDragItemPositionUncontrolled(calculatedNewPosition)
        }
        onDrag(e, dragItemRef.current, calculatedNewPosition)
      })
    },
    [onDrag, isControlled]
  )

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    // resets the positions for a fresh new start
  }, [isDragging])

  // dragItemProps contains onMouseDown event handler and styles to be applied in the dragItem element
  const dragItemProps = useMemo(() => {
    const xYPosition = {
      left: isControlled ? dragItemPosition.x : dragItemPositionUncontrolled.x,
      top: isControlled ? dragItemPosition.y : dragItemPositionUncontrolled.y,
    }
    return {
      onMouseDown: handleOnMouseDown,
      style: {
        width: 'fit-content',
        height: 'fit-content',
        userSelect: 'none',
        cursor: 'pointer',
        position: 'absolute',
        ...xYPosition,
      },
    }
  }, [
    dragItemPosition,
    dragItemPositionUncontrolled,
    isControlled,
    handleOnMouseDown,
  ])

  useEffect(() => {
    /* there's no need to keep the event listeners attached all the time
    only adding the listener when dragging start and removing when dragging ends */
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    // attached event listeners should get removed upon component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  return { dragItemRef, dragItemProps }
}
