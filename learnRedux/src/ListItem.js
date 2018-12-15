import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from './actions'; // import all actions

class ListItem extends Component {

    renderDesc() {
        const { id, description } = this.props.library.item;
        if (id === this.props.selectedLibraryId) {
            return (
                <Text style={styles.expandedItem}>{description}</Text>
            );
        }
    }

    render() {
        const { title, id } = this.props.library.item;
        const { listItemStyle } = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={listItemStyle} > {title}</Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    listItemStyle: {
        flex: 1,
        padding: 10,
        fontSize: 20,
    },
    expandedItem: {
        padding: 20,
        fontSize: 15,
        lineHeight: 25
    }
};

const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    };
};

// passing all actionCreator functions which makes all the actions returned
// by it available to reducers in store.
// Also the actionCreators also become availabe to ListItem component above as props
// mapStateToProps makes redux state available to ListItem component as  props
export default connect(mapStateToProps, actions)(ListItem);

