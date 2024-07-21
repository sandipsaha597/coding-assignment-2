export const getNewPageObj = () => {
  const id = crypto.randomUUID()
  return {
    id,
    pageDetails: {
      pageTitle: id,
      pageDescription: '',
      pageSlug: `/${crypto.randomUUID()}`,
    },
    nodes: [],
  }
}

export const createValidNodeObject = ({
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
