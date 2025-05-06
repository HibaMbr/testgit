import React from 'react'

export default function Comments({ feedbacks }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>All Comments</h1>

       {/* No feedback then we show the message No comments yet */}
      {feedbacks.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
         /* shows every feedback with all the details  */
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {feedbacks.map((fb, i) => (
            <li
              key={i}
              style={{
                marginBottom: 20,
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: 4
              }}
            >
              {/* Show name or Anonyme name */}
              <div>
              <strong>Name:</strong> {fb.name || 'Anonymous'}<br/>
              </div>

              <div>
              <strong>Rating:</strong> {fb.rating} / 5<br/>
              </div>

              <div>
              <strong>Comment:</strong> {fb.comment}<br/>
              </div>

              {/* if there is an image we show it  */}
              {fb.image && (
                <div style={{ marginTop: 8 }}>
                <strong>Image:</strong><br/>
                <img
                  src={typeof fb.image === 'string'
                    ? fb.image
                    : URL.createObjectURL(fb.image)
                  }
                  alt=""
                  width={100}
                  style={{ marginTop: 8 }}
                />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
