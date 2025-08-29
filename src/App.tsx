import { useState } from "react";
import "./App.css";
import Walt_Disney from "./data/Walt_Disney.json";
import Albert_Einstein from "./data/Albert_Einstein.json";
import Maya_Angelou from "./data/Maya_Angelou.json";
import Mark_Twain from "./data/Mark_Twain.json";
import Confucius from "./data/Confucius.json";
import Aristotle from "./data/Aristotle.json";
import Socrates from "./data/Socrates.json";
import William_Shakespeare from "./data/William_Shakespeare.json";
import Plato from "./data/Plato.json";
import Ralph_Waldo_Emerson from "./data/Ralph_Waldo_Emerson.json";
import Benjamin_Franklin from "./data/Benjamin_Franklin.json";
import Oscar_Wilde from "./data/Oscar_Wilde.json";
import Friedrich_Nietzsche from "./data/Friedrich_Nietzsche.json";
import Leonardo_da_Vinci from "./data/Leonardo_da_Vinci.json";
import Steve_Jobs from "./data/Steve_Jobs.json";
import Eleanor_Roosevelt from "./data/Eleanor_Roosevelt.json";
import Dalai_Lama from "./data/Dalai_Lama.json";
import Mother_Teresa from "./data/Mother_Teresa.json";
import Mahatma_Gandhi from "./data/Mahatma_Gandhi.json";
import Martin_Luther_King_Jr from "./data/Martin_Luther_King_Jr.json";
import Stephen_Hawking from "./data/Stephen_Hawking.json";
import Helen_Keller from "./data/Helen_Keller.json";
import Abraham_Lincoln from "./data/Abraham_Lincoln.json";
import George_Bernard_Shaw from "./data/George_Bernard_Shaw.json";
import J_K_Rowling from "./data/J_K_Rowling.json";
import C_S_Lewis from "./data/C_S_Lewis.json";
import Bruce_Lee from "./data/Bruce_Lee.json";
import Winston_Churchill from "./data/Winston_Churchill.json";
import Charles_Dickens from "./data/Charles_Dickens.json";
import Jane_Austen from "./data/Jane_Austen.json";
import Tolstoy from "./data/Tolstoy.json";
import Victor_Hugo from "./data/Victor_Hugo.json";
import Nelson_Mandela from "./data/Nelson_Mandela.json";
import Rumi from "./data/Rumi.json";
import Sun_Tzu from "./data/Sun_Tzu.json";
import Buddha from "./data/Buddha.json";
import Voltaire from "./data/Voltaire.json";
import Thomas_Edison from "./data/Thomas_Edison.json";
import Henry_David_Thoreau from "./data/Henry_David_Thoreau.json";
import Movies from "./data/Movies.json";
import Anime from "./data/Anime.json";


