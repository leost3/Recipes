import React from 'react';

class Search extends React.Component {

    onInputChange = (e) => {
        this.props.setTermState(e.target.value);
    }

    render() {
        console.log(this.props.setValue)
        return (
            <div>
                <input
                //  value={this.props.setValue}
                 onChange={this.onInputChange} 
                 type="text" />
            </div>
        )
    }
}

export default Search;