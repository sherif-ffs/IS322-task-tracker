import React from 'react';
import Tabs from './shared/Tabs'
import '../styles/app.css'

import initialData from '../initialData'

class App extends React.Component {
  state = initialData
  tasks = this.state.tasks

    
  onAddTask(task) {
    let { tasks } = this.state;
    task.id = `task-${this.state.tasks.length + 1}`
    tasks.push(task);
    console.log('task: ', task)
    this.state.columns['column-1'].taskIds.push(task.id)
    this.setState( {tasks} );
  }

  render() {

    return (
      <Tabs tasks={this.state.tasks} state={this.state} onSubmit={this.onAddTask.bind(this)}></Tabs>
    );
  }
}

export default App;
