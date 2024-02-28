import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Navigation from "../Navigation/Navigation";
import UserAuth from "../UserAuth/UserAuth";
import UserLogo from "../UserLogo/UserLogo";
import s from "./Header.module.css";

const Header = () => {
  const isLoggedIn = false;
  return (
    <header className={s.headerSection}>
      <div className={`${s.headerWraper} container`}>
        <HeaderLogo />
        <Navigation />
        {isLoggedIn ? <UserLogo /> : <UserAuth />}
      </div>
    </header>
  );
};

export default Header;
