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

  const refreshPage = () => {
    window.location.reload();
  };

  const deletePerson = (name) => {
    const newPersons = persons.filter((person) => person.name !== name);
    setPersons(newPersons); // modifie le state persons
  };

  const deletePersons = () => {
    setPersons([]); // modifie le state persons
  };
  return (
    <div>
      <h2>{persons.length === 0 ? "No" : persons.length} Birthdays Today</h2>
      {persons.map((person) => (
        <Birthday person={person} deletePerson={deletePerson} />
      ))}
      <div id="clear-button-container">
        {persons.length === 0 ? (
          <button onClick={refreshPage}>Refresh Page</button>
        ) : (
          <button onClick={deletePersons}>Clear All</button>
        )}
      </div>
    </div>
  );
};

export default BirthdaysList;
