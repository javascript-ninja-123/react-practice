import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const  API_KEY = 'AIzaSyAhwysw0FWnC99c5-bT26VP8TDQ72UyE6w';



//create component
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
    };

    this.videoSearch('tvxq')
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term},(data) => {
      this.setState(
        {videos: data,
        selectedVideo:data[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term),500});

    return (
        <div>
            <div className='container'>
              <div className="row">
                <div className='col-md-12 text-center'>
                  <SearchBar onSearchTermChange={videoSearch}/>
                  <VideoDetail detail={this.state.selectedVideo}/>
                  <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos ={this.state.videos} />
                </div>
              </div>
            </div>
        </div>
    )
  }
};

Meteor.startup(() => {
	ReactDOM.render(<App/>, document.querySelector('.main'));
})
