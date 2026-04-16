import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://www.michel-ehmen.dev',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }
]

export default sitemap
