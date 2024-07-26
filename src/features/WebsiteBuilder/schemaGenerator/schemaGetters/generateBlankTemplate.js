import { homePageId } from '../constants'
import { COLOR_TYPES } from '../types/colorTypes'
import { getColorStructure } from './getColorStructure'

export const generateBlankTemplate = (id) => {
  return {
    id: id ?? crypto.randomUUID(),
    projectName: 'Blank template',
    themeAndGlobalStyles: {
      theme: [
        {
          id: 'd8d93770-7100-4cb4-a0e0-7f5e9a51db6a',
          name: 'Primary',
          color: '#2ecc71',
        },
        {
          id: '29f315ac-8e87-43c6-82b2-4d62dce0c335',
          name: 'Secondary',
          color: '#f1c40f',
        },
      ],
    },
    navbar: {
      styles: {
        width: '100%',
        height: 'auto',
        backgroundColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          value: '#2ecc71',
        }),
        itemColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          value: '#fff',
        }),
        activeItemColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          value: '#f1c40f',
        }),
        gap: '10px',
      },
      items: [
        {
          id: crypto.randomUUID(),
          title: 'Home',
          /* "to" does not points to a path like /contact-us. It points to a pageId.
          Why page id? Because page details can change like a slug changing from /contact-us to /get-in-touch */
          to: homePageId,
        },
      ],
    },
    pages: [
      {
        id: homePageId,
        pageDetails: {
          title: 'Home page',
          description: '',
          slug: '',
        },
        nodes: [],
        isActive: true,
      },
    ],
  }
}
