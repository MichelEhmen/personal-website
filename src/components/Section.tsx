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
      className={classNames(
        className,
        'rounded-lg border border-white/75 bg-white bg-opacity-30 p-4 text-rock shadow-lg backdrop-blur-md'
      )}
      {...divProps}
    >
      <h2 className="pb-2 text-lg font-bold">{title}</h2>
      {children}
    </div>
  )
}

export default Section
