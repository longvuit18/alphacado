import { DetailedHTMLProps, HTMLAttributes } from "react"

export const ArrowDownIcon = (props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
  return (
    <span {...props}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.47399 4.51844C2.64444 4.34457 2.91117 4.32877 3.09912 4.47102L3.15297 4.51844L7.00004 8.44283L10.8471 4.51844C11.0176 4.34457 11.2843 4.32877 11.4722 4.47102L11.5261 4.51844C11.6965 4.69231 11.712 4.96438 11.5726 5.15611L11.5261 5.21104L7.33953 9.48156C7.16908 9.65543 6.90235 9.67123 6.7144 9.52898L6.66055 9.48156L2.47399 5.21104C2.2865 5.01978 2.2865 4.7097 2.47399 4.51844Z" fill="#130D0D" />
      </svg>
    </span>
  )
}