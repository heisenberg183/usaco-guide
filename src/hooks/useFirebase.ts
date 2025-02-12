import { FirebaseApp } from 'firebase/app';
import * as React from 'react';
import { FirebaseAppContext } from '../context/FirebaseContext';

function useFirebaseApp(): FirebaseApp;
function useFirebaseApp(
  fn: (firebaseApp: FirebaseApp) => void | (() => void),
  dep?: React.DependencyList
): undefined;

function useFirebaseApp(
  fn?: (firebaseApp: FirebaseApp) => void | (() => void),
  dep: React.DependencyList = []
): FirebaseApp | undefined {
  const firebaseApp = React.useContext(FirebaseAppContext);
  React.useEffect(() => {
    if (!firebaseApp || !fn) {
      return;
    }
    return fn(firebaseApp);
  }, [firebaseApp, ...dep]);
  if (!fn) return firebaseApp;
}

export { useFirebaseApp };
