export const mfConfig = {
  name: "tuba_system",
  filename: "remoteEntry.js",
  remotes: {
    portals: `portals@http://localhost:4001/remoteEntry.js`,
  },
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./LangSwitch": "./src/components/LangSwitch.tsx",
    "./PrimaryButton": "./src/components/PrimaryButton.tsx",
    "./SideAuthSection": "./src/sections/SideAuthSection.tsx",
    "./useCookie": "./src/hooks/useCookie.ts",
    "./useLang": "./src/hooks/useLang.ts",
    "./i18n": "./src/i18n.ts",
    "./styles": "./src/styles.ts",
    "./config": "./src/config.ts",
  },
  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
    "react-i18next": { singleton: true, requiredVersion: undefined },
    i18next: { singleton: true, requiredVersion: undefined },
  },
};
