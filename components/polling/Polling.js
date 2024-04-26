import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SelectScreen from "./SelectScreen";
import Pname from "./Pname";
import Jname from "./Jname";
import MovieChoice from "./MovieChoice";
import { PollDetails } from "./PollDetails";
import Poll from "./Poll";
import { Pconfirm } from "./Pconfirm";

export default Polling = (props) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={props.type}>
        <Stack.Screen
          name="Corj"
          component={SelectScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pname"
          component={Pname}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Jname"
          component={Jname}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieChoice"
          component={MovieChoice}
          options={{ headerShown: false, ...props }}
        />
        <Stack.Screen
          name="PollDetails"
          component={PollDetails}
          options={{ headerShown: false, ...props }}
        />
        <Stack.Screen
          name="Poll"
          component={Poll}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pconfirm"
          component={Pconfirm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
