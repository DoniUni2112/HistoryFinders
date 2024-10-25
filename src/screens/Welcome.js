import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const Welcome = () => {
  return (
    <Layout style={styles.container} level="1">
      <Text style={styles.title}>Chào mừng</Text>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>BUTTON</Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 50, // Adjust the size of the text
    marginBottom: 24,
    fontFamily: 'CustomFont', // Add this line to use the custom font
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    width: "100%",
    alignItems: "center",
    color: "#B17457",
  },
  button: {
    width: "80%",
    backgroundColor: "#B17457", // Add this line to change the button color
    borderColor: "#B17457", // Add this line to change the button border color
    borderRadius: 20, // Add this line to change the button border radius
  },
});

export default Welcome;
