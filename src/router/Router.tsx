import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import HeaderFooter from '../pages/HeaderFooter';
// import Signup from '../pages/SignUp';
// import Home from '../pages/Home';
// import HourlyUpdatesPage from '../pages/Hourly';
// import DailyCalender from '../pages/DailyCalender';
// import ToDo from '../pages/Todo';
// import Notes from '../pages/Notes';
// import HeaderFooter from '../components/HeaderFooter';
// import ProtectedRoute from './ProtectedRoute';


const MainRoutes: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HeaderFooter>
          <Login />
        </HeaderFooter>}></Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
