import React, {Component} from 'react';
import './AddANote.css'

class AddANote extends Component {
    render() {
        return (
                <div className="AddANote">
                    <p><input type="text" onChange={this.props.onChange}/></p>
                    <button className="add btn-orange" onClick={this.props.onClickAdd}>Add</button>
                </div>
        );
    }
}

export default AddANote;