import React, { Component } from 'react'

class SearchInput extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <input
                type="text"
                placeholder={this.props.text}
                className={this.props.className}
            />
        )
    }
}

export default SearchInput
