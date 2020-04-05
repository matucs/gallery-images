import { BaseModel } from 'sjs-base-model';

export default class ImageModel extends BaseModel {
  medium = '';
  original = '';



  constructor(data) {
    super();

    this.update(data);
  }
}
