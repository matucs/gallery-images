import ShowsAction from './ShowsAction';
import BaseReducer from '../../utilities/BaseReducer';

export default class ShowsReducer extends BaseReducer {
  initialState = {
    currentItem: {},
    currentItemData: {},
    gallery: [],
    section: 'hot',
    sort: 'viral',
    window: 'all',
    isLoading: false,
    currentPage: 0
  };

  [ShowsAction.REQUEST_IMAGE_SHOW](state, action) {
    return {
      ...state,
      currentItem: action.payload,
    };
  }
  [ShowsAction.ISLOADING](state, action) {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  [ShowsAction.SECTION](state, action) {
    return {
      ...state,
      section: action.payload,
    };
  }
  [ShowsAction.SORT](state, action) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  [ShowsAction.WINDOW](state, action) {
    return {
      ...state,
      window: action.payload,
    };
  }
  [ShowsAction.CURRENT_PAGE](state, action) {
    return {
      ...state,
      currentPage: action.payload,
    };
  }
  [ShowsAction.REQUEST_CURRENT_ITEM_DATA_FINISHED](state, action) {
    console.log('reducer', action)
    return {
      ...state,
      currentItemData: action.payload,
    };
  }

  [ShowsAction.REQUEST_PHOTO_FINISHED](state, action) {
    return {
      ...state,
      gallery: action.payload,
    };
  }
}
