import React from "react";
import "../styles/SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="searchbox-container">
      <label for="searchbox" class="is-size-5" />
      <input
        class="input mb-5"
        type="search"
        id="searchbox"
        placeholder="search artist.."
      ></input>
    </div>
  );
};
