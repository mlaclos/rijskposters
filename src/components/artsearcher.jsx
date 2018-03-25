import React from 'react';
import ReactDOM from 'react-dom';
import {Thumbs} from './tumbs.jsx';
import {Interior} from './interior.jsx';

export class ArtSearcher extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         artist: [],
         selectedArtist: '',
         thumbnails: [],
         choosen: ''
      }

   }

   selectOption = (e) => {
      this.setState({selectedArtist: e.currentTarget.value})
   }

   handleSearch = (e) => {
      e.preventDefault()
      // fetch(url + this.state.selectedArtist)
      console.log("submit", this.state.selectedArtist)

      fetch('https://www.rijksmuseum.nl/api/en/collection?key=VwqZ4B9W&format=json&f.principalMakers.name.sort=' + this.state.selectedArtist + '&ps=100').then(res => {
         return res.json()
      }).then((res) => {
         //console.log('response', res.artObjects);

         this.setState({
            thumbnails: res.artObjects.filter((val) => val.hasImage)
         }, () => {
            this.forceUpdate()
         })

      }).catch(err => {
         //console.log("ERROR", err)
      })

   }

   getChoosen = (arg) => {
      console.log(arg);
      this.setState({choosen: arg})
   }

   render() {
      //console.log(this.state.artist.sort());

      let artists = this.state.artist.sort().map((e, i) => {
         //return <option key={i}>{e.key}</option>
         //return <option key={i}>{e.principalOrFirstMaker}</option>
         return e.principalOrFirstMaker;
      });

      artists = [...new Set(artists)];

      let list = artists.sort().map((e, i) => {
         //return <option key={i}>{e.key}</option>
         return <option key={i}>{e}</option>

      });

      return (<div className='main-container'>
         <h1>Try
            <span> art </span>
            on your wall</h1>

         <div className='left'>
            <h2>It’s a fun way to see how these Dutch painting would look on your wall</h2>

            <form onSubmit={this.handleSearch}>
               <select value={this.state.selectedArtist} onChange={this.selectOption}>
                  <option value="">Choose an artist from the Rijksmuseum</option>

                  {
                     this.state.artist
                        ? list
                        : null
                  }

               </select>
               <button type="submit">Search</button>
            </form>
            <h3>Results for {this.state.selectedArtist}</h3>
            {
               this.state.thumbnails.length
                  ? <Thumbs choosen={this.getChoosen} thumbs={this.state.thumbnails}/>
                  : null
            }
         </div>
         <div className={'right'}>
            <Interior choosen={this.state.choosen}/>
         </div>
      </div>)
   }

   componentDidMount() {

      fetch('https://www.rijksmuseum.nl/api/en/collection?key=VwqZ4B9W&format=json&ps=100&type=painting').then(res => {
         return res.json()
      }).then((res) => {
         //console.log(res);

         this.setState({
            artist: res.artObjects
            //artist: res.facets[0].facets
         })
      })

   }

}
