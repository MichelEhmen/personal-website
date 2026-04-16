import { StaticImageData } from 'next/image'

type PublicationType = 'article' | 'video' | 'talk'

export type Publication = {
  id: string
  image?: StaticImageData
  imageContain?: boolean
  title: string
  description: string
  type?: PublicationType
  date?: string
  url?: string
}
