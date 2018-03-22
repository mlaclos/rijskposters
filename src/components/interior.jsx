import React from 'react';
import ReactDOM from 'react-dom';


export class Interior extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choosen: this.props.choosen
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({ choosen: nextProps.choosen });
    }



    render() {
        return (
            <div className='interior-bgd'>
                <div className='frame'>
                    <img  src={this.state.choosen} /></div>
            </div>
        )
    }


}
