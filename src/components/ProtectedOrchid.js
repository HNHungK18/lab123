
import { useAuth } from '../customhooks/useAuth';
import OrchidContainer from './OrchidContainer';

export default function ProtectedOrchid() {
    const { user } = useAuth();
    if (!user) {
    return (
      <div>
        <h2>Protected Orchid List</h2>
        <p>Please login on Dashboard to view this content.</p>
      </div>
    );
  }
   return <OrchidContainer/>;
}