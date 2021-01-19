import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MainContext = React.createContext({});

const MainProvider = (props) => {
  const [state, setState] = useState({
    isLoggedIn: false,
  });

  return (
    <MainContext.Provider value={[state, setState]}>
      {props.children}
    </MainContext.Provider>
  );
};

MainContext.propTypes = {
  children: PropTypes.node,
};

export {MainContext, MainProvider};
