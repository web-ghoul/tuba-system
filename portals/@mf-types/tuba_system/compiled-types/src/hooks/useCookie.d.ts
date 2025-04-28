declare const useCookie: () => {
    handleSetCookie: (key: string, value: string) => void;
    handleGetCookie: (key: string) => string | undefined;
};
export default useCookie;
