/* eslint-disable react/prop-types */
const Comment = ({ value }) => {
  const { name,email,body, id } = value;
  return (
    <div className="Comment">
      <h1>{id} </h1>
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      <p>Comment: {body}</p>
    </div>
  );
};

export default Comment;