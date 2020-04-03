import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import ShowsAction from '../../../../stores/shows/ShowsAction';
import GalleryCard from './components/GalleryCard';

const mapStateToProps = (state, ownProps) => ({
  gallery: state.shows.gallery,
  currentItem: state.shows.currentItem,
});


class Gallery extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(ShowsAction.requestPhoto());
  }
  componentDidUpdate() {
    this.props.dispatch({ type: ShowsAction.ISLOADING, payload: false })
  }
  
  render() {
    const { gallery, currentItem } = this.props;
    return (
      <Card.Group centered={true} >
        {gallery.map((model) => ( 
          <GalleryCard key={model.id} cardData={model} 
            isItemClick={currentItem && model.id == currentItem.albumId ? true : false} />
        ))}
      </Card.Group>
    );
  }
}

export { Gallery as Unconnected };
export default connect(mapStateToProps)(Gallery);
