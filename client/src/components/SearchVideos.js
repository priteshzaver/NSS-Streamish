import { useState } from "react";
import { searchVideos } from "../modules/videoManager";

const SearchVideos = ({ setVideos, getVideos }) => {
  const [queryString, setQueryString] = useState("");
  const [sortDescBool, setSortDescBool] = useState(false);

  return (
    <article>
      <h2>Search</h2>
      <section>
        <input
          type="text"
          placeholder="Enter search terms"
          onChange={(changeEvent) => {
            setQueryString(changeEvent.target.value);
          }}
        />
        <label>
          Sort by Descending
          <input
            type="checkbox"
            onChange={(changeEvent) => {
              if (changeEvent.target.checked) {
                setSortDescBool(true);
              } else setSortDescBool(false);
            }}
          />
        </label>
        <button          
          onClick={() => {
            searchVideos(queryString, sortDescBool).then((response) => {
              setVideos(response);
            });
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            getVideos();
          }}
        >
          Clear Search Results
        </button>
      </section>
    </article>
  );
};

export default SearchVideos;
