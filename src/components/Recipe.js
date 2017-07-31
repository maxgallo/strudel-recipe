import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('recipeStore') @observer
class Recipe extends Component {
    @computed get anyIngredients() {
        return this.props.recipeStore.ingredients.length
    }

    render() {
        return (
            <div>
                <h2>{this.props.recipeStore.title}</h2>
                {   this.anyIngredients &&
                    this.props.recipeStore.ingredients.map( ingredient => (
                        <div key={ingredient}>{ingredient}</div>
                    ))
                }
            </div>
        )
    }
}
export default Recipe
