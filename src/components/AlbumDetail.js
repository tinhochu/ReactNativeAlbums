import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
	const { album } = props;
	const { textStyle, viewStyle } = styles;

	return (
		<View>
			<Card>
				<Text>{album.title}</Text>
			</Card>
		</View>
	);
};

const styles = {
	textStyle: {},
	viewStyle: {}
};

export default AlbumDetail;
