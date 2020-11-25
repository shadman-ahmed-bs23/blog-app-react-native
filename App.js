import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './app/screens/IndexScreen';
import { Provider } from './app/context/BlogContext';
import PostDetailScreen from './app/screens/PostDetailScreen';
import CreatePostScreen from './app/screens/CreatePostScreen';
import EditPostScreen from './app/screens/EditPostScreen';

const Stack = createStackNavigator();

const App = ( ) => {
  return (
    <Provider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Index" 
            component={IndexScreen}
            options={{
              title: 'Blog List ',
            }}
            
          />
          <Stack.Screen 
            name="PostDetail" 
            component={PostDetailScreen}
          />
          <Stack.Screen 
            name="CreatePost" 
            component={CreatePostScreen}
          />
          <Stack.Screen 
            name="EditPost" 
            component={EditPostScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App; 