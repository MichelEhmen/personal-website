import classNames from 'classnames'
import { HTMLAttributes, PropsWithChildren } from 'react'

type SectionProps = {
  title: string
}

const Section = ({
  children,
  title,
  className,
  ...divProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & SectionProps>) => {
  return (
    <div
      {...divProps}
      className={classNames(className, 'rounded-lg bg-white p-4 text-black')}
    >
      <p className="text-lg">{title}</p>
      {children}
    </div>
  )
}

export default Section
