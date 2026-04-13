import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function ScoreCard ({score, title, color, icon} : {score: string, title: string, color: string, icon: keyof typeof Ionicons.glyphMap}) {
    return (
        <View className='flex-row items-center justify-center gap-2 p-2'>
          <Ionicons name={icon} size={32} color={color}/>
          <View className='items-center justify-center gap-1'>
            <Text>{score}</Text>
            <Text className='uppercase text-[#334f2b] font-semibold'>{title}</Text>
          </View>
        </View>
    )
}