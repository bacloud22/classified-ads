import { useState } from "react";
import Container from "./Container";
import Context from "./Context";

function App() {
  const [user, setUser] = useState(null)

  const store = {
    user,
    setUser
  }
  return (
      <Context.Provider value={store}>
        <Container/>
      </Context.Provider>
    )
}

export default App
