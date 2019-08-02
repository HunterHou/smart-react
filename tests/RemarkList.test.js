import React from 'react';
import renderer from 'react-test-renderer';

import RemarkList from '..\src\component\RemarkList.js';

describe('<RemarkList />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<RemarkList />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });