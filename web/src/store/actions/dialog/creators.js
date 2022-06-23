// Types
import * as types from './types';

// Show
export const showPromptDialog = () => ({
  type: types.SHOW_PROMPT_DIALOG,
});

// Hide
export const hidePromptDialog = () => ({
  type: types.HIDE_PROMPT_DIALOG,
});

// Reset
export const reset = () => ({
  type: types.RESET,
});
