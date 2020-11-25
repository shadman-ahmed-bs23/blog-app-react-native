import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const PostDetailScreen = ({ route, navigation }) => {
  
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm 
      initialValues={{ title: '', content: '' }}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));  
      }} 
    />
  );

};

const styles = StyleSheet.create({
  label: {
    marginLeft: 10,
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: '#aaa',
    fontSize: 20,
    padding: 10,
    marginHorizontal: 10,
  }
}); 

export default PostDetailScreen;