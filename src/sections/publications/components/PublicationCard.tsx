import Card from '@/components/Card'
import { useState } from 'react'
import { Publication } from '../types/Publication'
import { AnimatePresence, motion } from 'framer-motion'

type PublicationCardProps = {
  publication: Publication
}
const PublicationCard = ({ publication }: PublicationCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const cardClickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Card
      key={publication.title}
      image={publication.image}
      onClick={cardClickHandler}
      className="cursor-pointer"
      whileHover={
        isOpen
          ? {
              scale: 1
            }
          : {
              scale: 1.02
            }
      }
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className="flex flex-col">
        <motion.div className="z-10 bg-secondary font-bold" layout>
          {publication.title}
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="cursor-auto"
              initial={{ opacity: 0, height: 0, y: -40 }}
              animate={{
                opacity: 1,
                height: 'auto',
                y: 0,
                transition: {
                  opacity: { duration: 0.4 },
                  height: { duration: 0.3 },
                  y: { duration: 0.3 }
                }
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -50,
                transition: {
                  height: { duration: 0.4 },
                  opacity: { duration: 0.1 },
                  y: { duration: 0.3 }
                }
              }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Card>
  )
}
export default PublicationCard
