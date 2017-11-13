import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
	const { album } = props;
	const { textStyle, viewStyle } = styles;

	return (
		<View>
			<Card>
				<CardSection>
					<Text>{album.title}</Text>
				</CardSection>
			</Card>
		</View>
	);
};

const styles = {
	textStyle: {},
	viewStyle: {}
};

export default AlbumDetail;
