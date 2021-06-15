import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

// hoc

// Layouts
import MainLayout from './Layout/MainLayout';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Topics from './Pages/Topics';
import TDDExamination from './Pages/Examination/TDDExamination';
import GitExamination from './Pages/Examination/GitExamination';
import GitHubExamination from './Pages/Examination/GitHubExamination'
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div className="app">

      <Switch>

        <Route exact path="/" render={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )} />

        <Route path="/login" render={() => (
            <Login />
        )} />

        <Route exact path="/courses" render={() => (
          <MainLayout>
            <Topics />
          </MainLayout>
        )} />

        {/* courses */}
        <Route exact path="/courses/Test-Driven-Development" render={() => (
          <MainLayout>
            <TDDExamination />
          </MainLayout>
        )} />

        <Route exact path="/courses/Git" render={() => (
          <MainLayout>
            <GitExamination />
          </MainLayout>
        )} />

        <Route exact path="/courses/GitHub" render={() => (
          <MainLayout>
            <GitHubExamination />
          </MainLayout>
        )} />

        <Route path="/contact" render={() => (
          <MainLayout>
            <ContactUs />
          </MainLayout>
        )} />


      </Switch>

    </div>
  );
}

export default App;
