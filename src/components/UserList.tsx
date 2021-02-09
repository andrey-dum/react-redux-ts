import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch()
    const {users, loading, error} = useTypedSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    console.log(users);

    if(loading) {
        return <h1>LOADING...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    

    return (
        <div>
            {users.map(u => 
                <div key={u.id}>
                    {u.name}
                </div>)}
        </div>
    )
}

export default UserList
