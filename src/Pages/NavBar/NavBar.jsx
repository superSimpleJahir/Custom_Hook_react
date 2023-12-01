import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="flex container">
      <div className="logo">
        <img src="https://i.postimg.cc/wMJv3vxB/logo.png" alt="logo" />
      </div>

      <ul className="flex">
        <li>
          <a href="">Albums</a>
        </li>
        <li>
          <a href="">Comments</a>
        </li>
        <li>
          <a href="">Posts</a>
        </li>
        <li>
          <a href="">Todos</a>
        </li>
        <li>
          <a href="">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
