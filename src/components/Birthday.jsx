const Birthday = ({ person, deletePerson }) => {
  const { photo_url, name, age } = person;
  return (
    <div className="birthday-container">
      <div className="image-container">
        <img className="image" src={photo_url} alt={`${name}`} />
      </div>
      <div className="infos-container">
        <p className="name">{name}</p>
        <p className="age">{age} years old</p>
        <button id="delete-button" onClick={() => deletePerson(name)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Birthday;
