import { Route, Routes } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorite from "./pages/Favorite";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetup />} />
        <Route path="/newMeetup" element={<NewMeetup />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Layout>
  );
}

export default App;
