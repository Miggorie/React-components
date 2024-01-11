import React from 'react'
import Quote from './Quote';

function QuoteList({ quoteText }) {

  if (!Array.isArray(quoteText)) {
    return <div>Invalid data</div>;
  }

  return (
    <div>
      <ul>
      {quoteText.map((quotes, id) =>(
        <Quote key={id} quote={quotes}/>
      ))}
      </ul>
    </div>
  )
}

export default QuoteList