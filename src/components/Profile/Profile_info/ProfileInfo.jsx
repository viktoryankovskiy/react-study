import photo from './../../../photo.jpg';
import mainImage from './../../../main-image.png';
import styles from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div className={styles.profile_info}>
      <img className={styles.main_image} src={mainImage}></img>
      <img className={styles.photo} src={photo}></img>
      <div className={styles.info}>
        <div className={styles.name}>
          Viktor Y.
        </div>
        <div className={styles.birth}>
          Date of Birthday: 6 March
        </div>
        <div className={styles.city}>
          City: Mykolaiv
        </div>
        <div className={styles.education}>
          Education: Agrar Uni.
        </div>
        <div className={styles.website}>
          Web Site: <a href="https://windmillhq.wpengine.com/">https://windmillhq.wpengine.com/</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;