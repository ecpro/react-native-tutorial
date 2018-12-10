import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, thumbnail_image, artist, image, url } = album;
    const { thumbnail, headingBox, headerText, thumbnailBox, lead, albumArt } = styles;

    return (
        <Card>
            <CardSection style={headingBox}>
                <View style={thumbnailBox}>
                    <Image source={{ uri: thumbnail_image }} style={thumbnail} />
                </View>
                <View style={headerText}>
                    <Text style={lead}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: image }} style={albumArt} />
            </CardSection>
            <CardSection>
                <Button btnText={'Buy Now'} openLink={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};

const styles = {

    headingBox: {
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    thumbnailBox: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItem: 'center'
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    headerText: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 5
    },
    lead: {
        fontSize: 15,
        color: '#aaa'
    },
    albumArt: {
        height: 300,
        width: null,
        flex: 1
    }
};

export default AlbumDetail;
