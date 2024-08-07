export default class User{
  #username
  #followers
  #following
  #posts


  constructor(username){
    this.#username=username;
    this.#followers=new Set();
    this.#following=new Set();
    this.#posts=new Set();
  }

 getUsername(){
  return this.#username;
}

follow(user){
  this.#followers.add(user);
  user.addFollowing(this);
}

addFollowing(user){
  this.#following.add(user);
}
addPost(post){
 this.#posts.add(post)
 post.setUser(this);
}
likePost(post) {
  post.addLike(this);
  }
  
addCommentToPost(post,comment){
  post.addComment(this,comment);
}

getFollowers(){
  return Array.from(this.#followers).map(fol => fol.getUsername());
}
getFollowings(){
  return Array.from(this.#following).map(fol => fol.getUsername());
}
getPosts(){
  return Array.from(this.#posts).map(post=> post.getCaption());
}


}





