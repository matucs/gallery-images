import { BaseModel } from 'sjs-base-model';
import NetworkModel from './NetworkModel';
import ImageModel from '../ImageModel';


export default class ShowModel extends BaseModel {
  id = 0;
  name = '';
  summary = '';
  genres = [];
  network = NetworkModel;
  image = ImageModel;


  constructor(data) {
    super();

    this.update(data);
  }
}
