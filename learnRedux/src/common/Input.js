import React, { Component } from 'react';
import { TextInput } from 'react-native';


class Input extends Component {

    render() {
        return (
             <TextInput {...this.props} />
        );
    }
}


export { Input };
