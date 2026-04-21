import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { ScoreCard } from '../components/ScoreCard';
import { DirectorCard } from '../components/DirectorCard';
import { Film } from 'types';

type RootStackParamList = {
  Home: undefined;
  Films: { film: Film };
};

export function FilmScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Films'>>();
  const film = route.params.film;

  return (
    <ScrollView>
      <View className="relative">
        <Image source={{ uri: film.image }} className="h-164 w-full" resizeMode="cover" />

        <View className="absolute bottom-0 h-44 w-full bg-linear-to-t from-white to-transparent" />
      </View>

      <View className="items-center justify-center gap-6 bg-white px-6 py-8">
        <Text className="text-xl font-bold">{film.release_date}</Text>

        <Text className="text-3xl font-semibold text-[#334f2b]">{film.title}</Text>

        <Text className="text-xl">{film.original_title}</Text>

        <View className="w-full flex-row items-center justify-center gap-10">
          <ScoreCard score={film.rt_score} title="RT SCORE" color="#fdc003" icon="star-sharp" />

          <ScoreCard score={film.running_time} title="MINUTES" color="#ff6b6b" icon="timer-sharp" />
        </View>

        <View>
          <Text className="text-2xl font-bold text-[#334f2b]">Sipnosis</Text>
          <Text className="text-justify text-lg">{film.description}</Text>
        </View>

        <View className="mt-6 w-full items-center justify-center gap-4">
          <DirectorCard title="Producer" name={film.producer} icon="film-outline" />

          <DirectorCard title="Director" name={film.director} icon="person-outline" />
        </View>
      </View>
    </ScrollView>
  );
}
