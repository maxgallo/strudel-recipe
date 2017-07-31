import React, { Component } from 'react';
import Recipe from './Recipe';
import style from './app.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className={style.appTitle}>
                    Strudel Recipe
                </div>
                <Recipe />
            </div>
        )
    }
}
export default App
