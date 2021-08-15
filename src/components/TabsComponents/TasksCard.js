import React, { Component } from 'react';
import '../App.scss';
import * as microsoftTeams from '@microsoft/teams-js';
import axios from 'axios';
var key = require('../keys');

class TasksCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
      tasks: '',
      OneTaskFeild: false,
      TwoTasksFeild: false,
      ThreeTasksFeild: false,
      NoTaskFeild: false,
      TaskTaskNumberber: 0,
      plans: '',
      plansId: '',
      CanGo: false,
      CanGo2: false,
      checklist: '',
      checklistactive: '',
      Active: false,
      Dumy: false,
      Total: '',
    };
  }

  NextButtonState() {
    if (this.state.tasks[this.state.TaskTaskNumberber + 3] != null) {
      this.setState({ TaskTaskNumberber: this.state.TaskTaskNumberber + 3 });
      this.setState({ Active: true });
    }
  }
  BackButtonState() {
    if (this.state.TaskTaskNumberber != 0) {
      this.setState({ TaskTaskNumberber: this.state.TaskTaskNumberber - 3 });

      if (this.state.TaskTaskNumberber - 3 == 0) {
        this.setState({ Active: false });
      }
    }
  }

  OneTaskFeild = () => {
    return (
      <div className="Tasks">
        <div className="SingleTask">
          <h2 className="TaskTitle">
            {this.state.tasks[this.state.TaskTaskNumberber]}
          </h2>
          <div className="TasksDetailsContainer">
            <h2 className="Plan">microsoft Team</h2>
            <h2 className="CheckList">
              {this.state.checklistactive[this.state.TaskTaskNumberber]}
              {this.state.checklist[this.state.TaskTaskNumberber]}
            </h2>
          </div>
        </div>
        <div className="NextButtonContainer">
          <button className="BackButton" onClick={() => this.BackButtonState()}>
            {this.state.Active == false ? (
              <img src={require('../../ImagesAndIcons/BackIconpng.png')} />
            ) : (
              <img src={require('../../ImagesAndIcons/ActiveBackIcon.png')} />
            )}
          </button>
          <button className="NextButton" onClick={() => this.NextButtonState()}>
            <img src={require('../../ImagesAndIcons/NextIcon.png')} />
          </button>
        </div>
      </div>
    );
  };
  TwoTasksFeild = () => {
    return (
      <div className="Tasks">
        <div className="SingleTask">
          <h2 className="TaskTitle">
            {this.state.tasks[this.state.TaskTaskNumberber]}
          </h2>
          <div className="TasksDetailsContainer">
            <h2 className="Plan">microsoft Team</h2>
            <h2 className="CheckList">
              {this.state.checklistactive[this.state.TaskTaskNumberber]}
              {this.state.checklist[this.state.TaskTaskNumberber]}
            </h2>
          </div>
        </div>
        <div className="SingleTask">
          <h2 className="TaskTitle">
            {this.state.tasks[this.state.TaskTaskNumberber + 1]}
          </h2>
          <div className="TasksDetailsContainer">
            <h2 className="Plan">microsoft Team</h2>
            <h2 className="CheckList">
              {this.state.checklistactive[this.state.TaskTaskNumberber + 1]}
              {this.state.checklist[this.state.TaskTaskNumberber + 1]}
            </h2>
          </div>
        </div>

        <div className="NextButtonContainer">
          <button className="BackButton" onClick={() => this.BackButtonState()}>
            {this.state.Active == false ? (
              <img src={require('../../ImagesAndIcons/BackIconpng.png')} />
            ) : (
              <img src={require('../../ImagesAndIcons/ActiveBackIcon.png')} />
            )}
          </button>
          <button className="NextButton" onClick={() => this.NextButtonState()}>
            <img src={require('../../ImagesAndIcons/NextIcon.png')} />
          </button>
        </div>
      </div>
    );
  };
  ThreeTasksFeild = () => {
    return (
      <div className="Tasks">
        <div className="SingleTask">
          <a
            href="https://teams.microsoft.com/_?lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/tab::5052323f-150e-4aff-aa94-7b41ec9aac00/General?threadId=19:7002a5808ce0419e89a78710c715caaf@thread.tacv2&ctx=channel"
            target="_blank"
            className="Links"
          >
            <h2 className="TaskTitle">
              {this.state.tasks[this.state.TaskTaskNumberber]}
            </h2>
          </a>

          <div className="TasksDetailsContainer">
            <h2 className="Plan">
              {this.state.tasks[this.state.TaskTaskNumberber] != null
                ? 'Plan #1'
                : null}
            </h2>
            <h2 className="CheckList">
              {this.state.checklistactive[this.state.TaskTaskNumberber]}
              {this.state.checklist[this.state.TaskTaskNumberber]}
            </h2>
          </div>
        </div>

        <div className="SingleTask">
          <a
            href="https://teams.microsoft.com/_?lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/tab::5052323f-150e-4aff-aa94-7b41ec9aac00/General?threadId=19:7002a5808ce0419e89a78710c715caaf@thread.tacv2&ctx=channel"
            target="_blank"
            className="Links"
          >
            <h2 className="TaskTitle">
              {this.state.tasks[this.state.TaskTaskNumberber + 1]}
            </h2>
          </a>

          <div className="TasksDetailsContainer">
            <h2 className="Plan">
              {this.state.tasks[this.state.TaskTaskNumberber + 1] != null
                ? 'Plan #2'
                : null}
            </h2>
            <h2 className="CheckList">
              {this.state.checklistactive[this.state.TaskTaskNumberber + 1]}
              {this.state.checklist[this.state.TaskTaskNumberber + 1]}
            </h2>
          </div>
        </div>
        <div className="SingleTask">
          <a
            href="https://teams.microsoft.com/_?lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/tab::5052323f-150e-4aff-aa94-7b41ec9aac00/General?threadId=19:7002a5808ce0419e89a78710c715caaf@thread.tacv2&ctx=channel"
            target="_blank"
            className="Links"
          >
            <h2 className="TaskTitle">
              {this.state.tasks[this.state.TaskTaskNumberber + 2]}
            </h2>
          </a>
          <div className="TasksDetailsContainer">
            <h2 className="Plan">
              {this.state.tasks[this.state.TaskTaskNumberber + 2] != null
                ? 'Plan #3'
                : null}
            </h2>
            <h2 className="CheckList">
              {this.state.checklistactive[this.state.TaskTaskNumberber + 2]}
              {this.state.checklist[this.state.TaskTaskNumberber + 2]}
            </h2>
          </div>
        </div>

        <div className="ShowingContainer">
          <h2 className="Showing">
            Showing <br></br>
            {this.state.TaskTaskNumberber} of {this.state.Total}
          </h2>
        </div>

        <div className="NextButtonContainerTasks">
          <button
            className="BackButtonFixed"
            onClick={() => this.BackButtonState()}
          >
            {this.state.Active == false ? (
              <img src={require('../../ImagesAndIcons/BackIconpng.png')} />
            ) : (
              <img src={require('../../ImagesAndIcons/ActiveBackIcon.png')} />
            )}
          </button>
          <button className="NextButton" onClick={() => this.NextButtonState()}>
            <img src={require('../../ImagesAndIcons/NextIcon.png')} />
          </button>
          {/* <button className="BackButton" onClick={() => this.BackButtonState()}>
            {this.state.Active == false ? (
              <img src={require('../../ImagesAndIcons/BackIconpng.png')} />
            ) : (
              <img src={require('../../ImagesAndIcons/ActiveBackIcon.png')} />
            )}
          </button>
          <button className="NextButton" onClick={() => this.NextButtonState()}>
            <img src={require('../../ImagesAndIcons/NextIcon.png')} />
          </button> */}
        </div>
      </div>
    );
  };
  componentDidMount() {
    const Tasks = [...this.state.tasks];
    const Plans = [...this.state.plans];
    const CheckList = [...this.state.checklist];
    const CheckListActive = [...this.state.checklistactive];

    axios
      .get('https://graph.microsoft.com/v1.0/me/planner/tasks', {
        headers: { authorization: this.props.Key },
      })
      .then((res) => {
        this.setState({ Total: res.data.value.length - 1 });
        for (var i = 0; i < res.data.value.length; i++) {
          Tasks.push(res.data.value[i].title);
          CheckList.push(res.data.value[i].checklistItemCount);
          CheckListActive.push(
            res.data.value[i].activeChecklistItemCount + '/'
          );

          // if (i == res.data.value.length - 1) {
          //   this.setState({ CanGo: true });
          // }
        }
        // if (this.state.CanGo == true) {
        //   for (var my = 0; my < res.data.value.length; my++) {
        //     axios
        //       .get(
        //         'https://graph.microsoft.com/v1.0/planner/plans/' + PlansId[my],
        //         {
        //           headers: { authorization: key.Tok },
        //         }
        //       )
        //       .then((res) => {
        //         console.error(res.data.title);
        //         Plans.push(res.data.title);
        //       })
        //       .catch((err) => console.error(err));

        //     if (my == res.data.value.length - 1) {
        //       this.setState({ CanGo2: true });
        //     }
        //   }
        // }
        // console.log(this.state.CanGo2);
        // if (this.state.CanGo2 == true) {
        //   console.log(Plans[0]);
        // }

        // console.log(res.data.value.length);
        if (Tasks[0] != null && Tasks[1] != null && Tasks[2] != null)
          this.setState({ ThreeTasksFeild: true });
        if (Tasks[0] != null && Tasks[1] != null && Tasks[2] == null)
          this.setState({ TwoTasksFeild: true });
        if (Tasks[0] != null && Tasks[1] == null && Tasks[2] == null)
          this.setState({ OneTaskFeild: true });

        // if (Plans[0] != null && Plans[1] != null && Plans[2] != null)
        //   this.setState({ ThreeTasksFeild: true });
        // if (Plans[0] != null && Plans[1] != null && Plans[2] == null)
        //   this.setState({ TwoTasksFeild: true });
        // if (Plans[0] != null && Plans[1] == null && Plans[2] == null)
        //   this.setState({ OneTaskFeild: true });
        // for (var x = 0; x < 5; x++) {
        //   console.log('welcome');
        //   console.log(Plans[x]);
        // }
      })
      .catch((err) => console.error(err));

    this.setState({ tasks: Tasks });
    this.setState({ checklist: CheckList });
    this.setState({ checklistactive: CheckListActive });
    // this.setState({ plans: Plans });
  }
  render() {
    return (
      <section id="TasksCard">
        <div className="FileInfo">
          <img
            className="TaskIcon"
            src={require('../../ImagesAndIcons/Tasks.svg')}
          />
          <h2 className="TitleText">Tasks</h2>
          {this.state.ThreeTasksFeild == true ? this.ThreeTasksFeild() : null}
          {this.state.TwoTasksFeild == true ? this.TwoTasksFeild() : null}
          {this.state.OneTaskFeild == true ? this.OneTaskFeild() : null}
        </div>
      </section>
    );
  }
}

export default TasksCard;
