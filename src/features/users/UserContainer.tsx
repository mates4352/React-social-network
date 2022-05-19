import * as React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {stateType} from "../../bll/redux/redux-store";
import {Dispatch} from "redux";
import {userPageType, userType} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer";
import axios, {AxiosResponse} from "axios";
import {
   changeFollowUser, changeIsPreloader, changePagination, getTotalCount,
   getUsers
} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer-create-actions";

class UserContainer extends React.Component<userPropsType> {
   constructor(props: userPropsType) {
      super(props);
   }

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((result: AxiosResponse<userPageType>) => {
         this.props.getTotalCount(result.data.totalCount)
         this.props.getUsers(result.data.items)
         this.props.changeIsPreloader(false)
      })
   }

   render() {
      const editPagination = (currentPage: number, totalCount: number) => {
         this.props.changePagination(currentPage)
         this.props.changeIsPreloader(true)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${totalCount}`).then((result: AxiosResponse<userPageType>) => {
            this.props.getTotalCount(result.data.totalCount)
            this.props.getUsers(result.data.items)
            this.props.changeIsPreloader(false)
         })
      }

      const pagesNumbers = [];
      const pageNumber = Math.ceil(this.props.totalCount / this.props.pageSize);
      for(let i = 1; i <= pageNumber; i++) {
         pagesNumbers[i] = i;
      }

      return (
          <User
              users={this.props.users}
              pagesNumbers={pagesNumbers}
              pageSize={this.props.pageSize}
              isPreloader={this.props.isPreloader}
              currentPage={this.props.currentPage}
              changeFollowUser={this.props.changeFollowUser}
              changePagination={editPagination}/>
      )
   }
}

type mapStateToPropsType = {
   users: Array<userType>
   pageSize: number
   totalCount: number
   currentPage: number
   isPreloader?: boolean
}
type mapDispatchToPropsType = {
   changeFollowUser: (idUser: string) => void
   getTotalCount: (totalCount: number) => void
   getUsers: (items: Array<userType>) => void
   changePagination: (currentPage: number) => void
   changeIsPreloader: (isPreloader: boolean) => void
}
export type userPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: stateType): mapStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      isPreloader: state.usersPage.isPreloader,
   }
}

export default connect(mapStateToProps, {
   changeFollowUser,
   getTotalCount,
   getUsers,
   changePagination,
   changeIsPreloader,
})(UserContainer)
