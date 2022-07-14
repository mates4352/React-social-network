import React from 'react';
import {Field, WrappedFieldProps} from "redux-form";
import s from './InputCheckbox.module.scss';

type inputCheckboxType = WrappedFieldProps & {
   type: string
   text: string
   id: string
};

export class InputCheckbox extends React.Component<inputCheckboxType> {
   constructor(props: inputCheckboxType) {
      super(props);
   }
   render() {
      const {input, meta, id, type, text} = this.props;

      return (
          <div className={s.checkbox}>
             <input
                 {...input}
                 className={s.input}
                 type={type}
                 id={id}
             />
             <label className={s.label} htmlFor={id}>{text}</label>
          </div>
      );
   };
}
