import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import RecipeStore from './stores/Recipe';

const recipeStore = RecipeStore.create({
    title: 'Strudel'
});
const renderInDom = Component => {
    render(
        <AppContainer>
            <Provider recipeStore={recipeStore}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

renderInDom(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;
        renderInDom(NewApp);
    })
}
