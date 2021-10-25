import React, {Component, ChangeEvent, FormEvent} from 'react';
import './App.css';
import axios from 'axios'; 
import RecipeCard from './RecipeCard'; 

interface Props {};

type RecipeType = {
  id: number,
  title: string,
  image: string,
  imageType: string
}

interface State {
  recipesFound: Array<RecipeType>, 
  recipeSearch: string
}; 

class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props); 
    this.state = {
      recipesFound: [], 
      recipeSearch: ''
    }
  }

  searchForRecipes = async (query: string ): Promise<any> => {
    try {
      const response = await axios.get(`http://localhost:5001/api?search=${query}`); 
      
      
      this.setState({recipesFound: [...response.data.data]}); 
      console.log(response.data.data); 
    } catch(err: any) {
      console.log(err.message)
    } 
  }

  search = async (e: FormEvent<HTMLFormElement>):Promise<any> => {
    e.preventDefault(); 
    this.searchForRecipes(this.state.recipeSearch); 
  }

  onInput = (e: ChangeEvent<HTMLInputElement>):void => {
    this.setState({recipeSearch: e.target.value});
  }


  render = () => (
    <div className="container-fluid border text-white bg-dark">
      <div className="row">
        <div className="col-10 offset-1">
          <h1>Recipe Search App</h1>
          <form onSubmit={this.search}> 
            <input className="form-control" type="text" onInput={this.onInput} />
            <button className="btn btn-primary m-2" type="submit">Search</button>
          </form>
        </div>
            {this.state.recipesFound.length !== 0 && this.state.recipesFound.map((recipe: RecipeType) => 
              <RecipeCard key={recipe.title} recipe={recipe}  />
            )}
      </div>
    </div>
  )
}

export default App;
