import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import {getDocs, collection} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js"
import { auth, db } from './firebase.js'
import {loginCheck} from  './loginCheck.js'
import {setupPosts} from  './postList.js'

import './Registrarse.js'
import './inicio_sesion.js'
import './logout.js'
import './postList.js'



onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
        try{
        const querySnapshot = await getDocs(collection(db, "posts" ));
        setupPosts(querySnapshot.docs);
        }catch(error){
                console.log(error)
        }
      } else {
        setupPosts([]);
        loginCheck(user);
      }
    });