import React, { useContext } from 'react';
import {View, Text, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import Ionicons from 'react-native-vector-icons/Ionicons'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context); 

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <Ionicons name="add-circle-outline" size={40} />
        </TouchableOpacity>
      ),
    });
  }, [navigation])

  return (
    <View>
      
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()} 
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('PostDetail', {id: item.id})}>
              <View style={styles.postContainer}>
                <Text style={styles.titleText}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Ionicons name="trash" size={30}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
        <Ionicons name="plus" size={30} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  titleText: {
    fontSize: 30,
  }
})

export default IndexScreen;