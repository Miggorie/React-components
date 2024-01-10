import React, { useState } from 'react';

function QuoteAdd({ onTextSubmit }) {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onTextSubmit(userInput);
        setUserInput(""); 
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter quote from Puh"
                />
                <button disabled={userInput.length === 0}>Submit</button>
            </form>
        </div>
    );
}

export default QuoteAdd;
