import Todo from "../../Component/Todo/Todo";
import useFetch from "../../CustomHook/useFetch";


const Todos = () => {
  const [data] =  useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <section className="todosSection container">
      <h1>Todos Section</h1>
      <div className="todosGrid">
        {
          data&& data.map((value)=>(
            <Todo key={value.id} value={value} />
          ))
        }
      </div>
    </section>
  );
};

export default Todos;