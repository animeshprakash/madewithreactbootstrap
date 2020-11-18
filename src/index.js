import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './screen/LandingPage';
import reportWebVitals from './reportWebVitals';
import ReactFullpage from '@fullpage/react-fullpage';
import TechExIntro from './screen/techexintro';
import PyGame from './screen/Pygame';
import UIFigma from './screens/UIFigma';
import RegisterForm from './screen/RegisterForm';


const FullPage = ()=>(<ReactFullpage
  navigation
  scrollingSpeed = {1000} /* Options here */
  render={({ state, fullpageApi }) => {
    return (
      <ReactFullpage.Wrapper>
        <div className="section">
          <LandingPage/>
        </div>
        <div className="section" >
          <TechExIntro/>
        </div>
        <div className="section" >
          <PyGame/>
        </div>
        <div className="section" >
          <UIFigma/>
        </div>
        <div className="section">
          <RegisterForm/>
        </div>
      </ReactFullpage.Wrapper>
    );
  }}
  />)
ReactDOM.render(
  <React.StrictMode>
    <FullPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
