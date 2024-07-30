export const myPortfolio = {
  id: '73f96a8b-940f-4bb1-9553-b721ada5b792',
  projectName: 'My Portfolio',
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
        value: 'Roboto',
        temp: '',
      },
      color: '#67f891ff',
      backgroundColor: '#545453ff',
    },
  },
  navbar: {
    styles: {
      width: '100%',
      height: 'auto',
      backgroundColor: {
        type: 'CUSTOM',
        value: '#464646ff',
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
      gap: '15px',
    },
    items: [
      {
        id: 'dd4c88a2-3765-4f9a-a19e-9b767087365f',
        title: 'Home',
        to: 'homePageId',
      },
      {
        id: '92facac4-0a9b-4cdf-9958-738e6075ac94',
        title: 'Contact',
        to: '42b16a57-096e-42b2-a6ae-32d23dae3886',
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
          id: 'ccb7d42b-c9b0-4293-9521-fc49d4c57074',
          position: {
            x: 27.37493896484375,
            y: 53.60003662109375,
          },
          type: 'textNode',
          data: {
            textMessage: "Hello, I'm Sandip Saha.",
            styles: {
              fontFamily: {
                type: 'CUSTOM',
                value: 'Oswald',
                temp: '',
              },
              fontSize: 58,
              color: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
            },
          },
          width: 495,
          height: 'auto',
          selected: false,
        },
        {
          id: 'fdec0adf-d593-4721-af34-0283b1a87d81',
          position: {
            x: 22.974952697753906,
            y: 416.6000061035156,
          },
          type: 'videoNode',
          data: {
            src: 'https://res.cloudinary.com/dbevmtl8a/video/upload/v1722327532/xwomonubv1iisubjhdie.mp4',
            title: 'video',
            styles: {},
          },
          width: 468,
          height: 253,
          selected: false,
        },
        {
          id: '72a02d9d-3b51-4b2e-bdce-3fccb01fcff5',
          position: {
            x: 28.999977111816406,
            y: 202.39999389648438,
          },
          type: 'buttonNode',
          data: {
            buttonText: 'Visit my Github',
            action: {
              buttonActionType: 'REDIRECT_TO_EXTERNAL_URL',
              buttonActionValue: 'https://github.com/sandipsaha597/',
            },
            styles: {
              textColor: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
              buttonColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              fontFamily: {
                type: 'CUSTOM',
                value: 'Oswald',
                temp: '',
              },
              fontSize: 15,
              variant: 'outlined',
            },
          },
          width: 161,
          height: 36,
          selected: false,
        },
        {
          id: '6ea1a065-8c12-4b98-ae8f-b3556428c63d',
          position: {
            x: 26.77507781982422,
            y: 130.8000030517578,
          },
          type: 'textNode',
          data: {
            textMessage: 'A frontend developer',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 35,
              color: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
            },
          },
          width: 341,
          height: 'auto',
          selected: false,
        },
        {
          id: 'e0958817-f05a-4f16-95af-228cbe877fb5',
          position: {
            x: 366.97501373291016,
            y: 122.5999755859375,
          },
          type: 'textNode',
          data: {
            textMessage: 'Chasing Excellence',
            styles: {
              fontFamily: {
                type: 'CUSTOM',
                value: 'Raleway',
                temp: '',
              },
              fontSize: 48,
              color: {
                type: 'CUSTOM',
                value: '#ffffffff',
                temp: '',
              },
            },
          },
          width: 450,
          height: 'auto',
          selected: false,
        },
        {
          id: '65858de1-f632-43bd-a13d-a5c01846a657',
          position: {
            x: 713.3750381469727,
            y: -43.79997253417969,
          },
          type: 'textNode',
          data: {
            textMessage: '</>',
            styles: {
              fontFamily: {
                type: 'CUSTOM',
                value: 'Montserrat',
                temp: '',
              },
              fontSize: 186,
              color: {
                type: 'CUSTOM',
                value: '#797976ff',
                temp: '',
              },
            },
          },
          width: 340,
          height: 'auto',
          selected: false,
        },
        {
          id: 'ff21975a-c3eb-4c59-bacb-b6f7a67f4247',
          position: {
            x: 210.00000762939453,
            y: 202.20001220703125,
          },
          type: 'buttonNode',
          data: {
            buttonText: 'Download my resume',
            action: {
              buttonActionType: 'DOWNLOAD_A_FILE',
              buttonActionValue:
                'https://res.cloudinary.com/dbevmtl8a/image/upload/v1722333696/Sandip_Saha_frontend_developer_reactjs_qlsjml.pdf',
            },
            styles: {
              textColor: {
                type: 'CUSTOM',
                value: '#111827ff',
                temp: '',
              },
              buttonColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              fontFamily: {
                type: 'CUSTOM',
                value: 'Oswald',
                temp: '',
              },
              fontSize: 15,
              variant: 'contained',
            },
          },
          width: 191,
          height: 36,
          selected: false,
        },
        {
          id: 'e005de8f-eee6-4195-a5f8-5d9455c366e6',
          position: {
            x: 299.97501373291016,
            y: 320.3999938964844,
          },
          type: 'textNode',
          data: {
            textMessage: 'console.log("Best Projects")',
            styles: {
              fontFamily: {
                type: 'CUSTOM',
                value: 'Raleway',
                temp: '',
              },
              fontSize: 36,
              color: {
                type: 'CUSTOM',
                value: '#797976ff',
                temp: '',
              },
            },
          },
          width: 467,
          height: 'auto',
          selected: false,
        },
        {
          id: '81fd5dde-17a1-4788-bbe3-9d0806a51ee5',
          position: {
            x: 67,
            y: 699,
          },
          type: 'buttonNode',
          data: {
            buttonText: 'Project Details',
            action: {
              buttonActionType: 'REDIRECT_TO_EXTERNAL_URL',
              buttonActionValue:
                'https://www.linkedin.com/feed/update/urn:li:activity:6997928259833196544/',
            },
            styles: {
              textColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              buttonColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 15,
              variant: 'outlined',
            },
          },
          width: 169,
          height: 36,
          selected: false,
        },
        {
          id: 'c68d0a0c-22e5-4e87-94ae-5f420a0ceab4',
          position: {
            x: 253.80005645751953,
            y: 699.2000732421875,
          },
          type: 'buttonNode',
          data: {
            buttonText: 'Source code',
            action: {
              buttonActionType: 'REDIRECT_TO_EXTERNAL_URL',
              buttonActionValue: 'https://github.com/sandipsaha597/pressfly',
            },
            styles: {
              textColor: {
                type: 'CUSTOM',
                value: '#111827',
                temp: '',
              },
              buttonColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 15,
              variant: 'contained',
            },
          },
          width: 167,
          height: 36,
          selected: false,
        },
        {
          id: '6d24eb64-36b3-410b-888d-d3f653a8e490',
          position: {
            x: 527.9750137329102,
            y: 417,
          },
          type: 'videoNode',
          data: {
            src: 'https://res.cloudinary.com/dbevmtl8a/video/upload/v1722327648/kiyujy1tynd7isj2jclt.mp4',
            title: 'Instagram Clone',
            styles: {},
          },
          width: 476,
          height: 252,
          selected: false,
        },
        {
          id: 'c836e464-89f0-434e-85ca-9d337017e3b9',
          position: {
            x: 581.2000503540039,
            y: 698.8000030517578,
          },
          type: 'buttonNode',
          data: {
            buttonText: 'Project Details',
            action: {
              buttonActionType: 'REDIRECT_TO_EXTERNAL_URL',
              buttonActionValue:
                'https://www.linkedin.com/feed/update/urn:li:activity:7006193521044930560/',
            },
            styles: {
              textColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              buttonColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 15,
              variant: 'outlined',
            },
          },
          width: 160,
          height: 36,
          selected: false,
        },
        {
          id: '322c3977-4ac6-41db-bfef-ab440827988c',
          position: {
            x: 762.7999038696289,
            y: 698.6000823974609,
          },
          type: 'buttonNode',
          data: {
            buttonText: 'Source Code',
            action: {
              buttonActionType: 'REDIRECT_TO_EXTERNAL_URL',
              buttonActionValue:
                'https://github.com/sandipsaha597/instagram-clone',
            },
            styles: {
              textColor: {
                type: 'CUSTOM',
                value: '#111827',
                temp: '',
              },
              buttonColor: {
                type: 'CUSTOM',
                value: '#67f891ff',
                temp: '',
              },
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 15,
              variant: 'contained',
            },
          },
          width: 165,
          height: 36,
          selected: false,
        },
      ],
      isActive: true,
    },
    {
      id: '42b16a57-096e-42b2-a6ae-32d23dae3886',
      pageDetails: {
        title: 'Contact - Sandip Saha',
        description: '',
        slug: 'contact',
      },
      nodes: [
        {
          id: '2dc915f4-e666-4213-b89a-8c8bf38aa906',
          position: {
            x: 583.6000137329102,
            y: 41.000030517578125,
          },
          type: 'imageNode',
          data: {
            src: 'https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_1280.png',
            alt: 'dummy image',
            styles: {},
          },
          width: 403,
          height: 417,
          selected: false,
        },
        {
          id: 'd228406c-677b-4c39-9d35-34fd3059a002',
          position: {
            x: 84.1750259399414,
            y: 166.3999786376953,
          },
          type: 'textNode',
          data: {
            textMessage: 'Email:',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 21,
              color: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
            },
          },
          width: 67,
          height: 'auto',
          selected: false,
        },
        {
          id: '3a14a95c-c844-4406-a70a-03940b2ff256',
          position: {
            x: 84,
            y: 207,
          },
          type: 'textNode',
          data: {
            textMessage: 'LinkenIn: ',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 21,
              color: {
                type: 'INHERIT',
                value: '#000',
                temp: '',
              },
            },
          },
          width: 91,
          height: 'auto',
          selected: false,
        },
        {
          id: 'b00b3cab-524f-43bb-8f9f-dc54fe38e681',
          position: {
            x: 175,
            y: 211,
          },
          type: 'textNode',
          data: {
            textMessage: 'https://www.linkedin.com/in/developer-sandip-saha/',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 16,
              color: {
                type: 'CUSTOM',
                value: '#f3f5f7ff',
                temp: '',
              },
            },
          },
          width: 389,
          height: 'auto',
          selected: false,
        },
        {
          id: 'db01a8bf-06e2-4c2d-a8ea-dc02ff26337d',
          position: {
            x: 149.17505645751953,
            y: 169.59999084472656,
          },
          type: 'textNode',
          data: {
            textMessage: 'sandipsaha564@gmail.com',
            styles: {
              fontFamily: {
                type: 'INHERIT',
                value: 'inherit',
                temp: '',
              },
              fontSize: 16,
              color: {
                type: 'CUSTOM',
                value: '#f1f3f5ff',
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
