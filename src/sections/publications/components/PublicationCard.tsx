import Card from '@/components/Card'
import { HTMLAttributes } from 'react'
import { Publication } from '../types/Publication'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'

type PublicationCardProps = {
  publication: Publication
  open: boolean
  onCardClick: (publicationId: string | null) => void
}
const PublicationCard = ({
  publication,
  open,
  onCardClick,
  className
}: HTMLAttributes<HTMLDivElement> & PublicationCardProps) => {
  const cardClickHandler = () => {
    onCardClick(open ? null : publication.id)
  }

  return (
    <Card
      key={publication.id}
      image={publication.image}
      onClick={cardClickHandler}
      className={classNames(
        'bg-secondary',
        { 'cursor-pointer': !open },
        className
      )}
      whileHover={
        open
          ? {
              scale: 1
            }
          : {
              scale: 1.02
            }
      }
      whileTap={{ scale: 0.95 }}
      layout
    >
      <motion.div className="flex flex-col">
        <motion.div className=" font-bold">{publication.title}</motion.div>
        {open && (
          <motion.div className="flex flex-col gap-2">
            <motion.p>{publication.description}</motion.p>
            {publication.url && (
              <a
                href={publication.url}
                target="_blank"
                className="text-primary"
              >
                Read more...
              </a>
            )}
            {publication.type && (
              <div className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                {publication.type}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </Card>
  )
}
export default PublicationCard
