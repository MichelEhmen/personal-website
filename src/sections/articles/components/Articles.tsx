'use client'
import Card from '@/components/Card'
import Section from '@/components/Section'

const Articles = () => {
  type Article = {
    title: string
    description: string
  }

  const articles: Article[] = [
    { title: 'styleX', description: 'lorem ipsum dolor' },
    { title: 'scss', description: 'lorem ipsum dolor' }
  ]
  return (
    <Section title="Latest Articles" id="articles">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.title}>{article.title}</Card>
        ))}
      </div>
    </Section>
  )
}

export default Articles
