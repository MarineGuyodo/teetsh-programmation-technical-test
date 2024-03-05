import { ModeToggle } from "./components/mode-toggle";
import ProgrammationPage from "./pages/programmation/programmation-page";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-center gap-8 bg-muted px-4 py-2 shadow-md">
        <h1 className="font-extrabold">Teetsh</h1>
        <ModeToggle />
      </header>

      <main className="mt-0 grow overflow-hidden p-0 md:p-4 lg:p-8">
        <ProgrammationPage />
      </main>
    </div>
  );
}

export default App;
