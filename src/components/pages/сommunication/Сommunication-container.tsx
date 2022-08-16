import React, {ChangeEvent, KeyboardEvent} from 'react';
import {
   communicationPageType
} from "../../../bll/redux/reducer/communication/communication-reducer";
import {appStoreType} from "../../../bll/redux/redux-store";
import {connect} from "react-redux";
import {Сommunication} from './Сommunication'
import {
   addTextMessage,
} from "../../../bll/redux/reducer/communication/communication-actions/communication-actions";
import {compose} from "redux";
import {getCommunicationDialogs, getCommunicationMessages} from "../../../bll/redux/selectors/communication-selectors";

class CommunicationContainer extends React.Component<mapCommunicationContainerType> {
   constructor(props: mapCommunicationContainerType) {
      super(props);
   }

   render() {
      const sendMessage = (text: string) => {
         this.props.addTextMessage(text)
      }

      return (
          <Сommunication
              messages={this.props.messages}
              dialogs={this.props.dialogs}
              sendMessage={sendMessage}/>
      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      messages: getCommunicationMessages(state),
      dialogs: getCommunicationDialogs(state),
   }
}

const mapDispatchToProps: mapDispatchToPropsType = {
   addTextMessage,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(CommunicationContainer)

type mapCommunicationContainerType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = communicationPageType;
type mapDispatchToPropsType = {
   addTextMessage: (text: string) => void
}

