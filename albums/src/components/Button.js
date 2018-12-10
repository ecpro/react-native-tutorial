import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ btnText, openLink }) => {
    const { btn, text } = styles;
    return (
        <TouchableOpacity style={btn} onPress={openLink} >
            <Text style={text}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    btn: {
        flex: 1,
        alignSelf: 'center',
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#007DFA',
        padding: 5
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        color: '#007DFA',
        fontWeight: '600',
        fontSize: 20
    }
};

export default Button;
