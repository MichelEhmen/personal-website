import classNames from 'classnames'
import { HTMLMotionProps, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

const Card = ({
  children,
  className,
  ...divProps
}: PropsWithChildren<HTMLMotionProps<'div'>>) => {
  return (
    <motion.div
      className={classNames(
        className,
        'rounded-lg border-2 border-primary p-4 text-rock shadow-lg'
      )}
      {...divProps}
      layout
    >
      {children}
    </motion.div>
  )
}

export default Card
