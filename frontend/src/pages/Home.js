import React from "react";
import '../App.css';
import { Button } from '../components/Button';
import './Home.css';

export default function Home() {
  return (
    <>
      <div className='home-container'>
        <h1>THE SEXIEST</h1>
        <p>小標 我不知道寫啥</p>
        <div className='home-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            value='play'
          >
            PLAY
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            value='tutorial'
          >
            TUTORIAL 
          </Button>
        </div>
      </div>
    </>
  );
}


