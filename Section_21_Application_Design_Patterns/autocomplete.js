/*
 * autocomplete.js
 *
 * Reusable code to get an autocomplet to work. Zero
 * knowledge of 'movies' or 'recipes' or 'blogs'. Ablr
 * to be run several times in the same problem.
 */

const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  // Creatae the input field and the dropdonw for the results
  // to simplify the HTML and make it easier to reuse
  root.innerHTML = `
    <label><b>Search></b></label>
    <input class="input" />
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results">
            </div>
        </div>
    </div>
`;

  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    // get an array of items that match the search
    const items = await fetchData(event.target.value);
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let item of items) {
      const option = document.createElement("a");
      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener("input", debounce(onInput, 500));

  // a click that is not on root will bubble up to document.
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
