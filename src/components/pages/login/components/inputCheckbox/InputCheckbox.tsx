import React from 'react';
import {Field} from "redux-form";
import s from './InputCheckbox.module.scss';

type inputCheckboxType = {
   component: string
   name: string
   type: string
   text: string
};

export class InputCheckbox extends React.Component<inputCheckboxType> {
   constructor(props: inputCheckboxType) {
      super(props);
   }
   render() {
      const {component, name, type, text} = this.props;

      return (
          <div className={s.checkbox}>
             <Field
                 className={s.input}
                 component={component}
                 type={type}
                 id='checkBox'
                 name={name}/>
             <label className={s.label} htmlFor="checkBox">{text}</label>
          </div>
      );
   };
};
