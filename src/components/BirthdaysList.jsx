import { useState } from "react";
import Birthday from "./Birthday";

const BirthdaysList = () => {
  const [persons, setPersons] = useState([
    {
      photo_url: "https://www.course-api.com/images/people/person-1.jpeg",
      name: "Bertie Yates",
      age: 29,
    },
    {
      photo_url: "https://www.course-api.com/images/people/person-2.jpeg",
      name: "Hester Hogan",
      age: 32,
    },
    {
      photo_url: "https://www.course-api.com/images/people/person-3.jpeg",
      name: "Larry Little",
      age: 36,
    },
  ]);

  const deletePersons = () => {
    setPersons([]);
  };
  return (
    <div>
      <h2>{persons.length === 0 ? "No" : persons.length} Birthdays Today</h2>
      {persons.map((person) => (
        <Birthday person={person} />
      ))}
      <button onClick={deletePersons}>Clear All</button>
    </div>
  );
};

export default BirthdaysList;
