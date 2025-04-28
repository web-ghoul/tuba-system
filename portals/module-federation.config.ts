export const mfConfig = (
  tuba_system: string,
  company: string,
  provider: string,
  reviewer: string,
  underwriter: string
) => ({
  name: "portals",
  filename: "remoteEntry.js",
  remotes: {
    tuba_system,
    company,
    provider,
    reviewer,
    underwriter,
  },
  exposes: {
    "./App": "./src/App",
  },
  shared: {
    react: { singleton: true, requiredVersion: undefined },
    "react-dom": { singleton: true, requiredVersion: undefined },
    "react-i18next": { singleton: true, requiredVersion: undefined },
    "react-hot-toast": { singleton: true, requiredVersion: "^2.5.2" },
    i18next: { singleton: true, requiredVersion: undefined },
  },
});
