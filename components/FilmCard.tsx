import { View, Text, Image, Pressable } from 'react-native';
import { Film } from 'types';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export const FilmCard = ({film} : {film: Film}) => {
    const [ liked, setLiked ] = React.useState(false);
    const [ saved, setSaved ] = React.useState(false);

    return (
        <View className='flex-1 gap-4'>
            <Image 
                source={{ uri: film.movie_banner}} 
                className='h-52 rounded-4xl'
                resizeMode='cover'
            />
            
            <View className='flex-row items-center gap-2 justify-between'>
                <View>
                    <Text className='text-md font-semibold font-sans text-2xl'>{film.title}</Text>
                    <Text className='text-lg'>{film.original_title} · {film.release_date}</Text>   
                </View>

                <View className='flex-row items-center justify-center'>
                    <Pressable onPress={() => setLiked(!liked)}>
                        <Ionicons name={liked ? 'heart-sharp' : 'heart-outline'} size={24} color={liked ? 'red' : 'black'}/>
                    </Pressable>

                    <Pressable onPress={() => setSaved(!saved)}>
                        <Ionicons name={saved ? 'bookmark-sharp' : 'bookmark-outline'} size={24} color='black' />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}