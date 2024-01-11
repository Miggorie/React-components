import React from 'react'
import { useState } from 'react';
import QuoteAdd from './QuoteAdd'
import QuoteList from './QuoteList'

function QuoteManager() {
    const [quoteText, setQuoteText] = useState([])

    const handleTextSubmit = (newQuote) =>{
        setQuoteText([...quoteText, newQuote])
    }

  return (
    <div>
        <QuoteAdd onTextSubmit={handleTextSubmit}/>
        <QuoteList quoteText={quoteText}/>
    </div>
  )
}

export default QuoteManager