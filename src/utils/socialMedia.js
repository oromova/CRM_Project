import Instagram from '../assets/icons/socialMedia/instagram.svg?react'
import Youtube from '../assets/icons/socialMedia/youtube.svg?react'
import Telegram from '../assets/icons/socialMedia/telegram.svg?react'
import Linkedin from '../assets/icons/socialMedia/linkedin.svg?react'
import Dots from '../assets/icons/socialMedia/dots.svg?react'
import Up from '../assets/icons/statistics/up.svg?react'
import Down from '../assets/icons/statistics/down.svg?react'

export const socialMedia = [
  {
    id: 1,
    icon1: Instagram,
    title: "Instagram",
    icon: Dots,
    arrow: Up,
    percent: '+22%',
    num: '16K'
  },
  {
    id: 2,
    icon1: Telegram,
    title: "Telegram",
    icon: Dots,
    arrow: Down,
    percent: '-15%',
    num: '28K'
  },
  {
    id: 3,
    icon1: Youtube,
    title: "Youtube",
    icon: Dots,
    arrow: Up,
    percent: '+22%',
    num: '31K'
  },
  {
    id: 4,
    icon1: Linkedin,
    title: "Linkedin",
    icon: Dots,
    arrow: Up,
    percent: '+22%',
    num: '2K'
  },
]

export default socialMedia;