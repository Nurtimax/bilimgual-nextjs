import { FC, SVGProps } from 'react'

const VarningIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg
         {...props}
         width="18"
         height="18"
         viewBox="0 0 18 18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM8.1 11.7V13.5H9.9V11.7H8.1ZM8.1 4.5V9.9H9.9V4.5H8.1Z"
            fill="#F71414"
         />
      </svg>
   )
}

export default VarningIcon
