import Album from "../../Component/Album/Album";
import useFetch from "../../CustomHook/useFetch";

const Albums = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/albums");

  return (
    <>
      <section className="albumsSection container">
        <h1>Album Section</h1>
        <div className="albumsGrid">
          {data && data.map((value) => <Album key={value.id} value={value} />)}
        </div>
      </section>
    </>
  );
};

export default Albums;