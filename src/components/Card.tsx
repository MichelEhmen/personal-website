import classNames from 'classnames'
import { HTMLMotionProps, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
import Image, { StaticImageData } from 'next/image'
type CardProps = Omit<HTMLMotionProps<'div'>, 'ref'> & {
  image?: StaticImageData
}

const Card = ({
  children,
  className,
  image,
  ...divProps
}: PropsWithChildren<CardProps>) => {
  return (
    <motion.div
      className={classNames(
        className,
        'border-primary text-rock rounded-lg border-2 shadow-lg'
      )}
      {...divProps}
    >
      {image && (
        <Image
          className="h-20 w-full rounded-t-lg object-cover"
          src={image} // Route of the image file
          // height={300} // Desired size with correct aspect ratio
          // width={300} // Desired size with correct aspect ratio
          alt="Publication logo"
        />
      )}
      <div className="p-4">{children}</div>
    </motion.div>
  )
}

export default Card
