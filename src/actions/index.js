import { createAction } from "@reduxjs/toolkit"; 
import {heroesFetching, heroesFetched, heroesFetchingError} from '../components/heroesList/heroesSlice'

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const filterHeroes = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}

export const activeFilterChanged = (filter) => (dispatch) => {
    setTimeout(() => {
       dispatch({
       type: 'ACTIVE_FILTER_CHANGED',
       payload: filter
   })
    }, 1000)
}

export const filtersFetching = createAction('FILTERS_FETCHING')
export const filtersFetched = createAction('FILTERS_FETCHED')
export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR')