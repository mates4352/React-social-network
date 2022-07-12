import React from 'react';
import s from './CommunicationInput.module.scss';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type communicationInputType = {
   sendMessage: (text: string) => void
};

type dataFormType = {
   communicationMessage: string
}

class CommunicationInputForm extends React.Component<InjectedFormProps<dataFormType>> {

   render() {
      const {} = this.props;
      return (
          <form onSubmit={this.props.handleSubmit}>
             <Field
                 className={s.entryFieldInput}
                 component='input'
                 name='communicationMessage'
                 type="text"
                 placeholder="To write a message..."

             />
          </form>
      );
   };
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
