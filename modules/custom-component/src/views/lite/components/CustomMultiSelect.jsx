import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

export class CustomMultiSelect extends React.Component {
    state = {
        options: [{name: 'Topping 1', id: 1},{name: 'Topping 2', id: 2}],
        selectedValues : []
    };

    componentDidMount() {
        console.log('I was triggered during componentDidMount')

        this.setState({
            options: [{name: 'Topping 1', id: 1},{name: 'Topping 2', id: 2}],
            selectedValues: []
        });
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.sendChoice = this.sendChoice.bind(this);

        console.log(this.props);
        console.log(this.props.options);
        console.log(this.props.choices);
        console.log(this.props.choice);
    }

    sendChoice() {
        this.props.onSendData({ type: 'text', text: this.state.selectedValues })
    }

    onSelect(selectedList, selectedItem) {
    }

    onRemove(selectedList, removedItem) {  
    }

  render() {
    return (
      <React.Fragment>
       <Multiselect
        options={this.state.options} // Options to display in the dropdown
        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        />
        <button onClick={this.sendChoice}>Done</button>
      </React.Fragment>
    )
  }
}