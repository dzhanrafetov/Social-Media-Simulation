
export default class Post{
  #caption
  #likes
  #user
  #comments
  constructor(caption){
    this.#caption=caption;
    this.#likes=new Set();
    this.#user=null;
    this.#comments=[];
  }
getCaption(){
  return this.#caption;
}

setUser(user){
this.#user=user;

}

addLike(user){
this.#likes.add(user);
}
addComment(user,comment){
this.#comments.push({user: user.getUsername(),comment});
}
getComments(){
  return this.#comments;
}
getLikes(){
  return this.#likes.size;
}



getUser(){
  return this.#user;
}
}