import Post from "../../Component/Post/Post";
import NavBar from "../NavBar/NavBar";
import useFetch from "./../../CustomHook/useFetch";
import Footer from "./../Footer/Footer";

const Posts = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      <NavBar />
      <section className="postsection container">
        <h1>Post Section</h1>
        <div className="PostGrid">
          {data && data.map((value) => <Post key={value.id} value={value} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Posts;
