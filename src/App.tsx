import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/layout";
import LanguageSync from "./lang-sync";
import ReactLenis from "lenis/react";

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
      }}
    >
      <Header />

      <main className="flex flex-col min-h-screen">
        <LanguageSync />
        <div className="flex-auto">
          <Outlet />
        </div>
      </main>

      <Footer />
    </ReactLenis>
  );
}

export default App;
