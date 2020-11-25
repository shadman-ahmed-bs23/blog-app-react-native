import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button 
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
}

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

export default BlogPostForm;