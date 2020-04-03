import { BaseModel } from 'sjs-base-model';



export default class PhotoModel extends BaseModel {
  id= "";
  title= "";
  description= '';
  datetime=0;
  type= "image/jpeg";
  animated= false;
  width=0;
  height=0;
  size=0;
  views=0;
  link='';
  comment_count= 0;
  bandwidth= 0;
  vote= null;
  section= "";
  account_url= "";
  account_id= 0;
  ups= 0;
  downs= 0;
  points= 0;
  score= 0;
  is_album= false;
  images = {
    id: "",
    title: '',
    description: "",
    datetime: 0,
    type: "image/jpeg",
    animated: false,
    width: 0,
    height: 0,
    size: 0,
    views: 0
  }
 
  constructor(data) {
    super();

    this.update(data);
  }
}

