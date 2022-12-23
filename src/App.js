import React, { useState } from 'react';

// import Accordion from "./components/Accordion/Accordion";
// import Search from "./components/Search/Search";
import Dropdown from './components/Dropdown/Dropdown';

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Select Color"
        />
      ) : null}
    </div>
  );
};

export default App;
