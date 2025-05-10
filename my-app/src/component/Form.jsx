import { Fragment, useState } from 'react'

import styles from './Form.module.css';

const Form = ({onsubmit}) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");
    const [ image , setImage] = useState(null) ;  
    const [ error , setError] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()){
            setError('Both inputs are required');
            return;}

        setError("")
        onsubmit({ name, rating, comment, image })
        setName("")
        setRating(1)
        setComment("")
        setImage(null)
    }

    return (
        <Fragment>

            <form className={styles.form} onSubmit={handleSubmit} >
                {/* input name */}
                <label className={styles.label}>Name (optional) </label><br/>
                <input className={styles.input} value={name} placeholder='last and first name' onChange={(e) => setName(e.target.value)} />

                {/* rating options */}
                <label className={styles.label}> Rating (1-5) <strong>Required</strong></label>
                <select
                className={styles.select}
                 value={rating}
                 onChange={e => setRating(Number(e.target.value))} >
                 {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>
                    {n}{" "}
                    {["Terrible","Poor","Average","Good","Excellent"][n-1]}
                 </option> ))}
                </select><br/>

                {/* Comments textarea */}
                <textarea id="message" name="message" 
                className={styles.textarea}
                rows="5" cols="30" 
                placeholder="Type your message here..." 
                value={comment} 
                onChange={(e)=>setComment(e.target.value)}/><br/>

                {/* image input file */}
                <input  
                  type='file'
                  className={styles.input}
                  onChange={(e)=>setImage(e.target.files[0])}/><br/>

                {/* Error  */}
                {error && <p className={styles.error}> {error} </p>}

                {/* submit button */}
                <button type='submit' className={styles.button}>SEND</button>
            </form>

        </Fragment>

    )
}

export default Form











