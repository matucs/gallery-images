import ShowsEffect from './ShowsEffect';
import ActionUtility from '../../utilities/ActionUtility';

export default class ShowsAction {

  static SECTION = 'ShowsAction.SECTION';
  static SORT = 'ShowsAction.SORT';
  static WINDOW = 'ShowsAction.WINDOW';
  static ISLOADING = 'ShowsAction.ISLOADING';

  static REQUEST_PHOTO = 'ShowsAction.REQUEST_PHOTO';
  static REQUEST_PHOTO_FINISHED = 'ShowsAction.REQUEST_PHOTO_FINISHED';

  static REQUEST_IMAGE_SHOW= 'ShowsAction.REQUEST_IMAGE_SHOW';
  static REQUEST_IMAGE_SHOW_FINISHED= 'ShowsAction.REQUEST_IMAGE_SHOW_FINISHED';

  static REQUEST_CURRENT_ITEM_DATA = 'ShowsAction.REQUEST_CURRENT_ITEM_DATA';
  static REQUEST_CURRENT_ITEM_DATA_FINISHED = 'ShowsAction.REQUEST_CURRENT_ITEM_DATA_FINISHED';

  static REQUEST_ERROR = 'ShowsAction.REQUEST_ERROR';
  static REQUEST_ERROR_FINISHED = 'ShowsAction.REQUEST_ERROR_FINISHED';


  static requestPhoto() {
    return async (dispatch, getState) => {
      const showId = 3;
      const section = getState().shows.section;
      const sort = getState().shows.sort;
      const page = 0;
      const window = getState().shows.window;
      const showViral = true;
      await ActionUtility.createThunkEffect(dispatch, ShowsAction.REQUEST_PHOTO, ShowsEffect.requestPhoto,
        showId, section, sort, page, window, showViral);
    };
  }

  static requestPhotoById() {
    return async (dispatch, getState) => {
      const currentItem = getState().shows.currentItem;

      await ActionUtility.createThunkEffect(dispatch, ShowsAction.REQUEST_CURRENT_ITEM_DATA,
        ShowsEffect.requestPhotoById, currentItem.albumId, currentItem.imageId);
    };
  }

  static requestError() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(dispatch, ShowsAction.REQUEST_ERROR, ShowsEffect.requestError);
    };
  }
}
