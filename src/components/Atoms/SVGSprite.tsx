type Props = {
  name: string
  className?: string
  width?: number
  height?: number
  style?: React.CSSProperties
}
const SVGSprite = ({ name, className, width, height, style }: Props) => {
  return (
    <svg
      className={className}
      style={{
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        ...style
      }}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}
export default SVGSprite
