export const getNewPageObj = () => {
  const id = crypto.randomUUID()
  return {
    id,
    pageDetails: {
      title: id,
      description: '',
      slug: `${id}`,
    },
    nodes: [],
  }
}

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

export const getNewNavbarItemObj = () => {
  return {
    id: crypto.randomUUID(),
    title: 'new menu item',
    to: '',
  }
}
