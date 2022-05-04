import React, {ChangeEvent} from 'react';
import {
   accountPageType,
} from "../../bll/redux/reducer/accountPage-reducer/accountPage-reducer";
import {Account} from "./Account";
import {connect} from "react-redux";
import {stateType} from "../../bll/redux/redux-store";
import { Dispatch } from 'redux';
import {
   addPost,
   changeValueTextarea,
} from "../../bll/redux/reducer/accountPage-reducer/accountPage-create-actions";

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
         dispatch(addPost());
      },
      changeValueTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => {
         dispatch(changeValueTextarea(e.currentTarget.value));
      }
   }
}

export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);
