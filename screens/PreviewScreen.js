import { StyleSheet, Text, View}  from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';
import { render } from "react-dom";

const PreviewScreen = ( {navigation, route} ) => {
    const { previewurl } = route.params;
    return (
        <WebView source={{uri: previewurl}} />
           );
    };

export default PreviewScreen;
const styles = StyleSheet.create({});