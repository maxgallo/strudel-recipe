import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('Renders a div with className and text', t => {
    const wrapper = shallow(<App />);
    t.true(wrapper.contains(
        <div className="appTitle">Strudel Recipe</div>
    ));
});
