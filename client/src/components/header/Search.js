import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'
// import { getDataAPI } from '../../utils/fetchData'
// import { GLOBALTYPES } from '../../redux/actions/globalTypes'
// import UserCard from '../UserCard'
// import LoadIcon from '../../images/loading.gif'

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="search_form">
      <input
        type="text"
        name="search"
        value={search}
        id="search"
        title="Enter to Search"
        onChange={(e) =>
          setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
        }
      />

      <div className="search_icon" style={{ opacity: search ? 0 : 0.3 }}>
        <span className="material-icons">search</span>
        <span>Enter to Search</span>
      </div>

      <div className="close_search">&times;</div>
    </form>
  );
};

export default Search;
