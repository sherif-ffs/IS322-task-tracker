import React from 'react';

import '../../styles/TableView/tableView.css'
import Filters from './Filters'
import Table from './Table'

class TableView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        status: '',
        type: '',
        searchInput: ''
    };
  }

  resetTable() {
    this.filteredTasks = this.props.allTasks;
    this.setState( {
        status: 'all',
        type: 'all',
        searchInput: ''
    })
    document.querySelector('.filter-by-type').selectedIndex = null;
    document.querySelector('.search-input').value = '';
  }

  searchTasksByTitle(searchInput) {
    this.setState({searchInput})
  }

  onTypeChange(type) {
    this.setState({type})
  }

  getFilteredTasks() {
    let tasks = this.props.allTasks;

    let {status, type, searchInput } = this.state;

    if (!!searchInput) {
      if (searchInput !== '') {
        tasks = tasks.filter(task => task.title.toLowerCase().includes(searchInput.trim('').toLowerCase()));
        return tasks
      } else {
        tasks = this.props.allTasks
      }
    }

    if (!!status) {
      if (status !== 'all') {
        tasks = tasks.filter(task => task.status === status)
        return tasks
      } else {
        tasks = this.props.allTasks
      }
    }

    if (!!type) {
      if (type !== 'all') {
        tasks = tasks.filter(task => task.type === type)
        return tasks
      } else {
        tasks = this.props.allTasks
      }
    }

    return tasks
  }

  render() {
    let filteredItems = this.getFilteredTasks();

    return (
      <section className="table-container">
        <Filters
          resetTable={this.resetTable.bind(this)}
          searchTasksByTitle={this.searchTasksByTitle.bind(this)}
          onTypeChange={this.onTypeChange.bind(this)}
        ></Filters>
        <Table allTasks={filteredItems}></Table>
      </section>
    )
  }
    
};

export default TableView;
