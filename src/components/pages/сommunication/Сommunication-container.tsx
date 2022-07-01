import React, {ChangeEvent, KeyboardEvent} from 'react';
import {
   communicationPageType
} from "../../../bll/redux/reducer/communication-page-reducer/communication-page-reducer";
import {appStoreType} from "../../../bll/redux/redux-store";
import {connect} from "react-redux";
import {Сommunication} from './Сommunication'
import {
   addTextMessage,
   changeValueMessage
} from "../../../bll/redux/reducer/communication-page-reducer/communication-page-create-actions/communication-page-create-actions";
import {compose} from "redux";

class CommunicationContainer extends React.Component<mapCommunicationContainerType> {
   constructor(props: mapCommunicationContainerType) {
      super(props);
   }

   render() {
      const changeValueMessage = (e: ChangeEvent<HTMLInputElement>) => {
         this.props.changeValueMessage(e.currentTarget.value)
      }

      const sendMessage = (e: KeyboardEvent<HTMLInputElement>) => {
         this.props.addTextMessage(e.key, e.currentTarget.value)
      }

      return (
          <Сommunication
              textMessage={this.props.textMessage}
              messages={this.props.messages}
              dialogs={this.props.dialogs}
              changeValueMessage={changeValueMessage}
              sendMessage={sendMessage}/>
      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      textMessage: state.communicationPage.textMessage,
      messages: state.communicationPage.messages,
      dialogs: state.communicationPage.dialogs,
   }
}

const mapDispatchToProps: mapDispatchToPropsType = {
   changeValueMessage,
   addTextMessage,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(CommunicationContainer)

type mapCommunicationContainerType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = communicationPageType;
type mapDispatchToPropsType = {
   changeValueMessage: (text: string) => void
   addTextMessage: (key: string, text: string) => void
}

