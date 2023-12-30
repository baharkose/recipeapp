import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import RecipeContextProvider from "./context/RecipeContext";
function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-slate-200 dark:-z-50 min-h-screen">
      <AuthContextProvider>
        <RecipeContextProvider>
          <AppRouter />
        </RecipeContextProvider>
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
