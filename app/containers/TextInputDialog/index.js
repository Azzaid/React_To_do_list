/**
 * Created by Johanas on 26.01.2018.
 */

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ControlledTextField from 'containers/ControlledTextField/index';

export default class TextInputDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            textInput:'New category aded',
        };
    }


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        this.props.onSubmitFunction(this.state.textInput);
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <div>
                <RaisedButton label={this.props.buttonLabel} primary onClick={this.handleOpen} />
                <Dialog
                    title={this.props.dialogLable}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <ControlledTextField />
                </Dialog>
            </div>
        );
    }
}