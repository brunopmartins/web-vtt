import Head from 'next/head';
import React from 'react';
// import styles from '../../styles/playerSheet.css';

function SheetHeader() {
  return (
    <header className={'SheetHeader'}>
      <section id={'character-name'}>
        <label for='character-name-input'>Character Name</label>
        <input type='text' id='character-name-input'/>
      </section>
      <section id={'character-main-info'}>
        <ul>
          <li class='double-column'>
            <label for='class-and-level-input'>Class & Level</label>
            <input type='text' id='class-and-level-input'/>
          </li>
          <li>
            <label for='background-input'>Background</label>
            <input type='text' id='background-input'/>
          </li>
          <li>
            <label for='race-input'>Race</label>
            <input type='text' id='race-input'/>
          </li>
          <li>
            <label for='alignment-input'>Alignment</label>
            <input type='text' id='alignment-input'/>
          </li>
          <li>
            <label for='xp-input'>Experience Points</label>
            <input type='text' id='xp-input'/>
          </li>
        </ul>
      </section>
    </header>    
  );
}

export default function PlayerSheet() {
  return (
    <>
    <Head>
      <title>Ficha do Personagem</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <SheetHeader/>
    </>
  );
}
