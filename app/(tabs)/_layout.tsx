import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { globalColors } from '../../src/config/themes/themes';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: globalColors.primary }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='tab2'
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='code' color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name='products'
        options={{
          title: 'Products',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='cog' color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
