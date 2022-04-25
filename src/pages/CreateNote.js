import React from 'react';
import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreateNote({ isAuth }) {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState('');
  let navigate = useNavigate();

  const postsCollectionRef = collection(db, 'posts');

  const createPost = async e => {
    e.preventDefault();

    await addDoc(postsCollectionRef, {
      title,
      posts,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    navigate('/profile');
  };
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
      console.log('hi');
    }
  }, []);

  return (
    <div>
      CreateNote
      <form onSubmit={createPost}>
        <label>
          Title
          <input
            type="text"
            id="name"
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          Message:
          <textarea
            placeholder="text"
            id="msg"
            onChange={event => {
              setPosts(event.target.value);
            }}
          ></textarea>
        </label>
        <button type="submit">Send your message</button>
      </form>
    </div>
  );
}

export default CreateNote;
