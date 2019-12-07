import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Loader from './Loader';

Enzyme.configure({adapter: new Adapter()});

let wrapper;

describe('<Loader />', () => {

  it("Should render properly", () => {
    wrapper = shallow(<Loader/>);
    expect(wrapper);
  });

});
