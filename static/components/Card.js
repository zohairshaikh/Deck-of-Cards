import React from 'react';
import ReactDOM from 'react-dom';
import * as utils from './utils.js';


export default class Card extends React.Component {

    constructor(props) {
        super(props);
        let values = props.value;
        let color = '#000';
        if (values.color === 'R') {
            color = '#FC0D1B';
        }
        let suite_uni = '';
        let suite_name = ''
        switch (values.suite) {
            case 'spades':
                suite_name = 'spades';
                suite_uni = 1;
                break;
            case 'diamonds':
                suite_name = 'diamonds';
                suite_uni = 2;
                break
            case 'hearts':
                suite_name = 'hearts';
                suite_uni = 3;
                break
            case 'clubs':
                suite_name = 'clubs';
                suite_uni = 4;
                break
        }
        this.state = {
            id: values.id,
            value: values.value,
            suite: suite_uni,
            text: values.text,
            color: color,
            suite_name: suite_name
        };
    }

    render() {
        return (
            <div draggable="true" value={this.state.suite_name+','+this.state.id} onDragStart={this.props.onDragStart} id={this.props.indexId}  className="card-container" style={{'color': this.state.color}}>
                <p id={this.props.indexId+':val'}  style={{display: 'none'}}>{this.state.suite_name}</p>
                <p className="suites-text">{this.state.text}</p> {
                this.state.suite === 2 ? <p className="icon-suites">&diams;</p> : (
                    this.state.suite === 1 ? <p className="icon-suites">&spades;</p> : (
                        this.state.suite === 3 ? <p className="icon-suites">&hearts;</p> :
                            <p className="icon-suites">&clubs;</p>
                    )
                )
            }
            </div>
        )
    }


}