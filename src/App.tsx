import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { MainRoutes } from './router';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {
          MainRoutes.map(route => 
            <Route 
              path={route.path}
              key={route.path}
              element={<route.component />}
            />
          )
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
