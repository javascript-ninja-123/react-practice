import React,{Component} from 'react';



class SearchBar extends Component {
  constructor(props){
      super(props)
      this.state = {term:'search anything you want'}
  }

  render(){
    return(
      <div className="search_bar">
        <div className="form-group">
          <input type="text"
          value = {this.state.term}
          className="form-control"
          onChange={e => this.setState({term:e.target.value})} />
        </div>
      </div>
    )
  }
}

export default SearchBar;
