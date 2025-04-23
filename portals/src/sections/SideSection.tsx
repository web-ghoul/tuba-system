
const SideSection = () => {
  return (
    <div className={"side_parent"}>
      <img
        src="/images/side_shape_top.svg"
        className={"shape_top"}
        alt="Shape 1"
      />
      <img
        src="/images/logo_arabic_light.svg"
        alt="Tuba Logo"
        className={"logo"}
      />
      <div className="content">
        <h1 className="title">مرحباً في طوبي !</h1>
        <h6 className={"desc"}>
          منصتك الطبية اللي تجمع كل خدمات التأمين الصحي في مكان واحد، من
          المطالبات للاستشارات والأدوية.
        </h6>
      </div>
      <img
        src="/images/side_shape_bottom.svg"
        className={"shape_bottom"}
        alt="Shape 2"
      />
    </div>
  );
};

export default SideSection;
