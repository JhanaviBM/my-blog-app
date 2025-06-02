// src/routes/routes.jsx
import Home from '../components/Home';
import CreateABlog from '../components/CreateABlog';
import Blogs from '../components/Blogs';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/create', element: <CreateABlog /> },
  { path: '/blogs', element: <Blogs /> },
];

export default routes;
