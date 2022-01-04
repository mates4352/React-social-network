import s from './Button.module.scss'

type buttonType = {
   text: string;
}

export const Button = (props: buttonType) => {
   return (
       <button
           className={s.button}
           type="button">
          {props.text}
       </button>
   );
}