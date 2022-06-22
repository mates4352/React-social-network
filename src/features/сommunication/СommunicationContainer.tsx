import React, {ChangeEvent, KeyboardEvent} from 'react';
import {
   communicationPageType
} from "../../bll/redux/reducer/communicationPage-reducer/communicationPage-reducer";
import {appStoreType} from "../../bll/redux/redux-store";
import {connect} from "react-redux";
import {Сommunication} from './Сommunication'
import {
   addTextMessage,
   changeValueMessage
} from "../../bll/redux/reducer/communicationPage-reducer/communicationPage-create-actions";

class CommunicationContainer extends React.Component<communicationContainerType> {
   constructor(props: communicationContainerType) {
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

export default connect(mapStateToProps, {
   changeValueMessage,
   addTextMessage,
})(CommunicationContainer);

type communicationContainerType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = communicationPageType;
type mapDispatchToPropsType = {
   changeValueMessage: (text: string) => void
   addTextMessage: (key: string, text: string) => void
}

