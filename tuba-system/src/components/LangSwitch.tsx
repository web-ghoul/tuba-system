import { IconButton, Typography } from "@mui/material";
import { LanguageOutlined } from "@mui/icons-material";
import useLang from "../hooks/useLang";
import { useEffect } from "react";

const LangSwitch = () => {
  const { handleChangeLang, handleGetLang ,handleSetLang} = useLang();
  const lang = handleGetLang();

  useEffect(()=>{
    handleSetLang()
  },[])

  return (
    <IconButton
      className={`flex justify-center items-center gap-2 w-fit !rounded-md !p-2 !absolute top-[20px] !border-2 !border-black !border-solid transition-all ${
        lang === "ar" ? "left-[20px]" : "right-[20px]"
      }  !bg-black !text-white hover:!text-black hover:!bg-white`}
      onClick={handleChangeLang}
    >
      <LanguageOutlined />
      <Typography variant="button">
        {lang === "ar" ? "English" : "عربى"}
      </Typography>
    </IconButton>
  );
};

export default LangSwitch;
