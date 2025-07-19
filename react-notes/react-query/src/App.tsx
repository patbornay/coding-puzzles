import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserPage } from "./pages/UserPage";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserPage />
      </QueryClientProvider>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
