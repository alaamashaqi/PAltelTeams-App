import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Unity, { UnityContext } from 'react-unity-webgl';
import './App.scss';

export class EndlessGame extends Component {
  constructor() {
    super();
    this.speed = 30;
    this.state = {
      degrees: 0,
      message: '',
      showUnity: true,
      loaded: false,
    };
    this.unityContext = new UnityContext({
      codeUrl: 'Endless/build/Endless.wasm',
      frameworkUrl: 'Endless/build/Endless.framework.js',
      dataUrl: 'Endless/build/Endless.data',
      loaderUrl: 'Endless/build/Endless.loader.js',
    });
    this.unityContext.on('canvas', (canvas) => {
      canvas.width = 400;
      canvas.height = 600;
    });
    //this.unityContext.on("Game", (score) => {
    //this.setState({
    // message:""+score,
    // });
    // });
    /* this.unityContext.on("Load", () => {
          this.setState({
            loaded:true,
          });
          this.OnClick();
        });*/
    /*this.unityContext.on("Say", (message) => {
          this.setState({ message });
        });*/
  }
  /*OnClick(){
        
        //this.Show()
        if (this.state.loaded==true){
          this.unityContext.send("Text", "SetNames","Ahmad");
        }
    
      }*/
  Show() {
    this.setState({
      showUnity: true,
    });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.showUnity === true ? (
            <Unity unityContext={this.unityContext} devicePixelRatio={2} />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
export class KartGame extends Component {
  constructor() {
    super();
    this.speed = 30;
    this.state = {
      degrees: 0,
      message: '',
      showUnity: true,
      loaded: false,
    };
    this.unityContext = new UnityContext({
      codeUrl: 'WebGL_Builds/build/WebGL Builds.wasm',
      frameworkUrl: 'WebGL_Builds/build/WebGL Builds.framework.js',
      dataUrl: 'WebGL_Builds/build/WebGL Builds.data',
      loaderUrl: 'WebGL_Builds/build/WebGL Builds.loader.js',
    });
    this.unityContext.on('canvas', (canvas) => {
      canvas.width = 500;
      canvas.height = 900;
    });
    //this.unityContext.on("Game", (score) => {
    //this.setState({
    // message:""+score,
    // });
    // });
    /* this.unityContext.on("Load", () => {
          this.setState({
            loaded:true,
          });
          this.OnClick();
        });*/
    /*this.unityContext.on("Say", (message) => {
          this.setState({ message });
        });*/
  }
  /*OnClick(){
        
        //this.Show()
        if (this.state.loaded==true){
          this.unityContext.send("Text", "SetNames","Ahmad");
        }
    
      }*/
  Show() {
    this.setState({
      showUnity: true,
    });
  }
  render() {
    return (
      <div className="gameContainer">
        {this.state.showUnity === true ? (
          <Unity
            unityContext={this.unityContext}
            devicePixelRatio={2}
            className="GameCardContainer"
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
