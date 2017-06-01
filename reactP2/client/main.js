
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const  API_KEY = 'AIzaSyAhwysw0FWnC99c5-bT26VP8TDQ72UyE6w';



class App extends Component {
  constructor(props){
    super(props)

    this.state ={videos: []}

    YTSearch({key:API_KEY, term:'edm'},(data) => {
      this.setState({videos:data});
    })
  }

  render(){
    return(
        <div className='container'>
          <div className="row">
            <SearchBar/>
            <VideoList video = {this.state.videos}/>
          </div>
        </div>
    )
  }
}

Meteor.startup(() => {
	ReactDOM.render(<App/>, document.querySelector('.main'));
})
