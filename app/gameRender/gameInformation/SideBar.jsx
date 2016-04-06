import React from 'react';

import SheepActive from './SheepActive.jsx'
import SheepLost from './SheepLost.jsx'
import SheepPenned from './SheepPenned.jsx'


export default class SideBar extends React.Component{
  render(){
    return(
      <div>
        <SheepActive number={this.props.status.activeSheep} />
        <SheepLost number={this.props.status.lostSheep} />
        <SheepPenned number={this.props.status.pennedSheep} />
      </div>
    )
  }
}
