import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './screen/LandingPage';
import reportWebVitals from './reportWebVitals';
import ReactFullpage from '@fullpage/react-fullpage';
import TechExIntro from './screen/techexintro';
import PyGame from './screen/Pygame';
import UIFigma from './screen/UIFigma';
import RegisterForm from './screen/RegisterForm';
import MenuBar from './MenuBar';
import PygameImage from './img/controllerAsset.svg';
import FigmaImg from './img/phoneAsset.svg';
import {TimelineLite} from 'gsap/all';
class FullPage extends React.Component{
  constructor(props){
    super(props);
    this.backgroundDiv = null;
    this.backgroundTween = null;
    this.state={}
  }
  componentDidMount(){
    this.backgroundTween = new TimelineLite({paused:true})
  }
  onLeaveFunc = (origin,destination,direction) =>{
    const background = destination.item.querySelector('.background-rect')
    if(direction==="down" && background){
      this.backgroundTween.to(background,{rotation: -3,duration: 1,delay:0.5});
      this.backgroundTween.play();
    }else if(direction==="up" && background){
      this.backgroundTween.to(background,{rotation: 2,duration: 1, delay: 0.5})
      this.backgroundTween.play();
    }
  }
  render(){
    return (<ReactFullpage
      navigation
      scrollingSpeed = {1500}
      anchors={["homepage","introduction","pygame","figma","register"]}
      onLeave = {this.onLeaveFunc}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" id="firstPage">
              <LandingPage/>
            </div>
            <div className="section" >
              <TechExIntro/>
            </div>
            <div className="section" >
              <div class="background-rect"></div>
              <img src={PygameImage} alt="" className="asset" style={{left :'50vw'}}/>
              <PyGame/>
            </div>
            <div className="section" >
              <div class="background-rect"></div>
              <img src={FigmaImg} alt="" className="asset" style={{left :'10vw'}}/>
              <UIFigma/>
            </div>
            <div className="section" style={{backgroundColor: '#f58c57'}}>
              <RegisterForm/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      />)
  }
}
ReactDOM.render(
  <React.StrictMode>
    <MenuBar/>
    <FullPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
