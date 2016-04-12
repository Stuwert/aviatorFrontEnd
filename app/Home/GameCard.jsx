import React from 'react';
import {Link} from 'react-router'

export default class GameCard extends React.Component{
  render(){
    return (
      <div className="mdl-cell mdl-cell--4-col">
        <div className='mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title mdl-color--primary'>
            <h2 className="mdl-card__title-text mdl-color-text--white">
              Games
            </h2>
          </div>
          <div className="mdl-card__supporting-text">
            Play games by yourself or with fellow passengers!
          </div>
          <div className="mdl-card__actions mdl_card--border">
            <Link to="/game" className="mdl-button mdl-color--secondary mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Play Games!
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
