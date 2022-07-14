import React from 'react';
import s from './CommunicationInput.module.scss';
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";

type communicationInputType = {
   sendMessage: (text: string) => void
};

type dataFormType = {
   communicationMessage: string
}

type inputType = WrappedFieldProps & {
   type: string
   placeholder: string
}

class CommunicationInputForm extends React.Component<InjectedFormProps<dataFormType>> {

   render() {
      const {} = this.props;

      return (
          <form onSubmit={this.props.handleSubmit}>
             <Field
                 component={Input}
                 name='communicationMessage'
                 type="text"
                 placeholder="To write a message..."
             />
          </form>
      );
   };
}

class Input extends  React.Component<inputType> {
   constructor(props: inputType) {
      super(props);
   }

   render() {
      const {input, meta, type, placeholder} = this.props;

      return (
        <input {...input} className={s.entryFieldInput} type={type} placeholder={placeholder}/>
      );
   }
}

const CommunicationInputReduxForm = reduxForm<dataFormType>({form:'communicationMessage'})(CommunicationInputForm)

export class CommunicationInput extends React.Component<communicationInputType> {
   render() {
      const onSubmit = (formData: dataFormType) => {
         console.log(formData)
         this.props.sendMessage(formData.communicationMessage)
      }

      return (
          <CommunicationInputReduxForm onSubmit={onSubmit}/>
      )
   }
}
