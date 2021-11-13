import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";
import { trackPromise } from "react-promise-tracker";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [admin, setAdmin] = useState("");
  const auth = getAuth();
  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email, displayName: name };
        saveUser(email, name, password);
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
            console.log(user);
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };
  // Admin
  useEffect(() => {
    trackPromise(
      fetch(`https://calm-crag-56953.herokuapp.com/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        })
    );
  }, [user.email, admin]);
  const signInUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // ...
        if (admin) {
          return history.push("/admin");
        }

        let destination = location?.state?.from || "/dashboard";

        history.push(destination);
        console.log(admin);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setLoading(false));
  };
  //Logout
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };
  //Sending user email & password to the database
  const saveUser = (email, displayName, password) => {
    const user = { email, displayName, password };
    trackPromise(
      fetch("https://calm-crag-56953.herokuapp.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }).then()
    );
  };
  // Get the currently signed-in user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed();
  }, [auth]);

  return {
    registerUser,
    signInUser,
    user,
    admin,
    isLoading,
    logOut,
  };
};

export default useFirebase;
