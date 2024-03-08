
import Dashboard from './Dashboard';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
      <Dashboard/>
      </PaperProvider>
        
    </SafeAreaProvider>
    
  );
}


