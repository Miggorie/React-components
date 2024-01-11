import React, { useState } from 'react';

function QuoteAdd({ onTextSubmit }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputValue = e.target.elements.inputQuote.value;

        if(inputValue === ""){
          return;
        }

        onTextSubmit(inputValue);
        e.target.elements.inputQuote.value = "";
    };

    return (
        <div>
            <form className="quote-form" onSubmit={handleSubmit}>
              <div class="quote-container">
                <input 
                    className="quote-input"
                    name="inputQuote"
                    id={1}
                    placeholder="Enter quote from Puh"
                />
                <button className="quote-submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default QuoteAdd;
