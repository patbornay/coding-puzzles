import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserDefaultExample } from "./pages/UserDefaultExample";
import { ModalButton } from "./components/ModalButton";
import { UserStaleTimeExample } from "./pages/UserStaleTimeExample";
import { ErrorBoundaryExample } from "./pages/ErrorBoundaryExample";

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ModalButton name="default user query">
          <UserDefaultExample />
        </ModalButton>
        <ModalButton name="stale time user query">
          <UserStaleTimeExample />
        </ModalButton>
        <ModalButton name="error boundary example">
          <ErrorBoundaryExample />
        </ModalButton>
      </QueryClientProvider>
    </>
  );
}

export default App;
