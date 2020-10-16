import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import PlayerWidgets from './components/PlayerWidget';
import {AppContext} from './AppContext'
Amplify.configure(config)


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [songId, setSongId] = useState<string| null>(null)
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          songId,
          setSongId: (id: string) => setSongId(id),
        }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidgets />
        </AppContext.Provider>
          
            
      </SafeAreaProvider>
    );
  }
}
