import Card from '@/components/Card'
import { Publication } from '../types/Publication'
import { HTMLMotionProps, motion } from 'framer-motion'
import classNames from 'classnames'
import React from 'react'

type PublicationCardProps = {
  publication: Publication
  open: boolean
  onCardClick: (publicationId: string | null) => void
}
const PublicationCard = ({
  publication,
  open,
  onCardClick,
  className,
  ...props
}: HTMLMotionProps<'div'> & PublicationCardProps) => {
  const cardClickHandler = () => {
    onCardClick(open ? null : publication.id)
  }

  return (
    <Card
      data-publication-id={publication.id}
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
      {...props}
    >
      <div className="flex flex-col">
        <div className=" font-bold">{publication.title}</div>
        {open && (
          <div className="flex flex-col gap-2">
            <p>{publication.description}</p>
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
          </div>
        )}
      </div>
    </Card>
  )
}
export default PublicationCard
