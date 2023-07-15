import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor () {
    let authorLink = "https://tornadoughalli.com/";
    let authorPhoto = "https://tornadoughalli.com/wp-content/uploads/2019/06/ALLI-BLOG-PHOTO.png";
    let authorName =  "Allison Miller";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Picture of a woman with brown hair and a nose ring" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Tornado Alli</a> 
           </div>
        </div>
     );
}
export default RecipeAuthor;