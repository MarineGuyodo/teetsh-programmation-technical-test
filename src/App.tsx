import { ModeToggle } from "./components/mode-toggle";
import ProgrammationPage from "./pages/programmation/programmation-page";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-center gap-8 bg-muted p-4">
        <h1 className="font-extrabold">Teetsh</h1>
        <ModeToggle />
      </header>

      <main className="mt-0 grow overflow-hidden">
        <ProgrammationPage />
      </main>
    </div>
  );
}

export default App;
