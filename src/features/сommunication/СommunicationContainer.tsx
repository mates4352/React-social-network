import React, {ChangeEvent, KeyboardEvent} from 'react';
import {
   addTextMessageActionCreate,
   changeValueMessageActionCreate, communicationPageType,
} from "../../redux/reducer/communicationPage-reducer/communicationPage-reducer";
import {Сommunication} from './Сommunication'
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapDispatchToPropsType = {
   changeValueMessage: (e: ChangeEvent<HTMLInputElement>) => void
   sendMessage: (e: KeyboardEvent<HTMLInputElement>) => void
}

const mapStateToProps = (state: stateType): communicationPageType  => {
   return {
      textMessage: state.communicationPage.textMessage,
      messages: state.communicationPage.messages,
      dialogs: state.communicationPage.dialogs,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      changeValueMessage: (e) => {
         const action = changeValueMessageActionCreate(e.currentTarget.value);
         dispatch(action)
      },

      sendMessage: (e) => {
         const action = addTextMessageActionCreate(e.key);
         dispatch(action)
      },
   }
}

export const СommunicationContainer = connect(mapStateToProps, mapDispatchToProps)(Сommunication);
