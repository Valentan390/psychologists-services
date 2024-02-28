import { Link } from "react-router-dom";
import s from "./HeaderLogo.module.css";

const HeaderLogo = () => {
  return (
    <div>
      <Link to={"/home"}>
        <p className={s.hederLogoP}>
          psychologists.
          <span className={s.hederLogoSpan}>services</span>
        </p>
      </Link>
    </div>
  );
};

export default HeaderLogo;
