import React from "react";
import {MemoryRouter as Router} from 'react-router-dom';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PrivateRoute from './PrivateRoute';
import Dashboard from '../containers/Index';
import * as jwtUtil from "../utils/jwtUtil";

Enzyme.configure({adapter: new Adapter()});

function setup() {
  const wrapper = mount(
    <Router initialEntries={['/dashboard']}>
      <PrivateRoute path='/dashboard' component={Dashboard}/>
    </Router>
  );

  return {
    wrapper
  };
}

describe("Routes --- Authentication", () => {

  it("should redirect to login when user is not authenticated", () => {
    jwtUtil.isAuthenticated = jest.fn().mockReturnValue(false);
    expect(jwtUtil.isAuthenticated()).toBe(false);
    const {wrapper} = setup();
    expect(wrapper.find(Dashboard).length).toEqual(0);
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual('/login')
  });

  it("renders the passed component when user is authenticated", () => {
    jwtUtil.isAuthenticated = jest.fn().mockReturnValue(true);
    expect(jwtUtil.isAuthenticated()).toBe(true);
    const {wrapper} = setup();
    expect(wrapper.find('Route').prop('path')).toEqual('/dashboard')
  });

});
