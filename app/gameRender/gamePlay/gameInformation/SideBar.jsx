import React from 'react';
import {List, ListItem, ListItemContent} from 'react-mdl'


export default class SideBar extends React.Component{
  render(){
    return(
      <List>
        <ListItem twoLine>
          <ListItemContent subtitle={'Remaining Sheep'}>{this.props.status.sheepActive}</ListItemContent>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent subtitle={'Sheep Lost'}>{this.props.status.sheepLost}</ListItemContent>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent subtitle={'Sheep Saved'}>{this.props.status.sheepPenned}</ListItemContent>
        </ListItem>
      </List>
    )
  }
}
