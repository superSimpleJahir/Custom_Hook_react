import User from "../../Component/User/User";
import NavBar from "../NavBar/NavBar";
import useFetch from "./../../CustomHook/useFetch";
import Footer from "./../Footer/Footer";

const Users = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <NavBar />
      <section className="usersSection container">
        <h1>Users section</h1>
        <div className="usersGrid">
          {data && data.map((value) => <User key={value.id} value={value} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Users;
