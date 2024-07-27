export const detectDuplicateSlug = (slug, pageId, pages) => {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page.id === pageId) continue
    if (slug === page.pageDetails.slug) return [page, i]
  }
  return [null, -1]
}
