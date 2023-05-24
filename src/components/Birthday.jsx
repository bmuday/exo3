const Birthday = ({ person }) => {
  return (
    <div className="birthday-container">
      <div className="image-container">
        <img className="image" src={person.photo_url} alt={`${person.name}`} />
      </div>
      <div className="infos-container">
        <p className="name">{person.name}</p>
        <p className="age">{person.age} years old</p>
      </div>
    </div>
  );
};

export default Birthday;
