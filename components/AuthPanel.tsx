import { auth, googleProvider } from "../src/firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";

export default function AuthPanel() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div>
          <span>Prihlásený: {user.displayName || user.email}</span>
          <button onClick={handleLogout}>Odhlásiť</button>
        </div>
      ) : (
        <button onClick={handleGoogleLogin}>Prihlásiť cez Google</button>
      )}
    </div>
  );
}
