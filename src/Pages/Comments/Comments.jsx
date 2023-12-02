import Comment from "../../Component/Comment/Comment";
import useFetch from "../../CustomHook/useFetch";
import NavBar from "../NavBar/NavBar";
import Footer from "./../Footer/Footer";

const Comments = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/comments");

  return (
    <>
      <NavBar />
      <section className="commentsSection container">
        <h1>Comments Section</h1>
        <div className="commentsGrid">
          {data && data.map((value) => <Comment key={value.id} value={value} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Comments;
