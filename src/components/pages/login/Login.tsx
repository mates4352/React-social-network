import React, {ChangeEvent} from 'react';
import s from './Login.module.scss'
import {Button} from "../../features/interactive/Button/Button";
import {Input} from "./components/input/Input";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {InputCheckbox} from "./components/inputCheckbox/InputCheckbox";
import {maxLength10, maxLength16, minLength6, required} from "../../../react-forms/form-login/form-login-validation";

export type loginType = {
   login: string
   password: string
   checkbox: string
};

class LoginForm extends React.Component<InjectedFormProps<loginType>> {
   render() {
      const {handleSubmit, pristine, submitting} = this.props;

      return (
          <div className={s.login}>
             <form className={s.form} onSubmit={handleSubmit}>
                <h2 className={s.title}>Sign In</h2>

                <Field
                    component={Input}
                    name='login'
                    text='Login'
                    type='text'
                    validate={[required, maxLength10, minLength6]}
                />
                <Field
                    component={Input}
                    name='password'
                    text='Password'
                    type='password'
                    icon='eye'
                    validate={[required, maxLength16, minLength6]}
                />
                <Field
                    component={InputCheckbox}
                    name='checkbox'
                    type='checkbox'
                    text='remember me'
                    id='checkbox'
                />

                <Button disabled={pristine || submitting}>send</Button>
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
