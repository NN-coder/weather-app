import { setLoadingAndErrorStates, setSearchText, setSearchSuggestions } from './mutations';
import { searchLocation } from './actions';

const initialState = {
  isLoading: false,
  hasError: false,
  searchText: '',
  searchSuggestions: [],
};

export default {
  state: () => initialState,
  mutations: {
    setLoadingAndErrorStates,
    setSearchText,
    setSearchSuggestions,
  },
  actions: {
    searchLocation,
  },
};
