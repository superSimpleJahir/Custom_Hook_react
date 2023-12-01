/* eslint-disable react/prop-types */
const Album = ({ value }) => {
  const { title, id } = value;
  return (
    <div className="album">
      <h1>{id} </h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Album;
