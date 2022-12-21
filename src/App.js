import React from 'react';

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
  return (
    <div>
      <Dropdown options={options} label="Select Color" />
    </div>
  );
};

export default App;
