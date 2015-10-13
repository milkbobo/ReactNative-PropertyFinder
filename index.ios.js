/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

class HelloWorld  extends React.Component {
  render() {
    return <Text style={styles.text}>Hello World (Again)</Text>;
  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage
        }}/>
    );
  }
}

var styles = React.StyleSheet.create({
  text: {
    color:'black',
    backgroundColor:'white',
    fontSize:30,
    margin:80,
  },
  container: {
    flex:1,
  }
});
//React.AppRegistry.registerComponent('Hello', function() { return PropertyFinderApp });
AppRegistry.registerComponent('Hello', () => PropertyFinderApp);
