import Post from "../../Component/Post/Post";
import useFetch from "./../../CustomHook/useFetch";

const Posts = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <section className="postsection container">
      <h1>Post Section</h1>
      <div className="PostGrid">
        {data && data.map((value) => <Post key={value.id} value={value} />)}
      </div>
    </section>
  );
};

export default Posts;
