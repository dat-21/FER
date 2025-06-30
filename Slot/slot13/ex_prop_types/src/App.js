import React from "react";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Data submitted:", formData);
  };

  return (
    <>
      {/* UserProfile Section */}
      <div className="UserProfileSection">
        <h1>React Application</h1>

        {/* Valid case */}
        <UserProfile name="Nguyễn Văn A" age={25} />

        {/* Invalid name */}
        <UserProfile name="" age={25} />

        {/* Invalid age */}
        <UserProfile name="Nguyễn Văn B" age="twenty five" />

        {/* Missing age */}
        <UserProfile name="Nguyễn Văn C" age={null} />
      </div>

      {/* UserProfile2 Section */}
      <div className="UserProfile2Section">
        <h1>React Application</h1>
        <UserProfile2
          name="Nguyễn Văn A"
          age={25}
          onSubmit={handleFormSubmit}
        />
        <UserProfile2
          name="Nguyễn Văn B"
          age="twenty five"
          onSubmit={handleFormSubmit}
        />
        <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />
      </div>

      {/* MyForm Section */}
      <div className="MyFormSection">
        <h1>Ứng Dụng React</h1>
        <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
      </div>

      {/* RegistrationForm Section */}
      <div className="RegistrationFormSection">
        <h1>Ứng Dụng Đăng Ký</h1>
        <RegistrationForm onSubmit={handleFormSubmit} />
      </div>
    </>
  );
};

export default App;
