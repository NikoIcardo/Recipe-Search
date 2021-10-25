import React, {Component} from 'react'; 


interface State {};

type RecipeType = {
  id: number,
  title: string,
  image: string,
  imageType: string
}
interface Props {
  key: string,
  recipe: RecipeType
}

class RecipeCard extends Component<Props, State> {
  render = () => (
    <div>
      <h1>Recipe</h1>
      <h1>{this.props.recipe.title}</h1>
      <img src={this.props.recipe.image} alt="recipe"/>
    </div>
  )
}

export default RecipeCard;