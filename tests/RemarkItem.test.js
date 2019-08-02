import React from 'react';
import renderer from 'react-test-renderer';

import RemarkItem from '..\src\component\RemarkItem.js';

describe('<RemarkItem />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<RemarkItem />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });