import Todo from "../../Component/Todo/Todo";
import useFetch from "../../CustomHook/useFetch";
import NavBar from "./../NavBar/NavBar";
import Footer from "./../Footer/Footer";

const Todos = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <NavBar />
      <section className="todosSection container">
        <h1>Todos Section</h1>
        <div className="todosGrid">
          {data && data.map((value) => <Todo key={value.id} value={value} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Todos;
