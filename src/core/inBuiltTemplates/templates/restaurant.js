export const restaurant = {
  id: '93276f4a-633c-4fb8-922b-4d0293c1777c',
  projectName: 'Restaurant',
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
    globalStyles: {
      fontFamily: {
        type: 'CUSTOM',
        value: 'Merriweather',
        temp: '',
      },
      color: '#ed2433ff',
      backgroundColor: '#fff',
    },
  },
  navbar: {
    styles: {
      width: '100%',
      height: 'auto',
      backgroundColor: {
        type: 'CUSTOM',
        value: '#2ecc71',
        temp: '',
      },
      itemColor: {
        type: 'CUSTOM',
        value: '#fff',
        temp: '',
      },
      activeItemColor: {
        type: 'CUSTOM',
        value: '#f1c40f',
        temp: '',
      },
      gap: '10px',
    },
    items: [
      {
        id: '751c0a9e-4b94-4b1a-885c-2f6212d798be',
        title: 'Home',
        to: 'homePageId',
      },
      {
        id: '79f7cdf3-0401-44d3-92b8-e777f2a1a8a3',
        title: 'Reserve a table',
        to: '62a09817-12a1-4e04-be80-f33997f2b281',
      },
      {
        id: '12012548-bc5e-4375-9539-22e38f1a5eae',
        title: 'Find us',
        to: '27bb664c-6f02-4ee4-b7c9-efcd111ee8bc',
      },
    ],
  },
  pages: [
    {
      id: 'homePageId',
      pageDetails: {
        title: 'Home page',
        description: '',
        slug: '',
      },
      nodes: [
        {
          id: 'eca2a0f3-12e8-484e-896c-6c7f3ebb8fdd',
          position: {
            x: 389.17505645751953,
            y: 107.80000305175781,
          },
          type: 'textNode',
          data: {
            textMessage: 'Welcome to',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 40,
              color: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
            },
          },
          width: 241,
          height: 'auto',
          selected: false,
        },
        {
          id: 'e4c8570e-6a46-4404-bd40-dbcf5590c8f0',
          position: {
            x: 319.1749954223633,
            y: 146.3999786376953,
          },
          type: 'textNode',
          data: {
            textMessage: 'Arsalan',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 100,
              color: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
            },
          },
          width: 386,
          height: 'auto',
          selected: false,
        },
      ],
      isActive: true,
    },
    {
      id: '62a09817-12a1-4e04-be80-f33997f2b281',
      pageDetails: {
        title: 'Reserve a table',
        description: '',
        slug: 'reserve-a-table',
      },
      nodes: [
        {
          id: '35f87a13-3dd7-42fa-8bc0-398563e1da9d',
          position: {
            x: 371.7750930786133,
            y: 123.20000648498535,
          },
          type: 'textNode',
          data: {
            textMessage: 'Reserve a seat',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 40,
              color: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
            },
          },
          width: 303,
          height: 'auto',
          selected: false,
        },
        {
          id: '22771ae6-dceb-4afc-9fdd-5307ba66357a',
          position: {
            x: 420.79996490478516,
            y: 196.80001831054688,
          },
          type: 'buttonNode',
          data: {
            buttonText: 'Button',
            action: {
              buttonActionType: '',
              buttonActionValue: '',
            },
            styles: {
              textColor: {
                type: 'CUSTOM',
                value: '#111111ff',
                temp: '',
              },
              buttonColor: {
                type: 'CUSTOM',
                value: '#ed2433ff',
                temp: '',
              },
              fontFamily: {
                type: 'CUSTOM',
                value: 'Lato',
                temp: '',
              },
              fontSize: 15,
              variant: 'contained',
            },
          },
          width: 168,
          height: 38,
          selected: false,
        },
      ],
      isActive: false,
    },
    {
      id: '27bb664c-6f02-4ee4-b7c9-efcd111ee8bc',
      pageDetails: {
        title: 'Find us',
        description: '',
        slug: 'find-us',
      },
      nodes: [
        {
          id: '943a58bd-add2-47ae-88e6-4304208aadb8',
          position: {
            x: 475.17496490478516,
            y: 12,
          },
          type: 'textNode',
          data: {
            textMessage: 'Text message',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 16,
              color: {
                type: 'CUSTOM',
                value: '#34495e',
                temp: '',
              },
            },
          },
          width: 300,
          height: 'auto',
          selected: false,
        },
      ],
      isActive: false,
    },
  ],
}
