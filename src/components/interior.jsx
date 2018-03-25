import React from 'react';
import ReactDOM from 'react-dom';

export class Interior extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         choosen: this.props.choosen,
         borderPara: '0px solid transparent',
         imagePreviewUrl: 'url("../../images/mockup15.jpg")'
      }
      this.handleImageChange = this.handleImageChange.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      this.setState({choosen: nextProps.choosen});
   }

   handleChooseFrame = (e) => {
      console.log(e.currentTarget.id);

      if (e.currentTarget.id == 'wood') {
         this.setState({borderPara: '5px solid #B69B7E'});
      } else if (e.currentTarget.id == 'white') {
         this.setState({borderPara: '5px solid #fff'});
      } else if (e.currentTarget.id == 'black') {
         this.setState({borderPara: '5px solid #000'});
      } else if (e.currentTarget.id == 'none') {
         this.setState({borderPara: '0px solid transparent'});
      }

   }

   handleImageChange(e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
         this.setState({imagePreviewUrl: reader.result});
      }

      reader.readAsDataURL(file)

   }

   render() {
      console.log(this.state.imagePreviewUrl);
      return (<div>
         <div className='interior-bgd' style={{
               backgroundImage: 'url(' + this.state.imagePreviewUrl + ')'
            }}>
            <div className='painting'>
               <img src={this.state.choosen} style={{
                     border: this.state.borderPara
                  }}/></div>
         </div>
         <div>
            <h3>Choose a frame</h3>
            <div className="galleryFrame">
               <div id="wood" className='frameColor' onClick={this.handleChooseFrame}></div>
               <div className="nameFrame">Wood</div>
            </div>
            <div className="galleryFrame">
               <div id="white" className='frameColor' onClick={this.handleChooseFrame}></div>
               <div className="nameFrame">White</div>
            </div>
            <div className="galleryFrame">
               <div id="black" className='frameColor' onClick={this.handleChooseFrame}></div>
               <div className="nameFrame">Black</div>
            </div>
            <div className="galleryFrame">
               <div id="none" className='frameColor' onClick={this.handleChooseFrame}></div>
               <div className="nameFrame">None</div>
            </div>

         </div>
         <div className='upload'>
            <label className="fileContainer">Upload your wall
               <input type="file" value="" onChange={this.handleImageChange}/>
            </label>

         </div>
      </div>)
   }

}
