import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import styles from './Home.module.css'; // Import CSS Module

export default function Home({ feedbacks, onsubmit }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Visual Feedback Board</h1> 

      {/* calling the Form page , already created so we can use onsubmit function*/}
      <Form onsubmit={onsubmit} />

      <hr className={styles.divider} />

      {/* Start the list part */}
      <h2 className={styles.title}>Feedback List</h2>

      {/* if there is no feedback we show P  */}
      {feedbacks.length === 0 ? (
        
        <p>No feedback yet.</p>
      ) : (
        // otherwise show a list of each comment as a LINK */
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {feedbacks.map((fb, idx) => (
            <li
              key={idx}
              className={styles['feedback-item']}>
                {/* this make a comment clickable and takes you (navigate) to comments page already created */}
              <Link to="/comments" style={{ textDecoration: 'none', color: '#0077cc' }}>
                {fb.comment.length > 30
                  ? fb.comment.slice(0, 30) + '…'
                  : fb.comment}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
