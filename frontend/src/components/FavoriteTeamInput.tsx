// src/components/FavoriteTeamInput.tsx

import React, { useState } from 'react';

const FavoriteTeamInput: React.FC = () => {
    const [team, setTeam] = useState('');
    const [submittedTeam, setSubmittedTeam] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeam(e.target.value);
    };

    const handleSubmit = () => {
        setSubmittedTeam(team);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ position: 'absolute', top: 0, left: 20 }}>
                <label htmlFor="team-input">Enter your favorite team:</label>
                <input
                    id="team-input"
                    type="text"
                    value={team}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div style={{ marginTop: '100px', fontSize: '24px' }}>
                {submittedTeam && <p>{submittedTeam}</p>}
            </div>
        </div>
    );
};

export default FavoriteTeamInput;
