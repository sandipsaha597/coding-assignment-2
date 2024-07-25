export const getNewNodeObject = ({
  id,
  position,
  type,
  data,
  width,
  height,
}) => {
  return {
    id: id ?? crypto.randomUUID(),
    position,
    type,
    data,
    width,
    height,
  }
}
