import { useState, useEffect } from 'react';
import axios from 'axios';

const Profiles = () => {
    const [userData, setUserData] = useState(null);

    const fetchUserData = () => {
        axios.get('https://api.github.com/users/dindarosalin')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setUserData(null);
            });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <section id='profiles'>
            <div className="user-info">
                {userData ? (
                    <div>
                        <h3>User Information</h3>
                        <p><strong>Username:</strong> {userData.login}</p>
                        <p><strong>Name:</strong> {userData.name}</p>
                        <p><strong>Followers:</strong> {userData.followers}</p>
                        <p><strong>Following:</strong> {userData.following}</p>
                        <p><strong>Repositories:</strong> {userData.public_repos}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
}

export default Profiles;
