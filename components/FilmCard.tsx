import { View, Text, Image, Pressable } from 'react-native';
import { Film } from 'types';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export const FilmCard = ({
  film,
  onFilmLiked,
}: {
  film: Film;
  onFilmLiked: (liked: boolean) => void;
}) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <View className="flex-1 gap-4">
      <Image source={{ uri: film.movie_banner }} className="h-52 rounded-4xl" resizeMode="cover" />

      <View className="flex-row items-center justify-between gap-2">
        <View>
          <Text className="text-md font-sans text-2xl font-semibold">{film.title}</Text>
          <Text className="text-lg">
            {film.original_title} · {film.release_date}
          </Text>
        </View>

        <Pressable
          onPress={() => {
            const newLiked = !liked;
            setLiked(newLiked);
            onFilmLiked(newLiked);
          }}>
          <Ionicons
            name={liked ? 'heart-sharp' : 'heart-outline'}
            size={24}
            color={liked ? 'red' : 'black'}
          />
        </Pressable>
      </View>
    </View>
  );
};
