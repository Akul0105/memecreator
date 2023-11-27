import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Meme = () => {

  const [memes, setMemes] = useState([]);
  //array for memes
  const [memeIndex, setMemeIndex] = useState(0);
  //index for memes

  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  //shuffle memes

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res => 
        res.json().then(res => 
            {const _memes = res.data.memes;

              shuffleMemes(_memes); //call function shuffle memes
            setMemes(_memes);

            //fetch memes from api
          
          }
            ));
    }, []);
  return (
    memes.length ?
    //check if memes are valid!
    <div className={styles.container}>
    <button onClick={() => setMemeIndex(memeIndex + 1)}className={styles.skip}>Skip</button>
    <img src={memes[memeIndex].url} />
            </div> :
            <> </>
          )}
        ;
