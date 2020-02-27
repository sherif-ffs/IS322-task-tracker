import React from 'react';
import Tabs from './shared/Tabs'
import '../styles/app.css'

import initialData from '../initialData'

class App extends React.Component {
  state = initialData
  tasks = this.state.tasks

    
  // onAddTask(task) {
  //   let { tasks } = this.state;
  //   task.id = `task-${this.state.tasks.length + 1}`
  //   tasks.push(task);
  //   let columnOneTaskIds = this.state.columns['column-1'].taskIds; 
  //   columnOneTaskIds.push(task.id)

  //   const newColumn = {
  //     // ...['column-1'],
  //     id: 'column-1',
  //     title: 'todo',
  //     taskIds: columnOneTaskIds,
  // }

  //   const newState = {
  //     ...this.state,
  //     tasks: tasks,
  //     columns: {
  //         ...this.state.columns,
  //         ['column-1']: newColumn,
  //     }
  // }
  // console.log('newState: ', newState)
  //   this.setState(newState);
  // }

  render() {

    return (
      <Tabs tasks={this.state.tasks} state={this.state} ></Tabs>
      // <Tabs tasks={this.state.tasks} state={this.state} onSubmit={this.onAddTask.bind(this)}></Tabs>
    );
  }
}

export default App;
