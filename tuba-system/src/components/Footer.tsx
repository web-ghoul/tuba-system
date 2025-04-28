import { Box, Typography } from "@mui/material";
import { PrimaryBox } from "../mui/boxes/PrimaryBox";
import { PrimaryContainer } from "../mui/containers/PrimaryContainer";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} =  useTranslation("components/footer")
  
  return (
    <Box
      component={"footer"}
      className="bg-white h-[60px] w-full"
    >
      <PrimaryBox>
        <PrimaryContainer className={`!flex justify-start items-center`}>
          <Typography variant="subtitle1" className={`!font-[700]`}>
            © {new Date().getFullYear()} <span className="text-primary">طوبي</span>
            {t('title')}
          </Typography>
        </PrimaryContainer>
      </PrimaryBox>
    </Box>
  );
};

export default Footer;
