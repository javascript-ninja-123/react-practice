import React, {Component} from 'react';


//components
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: 'starting Value'};
  }

  render(){
    return (
      <div className='search-bar'>
        <input
        value={this.state.term}
        onChange={e => this.onInputChange(e.target.value)}/>
      </div>
    )
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // onInputChange(e){
  //   this.setState({term: e.target.value})
  // }
}
//export
export default SearchBar;
