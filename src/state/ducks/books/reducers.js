import * as Actions from "./types"

const initialState = {
    data: [],
    loading: false,
    filter: "",
    searchTerm: "",
    sortTerm: "",
};

const booksReducer = (state=initialState, action) => {
  switch (action.type) {
      case Actions.ADD_BOOK:
          return {
              ...state,
              data: [...state.data, action.payload]
          };
        case Actions.EDİT_BOOK:
            return{
                ...state,
                //data: [...state.data, action.payload]
                data : state.data.map((book) => {
                    if(book.id === action.payload.id){
                        console.log("action.payload", action.payload)
                        return action.payload;
                    }else{
                        console.log(book)
                        return book;
                    }
                })
            };
      case Actions.SET_BOOKS:
          return {
              ...state,
              data: action.payload,
              loading: false
          }
      case Actions.LOAD_BOOKS:
          return {
              ...state,
              loading: true
          };
      case Actions.SET_FILTER:
          return {
              ...state,
              filter: action.payload
          };
      case Actions.SEARCH_BOOKS:
          return {
              ...state,
              searchTerm: action.payload
          };
      case Actions.SORT_BOOKS:
          return {
              ...state,
              sortTerm: action.payload
          };
      default:
          return state;
  }
};

export default booksReducer;