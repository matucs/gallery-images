import { BaseModel } from 'sjs-base-model';



export default class NetworkModel extends BaseModel {
  id = 0;
  name = '';

  constructor(data) {
    super();

    this.update(data);
  }
}
