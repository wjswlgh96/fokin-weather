import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "",
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Thunderstorm",
        subtitle: "",
    },
    Drizzle: {
        iconName: "cloud-drizzle",
        gradient: ["#89f7fe", "#66a6ff"],
        title: "Drizzle",
        subtitle: "",
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#3C3B3F", "#605C3C"],
        title: "Rain",
        subtitle: "",
    },
    Snow: {
        iconName: "weather-snow",
        gradient: ["#E2E2E2", "#C9D6FF"],
        title: "Snow",
        subtitle: "",
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#66a6ff", "#89f7fe"],
        title: "Atmosphere",
        subtitle: "",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA", "#ffffff"],
        title: "Clear",
        subtitle: "",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#304352", "#d7d2cc"],
        title: "Clouds",
        subtitle: "하앙 살려줘",
    },
    Mist: {
        iconName: "weather-hazy",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Mist",
        subtitle: "",
    },
    Dust: {
        iconName: "weather-hazy",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Dust",
        subtitle: "",
    },
};

export default function Weather({ temp, condition }) {

    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
    }
});