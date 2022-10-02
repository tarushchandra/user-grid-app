import { useState } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import axios from "axios";

function App() {
  const [areCardsRendered, setAreCardsRendered] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
        setAreCardsRendered(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      {areCardsRendered ? (
        <CardContainer
          setAreCardsRendered={setAreCardsRendered}
          users={users}
          loading={loading}
        />
      ) : (
        <div className="intro-main-text">
          <p>
            Please click on the <span>'Get Users'</span> button to retrieve the
            data
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
