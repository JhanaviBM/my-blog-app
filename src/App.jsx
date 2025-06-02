import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import routes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      <Navbar />
      {router}
       <ToastContainer />
    </>
  );
}

export default App;
