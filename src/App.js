import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Routes } from "./routes";
import { useSelector } from "react-redux";

function App() {
  const expanded = useSelector((state) => state.sidebar.expand);

  return (
    <>
      <Navbar />
      <main
        style={{
          marginLeft: `${expanded ? "240px" : "64px"}`,
          transition: "margin-left 0.3s ease",
        }}
      >
        {Routes()}
        <Footer />
      </main>
    </>
  );
}

export default App;
