const Birthday = ({ person }) => {
  return (
    <div className="birthday-container">
      <img className="image" src={person.photo_url} alt={`${person.name}`} />
      <div className="infos-container">
        <p>{person.name}</p>
        <p>{person.age}</p>
      </div>
    </div>
  );
};

export default Birthday;
