import img from '../assets/shahzar mazhar.jpg';
import img2 from '../assets/shahzar mazhar 2.jpg';
import tweeterImg from '../assets/tweeter.png';
import hiddenObjectsImg from '../assets/hidden-objects.png';
import memoryGameImg from '../assets/react-memory-game.png';
import landingPageImg from '../assets/landing-page.png';
import cvProjectImg from '../assets/cv-project.png';
import weatherAppImg from '../assets/weather-app.png';
import restaurantPageImg from '../assets/restaurant-page.png';
import ticTacToe from '../assets/tic-tac-toe.png';
import { Config } from '../types';

const config: Config = {
  name: 'Shahzar Mazhar',
  nickname: 'szmazhr',
  about: `I am an Indian guy and love technology in every form and medium, learning new things every day, and constantly tackling new challenges.
          I consider myself a unique production powerhouse, equipped with a wide range of skills and with the constant desire to push my boundaries and create something new every day.
          I am a passionate Developer, a meticulous Designer, and an unstoppable Dreamer.`,
  photos: [img, img2],
  address: '101/252, Colonel Ganj, Kanpur, UP - 208001',
  phone: [91, 7786031707],
  mailAddr: 'info@shahzar.in',
  exLinks: {
    github: 'https://github.com/szmazhr',
    twitter: 'https://twitter.com/szmazhr',
    instagram: 'https://instagr.am/szmazhr',
  },
  projects: [
    {
      img: tweeterImg,
      name: 'Tweeter',
      desc: 'A clone of very famous Social media platform, twitter.',
      repo: 'tweeter',
      built: ['react', 'firebase', 'css'],
    },
    {
      img: hiddenObjectsImg,
      name: 'Hidden Objects',
      desc: 'Hidden Objects a game to find objects/characters, blend with other objects/characters.',
      repo: 'hidden-objects',
      built: ['react', 'firebase', 'scss'],
    },
    {
      img: memoryGameImg,
      name: 'Memory Game',
      desc: "A memory game: Get points for choosing a card, but don't choose the same card twice!",
      repo: 'react-memory-game',
      built: ['react', 'scss'],
    },
    {
      img: cvProjectImg,
      name: 'CV Creator',
      desc: 'A react app that you can use to create CV and download as PDF',
      repo: 'cv-project',
      built: ['react', 'scss'],
    },
    {
      img: weatherAppImg,
      name: 'Weather App',
      desc: 'A simple weather app that uses the OpenWeatherMap API to get the current weather.',
      repo: 'weather-app',
      built: ['html', 'scss', 'javascript'],
    },
    {
      img: restaurantPageImg,
      name: 'Restaurant Page',
      desc: 'Restaurant Homepage, which uses tabbed browsing to access the Contact and Menu pages',
      repo: 'restaurant-page',
      built: ['scss', 'javascript'],
    },
    {
      img: ticTacToe,
      name: 'Tic Tac Toe',
      desc: 'A game that can be played in browser, either against someone or computer!',
      repo: 'tic-tac-toe',
      built: ['html', 'scss', 'javascript'],
    },
    {
      img: landingPageImg,
      name: 'Landing Page',
      desc: 'This is a basic website landing page. There are 4 main sections +  navbar + footer.',
      repo: 'odin-project-landing-page',
      built: ['html', 'css'],
    },
  ],
};

export default config;
