export const mfConfig = (
  portals: string,
  company: string,
  provider: string,
  reviewer: string,
  underwriter: string
) => ({
  name: "tuba_system",
  filename: "remoteEntry.js",
  remotes: {
    portals,
    company,
    provider,
    reviewer,
    underwriter,
  },
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./LangSwitch": "./src/components/LangSwitch.tsx",
    "./PrimaryButton": "./src/components/PrimaryButton.tsx",
    "./SideAuthSection": "./src/sections/SideAuthSection.tsx",
    "./useCookie": "./src/hooks/useCookie.ts",
    "./useLang": "./src/hooks/useLang.ts",
    "./handleToaster": "./src/functions/handleToaster.ts",
    "./i18n": "./src/i18n.ts",
    "./styles": "./src/styles.ts",
    "./config": "./src/config.ts",
  },
  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
    "react-i18next": { singleton: true, requiredVersion: undefined },
    i18next: { singleton: true, requiredVersion: undefined },
    "react-hot-toast": { singleton: true, requiredVersion: "^2.5.2" },
  },
});
