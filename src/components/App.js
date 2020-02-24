import React from 'react';
import Tabs from './shared/Tabs'
import '../styles/app.css'

import initialData from '../initialData'

class App extends React.Component {
  state = initialData

  render() {
    const { tasks } = initialData;
    
    return (
      <Tabs tasks={tasks} state={this.state}></Tabs>
    );
  }
}

export default App;
