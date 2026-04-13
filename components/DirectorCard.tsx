import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export function DirectorCard ({ title, icon, name } : {title: string, icon: keyof typeof Ionicons.glyphMap, name: string}) {
    return (
        <View className='flex justify-center items-center w-full px-6 py-4 rounded-xl bg-gray-100'>
        <View className='flex-col gap-1 items-center justify-center'>
          <Ionicons name={icon} size={32}/>
          <Text className='text-lg font-bold text-[#334f2b]'>{title}</Text>
          <Text className='text-md text-center'>{name}</Text>
        </View>
      </View>
    )
}

