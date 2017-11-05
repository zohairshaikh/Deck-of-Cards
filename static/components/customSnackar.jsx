import React from 'react';

let visibilityStyle = {};
let timeoutVar;
export default class CustomSnackbar extends React.Component {

    constructor(props) {
        super(props);

        this.onActionClick = this.onActionClick.bind(this);

        this.state = {
            active: this.props.active
        }
    }

    onActionClick() {
        clearTimeout(timeoutVar);
        this.props.action.onActionClick();
    }

    render() {
        if (!this.props.active) {
            visibilityStyle.opacity = 0
            visibilityStyle.marginBottom = 20;
        } else {
            visibilityStyle.opacity = 1;
            visibilityStyle.marginBottom = 30;
            if (timeoutVar != undefined || timeoutVar != null) {
                clearTimeout(timeoutVar);
            }
            timeoutVar = setTimeout(() => {
                timeoutVar = undefined;
                this.props.timeoutCallBack()
            }, this.props.timeout)
        }

        return (
            <div className="snack-bar-container" style={visibilityStyle}>
                <p className="snackbar-text">{this.props.content}</p>
                {
                    this.props.action != undefined ? <p className="snackbar-action-button"
                                                       onClick={this.onActionClick}>{this.props.action.label}</p> : null
                }

            </div>
        )
    }

}