const App = () => {
  const authors = [
    "Walt Disney",
    "Albert Einstein",
    "Maya Angelou",
    "Mark Twain",
    "Confucius",
    "Aristotle",
    "Socrates",
    "William Shakespeare",
    "Plato",
    "Ralph Waldo Emerson",
    "Benjamin Franklin",
    "Oscar Wilde",
    "Friedrich Nietzsche",
    "Leonardo da Vinci",
    "Steve Jobs",
    "Eleanor Roosevelt",
    "Dalai Lama",
    "Mother Teresa",
    "Mahatma Gandhi",
    "Martin Luther King Jr.",
    "Stephen Hawking",
    "Helen Keller",
    "Abraham Lincoln",
    "George Bernard Shaw",
    "J.K. Rowling",
    "C.S. Lewis",
    "Bruce Lee",
    "Winston Churchill",
    "Charles Dickens",
    "Jane Austen",
    "Tolstoy",
    "Victor Hugo",
    "Nelson Mandela",
    "Rumi",
    "Sun Tzu",
    "Buddha",
    "Voltaire",
    "Thomas Edison",
    "Henry David Thoreau",
    "Movies",
    "Anime"
  ];
  const authorsLink = [
    Walt_Disney,
    Albert_Einstein,
    Maya_Angelou,
    Mark_Twain,
    Confucius,
    Aristotle,
    Socrates,
    William_Shakespeare,
    Plato,
    Ralph_Waldo_Emerson,
    Benjamin_Franklin,
    Oscar_Wilde,
    Friedrich_Nietzsche,
    Leonardo_da_Vinci,
    Steve_Jobs,
    Eleanor_Roosevelt,
    Dalai_Lama,
    Mother_Teresa,
    Mahatma_Gandhi,
    Martin_Luther_King_Jr,
    Stephen_Hawking,
    Helen_Keller,
    Abraham_Lincoln,
    George_Bernard_Shaw,
    J_K_Rowling,
    C_S_Lewis,
    Bruce_Lee,
    Winston_Churchill,
    Charles_Dickens,
    Jane_Austen,
    Tolstoy,
    Victor_Hugo,
    Nelson_Mandela,
    Rumi,
    Sun_Tzu,
    Buddha,
    Voltaire,
    Thomas_Edison,
    Henry_David_Thoreau,
    Movies,
    Anime
  ];
  const allAuthorsMap: { [key: string]: any } = {};
  authors .forEach((author, index) => {
    allAuthorsMap[author] = authorsLink[index];
  });
  const sortedAuthors = [...authors].sort((a, b) => a.localeCompare(b));
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");
  const [checker, setChecker] = useState(false);
  const [namechecker, setNameChecker] = useState(true);
  const [listchecker, setListChecker] = useState(false);
  const [selectall, setSelectAll] = useState(true);
  const [activeAuthor, setActiveAuthor] = useState<string[]>(sortedAuthors);
  const activeAuthorsLink = activeAuthor.map((name) => allAuthorsMap[name]);

  const generateQuote = () => {
    setChecker(true);
    let randomNumAuthor = Math.floor(Math.random() * activeAuthorsLink.length);
    if (search.trim()) {
      const searchAuthor = search.replaceAll(/\s+/g, "").toLowerCase();

      const exist = authors.findIndex(
        (name) => name.replaceAll(/\s+/g, "").toLowerCase() === searchAuthor
      );
      if (exist || exist === 0) {
        randomNumAuthor = exist;
      }
    }

    const randomNumQuote = Math.floor(
      Math.random() * activeAuthorsLink[randomNumAuthor].length
    );
    const randomQuote =
      activeAuthorsLink[randomNumAuthor][randomNumQuote].quote;
    const randomAuthor =
      activeAuthorsLink[randomNumAuthor][randomNumQuote].author;
    setQuote(randomQuote);
    setAuthor(randomAuthor);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const inputStatus = () => {
    setNameChecker(!namechecker);
    setSearch("");
  };

  const selectAllClick = () => {
    setSelectAll(!selectall);
    if (!selectall) {
      setActiveAuthor(authors);
    } else {
      setActiveAuthor([]);
    }
  };

  return (
    <div id="html">
      <header>
        <h1>Daily Wisdom</h1>
      </header>
      <div id="home">
        {!checker ? (
          <div></div>
        ) : (
          <div>
            <div id="quotes-container">
              <div id="quote-container">
                <div id="quote">
                  <p>
                    <strong>{quote}</strong>
                  </p>
                </div>
              </div>
              <div id="author-container">
                <div id="author">
                  <p>
                  <strong>{author}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="search-container">
          {namechecker ? (
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Enter a name"
              style={{
                color: activeAuthor.some(
                  (name) =>
                    name.replaceAll(/\s+/g, "").toLowerCase() ===
                    search.replaceAll(/\s+/g, "").toLowerCase()
                )
                  ? "green"
                  : search !== ""
                  ? "black"
                  : "",
              }}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div id="button-container">
          <button
            onClick={generateQuote}
            disabled={
              (!activeAuthor.some(
                (name) =>
                  name.replaceAll(/\s+/g, "").toLowerCase() ===
                  search.replaceAll(/\s+/g, "").toLowerCase()
              ) &&
                search !== "") ||
              activeAuthor.length === 0
            }
          >
            {search === "" ? "Random" : "Generate"}
          </button>
          <button
            onClick={inputStatus}
            style={{ color: namechecker ? "green" : "red" }}
          >
            {" A "}
          </button>
          <button
            onClick={() => setListChecker(!listchecker)}
            style={{ color: listchecker ? "green" : "red" }}
          >
            {" L "}
          </button>
        </div>
        <div>
          {listchecker ? (
            <div id="list-container">
              <div id="select-container">
                <button id="select-button" onClick={selectAllClick}>
                  {selectall ? "Unselect All" : "Select All"}
                </button>
              </div>
              <div id="list-names">
                {sortedAuthors.map((a, index) => (
                  <button
                    key={index} className={activeAuthor.includes(a) ? "active" : ""}
                    onClick={() => {
                      if (activeAuthor.includes(a)) {
                        setActiveAuthor(
                          activeAuthor.filter((author) => author !== a)
                        );
                      } else {
                        setActiveAuthor([...activeAuthor, a]);
                      }
                    }}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
