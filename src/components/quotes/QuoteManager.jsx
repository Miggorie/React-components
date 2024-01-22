import React from 'react'
import { useState } from 'react';
import { useAjaxCall } from '../../hooks/useAjaxCall';

const QuoteManager = () => {
    const url = `https://api.api-ninjas.com/v1/quotes?categry=movies`;
    const options = {
        method: 'GET',
        headers: { 'X-Api-Key': '4bEmbntI1QtZsM/zx2'}
    };

    const { data, isLoading, error } = useAjaxCall(url, options);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div>
            <h1>Movie Quotes</h1>
            <ul>
                {data.map(quote => (
                    <li key={quote.id}>{quote.quote}</li>
                ))}
            </ul>
        </div>
    );
};
export default QuoteManager