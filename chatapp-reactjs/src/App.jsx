import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import SignInSignUp from "./components/SignInSignUp";

function App() {
  return (
    <Routes>
      <Route index element={<Chat />} />
      <Route path="/sign/*" element={<SignInSignUp />} />
    </Routes>
  );
}

export default App;
