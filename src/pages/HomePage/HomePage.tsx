import s from "./HomePage.module.css";

import CompanySlogan from "../../components/CompanySlogan/CompanySlogan";
import CompanyFoto from "../../components/CompanyFoto/CompanyFoto";

const HomePage = () => {
  return (
    <main>
      <section className={s.sectionHomePage}>
        <div className={`${s.sectionHomePageWrapper} container`}>
          <CompanySlogan />
          <CompanyFoto />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
