import { useAuth } from "../customhooks/useAuth";
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    const { user, login, logout } = useAuth();

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <>
                    <p>Welcome, {user.username}!</p>
                    <Button variant="outline-danger" size="lg" onClick={logout}>Logout</Button>
                </>
            ) : (
                <><p>Log in as Hoang Nam Hung</p>
                <Button variant="outline-success" size="lg" onClick={login}>Login</Button>
                </>
            )}
        </div>
    );
}