import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        backBehavior='initialRoute'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name='(tabs)'
          options={{
            headerShown: false,
            drawerLabel: 'Home',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
