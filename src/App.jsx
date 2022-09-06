import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import EpisodePage from "./pages/EpisodePage";
import CharacterPage from "./pages/CharacterPage";
import AppLayout from "./components/AppLayout";
import { useDispatch } from "react-redux";
import { fetchCharacters, fetchEpisodes } from "./redux";

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    // Load episodes and characters data
    // TODO: Implement caching
    dispatch(fetchEpisodes());
    dispatch(fetchCharacters());
  }, []);

  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* TODO: Implement ErrorBoundary */}
          <Route path="/" element={<MainPage />} />
          <Route path="/episode/:id" element={<EpisodePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
