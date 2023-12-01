/* eslint-disable react/prop-types */

const Post = ({value}) => {
  const {id, title, body} = value;
  return (
    <div className="post">
      <h1> {id} </h1>
      <h4>Title: {title} </h4>
      <p>Post: {body}</p>
    </div>
  );
};

export default Post;