/* eslint-disable react/prop-types */
const User = ({ value }) => {
  const { id, name, username, email, address } = value;
  const { street, city, zipcode } = address;
  return (
    <div className="user">
      <h1> {id} </h1>
      <h2>
        Name: {name} (<span>{username}</span>){" "}
      </h2>
      <h4>Email: {email} </h4>
      <p>
        <span>city: {city}</span> <span>street: {street}</span>
      </p>
      <p>zipcode: {zipcode}</p>
    </div>
  );
};

export default User;
