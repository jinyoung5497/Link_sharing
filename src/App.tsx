import { Login, SignUp, Preview, ProfileDetails, LinkPage } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="links" element={<LinkPage />} />
      <Route path="preview" element={<Preview />} />
      <Route path="profiledetails" element={<ProfileDetails />} />
      <Route path="linkpage" element={<LinkPage />} />
    </Routes>
  );
};

export default App;
