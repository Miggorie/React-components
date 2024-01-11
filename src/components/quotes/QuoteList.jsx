import React from 'react'

function QuoteList({ quoteText }) {

  if (!Array.isArray(quoteText)) {
    return <div>Invalid data</div>;
  }

  return (
    <div>
      <ul>
      {quoteText.map((quote, id) =>(
        <li key={id}>{quote}</li>
      ))}
      </ul>
    </div>
  )
}

export default QuoteList