const InputSuggestions = ({
  filteredSuggestions,
  handleClick,
  showSuggestions,
}) => {
  return (
    <div show-suggestions={showSuggestions} className="suggestions">
      <div className="suggestions__break" />
      <div>
        <ul className="suggestions__list">
          {filteredSuggestions.map((suggestion, index, activeSuggestion) => {
            const location = `${suggestion.terms[0].value}, ${suggestion.terms[1].value}`;
            return (
              <li
                className={
                  index === activeSuggestion
                    ? "suggestion__item active"
                    : "suggestion__item"
                }
                key={index}
                onClick={handleClick}
              >
                {location}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InputSuggestions;
