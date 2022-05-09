import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../.firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation()

    // spinner after reload checkout page 
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;



/* 
const navigate = useNavigate();
const location = useLocation()
let from = location.state?.from?.pathname || "/";
useEffect(() => {
    if (user) {
        toast.success("User Successfully Login")
        navigate(from, { replace: true });
    }
}, [user])
*/