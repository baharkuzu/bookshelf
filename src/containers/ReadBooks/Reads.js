import React from "react";
import {getBooks} from "../../state/ducks/books/action";
import { connect } from "react-redux";
import {ReadBooks}  from "../../components";

class Reads extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
      this.props.getBooks();
  }
    render(){ 
        if(this.props.loading){
            return <h1>READ BOOKS ARE LOADING...</h1>
          }

          const allBooks = this.props.books;
          console.log("allBooks:", this.props.books)
          let filteredBooks = [];
          filteredBooks = allBooks.filter((book) => {
            return (book.status === "Read")
          })
        console.log("filteredBooks", filteredBooks)

        return(
            <div>
                {
                    <ReadBooks reads={filteredBooks}/>
                }
            </div>
        )
     }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    loading: state.books.loading,
  }
};

const mapDispatchToProps = {
    getBooks,
}
export default connect(mapStateToProps, mapDispatchToProps)(Reads);