import React from 'react';
import Tabs from './shared/Tabs'
import '../styles/app.css'

import initialData from '../initialData'

class App extends React.Component {
  state = initialData
  tasks = this.state.tasks

  render() {

    return (
      <Tabs tasks={this.state.tasks} state={this.state} ></Tabs>
    );
  }
}

export default App;
