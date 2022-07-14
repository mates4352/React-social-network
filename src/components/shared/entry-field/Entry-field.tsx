import React, {ChangeEvent} from 'react';
import s from './Entry-field.module.scss';
import {Button} from "../../features/interactive/Button/Button";
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";

type entryFieldType = {
   sendPost: (value: string) => void
};

type formDataType = {
   post: string
}

type inpuType = WrappedFieldProps & {
   type: string
   maxLength: number
   placeholder: string
}

class EntryFieldForm extends React.PureComponent<InjectedFormProps<formDataType>> {
   render() {
      const {} = this.props;

      return (
          <form className={s.entry_field} onSubmit={this.props.handleSubmit}>
             <Field  component={Input} name='post' maxLength={120} placeholder='Write a post...'/>
             <Button>Add post</Button>
          </form>
      );
   };
}

class Input extends React.Component<inpuType> {
   constructor(props: inpuType) {
      super(props);
   }

   render() {
      const {input, meta, type, maxLength, placeholder} = this.props;

      return (
          <input {...input} className={s.textarea} type={type} maxLength={maxLength} placeholder={placeholder}/>
      );
   }
}

const EntryFieldReduxForm = reduxForm<formDataType>({form: 'entryField'})(EntryFieldForm)

export class EntryField extends React.Component<entryFieldType> {
   render() {
      const onSubmit = (formData: formDataType) => {
         this.props.sendPost(formData.post)
      }

      return (
          <EntryFieldReduxForm onSubmit={onSubmit}/>
      )
   }
}
