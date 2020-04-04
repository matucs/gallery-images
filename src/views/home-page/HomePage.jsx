import styles from './HomePage.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import ShowsAction from '../../stores/shows/ShowsAction';
import Gallery from './components/gallery/Gallery';
import MainOverview from './components/main-overview/MainOverview';
import { Divider, Icon, Header, Dropdown, Button, Segment, Pagination } from 'semantic-ui-react';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import {sections, sortOptions, windows} from './constants/Ui-constants-data'



const mapStateToProps = (state, ownProps) => ({
  isLoading: state.shows.isLoading,
  currentItem: state.shows.currentItem,
  sort: state.shows.sort,
  section: state.shows.section,
  window: state.shows.window,
});

const mapDispatchToProps = (dispatch) => ({
  onSectionsChange: (v) => {
    return dispatch({ type: ShowsAction.SECTION, payload: v })
  },
  onSortChange: (v, section) => {
    if (v == 'rising') {
      if (section == 'user') {
        return dispatch({ type: ShowsAction.SORT, payload: v })
      }
    } else {
      return dispatch({ type: ShowsAction.SORT, payload: v })
    }
  },
  onWindowChange: (v, section) => {
    if (v == 'day') {
      if (section == 'top') {
        return dispatch({ type: ShowsAction.WINDOW, payload: v })
      }
    } else {
      return dispatch({ type: ShowsAction.WINDOW, payload: v })
    }
  },
  onFilter: () => {
    dispatch({ type: ShowsAction.ISLOADING, payload: true })
    return dispatch(ShowsAction.requestPhoto())
  },
  onLoading: (r) => dispatch({ type: ShowsAction.ISLOADING, payload: r }),
  onPageChange: (r) => {
    dispatch({ type: ShowsAction.CURRENT_PAGE, payload: r })
    dispatch({ type: ShowsAction.ISLOADING, payload: true })
    return dispatch(ShowsAction.requestPhoto())
  }
});

class HomePage extends React.PureComponent {

  componentDidMount() {
    this.props.onLoading(true);
  }

  render() {
    const { isLoading, currentItem, section } = this.props;
    return (
      <div className={styles.wrapper}>
        <LoadingIndicator isActive={isLoading}>
          <MainOverview isItemClick={currentItem && currentItem.albumId && currentItem.imageId ? true : false} currentItem={currentItem} />
          <Segment textAlign='center'>
            <Dropdown placeholder='section' search selection options={sections}
              onChange={(e, v) => this.props.onSectionsChange(v.value)} />{'   '}

            <Dropdown placeholder='sort' search selection options={sortOptions}
              onChange={(e, v) => this.props.onSortChange(v.value, section)} />{'   '}

            <Dropdown placeholder='window' search selection options={windows}
              onChange={(e, v) => this.props.onWindowChange(v.value, section)} />{'           '}

            <Button onClick={() => this.props.onFilter()}>Filter</Button>{'   '}
          </Segment>
          <Segment textAlign='center'>
            <Pagination onPageChange={(e, v) => this.props.onPageChange(v.activePage)}
              boundaryRange={0}
              defaultActivePage={1}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              totalPages={50}
            /></Segment>
          <Divider horizontal={true}>
            <Header as="h4">
              <Icon name="images outline" /> Gallery
            </Header>
          </Divider>
          <Gallery />
        </LoadingIndicator>
      </div>
    );
  }
}

export { HomePage as Unconnected };
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
