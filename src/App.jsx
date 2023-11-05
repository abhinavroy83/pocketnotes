import { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import { Pocketprovider, usePocketContext } from "./context/pocketContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotesHome from "./components/NotePages/NotesHome";

function App() {
  const { selected, setSelected } = usePocketContext();
  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
  }, [selected]);

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    { path: "notes", element: <NotesHome /> },
  ]);
  return (
    <Pocketprovider>
      <div className="App">
        {/* <Main /> */}
        <RouterProvider router={route} />
      </div>
    </Pocketprovider>
  );
}

export default App;
