import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';
describe('Testing <Header/>', () => {
    it('<Header/> have rendered correctly', () => {
        const char = shallow(<Header/>);
        expect(char).toMatchSnapshot();
    })
});