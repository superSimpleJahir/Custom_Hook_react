import Albums from "./Pages/Albums/Albums";
import NavBar from "./Pages/NavBar/NavBar";
import Footer from "./Pages/Footer/Footer";
import Users from "./Pages/Users/Users";
import Posts from "./Pages/Posts/Posts";
import Comments from "./Pages/Comments/Comments";
import Todos from "./Pages/Todos/Todos";

function App() {
  return (
    <>
      <NavBar />
      <Users />
      <Albums />
      <Posts />
      <Comments />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
