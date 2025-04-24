import { useTranslation } from "react-i18next";
import LoginCard from "../components/LoginCard";
import LangSwitch from "tuba_system/LangSwitch";

const LoginsSection = () => {
  const { t } = useTranslation("sections/logins_section");
  const logins = t("logins", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <div className="logins_parent">
      <LangSwitch />
      <div className="content">
        <h1>{t("title")}</h1>
        <h6>{t("description")}</h6>
      </div>
      <div className="logins">
        {logins.map((login, index) => (
          <LoginCard
            key={index}
            title={login.title}
            description={login.description}
            link=""
          />
        ))}
      </div>
    </div>
  );
};

export default LoginsSection;
