import { IInitialState } from '../state/initialState.types';
import { initialState } from '../state/initialStates';
import dashboardReducer from './dashboardReducer/dashboardReducer';
import { IReducerAction } from './index.types';
import toasterReducer from './toasterReducer/toasterReducer';

const reducer: (
  state: IInitialState,
  action: IReducerAction,
) => IInitialState = (state = initialState, action) => {
  return {
    dashboardState: dashboardReducer(state.dashboardState, action),
    toasterState: toasterReducer(state.toasterState, action),
  };
};

export { reducer, initialState };