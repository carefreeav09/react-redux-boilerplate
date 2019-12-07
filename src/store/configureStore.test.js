import {browserHistory} from 'react-router-dom';
import configureStore from "./configureStore";

describe('Store --- configureStore', () => {

  it("runs without errors", () => {
    const store = configureStore({}, browserHistory);
    expect(store).toBeDefined();
  });

});
