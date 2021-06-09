import React from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import axios from 'axios';

const API_KEY = "de4ff1447a23f9b2638e922fd7b122a4";

export default class App extends React.Component {

  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("현재 위치를 찾을 수 없습니다.", "잠시 후 다시 시도하시거나 데이터를 확인해주세요.");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {

    const { isLoading, temp, condition } = this.state;

    console.log(this.state);

    return (isLoading ?
      <Loading /> :
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}