// Types
import * as types from '../actions/dialog/types';

// Shared
import { updateObject } from '../../utils';

// State
const initialState = {
  prompt: {
    open: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Show
    case types.SHOW_PROMPT_DIALOG: {
      return updateObject(state, {
        prompt: updateObject(state.prompt, {
          open: true,
        }),
      });
    }
    // Hide
    case types.HIDE_PROMPT_DIALOG: {
      return updateObject(state, {
        prompt: updateObject(state.prompt, {
          open: false,
        }),
      });
    }
    // Reset
    case types.RESET: {
      return initialState;
    }
    // Default
    default: {
      return state;
    }
  }
};

export default reducer;
