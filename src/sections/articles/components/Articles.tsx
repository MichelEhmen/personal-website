import Section from '@/components/Section'
import Card from './Card'

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
    <Section title="Articles">
      <div className="grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <Card key={article.title}>{article.title}</Card>
        ))}
      </div>
    </Section>
  )
}

export default Articles
