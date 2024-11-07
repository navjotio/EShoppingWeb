import { useState } from "react";
import "../styles/searchbar.css";

function Search() {
  const [search, setSearch] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
      });
  };
  const handleChange = (value) => {
    setSearch(value);
    fetchData(value);
  };
  return (
    <input
      className="search"
      type="text"
      placeholder="Search here...."
      value={search}
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}
export default Search;
// delete the following file for the code in the stuido 