import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Items = ({ item }) => {
    const [user, loading, error] = useAuthState(auth);
    // const { name } = item
    return (
        <div>
            <div>
                <p>Email: {user.displayName}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Items;