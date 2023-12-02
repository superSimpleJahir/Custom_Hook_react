import Album from "../../Component/Album/Album";
import useFetch from "../../CustomHook/useFetch";
import NavBar from "./../NavBar/NavBar";
import Footer from './../Footer/Footer';

const Albums = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/albums");

  return (
    <>
      <NavBar />
      <section className="albumsSection container">
        <h1>Album Section</h1>
        <div className="albumsGrid">
          {data && data.map((value) => <Album key={value.id} value={value} />)}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Albums;
