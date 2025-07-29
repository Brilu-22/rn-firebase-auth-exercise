// 1. Import the signOut function and your auth service
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

// ...

const handleSignOut = () => {
  // 2. THIS IS THE FIREBASE SIGN OUT FUNCTION
  // It clears the user's session from the device.
  signOut(auth).catch((error: any) => Alert.alert("Sign Out Error", error.message));
};

// ...
<TouchableOpacity onPress={handleSignOut} style={styles.button}>
    <Text style={styles.buttonText}>Sign Out</Text>
</TouchableOpacity>