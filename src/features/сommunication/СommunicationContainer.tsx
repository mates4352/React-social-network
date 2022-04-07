import React, {ChangeEvent, KeyboardEvent} from 'react';
import {StoreContext} from "../../context";
import {
   addTextMessageActionCreate,
   changeValueMessageActionCreate,
} from "../../redux/reducer/communicationPage-reducer/communicationPage-reducer";

import {Сommunication} from './Сommunication'

export type communicationContainerType = {}

export const СommunicationContainer: React.FC<communicationContainerType> = () => {
   return (
       <StoreContext.Consumer>
          {
             (store) => {
                const messageValue = store.getState().communicationPage.textMessage;
                const messages = store.getState().communicationPage.messages;
                const dialogs = store.getState().communicationPage.dialogs;

                const changeValueMessage = (e: ChangeEvent<HTMLInputElement>): void => {
                   const action = changeValueMessageActionCreate(e.currentTarget.value);
                   store.dispatch(action)
                }

                const sendMessage = (e: KeyboardEvent<HTMLInputElement>): void => {
                      const action = addTextMessageActionCreate(e.key);
                      store.dispatch(action)
                }

                return <Сommunication messageValue={messageValue}
                                      messages={messages}
                                      dialogs={dialogs}
                                      changeValueMessage={changeValueMessage}
                                      sendMessage={sendMessage}
                />
             }
          }
       </StoreContext.Consumer>
   )

};
