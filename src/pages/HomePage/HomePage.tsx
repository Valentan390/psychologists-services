import s from "./HomePage.module.css";

import CompanySlogan from "../../components/CompanySlogan/CompanySlogan";

const HomePage = () => {
  return (
    <main>
      <section className={s.sectionHomePage}>
        <div className={`${s.sectionHomePageWrapper} container`}>
          <CompanySlogan />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
