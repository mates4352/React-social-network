import React, {ChangeEvent} from 'react';
import {
   accountPageType,
   addPostActionCreate,
   changeValueTextareaActionCreate,
} from "../../redux/reducer/accountPage-reducer/accountPage-reducer";
import {Account} from "./Account";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';

type mapStateToPropsType = accountPageType
type mapDispatchToPropsType = {
   sendPost: () => void
   changeValueTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state: stateType): mapStateToPropsType  => {
   return {
      valueTextarea: state.accountPage.valueTextarea,
      personal: state.accountPage.personal,
      datePost: state.accountPage.datePost,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      sendPost: () => {
         const action = addPostActionCreate();
         dispatch(action)
      },
      changeValueTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => {
         const action = changeValueTextareaActionCreate(e.currentTarget.value);
         dispatch(action)
      }
   }
}

export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);
