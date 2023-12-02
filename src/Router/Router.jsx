import { createBrowserRouter } from "react-router-dom";
import Users from './../Pages/Users/Users';
import Posts from './../Pages/Posts/Posts';
import Todos from './../Pages/Todos/Todos';
import Comments from './../Pages/Comments/Comments';
import Albums from './../Pages/Albums/Albums';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users/>
  },
  {
    path: "/users",
    element: <Users/>
  },
  {
    path: "/albums",
    element: <Albums/>
  },
  {
    path: "/posts",
    element: <Posts/>
  },
  {
    path: "/todos",
    element: <Todos/>
  },
  {
    path: "/comments",
    element: <Comments/>
  }
])



export default router;