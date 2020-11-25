import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditPostScreen = ({ route, navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id)
  
  return (
    <BlogPostForm 
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());  
      }}
    />
  );
  
};

const styles = StyleSheet.create({});

export default EditPostScreen;