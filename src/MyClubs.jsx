import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyClubs = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/clubs'); // Make a GET request to your Node.js backend
                setClubs(res.data); // Update the state with the fetched clubs
            } catch (err) {
                console.error("Error fetching clubs:", err);
            }
        };

        fetchClubs();
    }, []);

    return (
        <div>
            <h1>My Clubs</h1>
            <ul>
                {clubs.map(club => (
                    <li key={club.id}>{club.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyClubs;
