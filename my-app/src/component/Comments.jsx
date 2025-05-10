import React from 'react'
import styles from './Comments.module.css'; // Import CSS Module

export default function Comments({ feedbacks }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Comments</h1>

       {/* No feedback then we show the message No comments yet */}
      {feedbacks.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
         /* shows every feedback with all the details  */
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {feedbacks.map((fb, i) => (
            <li
              key={i}
              className={styles['feedback-item']}>
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
                  alt="User upload"
                  width={100}
                  className={styles['feedback-image']}
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
