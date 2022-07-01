import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { ContactsProvider } from "./contexts/contact-context";
import { ConversationProvider } from "./contexts/conversation-context";
import { SocketProvider } from "./contexts/socket-context";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationProvider id={id}>
          <Dashboard id={id} />
        </ConversationProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return <>{id ? dashboard : <Login onIdSubmit={setId} />}</>;
}

export default App;
