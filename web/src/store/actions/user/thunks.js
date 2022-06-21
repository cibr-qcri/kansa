// Axios
import axios from 'axios';

// Lodash
import _ from 'lodash';

// Redux
import { batch } from 'react-redux';

// Creators
import * as creators from './creators';
import {
  createTokenFailure,
  createTokenSuccess,
  deleteToken,
  getTokenFailure,
  getTokenSuccess,
  resetAuth,
  showAlert,
} from '../';

// Create
export const createAccount = (data) => {
  return (dispatch) => {
    dispatch(creators.createAccountStart());
    axios
      .post('/auth/signup', data)
      .then(() => {
        batch(() => {
          dispatch(creators.createAccountSuccess());
          dispatch(showAlert('Activation email sent', 'success'));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(creators.createAccountFailure(error));
          dispatch(showAlert(_.get(error, 'response.data.error')));
        });
      });
  };
};

// Get
export const getAccount = () => {
  return (dispatch) => {
    dispatch(creators.getAccountStart());
    axios
      .get('/me')
      .then((response) => {
        dispatch(creators.getAccountSuccess(response.data.data));
      })
      .catch((error) => {
        batch(() => {
          dispatch(creators.getAccountFailure(error));
          dispatch(showAlert());
        });
      });
  };
};

export const getAccountOnAuth = (authToken, storedToken = true) => {
  return (dispatch) => {
    dispatch(creators.getAccountStart());
    axios
      .get('/me')
      .then((response) => {
        batch(() => {
          dispatch(creators.getAccountSuccess(response.data.data));
          if (storedToken) {
            dispatch(getTokenSuccess(authToken));
          } else {
            dispatch(createTokenSuccess(authToken));
          }
        });
      })
      .catch((error) => {
        batch(() => {
          if (storedToken) {
            dispatch(getTokenFailure(error));
          } else {
            dispatch(createTokenFailure(error));
          }
          dispatch(creators.getAccountFailure(error));
          dispatch(showAlert());
        });
      });
  };
};

// Update
export const updateAccount = (data) => {
  return (dispatch) => {
    dispatch(creators.updateAccountStart());
    axios
      .put('/me', data)
      .then((response) => {
        batch(() => {
          dispatch(creators.updateAccountSuccess(response.data.data));
          dispatch(showAlert('Account updated. Thank you!', 'success'));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(creators.updateAccountFailure(error));
          dispatch(showAlert());
        });
      });
  };
};

// Activate
export const activateAccount = (token) => {
  return (dispatch) => {
    dispatch(creators.activateAccountStart());
    axios
      .get(`/auth/activate/${token}`)
      .then(() => {
        batch(() => {
          dispatch(creators.activateAccountSuccess());
          dispatch(showAlert('Account activated. Thank you!', 'success'));
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(creators.activateAccountFailure(error));
          dispatch(showAlert(_.get(error, 'response.data.error')));
        });
      });
  };
};

// Delete
export const deleteAccount = () => {
  return (dispatch) => {
    dispatch(creators.deleteAccountStart());
    axios
      .delete('/me')
      .then(() => {
        batch(() => {
          dispatch(creators.deleteAccountSuccess());
          dispatch(showAlert('Account deleted. Come again!', 'success'));
          dispatch(deleteToken());
          dispatch(resetAuth());
        });
      })
      .catch((error) => {
        batch(() => {
          dispatch(creators.deleteAccountFailure(error));
          dispatch(showAlert());
        });
      });
  };
};
