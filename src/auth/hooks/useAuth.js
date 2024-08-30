import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
