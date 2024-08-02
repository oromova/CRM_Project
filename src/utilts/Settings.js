import settings from '../assets/icons/sidebar/settings.svg?react'
import ArrowRight from '../assets/icons/sidebar/arrowRight.svg?react'

export const setting = [
  {
    id: 1, 
    title: 'Sozlamalar',
    icon: settings,
    path: '/sozlamalar',
    arrow: ArrowRight,
    child: [
      { id: 1, title: 'Umumiy sozlamalar', path: '/umumiy sozlamalar'},
      { id: 2, title: 'Manager', path: '/manager' },
      { id: 3, title: "O'qituvchi", path: "/o'qituvchi" },
      { id: 4, title: 'Talaba', path: '/talaba' }
    ]
  }
 
]

export default setting