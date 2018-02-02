/**
 * Created by p.zamulko on 02.02.2018.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class TaskModifyField extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            name: this.props.task.name,
            description: this.props.task.description,
        };
    };


    handleNameChange = (event, newValue) => {
      this.setState({ name: newValue });
    };

    handleDescriptionChange = (event, newValue) => {
      this.setState({ description: newValue });
    };

    submitUpdate = () => {
      console.log("passing name to update",this.state.name);
        this.props.taskModifyFunction(this.state.name, this.state.description, this.props.homeArray, this.props.task.id);
        this.props.history.push("/"+this.props.homeArrayId);
    }

    rejectUpdate = () => {
        this.props.history.push("/"+this.props.homeArrayId);
    }

    render(){
      console.log("state of task is", this.state);
        return (
                <div>
                    <TextField
                        id="name-field-controlled"
                        defaultValue={this.state.name}
                        onChange={this.handleNameChange}
                        floatingLabelFixed={true}
                        floatingLabelText="Name"
                    />
                    <TextField
                        id="description-field-controlled"
                        defaultValue={this.state.description}
                        onChange={this.handleDescriptionChange}
                        floatingLabelFixed
                        floatingLabelText="Description"
                        multiLine
                        rows={3}
                        rowsMax={5}
                        fullWidth
                    />
                    <RaisedButton
                        label={'Save'}
                        primary
                        onClick={this.submitUpdate}
                    />
                    <RaisedButton
                        label={'Cancel'}
                        primary
                        onClick={this.rejectUpdate}
                    />
                </div>
            )
    }
}