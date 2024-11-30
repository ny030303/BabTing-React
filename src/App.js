import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./GlobalStyles";
import MeetingManagement from "./pages/MeetingManagement";
import UnivCertForm from "./pages/UnivCertForm";
import MeetupMap from "./pages/MeetupMap";
import { events, currentPosition } from "./data/MeetupMapData";
import ApiTester from "./pages/ApiTester";
import TeamCreation from "./pages/TeamCreation";
import ChatRoom from "./pages/ChatRoom";
import CommunityMain from "./pages/community/CommunityMain";
import Reviews from "./pages/community/Reviews";
import Board from "./pages/community/Board";
import ReviewWrite from "./pages/community/ReviewWrite";

function App() {
  const handleSuccess = () => {
    alert("인증 성공!");
  };

  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/test/api" element={<ApiTester />} />
          {/* ===TEST==== */}

          <Route
            path="/univform"
            element={<UnivCertForm onSuccess={handleSuccess} />}
          />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="/meeting/*" element={<MeetingManagement />} />
          <Route
            path="/meetupmap"
            element={
              <MeetupMap events={events} currentPosition={currentPosition} />
            }
          />
          <Route path="/TeamCreation" element={<TeamCreation />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/community/main" element={<CommunityMain />} />
          <Route path="/community/board" element={<Board />} />
          <Route path="/community/reviews" element={<Reviews />} />
          <Route path="/community/reviewWrite" element={<ReviewWrite />} />

          {/* <Route path="/search/detail/*" element={<SearchDetail />} />
          <Route path="/replay/detail/*" element={<ReplayDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
