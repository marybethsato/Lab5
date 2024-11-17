import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Your App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#f8f9fa', 
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef', 
  },
  text: {
    color: '#6c757d',
    fontSize: 12,
  },
});

export default Footer;
