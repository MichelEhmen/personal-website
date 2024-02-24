import classNames from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'

const Card = ({
  children,
  className,
  ...divProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      className={classNames(
        className,
        'rounded-lg border-4 border-primary p-4 text-rock'
      )}
      {...divProps}
    >
      {children}
    </div>
  )
}

export default Card
