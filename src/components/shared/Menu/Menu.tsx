import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {logout} from "../../../bll/redux/reducer/auth/auth-thunk";

type menuType = mapMenu & {

}

class Menu extends React.PureComponent<menuType> {
   constructor(props: menuType) {
      super(props);
   }
   render() {
      const {logout} = this.props;
      const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

      return (
          <nav className={s.menu}>
             <ul className={s.list}>
                <li className={s.item}>
                   <NavLink className={classLink} to={"Account"}>Account</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"Communication"}>Communication</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"User"}>User</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"Music"}>Music</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"News"}>News</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"Settings"}>Settings</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"Help"}>Help</NavLink>
                </li>

                <li className={s.item}>
                   <button className={s.link} onClick={logout}>Exit</button>
                </li>
             </ul>
          </nav>
      );
   };
}

export default connect(null, {logout})(Menu)

type mapMenu = mapDispatchToPropsType;

type mapDispatchToPropsType = {
   logout: () => void
}
