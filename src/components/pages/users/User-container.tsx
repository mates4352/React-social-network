import * as React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {appStoreType} from "../../../bll/redux/redux-store";
import {userType} from "../../../bll/redux/reducer/users-page-reducer/users-page-reducer";
import {
   editPagination, followedUser,
   getUsers, unFollowedUser
} from "../../../bll/redux/reducer/users-page-reducer/users-page-thunk";
import {compose} from "redux";

class UserContainer extends React.Component<mapUserPropsType> {
   constructor(props: mapUserPropsType) {
      super(props);
   }

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   render() {
      const pagesNumbers = [];
      const pageNumber = Math.ceil(this.props.totalCount / this.props.pageSize);
      for (let i = 1; i <= pageNumber; i++) {
         pagesNumbers[i] = i;
      }
      const isDisabled = (userId: string) => {
         return this.props.isDisabled?.some((idButton: string) => userId === idButton)
      }
      const editFollowUser = (userFollowed: boolean, userId: string) => () => {
         if (userFollowed) {
            this.props.followedUser(userId);
         } else {
            this.props.unFollowedUser(userId);
         }
      }
      const editPagination = (pageNumber: number, pageSize: number) => () => {
        this.props.editPagination(pageNumber, pageSize)
      }

      return (
          <User
              users={this.props.users}
              pagesNumbers={pagesNumbers}
              pageSize={this.props.pageSize}
              isPreloader={this.props.isPreloader}
              isDisabled={isDisabled}
              currentPage={this.props.currentPage}
              editPagination={editPagination}
              editFollowUser={editFollowUser}/>
      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      isPreloader: state.usersPage.isPreloader,
      isDisabled: state.usersPage.isDisabled,
   }
}
const mapDispatchToProps: mapDispatchToPropsType = {
   getUsers,
   editPagination,
   followedUser,
   unFollowedUser,
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
)(UserContainer)

export type mapUserPropsType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = {
   users: Array<userType>
   pageSize: number
   totalCount: number
   currentPage: number
   isPreloader: boolean
   isDisabled: Array<string>
}
type mapDispatchToPropsType = {
   getUsers: (currentPage: number, pageSize: number) => void
   editPagination: (currentPage: number, pageSize: number) => void
   followedUser: (userId: string) => void
   unFollowedUser: (userId: string) => void
}
