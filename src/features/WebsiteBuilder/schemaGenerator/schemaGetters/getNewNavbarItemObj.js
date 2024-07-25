export const getNewNavbarItemObj = () => {
  return {
    id: crypto.randomUUID(),
    title: 'new menu item',
    to: '',
  }
}
