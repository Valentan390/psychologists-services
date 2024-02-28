import s from "./UserLogo.module.css";
import sprite from "../../images/svg/sprite.svg";

const UserLogo = () => {
  const name = "Valentin";
  return (
    <div className={s.userLogoWrapper}>
      <div className={s.userLogoUserWrapper}>
        <svg className={s.userLogoSvg}>
          <use href={`${sprite}#icon-mdiUser`} />
        </svg>
        <p className={s.userLogoName}>{name}</p>
      </div>
      <button className={s.userLogoButton} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserLogo;
