import LoginCard from "../components/LoginCard";
import LangSwitch from "tuba_system/LangSwitch";

const LoginsSection = () => {
  return (
    <div className="logins_parent">
      <LangSwitch />
      <div className="content">
        <h1>أهلاً وسهلاً في طوبي - منصتك الصحية الموثوقة!</h1>
        <h6>اختر نوع الحساب اللي يناسب دورك</h6>
      </div>
      <div className="logins">
        <LoginCard
          title="شركة"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
        <LoginCard
          title="مقدم الخدمة الطبية"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
        <LoginCard
          title="مراجع طبي"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
        <LoginCard
          title="مراجع مالي"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
      </div>
    </div>
  );
};

export default LoginsSection;
