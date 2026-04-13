import classNames from 'classnames'

const Button = ({
  children,
  className,
  ...buttonProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...buttonProps}
      className={classNames(
        className,
        'bg-primary text-secondary  rounded-md px-4 py-2'
      )}
    >
      {children}
    </button>
  )
}

export default Button
