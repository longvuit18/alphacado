export const TickIcon = ({ fillColor, width, height }: { fillColor?: string, width?: string, height?: string }) => {
  return (
    <svg width={width ? width : "185"} height={height ? height : "131"} viewBox="0 0 185 131" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M69.3411 100.351L168.925 0.767029L184.246 16.0876L69.3411 130.992L0.397949 62.0499L15.7186 46.7294L69.3411 100.351Z" fill={fillColor ? fillColor : "white"} />
    </svg>
  )
}