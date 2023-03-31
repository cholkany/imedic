import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Home from './screens/HomeScreen/Home'
import DetailedMedication from './screens/DetailedMedication/Index';
import FindHospitals from './screens/FindHospitals/Index';
//Medication Tracking
import AddMedication from './screens/AddMedication/AddMedication'
import MedicationDetails from './screens/MedicationDetails/MedicationDetails'
import EditMedication from './screens/EditMedication/EditMedication'

const Stack = createNativeStackNavigator();

export default function MainRoute() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FindHospitals" component={FindHospitals} />
        <Stack.Screen name='AddMedication' component={AddMedication} />
        <Stack.Screen name='MedicationDetails' component={MedicationDetails}/>
        <Stack.Screen name='EditMedication' component={EditMedication}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
