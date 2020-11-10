import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profile_info/ProfileInfo';
const Profile = (props) => {
  return (
    <div className={styles.profile_content}>
      <ProfileInfo />
      <MyPosts 
        posts={props.profilePage.posts} 
        addPost={props.addPost} 
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        />
    </div>
  );
}

export default Profile;