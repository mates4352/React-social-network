import React, {ChangeEvent, KeyboardEvent} from 'react';
import {
   addTextMessageActionCreate,
   changeTextMessageActionCreate,
} from "../../redux/reducer/communicationPage-reducer";

import {Сommunication} from './Сommunication'

export type communicationContainerType = {
   store: any
}

export const СommunicationContainer: React.FC<communicationContainerType> = ({store}) => {
   const messageValue = store.getState().communicationPage.textMessage;
   const messages = store.getState().communicationPage.messages;
   const dialogs = store.getState().communicationPage.dialogs;

   const changeValueMessage = (e: ChangeEvent<HTMLInputElement>): void => {
      const action = changeTextMessageActionCreate(e.currentTarget.value);
      store.dispatch(action)
   }

   const sendMessage = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
         const action = addTextMessageActionCreate();
         store.dispatch(action)
      }
   }

   return <Сommunication messageValue={messageValue}
                         messages={messages}
                         dialogs={dialogs}
                         changeValueMessage={changeValueMessage}
                         sendMessage={sendMessage}
   />
};
