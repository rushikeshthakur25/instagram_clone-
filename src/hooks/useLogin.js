import { signInWithEmailAndPassword } from "firebase/auth";
import useShowToast from "./useShowToast"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

function useLogin() {
 const showToast = useShowToast();
 conat [
    signInWithEmailAndPassword,
    user,
    loading,
    error
 ] = useSignInWithEmailAndPassword(auth);
}

export default useLogin
