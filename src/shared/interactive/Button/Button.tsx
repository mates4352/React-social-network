import s from './Button.module.scss'
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type detailed = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type buttonType = detailed & {
   children: string;
}

export const Button: React.FC<buttonType> = (props) => {
   const {children} = props;
   return (
       <button
           className={s.button}
           type="button"
           {...props}>
          {children}
       </button>
   );
}
