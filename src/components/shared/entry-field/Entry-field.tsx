import React, {ChangeEvent} from 'react';
import s from './Entry-field.module.scss';
import {Button} from "../../features/interactive/Button/Button";


type entryFieldType = {
   sendPost: (value: string) => void
};

export class EntryField extends React.PureComponent<entryFieldType> {
   state = {
      valueTextarea: ''
   }

   constructor(props: entryFieldType) {
      super(props);
   }

   render() {
      const {} = this.props;
      const {valueTextarea} = this.state;
      const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
         this.setState({valueTextarea: e.currentTarget.value})
      }
      const sendPost = () => {
         if(valueTextarea !== '') {
            this.props.sendPost(valueTextarea)
            this.setState({valueTextarea: ''})
         }
      }

      return (
          <form className={s.entry_field}>
                <textarea className={s.textarea}
                          maxLength={120}
                          placeholder='Write a post...'
                          value={valueTextarea}
                          onChange={changeValue}/>

             <Button onClick={sendPost}>Add post</Button>
          </form>
      );
   };
};
