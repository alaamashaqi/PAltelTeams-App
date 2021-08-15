import React, { Component } from 'react';
import '../App.scss';
import Stories from 'react-insta-stories';

import * as microsoftTeams from '@microsoft/teams-js';
import axios from 'axios';

var key = require('../keys');

class PaltelStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      stories: [
        require('../../ImagesAndIcons/StoryOpened.svg'),

        require('../../ImagesAndIcons/StoryOpened.svg'),
      ],
      ShowStory: false,
      storyStyle: 'StoryButton',
    };
  }
  ExitStory = () => {
    if (this.state.ShowStory == true) {
      this.setState({ ShowStory: false });
    }
  };

  OnStoryPress() {
    this.setState({ ShowStory: true });
    this.setState({ storyStyle: 'OpenedStoryButton' });
  }
  MainStories = () => {
    return (
      <div className="StoriesContainer">
        <button className="AddStoryButton">
          <img
            className="AddStoryImage"
            src={require('../../ImagesAndIcons/Add.svg')}
          />
        </button>
        <button
          className={this.state.storyStyle}
          onClick={() => this.OnStoryPress()}
        >
          <img
            className="StoryImage"
            src={require('../../ImagesAndIcons/DrfaultStory.svg')}
          />
        </button>
        <button className="StoryButton">
          <img
            className="StoryImage"
            src={require('../../ImagesAndIcons/DrfaultStory.svg')}
          />
        </button>
        <button className="StoryButton">
          <img
            className="StoryImage"
            src={require('../../ImagesAndIcons/DrfaultStory.svg')}
          />
        </button>
        <button className="StoryButton">
          <img
            className="StoryImage"
            src={require('../../ImagesAndIcons/DrfaultStory.svg')}
          />
        </button>
        <button className="StoryButton">
          <img
            className="StoryImage"
            src={require('../../ImagesAndIcons/DrfaultStory.svg')}
          />
        </button>
      </div>
    );
  };
  componentDidMount() {}
  render() {
    return (
      <section id="PaltelStories">
        <div className="StoryPageContainer">
          {this.MainStories()}
          {this.state.ShowStory == true ? (
            <div
              style={{
                width: window.innerWidth,
                height: window.innerHeight + 200,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  // backgroundColor: 'black',
                  // position: 'absolute',
                  // left: 10,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 190,
                  }}
                >
                  <button
                    className="CloseBbutton"
                    onClick={() => this.setState({ ShowStory: false })}
                  >
                    <img
                      className="CloseImage"
                      src={require('../../ImagesAndIcons/CloseBytton.svg')}
                    />
                  </button>

                  <Stories
                    className="StoryStyle"
                    stories={this.state.stories}
                    defaultInterval={10000}
                    width={498}
                    height={584}
                    storyStyles={{
                      width: '115%',
                      height: '150%',
                      opacity: 1,
                    }}
                    keyboardNavigation={true}
                    // onAllStoriesEnd={console.log('Hi')}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    );
  }
}

export default PaltelStories;
