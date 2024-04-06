import React from "react";
const buttonlist = [
  "All",
  "Javascript",
  "Java",
  "Live",
  "Music",
  "Songs",
  "Vlogs",
  "Trendings",
  "All",
  "Javascript",
  "Java",
 
];
const Buttonlist = () => {
  return (
    <div className="py-5 flex ml-56 ">
      {buttonlist.map((item, index) => {
        return (
          <div>
            <button
              key={index}
              className="bg-gray-200 mx-4 w-fit font-semibold border-2 rounded-lg px-2"
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Buttonlist;
