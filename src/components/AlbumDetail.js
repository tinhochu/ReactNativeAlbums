import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image } = album;
	const {
		headerContentStyle,
		thumbnailStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle
	} = styles;

	return (
		<View>
			<Card>
				<CardSection>

					<View style={thumbnailContainerStyle}>
						<Image
							source={{ uri: thumbnail_image }}
							style={thumbnailStyle}
						/>
					</View>

					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>

				</CardSection>

				<CardSection>
					<Image style={imageStyle} source={{ uri: image }} />
				</CardSection>
			</Card>
		</View>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
