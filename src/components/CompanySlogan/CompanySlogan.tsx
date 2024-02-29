import { Link } from "react-router-dom";
import s from "./CompanySlogan.module.css";
import Icon from "../Icon/Icon";

const CompanySlogan = () => {
  return (
    <div className={s.companyWrapper}>
      <h1 className={s.companyTitle}>
        The road to the <span className={s.companyTitleSpan}>depths</span> of
        the human soul
      </h1>
      <p className={s.companyText}>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <Link className={s.companyLink} to={"/psychologists"}>
        Get started
        <Icon width="18px" height="18px" iconName="icon-Arrow16" />
      </Link>
    </div>
  );
};

export default CompanySlogan;
