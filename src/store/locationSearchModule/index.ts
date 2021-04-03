import { Module } from 'vuex';
import { setLoadingAndErrorStates, setSearchText, setSearchSuggestions } from './mutations';
import { searchLocation } from './actions';
import { IState } from './types';
import { IRootState } from '../types';

const initialState: IState = {
  isLoading: false,
  hasError: false,
  searchText: '',
  searchSuggestions: [],
};

export default {
  namespaced: true,
  state: () => initialState,
  mutations: {
    setLoadingAndErrorStates,
    setSearchText,
    setSearchSuggestions,
  },
  actions: {
    searchLocation,
  },
} as Module<IState, IRootState>;
