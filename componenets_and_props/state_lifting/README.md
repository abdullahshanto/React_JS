The code workflow in this project follows a **unidirectional data flow** (one-way). Here is the step-by-step lifecycle of an interaction:

### 1. Initial Render
*   App.jsx initializes the `query` state as an empty string (`''`).
*   It calls `filterItems(foods, '')`, which returns the full list of foods.
*   The `SearchBar` displays an empty input, and the `List` renders all food items.

### 2. User Interaction (The Trigger)
*   The user types a letter (e.g., "s") into the `<input />` inside the `SearchBar` component.
*   The `onChange` event fires, calling `handleChange` in App.jsx.

### 3. Lifting the Action
*   `SearchBar` calls the function passed to it via the `onChange` prop: `onChange(e.target.value)`.
*   This function is actually `setQuery` from the parent App.jsx.

### 4. Re-rendering (The Response)
*   The state update (`setQuery('s')`) triggers a re-render of `FilterableList`.
*   **Re-calculation:** The line `const results = filterItems(foods, query)` runs again with the new query `"s"`.
*   The `results` variable now only contains items matching "s" (like "Sushi").

### 5. Prop Updating
*   `FilterableList` passes the new `results` down to App.jsx via the `items` prop.
*   `List` receives the new array and maps over it to update the table on the screen.

