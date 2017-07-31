import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/App';
import RecipeStore from './stores/Recipe';

const recipeStore = RecipeStore.create({
    title: 'Strudel'
});

render(
    <Provider recipeStore={recipeStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);
