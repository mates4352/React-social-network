import React, {useState} from 'react';
import s from './Input.module.scss'
import {IconClose} from "../../../../features/icons/Icon-close";
import {IconEyeClose} from "../../../../features/icons/Icon-eye-close";
import {IconEyeOpen} from "../../../../features/icons/Icon-eye-open";

type inputType = {
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
      const {type, text, icon} = this.props;
      const checkIcon = (value: string) => {
         return icon === value && this.state.inputText !== ''
      }
      const showInputText = (type : string) => {
         this.setState({isType: type})
      }

      return (
          <fieldset className={s.input_wrap}>
             <input className={s.input}
                    type={this.state.isType}
                    value={this.state.inputText}
                    required
                    onChange={e => this.setState({inputText: e.currentTarget.value})}
             />
             <legend className={s.legend}>{text}</legend>

             {checkIcon('textClose') &&
                <button className={s.button_svg} type='button' onClick={() => this.setState({inputText: ''})}><IconClose/></button>}

             {checkIcon('eye') && this.state.isType === 'password' &&
                <button className={s.button_svg} type='button' onClick={() => showInputText('text')}><IconEyeClose/></button>}

             {checkIcon('eye') && this.state.isType === 'text' &&
                <button className={s.button_svg} type='button' onClick={() => showInputText('password')}><IconEyeOpen/></button>}
          </fieldset>
      );
   };
}
