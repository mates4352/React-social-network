import s from './Button.module.scss'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type detailed = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type buttonType = detailed & {
   children: string;
   type?: string
}

export const Button: React.FC<buttonType> = (props) => {
   const {children, type} = props;
   return (
       <button
           className={s.button}
           type={type}
           {...props}>
          {children}
       </button>
   );
}
