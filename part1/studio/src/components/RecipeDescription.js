import RecipeAuthor from './Description.js';
import Description from './Description.js'
import React from 'react';

class RecipeDescription extends React.Component {
    render () {
      return (
      <div> 
        <div>
           <h1>Bacon Wrapped Asparagus</h1>
           <p>Asparagus spears wrapped in bacon and topped with parmesan cheese</p>
        </div>
        <RecipeAuthor />
     </div>
      )
    }
}
export default RecipeDescription