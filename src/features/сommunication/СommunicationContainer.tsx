import React, {ChangeEvent, KeyboardEvent} from 'react';
import {
   addTextMessageActionCreate,
   changeTextMessageActionCreate,
} from "../../redux/reducer/communicationPage-reducer";
import {stateType} from '../../redux/store';

import {Сommunication} from './Сommunication'

export type communicationType = {
   store: any
   state: stateType
}

export const СommunicationContainer: React.FC<communicationType> = ({store, state}) => {
   const messageValue = state.communicationPage.textMessage;
   const messages = state.communicationPage.messages;
   const dialogs = state.communicationPage.dialogs;

   const changeValueMessage = (e: ChangeEvent<HTMLInputElement>): void => {
      const action = changeTextMessageActionCreate(e.currentTarget.value);
      store.dispatch(action)
   }

   const addValueMessage = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
         const action = addTextMessageActionCreate();
         store.dispatch(action)
      }
   }

   return <Сommunication messageValue={messageValue}
                         messages={messages}
                         dialogs={dialogs}
                         changeValueMessage={changeValueMessage}
                         addValueMessage={addValueMessage}
   />
};
