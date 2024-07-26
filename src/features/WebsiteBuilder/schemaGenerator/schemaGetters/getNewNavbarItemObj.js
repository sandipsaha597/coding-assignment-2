import { homePageId } from '../constants'

export const getNewNavbarItemObj = () => {
  return {
    id: crypto.randomUUID(),
    title: 'new menu item',
    /* "to" does not points to a path like /contact-us. It points to a pageId.
          Why page id? Because page details can change like a slug changing from /contact-us to /get-in-touch */
    to: homePageId,
  }
}
