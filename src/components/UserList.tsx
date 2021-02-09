import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = (): React.ReactElement => {
    const {users, loading, error} = useTypedSelector(state => state.user)


    return (
        <div>
            UserList
        </div>
    )
}

export default UserList
