import React, {Component} from 'react';
import './Note.css'

class Note extends Component {

    shouldComponentUpdate(nextProps) {
        return (nextProps.text !== this.props.text)
    }

    render() {
        return (
            <>
                <div className='Note'>
                    <p><input type="text" onChange={this.props.onChangeList} value={this.props.text}/></p>
                    <button className="btn-orange btn-x" onClick={this.props.onClickDelete}>X</button>
                </div>
            </>
        );
    }
}

export default Note;