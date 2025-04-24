import { useTranslation } from "react-i18next";
import useLang from "../hooks/useLang";

const SideAuthSection = () => {
  const { t } = useTranslation("sections/side_auth_section");
  const {handleGetLang} = useLang()
  const lang = handleGetLang()

  return (
    <div className={"side_parent"}>
      <img
        src="/images/side_shape_top.svg"
        className={"shape_top"}
        alt="Shape 1"
      />
      <img
        src={lang === "ar" ? "/images/logo_arabic_light.svg" : "/images/logo_english_light.svg"}
        alt="Tuba Logo"
        className={"logo"}
      />
      <div className="content">
        <h1 className="title">{t("title")}</h1>
        <h6 className={"desc"}>{t("description")}</h6>
      </div>
      <img
        src="/images/side_shape_bottom.svg"
        className={"shape_bottom"}
        alt="Shape 2"
      />
    </div>
  );
};

export default SideAuthSection;
