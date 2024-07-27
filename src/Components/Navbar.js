import logo from "./logo.png";

export default function Navbar(props) {
  const { setInputValue, handleInput, inputValue } = props;
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-wrapper">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter username..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="search-icon">
          <button
            onClick={() => {
              handleInput(inputValue);
              setInputValue("");
              console.log(inputValue);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
