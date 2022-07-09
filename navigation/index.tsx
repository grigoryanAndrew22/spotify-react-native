import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { ModalScreen } from '../screens/ModalScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LibraryScreen } from '../screens/LibraryScreen';
import { SearchScreen } from '../screens/SearchScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { PremiumScreen } from '../screens/PremiumScreen';

export const Navigation = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { height: 97 },
      }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerTitle: '',
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name='info-circle'
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={SearchScreen}
        options={{
          headerTitle: '',
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='TabThree'
        component={LibraryScreen}
        options={{
          headerTitle: '',
          title: 'Your Library',
          tabBarIcon: ({ color }) => <TabBarIcon name='book' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='TabFour'
        component={PremiumScreen}
        options={{
          headerStyle: {
            height: 45,
            shadowOpacity: 0,
          },
          headerTitle: '',
          title: 'Premium',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='spotify' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
