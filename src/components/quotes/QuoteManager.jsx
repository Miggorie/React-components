import React from 'react'
import { useState } from 'react';
import QuoteAdd from './QuoteAdd'
import QuoteList from './QuoteList'

function QuoteManager() {
    const [quoteText, setQuoteText] = useState("");

  return (
    <div>
        <QuoteAdd onTextSubmit={setQuoteText}/>
        <QuoteList quoteText={quoteText}/>
    </div>
  )
}

export default QuoteManager