import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Loader from './Loader';
import Loading from './index';

Enzyme.configure({adapter: new Adapter()});

let wrapper;

describe('<Loading />', () => {

  it("Should export Layout", () => {
    const props = {
      error: {},
      pastDelay: false
    };
    wrapper = shallow(<Loading {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should check is past Delay is true", () => {
    const props = {
      pastDelay: true
    };
    wrapper = shallow(<Loading {...props} />);
    expect(wrapper.contains(<Loader/>)).toBe(true);
  })
});
