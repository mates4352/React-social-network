import React, {ChangeEvent} from 'react';
import s from './Input.module.scss'
import {IconEyeClose} from "../../../../features/icons/Icon-eye-close";
import {IconEyeOpen} from "../../../../features/icons/Icon-eye-open";
import {WrappedFieldProps} from "redux-form";
import {Error} from "../error/Error";
import {CSSTransition} from "react-transition-group";

type inputType = WrappedFieldProps & {
   error?: string
   text: string
   type: string
   icon?: string
};

export class Input extends React.Component<inputType> {
   state = {
      inputText: '',
      isType: this.props.type,
   }

   constructor(props: inputType) {
      super(props);
   }

   render() {
      const {input, meta, text, icon} = this.props;

      const isValid = (validValue: any, errorValue: any) => {
         if (meta.touched) {
            if (meta.valid) return validValue
            else if (!meta.valid) return errorValue
            else return ''
         }
         return ''
      }
      const checkIcon = (value: string) => {
         return icon === value && this.state.inputText !== ''
      }
      const changeInputType = (type: string) => {
         this.setState({isType: type})
      }

      return (
          <>
             <fieldset className={`${s.input_wrap} ${isValid(s.valid, s.error)} ${this.props.error ? s.formValid : ''}`}>
                <input
                    {...input}
                    className={s.input}
                    type={this.state.isType}
                    value={this.state.inputText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({inputText: e.currentTarget.value})}
                />
                <legend className={`${s.legend} ${isValid(s.legend_valid, s.legend_error)}`}>{text}</legend>

                {checkIcon('eye') && this.state.isType === 'password' &&
                   <button className={s.button_svg} type='button' onClick={() => changeInputType('text')}>
                     <IconEyeClose/>
                   </button>
                }

                {checkIcon('eye') && this.state.isType === 'text' &&
                   <button className={s.button_svg} type='button' onClick={() => changeInputType('password')}>
                     <IconEyeOpen/>
                   </button>
                }

                <CSSTransition
                    classNames='error'
                    in={meta.touched && !!meta.error}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                >
                   <Error error={meta.error}/>
                </CSSTransition>
             </fieldset>
          </>
      );
   };
}
