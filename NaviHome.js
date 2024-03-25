import { NavigationContainer } from "@react-navigation/native"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails";
import { createStackNavigator } from '@react-navigation/stack';
import Search from "./components/Search";
import Favorites from "./components/Favorites";

export default NaviHome = (props) => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={props.type}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ headerShown: false, ...props }} />
            <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

