import './global.css';
import { View, Text, Pressable, Image, ScrollView} from 'react-native';
import { FilmCard } from 'components/FilmCard';
import React, { useEffect, useState } from "react";
import { createStaticNavigation, useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Film } from 'types';
import { ScoreCard } from 'components/ScoreCard';
import { DirectorCard } from 'components/DirectorCard';

type RootStackParamList = {
  Home: undefined;
  Films: { film: Film };
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Studio Ghibli Films',
        headerBackButtonDisplayMode: "minimal",
      },
    },
    Films: {
      screen: Films,
      options: {
        title: 'Film Details',
        headerBackButtonDisplayMode: "minimal",
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

function Home () {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [ data, setData ] = useState<Film[]>();

  async function getFilms () {
    const response =  await fetch("https://ghibliapi.vercel.app/films");
    const json = await response.json() as Film[];
    setData(json);
  }

  useEffect(() => {
    getFilms();
  }, [])

  return (
    <ScrollView>
      {data?.map((film) => (
        <View key={film.id} className='py-4 px-6'>
          <Pressable onPress={() => navigation.navigate('Films', { film : film })}>
            <FilmCard film={film}/>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  )
}

function Films () {
  const route = useRoute<RouteProp<RootStackParamList, 'Films'>>();
  const film = route.params.film;

  return (
  <ScrollView>
    <View className='relative'>
      <Image
        source={{ uri: film.image }}
        className="w-full h-164"
        resizeMode="cover"
      />

      <View className='w-full h-44 bg-linear-to-t from-white to-transparent absolute bottom-0'/>
    </View>

    <View className='items-center justify-center px-6 py-8 bg-white gap-6'>

      <Text className='text-xl font-bold'>{film.release_date}</Text>

      <Text className="text-3xl font-semibold text-[#334f2b]">
        {film.title}
      </Text>

      <Text className='text-xl'>{film.original_title}</Text>

      <View className='flex-row justify-center items-center gap-10 w-full'>
        <ScoreCard score={film.rt_score} title="RT SCORE" color="#fdc003" icon="star-sharp"/>

        <ScoreCard score={film.running_time} title="MINUTES" color="#ff6b6b" icon="timer-sharp"/>
      </View>

      <View>
        <Text className='text-2xl font-bold text-[#334f2b]'>Sipnosis</Text>
        <Text className='text-lg text-justify'>{film.description}</Text>
      </View>

      <View className='mt-6 items-center justify-center w-full gap-4'>
        <DirectorCard title='Producer' name={film.producer} icon='film-outline'/>

        <DirectorCard title='Director' name={film.director} icon='person-outline'/>
      </View>
    </View>
  </ScrollView>
  )
}

export default function App () {
  return (
    <Navigation/>
  )
}