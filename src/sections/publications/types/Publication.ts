import { StaticImageData } from 'next/image'

type PublicationType = 'article' | 'video' | 'talk'

export type Publication = {
  id: string
  image?: StaticImageData
  title: string
  description: string
  type?: PublicationType
  url?: string
}
