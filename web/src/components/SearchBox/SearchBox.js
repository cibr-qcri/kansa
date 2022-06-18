/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { IconButton, InputBase, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import useStyles from './SearchBox-styles';

const SearchBox = (props) => {
  const styles = useStyles();

  const { containerStyle = styles.root } = props;

  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const isAuth = useSelector((state) => state.auth.token !== null);

  const handleQueryChange = (event) => {
    const query = event.target.value;
    setQuery(query);
  };

  const handleQuerySubmission = (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery !== '') {
      if (isAuth) {
        navigate('/search');
      } else {
        navigate('/signin');
      }
      setQuery(trimmedQuery);
    }
  };

  const view = (
    <div css={containerStyle}>
      <Paper
        component="form"
        css={styles.paper}
        variant="outlined"
        onSubmit={handleQuerySubmission}>
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          css={styles.inputBase}
          type="text"
          value={query ?? ''}
          placeholder={'Enter smart contract address'}
          onChange={handleQueryChange}
          inputProps={{
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: 'false',
          }}
        />
      </Paper>
    </div>
  );

  return view;
};

export default SearchBox;
