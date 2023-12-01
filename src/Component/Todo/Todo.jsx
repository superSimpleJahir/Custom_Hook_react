/* eslint-disable react/prop-types */

const Todo = ({ value }) => {
  const { id, title, completed } = value;
  console.log(completed);
  return (
    <div className="todo">
      <h1>{id}</h1>
      <h4>Title: {title}</h4>
      <h3> {completed ? "completed" : "No completed"} </h3>
    </div>
  );
};

export default Todo;
