import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";


const db=getDatabase(app);

function App(){

  

  const putData = () => {
    set (ref(db, "users/Ankit"), {
      id:2,
      name: "Ankit Sharma",
      age:22,
    });
  };

  const signUpUser = () =>{
    createUserWithEmailAndPassword(
      auth,
      "harsh@gmail.com",
      "123456789"
    ).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential)
       // ...
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
  }

  

  return(
    <div className="App">
      <h1>Registration form</h1>
      <button onClick={putData}>Put Data</button>
      <button onClick={signUpUser}>Create User</button>
    </div>
  );
}

export default App;