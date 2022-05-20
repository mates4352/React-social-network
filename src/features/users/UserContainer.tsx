import * as React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {stateType} from "../../bll/redux/redux-store";
import {userPageType, userType} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer";
import {
   changeFollowUser, changeIsPreloader, changePagination, setTotalCount,
   setUsers
} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer-create-actions";
import {usersAPI} from "../../api/userPage/usersAPI";

class UserContainer extends React.Component<userPropsType> {
   constructor(props: userPropsType) {
      super(props);
   }

   componentDidMount() {
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: userPageType) => {
         this.props.setTotalCount(data.totalCount);
         this.props.setUsers(data.items);
         this.props.changeIsPreloader(false);
      })
   }

   render() {
      const editPagination = (currentPage: number,) => {
         this.props.changePagination(currentPage)
         this.props.changeIsPreloader(true)
         usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: userPageType) => {
            this.props.setTotalCount(data.totalCount)
            this.props.setUsers(data.items)
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
   setTotalCount: (totalCount: number) => void
   setUsers: (items: Array<userType>) => void
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
   setTotalCount,
   setUsers,
   changePagination,
   changeIsPreloader,
})(UserContainer)
