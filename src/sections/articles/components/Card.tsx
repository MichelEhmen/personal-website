import { PropsWithChildren } from 'react'

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-lg bg-slate-800 p-4 text-slate-100">{children}</div>
  )
}

export default Card
