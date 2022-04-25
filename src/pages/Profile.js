import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';

function Profile({ isAuth }) {
  let nav = useNavigate();
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postCollectionRef]);

  const deletePost = async id => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  };
  return (
    <div>
      {postList.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.posts}</p>
            <p>@{post.author.name}</p>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                delete
              </button>
            )}
          </div>
        );
      })}
      Profiel
      <button onClick={() => nav('/')}> return Home</button>
    </div>
  );
}

export default Profile;
