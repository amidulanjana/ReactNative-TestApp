import React, { Component } from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./card";
import CardSection from "./card-section";
import Button from "./button";

class AlbumDetail extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              source={{ uri: this.props.album.thumbnail_image }}
              style={styles.thumbnailStyle}
            />
          </View>
          <View>
            <Text style={styles.headerTextStyle}>
              {this.props.album.title}
            </Text>
            <Text>
              {this.props.album.artist}
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: this.props.album.image }}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={() => {
              Linking.openURL(this.props.album.url);
            }}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default AlbumDetail;
