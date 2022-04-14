export const CenteredContent: React.FC<{
  className?: string
  style?: React.CSSProperties
}> = ({ children, className, style }) => {
  return (
    <div
      className={`h-full w-full flex items-center justify-center text-center ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
