import React, { useEffect, useReducer } from 'react';
import CustomTable from '../CustomTable/CustomTable';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';
import { columnConfig } from '../../config/columnConfig';
import {
  LOAD_CANDIDATES,
  SET_CANDIDATES,
  SET_ERROR_STATE,
} from '../../reducers/actions';
import {
  candidateReducer,
  initialState,
} from '../../reducers/candidateReducer';
import { fetchCandidates } from '../../services/candidateService';
import classes from './App.less';

export default function App() {
  const [state, dispatch] = useReducer(candidateReducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: LOAD_CANDIDATES });
      const response = await fetchCandidates();
      if (response.error) {
        dispatch({
          type: SET_ERROR_STATE,
          payload: response,
        });
      } else {
        dispatch({
          type: SET_CANDIDATES,
          payload: response.data || [],
        });
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      {' '}
      <Header></Header>
      <div className={classes.container}>
        {state.loading ? (
          <Spinner></Spinner>
        ) : (
          <CustomTable
            data={state.candidates}
            columns={columnConfig}
            emptyMessage={
              state.error
                ? 'Error Occurred - Unable to Retrieve Data'
                : 'No Records Available'
            }></CustomTable>
        )}
      </div>
    </React.Fragment>
  );
}
