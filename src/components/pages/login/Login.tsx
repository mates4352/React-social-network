import React from 'react';
import s from './Login.module.scss'
import {Button} from "../../features/interactive/Button/Button";
import {Input} from "./components/input/Input";
type loginType = {

};

export class Login extends React.Component<loginType> {
   constructor(props: loginType) {
      super(props);
   }

   render() {
      const {} = this.props;

      return (
          <div className={s.login}>
             <form className={s.form}>
                <h2 className={s.title}>Sign In</h2>
                <Input text='Login' type='text'/>
                <Input text='Password' type='Password'/>
                <Button>send</Button>
             </form>
          </div>
      );
   };
}
