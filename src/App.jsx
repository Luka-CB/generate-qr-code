import { useContext, useState } from "react";
import Card from "./components/Card";
import { AppContext } from "./context";

function App() {
  const [searchQ, setsearchQ] = useState("");

  const { items, setItems } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems((prev) => [
      ...prev,
      {
        id: new Date(),
        searchQ,
      },
    ]);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    setsearchQ("");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          id="search-input"
          type="search"
          placeholder="Add Search Query"
          value={searchQ}
          onChange={(e) => setsearchQ(e.target.value)}
          required
        />
        <button id="btn" type="submit">
          ADD
        </button>
      </form>
      <div className="cards">
        {items.length === 0 ? <p>No Items! Add query to search.</p> : null}
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default App;
