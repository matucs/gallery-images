import React from 'react';
import { Grid, Icon, Image, Segment } from 'semantic-ui-react';


export default class MainOverview extends React.PureComponent {

  render() {
    const { isItemClick, currentItem } = this.props;

    return (isItemClick ?
      <Segment  textAlign='center'>
        <h1>
          {currentItem.title}
        </h1>
        <Image wrapped ui={false} src={currentItem.link} size='small' floated='left' />
        <h3>
          {currentItem.description}
        </h3>
        <Grid  textAlign='center'>
          <Grid.Row>
            <Grid.Column width={1}>
              <Icon name='caret up' />
              {currentItem.ups}
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='caret down' />
              {currentItem.downs}
            </Grid.Column>
            <Grid.Column width={1}>
              <Icon name='star' />
              {currentItem.score}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> : ''
    );
  }
}

