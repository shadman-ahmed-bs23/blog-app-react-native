import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/BlogContext';

const PostDetailScreen = ({ route, navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate("EditPost", {id: id})}>
          <Ionicons name="pencil" size={35} />
        </TouchableOpacity>
      ),
    });
  }, [navigation])
  const { state } = useContext(Context);
  const { id } = route.params; 

  const blogPost = state.find((blogPost) => blogPost.id === id)
  return (
    <View style={styles.postContainer}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  editIcon: {
    marginRight: 5,
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  content: {
    fontSize: 20,
    margin: 10,
  }
}); 

export default PostDetailScreen;