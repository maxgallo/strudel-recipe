import { types } from 'mobx-state-tree';

const Recipe = types.model(
    'Recipe',
    {
        title: types.string,
        ingredients: types.optional(
            types.array(types.string),
            []
        )
    },
    {
        afterCreate(){
            this.ingredients.push('Pastry');
            this.ingredients.push('Apples');

            setTimeout( this.addMoreIngredients, 1000);
        },
        addMoreIngredients() {
            this.ingredients.push('Raisin');
            this.ingredients.push('Sugar');
            this.ingredients.push('Cinnamon');
        }
    }
);

export default Recipe
