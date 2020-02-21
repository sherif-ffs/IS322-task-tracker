import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import '../../styles/TableView/select.css'

class FilterType extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            type: '',
        };
      }

    onTypeChange = this.props.onChange;

    render() {
    console.log('onTypeChange: ', this.onTypeChange)
        return (
            <FormControl className='filter-by-type-container filter'>
            <InputLabel id="demo-simple-select-label">Filter By Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.type}
                className="filter-by-type"
                // onChange={(newType) => this.setState({ type: newType })}
                onChange={event => this.onTypeChange(event.target.value)}
                >
                <MenuItem value={'bug'}>Bug</MenuItem>
                <MenuItem value={'task'}>Task</MenuItem>
                <MenuItem value={'feature'}>Feature</MenuItem>
                </Select>
          </FormControl>
        )
    }
    
}

export default FilterType;