import React from 'react'
import { useState } from 'react';
import QuoteAdd from './QuoteAdd'
import QuoteList from './QuoteList'
import { useAjaxCall } from '../../hooks/useAjaxCall';

const QuoteManager = () => {
  const [quoteText, setQuoteText] = useState([])

  const handleTextSubmit = (newQuote) =>{
    setQuoteText([...quoteText, newQuote])
}
    const url = 'https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino';
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com'
        }
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
            <QuoteAdd onTextSubmit={handleTextSubmit}/>
        <QuoteList quoteText={quoteText}/>
        </div>
    );
};
export default QuoteManager