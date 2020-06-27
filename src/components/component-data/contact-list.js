const contactList = [
  {
    id: 1,
    icon: 'fas fa-map-pin',
    type: 'single',
    label: 'Location',
    text: 'Orange County, CA',
    url: 'https://www.google.com/maps/search/?api=1&Orange+County%2C+CA'
  },
  {
    id: 2,
    icon: 'far fa-envelope',
    type: 'single',
    label: 'Email',
    text: 'ericmichaellowry@gmail.com',
    url: 'mailto:ericmichaellowry@gmail.com'
  },
  {
    id: 3,
    icon: 'fas fa-mobile-alt',
    type: 'single',
    label: 'Phone',
    text: '+1 (714) 482-3670',
    url: 'tel:+1-714-482-3670'
  },
  {
    id: 4,
    icon: 'fas fa-share-alt',
    type: 'multiple',
    label: 'Social & Resume',
    text: [
      {
        id: 1,
        icon: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/ericmichaellowry/'
      },
      {
        id: 2,
        icon: 'fab fa-github',
        url: 'https://github.com/EricL0wry'
      },
      {
        id: 3,
        icon: 'fas fa-file-alt',
        url: 'https://drive.google.com/file/d/1IW3Nkgi9qp-nx-wFg7EGFdcMwQqmNska/view'
      }
    ]
  }
];

export default contactList;
