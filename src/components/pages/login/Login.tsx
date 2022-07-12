import React, {ChangeEvent} from 'react';
import s from './Login.module.scss'
import {Button} from "../../features/interactive/Button/Button";
import {Input} from "./components/input/Input";
import {InjectedFormProps, reduxForm} from 'redux-form'
import {InputCheckbox} from "./components/inputCheckbox/InputCheckbox";

export type loginType = {
   login: string
   password: string
   checkbox: string
};

class LoginForm extends React.Component<InjectedFormProps<loginType>> {
   render() {
      const {handleSubmit, reset} = this.props;

      return (
          <div className={s.login}>
             <form className={s.form} onSubmit={handleSubmit}>
                <h2 className={s.title}>Sign In</h2>

                <Input component='input' name='login' text='Login' type='text' icon='textClose'/>
                <Input component='input' name='password' text='Password' type='password' icon='eye'/>
                <InputCheckbox component='input' name='checkbox' type='checkbox' text='remember me'/>

                <Button>send</Button>
             </form>
          </div>
      );
   };
}

const LoginReduxForm = reduxForm<loginType>({form: 'login'})(LoginForm)

class Login extends React.Component<any, any> {
   render() {
      const onSubmit = (formData: any) => {
         console.log(formData)
      }

      return (
          <LoginReduxForm onSubmit={onSubmit}/>
      )
   }
}

export default Login
