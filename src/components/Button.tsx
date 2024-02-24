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
        'rounded-md bg-primary  px-4 py-2 text-secondary'
      )}
    >
      {children}
    </button>
  )
}

export default Button
