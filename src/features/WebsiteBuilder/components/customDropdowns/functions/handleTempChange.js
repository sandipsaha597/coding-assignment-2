export const handleTempChange = (value, cb) => {
  const tempChange = (value) => {
    cb({ temp: value })
  }
  return {
    onBlur: () => tempChange(''),
    onFocus: () => tempChange(value),
    onMouseLeave: () => tempChange(''),
    onMouseEnter: () => tempChange(value),
  }
}
