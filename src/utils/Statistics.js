import Filiallar from '../assets/icons/statistics/filiallar.svg?react'
import Talabalar from '../assets/icons/statistics/talabalar.svg?react' 
import Mentorlar from '../assets/icons/statistics/mentorlar.svg?react'
import GreenPlus from '../assets/icons/statistics/plusgreen.svg?react'
import YellowPlus from '../assets/icons/statistics/plusyellow.svg?react'
import BluePlus from '../assets/icons/statistics/plusblue.svg?react'
import Up from '../assets/icons/statistics/up.svg?react'
import Down from '../assets/icons/statistics/down.svg?react'
import Burger from '../assets/icons/statistics/burger.svg?react'

export const statistics = [
  {
    id: 1,
    title: 'Talabalar',
    num: 285,
    icon: Talabalar,
    backColor: "rgb(246, 255, 237)",
    src: '../assets/img/statistics/talaba.png',
    iconPlus: GreenPlus,
    arrow: Up,
  },
  {
    id: 2,
    title: 'Mentorlar',
    num: 36,
    icon: Mentorlar,
    backColor: "rgb(255, 251, 230)",
    src: '../assets/img/statistics/mentor.png',
    iconPlus: YellowPlus,
    arrow: Down,
  },
  {
    id: 3,
    title: 'Filiallar',
    num: 3,
    icon: Filiallar,
    backColor: "rgb(230, 247, 255)",
    src: '../assets/img/statistics/filial.png',
    iconPlus: BluePlus,
    arrow: Burger,
  }
]

export default statistics