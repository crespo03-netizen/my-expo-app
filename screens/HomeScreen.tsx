import React, { useEffect, useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Film } from '../types'; // Ajusta la ruta
import { FilmCard } from '../components/FilmCard';

type RootStackParamList = {
  Home: undefined;
  Films: { film: Film };
};

export function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [data, setData] = useState<Film[]>();

  async function getFilms() {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    const json = (await response.json()) as Film[];
    setData(json);
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ScrollView>
      {data?.map((film) => (
        <View key={film.id} className="px-6 py-4">
          <Pressable onPress={() => navigation.navigate('Films', { film })}>
            <FilmCard film={film} onFilmLiked={() => {}} />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}
