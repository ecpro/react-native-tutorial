import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    keyExtractor = (library) => library.id.toString();
    renderItem = (library) => (
        <ListItem library={library} />
    );

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);
