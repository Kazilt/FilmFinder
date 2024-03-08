import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails";
import { createStackNavigator } from '@react-navigation/stack';

export default NaviHome = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

