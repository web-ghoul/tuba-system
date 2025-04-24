import { IconButton, Typography } from "@mui/material";
import { LanguageOutlined } from "@mui/icons-material";
import useLang from "../hooks/useLang";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LangSwitch = () => {
  const { t } = useTranslation("components/lang_switch");
  const { handleChangeLang, handleGetLang, handleSetLang } = useLang();
  const lang = handleGetLang();

  useEffect(() => {
    handleSetLang();
  }, []);

  return (
    <IconButton
      className={`flex justify-center items-center gap-2 w-fit !rounded-md !p-2 !px-3 !absolute top-[20px] !border-2 !border-black !border-solid transition-all ${
        lang === "ar" ? "left-[20px]" : "right-[20px]"
      }  !bg-black !text-white hover:!text-black hover:!bg-white`}
      onClick={handleChangeLang}
    >
      <Typography variant="button">{t("lang")}</Typography>
      <LanguageOutlined />
    </IconButton>
  );
};

export default LangSwitch;
