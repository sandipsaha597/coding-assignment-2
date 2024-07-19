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
