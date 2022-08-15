import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "1da3a43a";
  const APP_KEY = "277072a85a0ea08ab0f0bb591f1475e8	";
  
  // states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() =>{
    getRecipes();
  }, [query]); // will only run when query is updated. empty [] allows it to be run only once when first mounted

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  };
  
  const updateSearch = e => { // updating the search bar value
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return ( // What the user will see on the site!
    <div className="App">
      <div className='app-title'>
            Search For Recipes!
        </div>
      <form onSubmit={getSearch} className="search-form">
        <div className='search-operation'>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
        </div>
      </form> 
      <div className= 'recipes'>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image = {recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        directions={recipe.recipe.url}
        />
      ))}
      </div>

    </div>

  );
};

export default App;
