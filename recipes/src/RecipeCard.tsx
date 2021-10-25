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
    <div className="col-4 border m-0 p-2 text-dark">
      <div className="card" style={{height: '400px'}}>
        <img className="card-img-top" src={this.props.recipe.image} alt="recipe"/>
        <div className="card-body">
          <h4 className="card-title">{this.props.recipe.title}</h4>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;