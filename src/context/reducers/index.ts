import { initialState } from '../state/initialStates';
import dashboardReducer from './dashboardReducer/dashboardReducer';
import { IDashboardAction } from './dashboardReducer/dashboardReducer.types';

const reducer = (state = initialState, action: IDashboardAction) => {
  return {
  
    dashboardState: dashboardReducer(state.dashboardState, action),
  };
};

export { reducer, initialState };
