import { Link } from "react-router-dom";
import s from "./CompanySlogan.module.css";
import sprite from "../../images/svg/sprite.svg";

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
        <svg className={s.companySvg}>
          <use href={`${sprite}#icon-Arrow16`} />
        </svg>
      </Link>
    </div>
  );
};

export default CompanySlogan;
