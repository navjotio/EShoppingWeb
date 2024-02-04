import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search here...."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
}
export default Search;
