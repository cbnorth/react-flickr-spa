import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './styles/Styles.css';

//Note about Axios and react-slick: I've used both of these in the past. I find Axios to have a really clean syntax with easy to use promise library, it's fast and well documented. Slick is exactly what it's tag line says - it's the last course you'll ever need. I've used it on several production sites in the past, including www.intentionalfutures.com. This is the first time I've used the react version of the slide show and besides some initial frustration trying to get it to load dynamic images it continues to not disappoint. I had considered writing my own slideshow but the reality is that I would never do that unless there were very specific requirements that made using an out of the box solution like slick not feasible.

let App = React.createClass ({

  getInitialState() {
    return {
      data: [],
      photos: ["loading"]
    }
  },

  getPhotos() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=866983a71b23a727937534fa25c5327a&tags=iceland&accuracy=62.00%2C+64.00%2C+18.00%2C+21.00&per_page=50&format=json&nojsoncallback=1')
      .then((response) =>{
        this.setState({
          data: response.data.photos.photo,
          photos: []
        })
      })
      .catch(function (error) {
        console.log('there was an error');
      });
  },

  componentDidMount() {
    this.getPhotos();
  },

  render() {

    for (let key in this.state.data) {
      if(this.state.data.hasOwnProperty(key)) {
        let farm = this.state.data[key].farm;
        let serverID = this.state.data[key].server;
        let photoID = this.state.data[key].id;
        let secret = this.state.data[key].secret;
        let title = this.state.data[key].title;
        let url = `https://farm${farm}.staticflickr.com/${serverID}/${photoID}_${secret}_b.jpg`;
        let backgroundStyle = {
            backgroundImage: `url(${url})`
        }
        this.state.photos.push(<div><div className="slide-slide__backgroundImage" style={backgroundStyle}></div><img src={`${url}`} key={key} data-title={`${title}`} alt={`${title}`}/></div>);
      }
    };


    let items = this.state.photos.map(function (photo, index) {
        return (<div key={index}>{photo}</div>);
    });

    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className='container'>
        <h1>React Flickr Slideshow</h1>
        <Slider {...settings}>{items}</Slider>
        <a href="https://github.com/chrisburkedev/react-flickr-spa" target="_blank" className="sourceLink">Github Source</a>
      </div>
    );
  }
});

module.exports = App;
