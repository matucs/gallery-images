import React from 'react';
import { Card, Image, Header, Icon, Grid } from 'semantic-ui-react';
import ShowsAction from '../../../../../stores/shows/ShowsAction';
import { connect } from 'react-redux';


const mapDispachToProps = (dispatch) => ({
  onHandleClick: (obj) => {
    return dispatch({ type: ShowsAction.REQUEST_IMAGE_SHOW, payload: obj })
  }
})


class GalleryCard extends React.PureComponent {

  render() {
    const { cardData, isItemClick } = this.props;
    const imgId = (cardData.images.length >= 1) ? cardData.images[0].id : '';
    const imgBaseLink = 'https://i.imgur.com/';
    const missingImage = 'https://react.semantic-ui.com/images/wireframe/image.png';
    let image = (cardData.images.length >= 1) ? imgBaseLink + imgId + 'm.png' : missingImage;
    let imageBig = (cardData.images.length >= 1) ? imgBaseLink + imgId + 'l.png' : missingImage;
    return (
      <Card
        className={`ui ${isItemClick ? 'blue' : 'grey'} card`}
        key={cardData.id} onClick={() => {
          return this.props.onHandleClick({
            albumId: cardData.id, imageId: imgId,
            title: cardData.title, description: cardData.description, link: imageBig,
            ups: cardData.ups, downs: cardData.downs, score: cardData.score
          })
        }}>
        <Image wrapped ui={false} src={image} />
        <Card.Content >
          <Card.Header> {cardData.title}</Card.Header>
          <Card.Meta><Icon name='eye' /> {' ' + cardData.views}</Card.Meta>
          <Card.Description>
            {cardData.description}
          </Card.Description>
        </Card.Content>
        {isItemClick ?
          <Card.Content extra>
            <Grid >
              <Grid.Row>
                <Grid.Column width={3}>
                  <Icon name='caret up' />
                  {cardData.ups}
                </Grid.Column>
                <Grid.Column width={3}>
                  <Icon name='caret down' />
                  {cardData.downs}
                </Grid.Column>
                <Grid.Column width={3}>
                  <Icon name='star' />
                  {cardData.score}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content> : ''
        }
      </Card>
    );
  }
}

export { GalleryCard as Unconnected };
export default connect(null, mapDispachToProps)(GalleryCard);