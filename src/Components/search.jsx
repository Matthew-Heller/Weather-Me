import React, { useEffect, useState } from "react";
import { getSuggestionsOptions } from "../HTTP Services/http";
import axios from "axios";
import { useSessionToken } from "../Helper Functions/useSessionToken";
import InputSuggestions from "./inputSuggestions";

const SuggestionsSearch = ({ handleCallback }) => {
  const [userInput, setUserInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [sessionToken, setSessionToken] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const token = useSessionToken(sessionToken);
  const options = getSuggestionsOptions(userInput, sessionToken);
  const activeSuggestions = `${showSuggestions}`;

  const handleClick = (e) => {
    setUserInput("");
    handleCallback(e.target.innerText);
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    if (!sessionToken) {
      setSessionToken(token);
    }
    setUserInput(e.target.value);
    const activeSearch = e.target.value.length >= 3 ? true : false;
    activeSearch ? setShowSuggestions(true) : setShowSuggestions(false);
  };

  const getSuggestionsList = async () => {
    const suggestionsList = await axios
      .request(options)
      .then((response) => {
        let responses = response.data.predictions;
        return responses;
      })
      .catch(function (error) {
        console.log(error);
      });
    setFilteredSuggestions(suggestionsList);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showSuggestions) {
        getSuggestionsList();
        console.log(filteredSuggestions);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [userInput]);

  return (
    <div className="searchBar">
      <input
        autoComplete="off"
        id="searchBar__input"
        show-suggestions={activeSuggestions}
        className="searchBar__input"
        type="text"
        onChange={handleChange}
        placeholder="Search for a city"
        value={userInput}
      />

      <InputSuggestions
        showSuggestions={activeSuggestions}
        filteredSuggestions={filteredSuggestions}
        handleClick={handleClick}
        activeSuggestion={activeSuggestion}
      />
    </div>
  );
};

export default SuggestionsSearch;
