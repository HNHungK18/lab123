
import './App.css';
import { useState } from 'react';
import OrchidNavbar from './components/OrchidNavbar';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthProvider';
import ProtectedOrchid from './components/ProtectedOrchid';
import ContactContainer from './components/ContactContainer';
function App() {
const [page, setPage] = useState("dashboard");

  return (
    <AuthProvider>
      <div className="App">
      <header className="App-header">
        <h1>List of Orchids</h1>
        <ThemeToggle />
        <OrchidNavbar currentPage={page}  setCurrentPage={setPage} />
      </header>
       {page === "orchidList" && <ProtectedOrchid/>}
       {page === "dashboard" && <Dashboard />}
       {page === "contact" && <ContactContainer />}
    </div>
    </AuthProvider>
  );
}

export default App;
