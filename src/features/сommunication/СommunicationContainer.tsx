import React, {ChangeEvent, KeyboardEvent} from 'react';
import { communicationPageType} from "../../bll/redux/reducer/communicationPage-reducer/communicationPage-reducer";
import {Сommunication} from './Сommunication'
import {appStoreType} from "../../bll/redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
   addTextMessage,
   changeValueMessage
} from "../../bll/redux/reducer/communicationPage-reducer/communicationPage-create-actions";

type mapDispatchToPropsType = {
   changeValueMessage: (e: ChangeEvent<HTMLInputElement>) => void
   sendMessage: (e: KeyboardEvent<HTMLInputElement>) => void
}

const mapStateToProps = (state: appStoreType): communicationPageType  => {
   return {
      textMessage: state.communicationPage.textMessage,
      messages: state.communicationPage.messages,
      dialogs: state.communicationPage.dialogs,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      changeValueMessage: (e) => {
         dispatch(changeValueMessage(e.currentTarget.value))
      },

      sendMessage: (e) => {
         dispatch(addTextMessage(e.key))
      },
   }
}

export const СommunicationContainer = connect(mapStateToProps, mapDispatchToProps)(Сommunication);
