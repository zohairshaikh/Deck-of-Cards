import React from 'react';
import ReactDOM from 'react-dom';
import * as utils from './utils.js';
import Card from './Card'
import {newDeck} from "./utils";
import {findDOMNode} from 'react-dom';
import CustomSnackbar from './customSnackar.jsx'

let placesCards = '';
let placesCardsObj = {};

class DeckOfCards extends React.Component {

    constructor() {
        super();
        this.returnCards = this.returnCards.bind(this);
        this.restart = this.restart.bind(this);
        this.drop = this.drop.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.saveProgress = this.saveProgress.bind(this);
        this.snackbarCallback = this.snackbarCallback.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            reset: false,
            snackbarState: false
        };
    }

    restart() {
        $.ajax({
            'url': '/clearData/',
            'data': {'username': this.state.username},
            'type': 'POST',
            success: function (resp) {
                if (resp.code === 200) {
                    console.log('Data cleared');
                }
            }.bind(this)
        })

        this.setState({
            reset: true,
        });
        setTimeout(() => {
            window.location.reload(true);
        }, 200)


    }


    drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let elem = document.getElementById(data);

        let holderVal = ev.target.getAttribute('value');
        let holderId = holderVal.split(',')[1];

        let dropVal = elem.getAttribute('value');
        let dropId = dropVal.split(',')[1];

        if (holderVal.split(',')[0] == dropVal.split(',')[0]) {
            if (dropId in placesCardsObj) {
                // Ignore when already placed, Avoiding duplicate drop calls to be saved
            } else {
                placesCardsObj['dropId'] = 1;
                placesCards += dropId.replace(/"/g, "");
                this.saveProgress(placesCards);
            }


            elem.style.left = 'auto';
            elem.style.top = 'auto';
            elem.style.margin = '-1px';
            ev.target.appendChild(elem);
            if (document.getElementById('cards-container').childElementCount == 0) {
                // All cards placed. Add restart button
                this.setState({
                    showRestart: true
                });

            }
        }
    }

    saveProgress(cards) {
        $.ajax({
            'url': '/saveProgress/',
            'data': {'username': this.state.username, 'data': cards},
            'type': 'POST',
            success: function (resp) {
                if (resp.code === 200) {
                    console.log('Progress Saved');
                }
            }.bind(this)
        });
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    onDragStart(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    returnCards(data, itr) {
        let card = <Card indexId={'card' + itr} onDragStart={this.onDragStart} value={data}/>;
        return (card)
    }

    shuffle() {
        let skip_height = $('#cards-container').height();
        $('#cards-container').ready(function () {
            $('.card-container').each(function () {

                let holder = $(this).parent();
                let divWidth = holder.width();
                let divHeight = holder.height();

                $(this).css({
                    'left': Math.floor(Math.random() * Number(divWidth)),
                    'top': (Math.floor(Math.random() * Number(divHeight))) + (skip_height / 2.5)
                });

            })
        });
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.setState({
                username: localStorage.getItem('user')
            }, this.saveUser)

        } else {
            this.setState({
                loggedIn: false
            });
        }

        this.shuffle()
    }

    saveUser() {
        $.ajax({
            'url': '/loginUser/',
            'data': {'username': this.state.username},
            'type': 'POST',
            success: function (resp) {
                let placedDeck = []
                let deck = [];
                if (resp.isNew == 1) {
                    deck = utils.newDeck();
                } else {
                    let allDecks = utils.getSavedDeck(resp.userdata.split(';'));
                    deck = allDecks.deck;
                    placedDeck = allDecks.placedDeck
                }
                let snackbarLabel = this.state.username + " logged in, "+deck.length+' cards remaining!';
                this.setState({
                    deck: deck,
                    loggedIn: true,
                    isNew: resp.isNew,
                    userdata: resp.userdata,
                    snackbarLabel: snackbarLabel,
                    snackbarState: true
                });
                placesCards = resp.userdata.replace(/"/g, "");
                localStorage.setItem('user', this.state.username)
                this.shuffle();
            }.bind(this)
        })
    }

    usernameChange(id) {
        let val = document.getElementById(id).value;
        this.setState({
            username: val
        })
    }

    snackbarCallback() {
        this.setState({
            snackbarState: !this.state.snackbarState
        })
    }

    logout(){
        localStorage.clear()
        window.location.reload(true)
    }

    render() {
        return (

            <div className="main-container">
                {
                    this.state.loggedIn ? <div className="child-30">
                        <div className="div-by-5">
                            <div className="card-holder" id="spades-holder"
                                 onDragOver={this.allowDrop}>
                                {
                                    this.state.reset ? null :
                                        <div className="drop-container" value="spades," onDrop={this.drop}
                                             onDragOver={this.allowDrop}>

                                        </div>
                                }

                                {
                                    this.state.reset ? null :
                                        <div className="empty-holder-b"><p className="empty-text">Place spades here</p>
                                            <p>&spades;</p></div>
                                }
                            </div>
                        </div>
                        <div className="div-by-5">
                            <div className="card-holder" id="clubs-holder"
                                 onDragOver={this.allowDrop}>
                                {
                                    this.state.reset ? null :
                                        <div className="drop-container" value="clubs," onDrop={this.drop}
                                             onDragOver={this.allowDrop}>

                                        </div>
                                }

                                {
                                    this.state.reset ? null :
                                        <div className="empty-holder-b"><p className="empty-text">Place clubs here</p>
                                            <p>&clubs;</p></div>
                                }


                            </div>
                        </div>
                        <div className="div-by-5">
                            <div className="card-holder" id="hearts-holder"
                                 onDragOver={this.allowDrop}>

                                {
                                    this.state.reset ? null :
                                        <div className="drop-container" value="hearts," onDrop={this.drop}
                                             onDragOver={this.allowDrop}>

                                        </div>
                                }

                                {
                                    this.state.reset ? null :
                                        <div className="empty-holder-r"><p className="empty-text">Place hearts here</p>
                                            <p>&hearts;</p></div>
                                }

                            </div>
                        </div>
                        <div className="div-by-5">
                            <div className="card-holder" id="diamonds-holder"
                                 onDragOver={this.allowDrop}>
                                {
                                    this.state.reset ? null :
                                        <div className="drop-container" value="diamonds," onDrop={this.drop}
                                             onDragOver={this.allowDrop}>

                                        </div>
                                }
                                {
                                    this.state.reset ? null :
                                        <div className="empty-holder-r"><p className="empty-text">Place diamonds
                                            here</p>
                                            <p>&diams;</p></div>
                                }


                            </div>
                        </div>
                        <div className="div-by-5">
                            <button onClick={this.logout} className="btn-logout">Logout</button>
                        </div>

                    </div> : null
                }

                {
                    this.state.loggedIn ? null : <div className="user-popup">
                        <div className="elements-contaiener">
                            <input className="username-input" id="username"
                                   onChange={this.usernameChange.bind(this, 'username')}
                                   placeholder="Enter username"/>
                            <button className="username-btn" onClick={this.saveUser}>Start</button>
                        </div>
                    </div>
                }

                {
                    this.state.loggedIn ?
                        <div className="child-70" ref="cardsContainer" id="cards-container" onDrop={this.drop}
                             onDragOver={this.allowDrop}>
                            {
                                this.state.showRestart ?
                                    <button className="restart-btn" onClick={this.restart}>Restart</button> : null
                            }
                            {
                                this.state.deck.map(this.returnCards)
                            }
                        </div> : null
                }

                <CustomSnackbar content={this.state.snackbarLabel} active={this.state.snackbarState}
                                timeout={5000}
                                timeoutCallBack={this.snackbarCallback}
                                action={
                                    {
                                        onActionClick: this.snackbarCallback,
                                        label: 'DISMISS'
                                    }
                                }/>

            </div>
        )
    }

}

ReactDOM.render(
    <DeckOfCards/>
    , document.getElementById('app')
)