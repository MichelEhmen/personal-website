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
      className={classNames(className, 'rounded-lg bg-secondary p-4 text-rock')}
      {...divProps}
    >
      <h2 className="pb-2 text-lg font-bold">{title}</h2>
      {children}
    </div>
  )
}

export default Section
