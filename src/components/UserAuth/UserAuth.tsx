import s from "./UserAuth.module.css";

const UserAuth = () => {
  return (
    <div className={s.userAuthWrapper}>
      <button className={s.userAuthButtonLogIn} type="button">
        Log In
      </button>
      <button className={s.userAuthButtonRegistration} type="button">
        Registration
      </button>
    </div>
  );
};

export default UserAuth;
