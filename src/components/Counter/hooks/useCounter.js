import { useCallback, useEffect, useRef, useState } from 'react'
import { validation } from '../validation/validation'

export const useCounter = ({
  controlledValue,
  defaultValue = 0,
  onChange = () => undefined,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
}) => {
  const [count, setCount] = useState(defaultValue)

  const isControlled =
    controlledValue === null || controlledValue === undefined ? false : true
  const wasControlled = useRef(isControlled)

  const value = isControlled ? controlledValue : count

  const isSubtractDisabled = controlledValue <= min
  const isAdditionDisabled = controlledValue >= max

  useEffect(() => {
    if (wasControlled.current !== isControlled) {
      console.warn(
        `Warning: The component is changing from ${
          wasControlled.current ? 'controlled' : 'uncontrolled'
        } to ${
          isControlled ? 'controlled' : 'uncontrolled'
        }. Please choose between one.`
      )
    }
  }, [isControlled])

  // const TYPES = {
  //   INCREMENT: 'INCREMENT',
  //   DECREMENT: 'DECREMENT',
  //   MANUAL_CHANGE: 'MANUAL_CHANGE',
  // }

  const emitChange = useCallback(
    (newValue) => {
      if (isControlled) {
        onChange(newValue)
      } else {
        onChange(newValue)
        setCount(newValue)
      }
    },
    [isControlled, onChange]
  )

  const decrement = useCallback(() => {
    const newValue = value - 1
    emitChange(newValue)
  }, [value, emitChange])

  const increment = useCallback(() => {
    const newValue = value + 1
    emitChange(newValue)
  }, [value, emitChange])

  const handleManualChange = useCallback(
    (newValue) => {
      if (!validation(newValue, min, max)) return
      const newValueNumberType = Number(newValue)
      emitChange(newValueNumberType)
    },
    [emitChange, min, max]
  )

  return {
    count: value,
    isSubtractDisabled,
    isAdditionDisabled,
    decrement,
    increment,
    handleManualChange,
  }
}
