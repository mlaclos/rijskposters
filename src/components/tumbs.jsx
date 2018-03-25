import React from 'react';
import ReactDOM from 'react-dom';

export class Thumbs extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         thumbs: this.props.thumbs
      }
   }

   componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      this.setState({thumbs: nextProps.thumbs});
   }

   handleChoosePic = (e) => {
      console.log(e.currentTarget.getAttribute('src'));

      if (typeof this.props.choosen == 'function') {
         this.props.choosen(e.currentTarget.getAttribute('src'))
      }

   }

   render() {

      let images = this.state.thumbs.map((e, i) => {

         return (<div className="gallery">

            <img key={i} src={e.webImage.url} onClick={this.handleChoosePic}/>

            <div className="picTitle">{e.title}</div>
         </div>)
      })

      return (<div className='resultOfSearch'>
         {images}

      </div>)
   }

}
