import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Make sure this is correctly imported
import Home from './pages/Home';
import Market from './pages/Market';
import Portfolio from './pages/Portfolio';
import Tutorials from './pages/Tutorials';
import Competitions from './pages/Competitions';
import Login from './pages/Login'; // Import the Login page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Default route to login */}

      {/* Protected routes after successful login */}
      <Route
        path="/home"
        element={
          <>
            <Navbar /> {/* Add Navbar here */}
            <Home />
          </>
        }
      />
      <Route
        path="/market"
        element={
          <>
            <Navbar /> {/* Add Navbar here */}
            <Market />
          </>
        }
      />
      <Route
        path="/portfolio"
        element={
          <>
            <Navbar /> {/* Add Navbar here */}
            <Portfolio />
          </>
        }
      />
      <Route
        path="/tutorials"
        element={
          <>
            <Navbar /> {/* Add Navbar here */}
            <Tutorials />
          </>
        }
      />
      <Route
        path="/competitions"
        element={
          <>
            <Navbar /> {/* Add Navbar here */}
            <Competitions />
          </>
        }
      />
    </Routes>
  );
};

export default App;
