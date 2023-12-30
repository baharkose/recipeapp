import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import RecipeContextProvider from "./context/RecipeContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <RecipeContextProvider>
          <AppRouter />
        </RecipeContextProvider>
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
