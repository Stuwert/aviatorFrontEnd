import React from 'react';
import {Card, label, CardText, CardTitle, Tooltip} from 'react-mdl'

export default class SheepInfo extends React.Component{
  render(){
    return(
      
          <h3>
            {this.props.title}
          </h3>
        </CardTitle>
        <CardText>
          <h5>
            {this.props.number}
          </h5>
        </CardText>
      </Card>
    )
  }
}
