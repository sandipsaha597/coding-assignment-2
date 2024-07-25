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
