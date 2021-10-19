import React, { useEffect, useState } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
// hoc

// Layouts
import MainLayout from './Layout/MainLayout';
import PolicyLayout from './Layout/PolicyLayout';

// Pages
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import Packages from './Pages/Packages';
import TDDExamination from './Pages/Examination/TDDExamination';
import GitExamination from './Pages/Examination/GitExamination';
import GitHubExamination from './Pages/Examination/GitHubExamination'
import ContactUs from './Pages/ContactUs';

//Policy
import TermsOfServices from './Pages/PolicyPages/TermsOfServices';
import PrivacyPolicy from './Pages/PolicyPages/PrivacyPolicy';

import { loadUser } from './Redux/Actions/userActions';
import store from './Redux/store';
import SignIn from './Components/SignIn/SignIn';
import Payment from './Components/Payment/Payment';

import Package from './Components/Package/Package';
import FavouriteTopics from './Components/FavouriteTopics/FavouriteTopics';

//TODO: Mine
import QuestionPaper from './Components/Questions/QuestionPaper';

function App() {
  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripeApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      setStripeApiKey(data.stripeApiKey)
    }

    getStripeApiKey();

  }, [])

  return (
    <div className="app">

      <Switch>

        <Route exact path="/" render={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )} />

        <Route path="/login" component={SignIn} />

        <Route exact path="/favouritetopics" render={() => (
          <MainLayout>
            <FavouriteTopics />
          </MainLayout>
        )} />

        <Route exact path="/courses" render={() => (
          <MainLayout>
            <Topics />
          </MainLayout>
        )} />

        {/* courses */}
        {/* <Route exact path="/courses/:course" render={() => (
          <MainLayout>
            <QuestionPaper />
          </MainLayout>
        )} /> */}

        <Route path = "/courses/:course" component={QuestionPaper} exact/>

        {/* Make a single course page with redux(reducer, constants, actions) */}
        {/* <Route exact path="/courses/Test-Driven-Development" render={() => (
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
        )} /> */}

        <Route path="/contact" render={() => (
          <MainLayout>
            <ContactUs />
          </MainLayout>
        )} />

        <Route path="/packages" render={() => (
          <MainLayout>
            <Packages />
          </MainLayout>
        )} />

          {/* Policys */}
        <Route path="/Policy/TermsOfService" render={() => (
          <PolicyLayout>
            <TermsOfServices />
          </PolicyLayout>
        )} />

        <Route path="/Policy/Privacy" render={() => (
          <PolicyLayout>
            <PrivacyPolicy />
          </PolicyLayout>
        )} />

        {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Route path="/payment" component={Payment} exact/>
            </Elements>
        }

      </Switch>

    </div>
  );
}

export default App;
