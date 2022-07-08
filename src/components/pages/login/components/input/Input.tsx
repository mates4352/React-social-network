import React from 'react';
import s from './Input.module.scss'

type inputType = {
   text: string
   type: string
};

export class Input extends React.Component<inputType> {
   constructor(props: inputType) {
      super(props);
   }

   render() {
      const {type, text} = this.props;

      return (
          <fieldset className={s.input_wrap}>
             <input className={s.input} type={type} required/>
             <legend className={s.legend}>{text}</legend>
          </fieldset>
      );
   };
}
