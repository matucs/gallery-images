import environment from 'environment';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import HttpUtility from '../../utilities/HttpUtility';
import ShowModel from './models/shows/ShowModel';
import PhotoModel from './models/photo/PhotoModel';
import EffectUtility from '../../utilities/EffectUtility';

export default class ShowsEffect {
  static async requestShow(showId) {
    const endpoint = environment.api.shows.replace(':showId', showId);

    return EffectUtility.getToModel(ShowModel, endpoint);
  }

  static async requestPhoto(showId, section = 'hot', sort = 'viral', page = 0, window = 'all', showViral = true) {
    const endpoint = environment.api.gallery.replace(':showId', showId).replace(':section', section)
      .replace(':sort', sort).replace(':page', page)
      .replace(':window', window);


    const response = await HttpUtility.get(endpoint, {
      'showId': showId, 'section': section, 'sort': sort, 'page': page,
      'window': window, 'showViral': showViral
    },
      { 'headers': { 'Authorization': 'Client-ID 8b41ea2e3bdd188' } });

    if (response instanceof HttpErrorResponseModel) {
      return response;
    }
    return response.data.map((json) => new PhotoModel(json));
  }
  // static async requestPhotoById(albumId, imageId) {
  //   const endpoint = environment.api.itemShow.replace(':albumId', albumId).replace(':imageId', imageId);

  //   const response = await HttpUtility.get(endpoint, null, { 'headers': { 'Authorization': 'Client-ID 8b41ea2e3bdd188' } });

  //   if (response instanceof HttpErrorResponseModel) {
  //     return response;
  //   }
  //   console.log('showEffect: ', response.data.data)
  //   return response.data.data;
  // }

  static async requestError() {
    const endpoint = environment.api.errorExample;
    const response = await HttpUtility.get(endpoint);

    if (response instanceof HttpErrorResponseModel) {
      return response;
    }

    return response.data;
  }
}
