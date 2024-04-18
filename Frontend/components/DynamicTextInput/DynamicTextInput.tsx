import React from "react";
import { TextInput, StyleSheet } from "react-native";

type PlaceholderProps = {
  placeholder: string;
};


const styles = StyleSheet.create({
    'text-box-container': {
        display: "flex", 
        backgroundColor: "#696087",
        color: "#ffffff",
        width: 250, 
        height: 45, 
        borderRadius: 15, 
        margin: 10, 
        paddingLeft: 10, 
    },
  });

const DynamicTextInput = (props: PlaceholderProps) => { 
  return (
    <TextInput style={styles["text-box-container"]} placeholderTextColor='#ffffff' placeholder={props.placeholder}></TextInput>
  )
};

export default DynamicTextInput;