import React, {ChangeEvent} from 'react';
import s from './Entry-field.module.scss';
import {Button} from "../../features/interactive/Button/Button";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type entryFieldType = {
   sendPost: (value: string) => void
};

type formDataType = {
   post: string
}

class EntryFieldForm extends React.PureComponent<InjectedFormProps<formDataType>> {
   render() {
      const {} = this.props;

      return (
          <form className={s.entry_field} onSubmit={this.props.handleSubmit}>
             <Field className={s.textarea} component='textarea' name='post' maxLength={120} placeholder='Write a post...'/>
             <Button>Add post</Button>
          </form>
      );
   };
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
