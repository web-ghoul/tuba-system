declare const useLang: () => {
    handleChangeLang: () => void;
    handleSetLang: () => void;
    handleGetLang: () => string;
};
export default useLang;
