import User from "./User.js";
import Post from "./Post.js";

// Create users
const firstUser = new User("dzhan_rafetov");
const secondUser = new User("stelk_sv");
const thirdUser = new User("petko_sv");

// Create and add post
const firstPost = new Post("First Post");
firstUser.addPost(firstPost);

// Add likes and comments to the post
firstUser.likePost(firstPost);
firstUser.addCommentToPost(firstPost, "First Comment");
firstUser.addCommentToPost(firstPost, "Second Comment");

// Log post details
console.log("Post Caption: ",firstPost.getCaption())
console.log("Post Likes:", firstPost.getLikes());
console.log("Post Comments:", firstPost.getComments());
console.log("Post Created By:", firstPost.getUser().getUsername());

console.log("-----------");

// User follow actions
firstUser.follow(thirdUser);
secondUser.follow(firstUser);

// Log user details
console.log("Username:", firstUser.getUsername());
console.log("Followers:", firstUser.getFollowers());
console.log("Followings:", firstUser.getFollowings());
console.log("Posts Created:", firstUser.getPosts().length);


// Calculate non-followers and non-following
const nonFollowers = firstUser.getFollowings().filter(following => !firstUser.getFollowers().includes(following));
const nonFollowing = firstUser.getFollowers().filter(follower => !firstUser.getFollowings().includes(follower));

console.log("Not Following Back:", nonFollowers);
console.log("You Are Not Following Back:", nonFollowing);
