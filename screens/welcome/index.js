import { googlesheets_get_spreadsheetId_read } from "../../store/googleSheets/googlesheets_response_get_getSheetData.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const { entities } = useSelector(state => state.Googlesheets_response_get_getSheetData)

  console.log("entities", entities[0]?.sheets[0]?.data)
  useEffect(() => {
    dispatch(googlesheets_get_spreadsheetId_read({
      spreadsheetId: "1qCc9gWdw0TZ0Tn7B1z21R49ns5f6LuuV0DxF9IIIH58",
      includeGridData: true,
      ranges: "A1:A2"
    }));
  }, []);
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  }
});
export default WelcomeScreen;