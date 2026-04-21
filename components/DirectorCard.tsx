import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export function DirectorCard({
  title,
  icon,
  name,
}: {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
}) {
  return (
    <View className="flex w-full items-center justify-center rounded-xl bg-gray-100 px-6 py-4">
      <View className="flex-col items-center justify-center gap-1">
        <Ionicons name={icon} size={32} />
        <Text className="text-lg font-bold text-[#334f2b]">{title}</Text>
        <Text className="text-md text-center">{name}</Text>
      </View>
    </View>
  );
}
