import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tab}
        onPress={() => router.push('/(tabs)/search')}
        activeOpacity={0.7}
      >
        <Ionicons 
          name="search" 
          size={32} 
          color={pathname === '/(tabs)/search' ? '#007AFF' : '#8E8E93'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab}
        onPress={() => router.push('/(tabs)')}
        activeOpacity={0.7}
      >
        <Ionicons 
          name="home" 
          size={32} 
          color={pathname === '/(tabs)' ? '#007AFF' : '#8E8E93'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab}
        onPress={() => router.push('/(tabs)/options')}
        activeOpacity={0.7}
      >
        <Ionicons 
          name="information-circle-outline" 
          size={32} 
          color={pathname === '/(tabs)/options' ? '#007AFF' : '#8E8E93'} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#DEDEDE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
}); 