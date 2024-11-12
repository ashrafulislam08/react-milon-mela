import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export const useAuthContext = useContext(AuthContext);
