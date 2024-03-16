import { useNavigate, NavigateFunction } from "react-router-dom";

const RedirectRoute = (to: string) => {
    const navigate: NavigateFunction = useNavigate();
    return navigate(to);
};

export default RedirectRoute;
