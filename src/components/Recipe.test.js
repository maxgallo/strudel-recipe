import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import Recipe from './Recipe';

test('Renders a div with className and text', t => {
    const recipeStore = {
        title: 'hello',
        ingredients: []
    }

    const wrapper = mount(<Recipe recipeStore={recipeStore}/>);
    t.true(wrapper.contains(
        <h2>hello</h2>
    ));
});
