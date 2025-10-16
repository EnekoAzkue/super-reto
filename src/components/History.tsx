import React from 'react'
import HistoryProps from './interfaces/HistoryProps'

const History = ({ data }: HistoryProps) => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 25rem', borderRadius: '8px', alignContent: "center" }}>
      <div style={{ marginBottom: '1rem' }}>
        <p><strong>Founded:</strong></p>
        <p>The city was founded by <strong>{data.founded.by}</strong> in <strong>{data.founded.year}</strong></p>
      </div>
      <div>

        <select name="majorEvents" id="majorEvents">
          <option> -- Select a year --</option>
          {data.majorEvents.map( e => (
            <option value={e.year}>{e.year}</option>
          ))}

        </select>
          {/* <input type="submit" value="Submit">Submit</input> */}

      </div>
    </div>
  )
}

export default History
