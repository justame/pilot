import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import SplashScreen from './components/SplashScreen/SplashScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import ImageUploadScreen from './components/ImageUploadScreen/ImageUploadScreen';
import ImageScoreScreen from './components/ImageScoreScreen/ImageScoreScreen';


const getRandomFeedback = (feedbackList: string[], count: number) => {
  const shuffledFeedback = [...feedbackList].sort(() => 0.5 - Math.random());
  return shuffledFeedback.slice(0, count);
};

const fakeFeedback = [
  'Try wearing clothes with brighter colors to make your appearance more vibrant.',
  'Consider improving your posture for a more confident look.',
  'Choose a location with better lighting for your photos.',
  'Include a full-body shot to give potential matches a better idea of your physique.',
  'Smile more naturally and show off those pearly whites.',
  'Experiment with different camera angles to find your best side.',
  'Remove clutter or distractions from the background to make your photo look cleaner.',
  'Capture photos in settings that showcase your hobbies and interests.',
  'Showcase your unique style by incorporating accessories or statement pieces.',
  'Avoid using filters or excessive photo editing, as it may appear inauthentic.',
];

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <SplashScreen />
      <LoginScreen/>
      <ImageUploadScreen/>
      <ImageScoreScreen onBack={() => null}  feedback={getRandomFeedback(fakeFeedback,4)} score={50} image={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCat&psig=AOvVaw17G7VlkHCxh7vx79m2L8Qc&ust=1680312249780000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiy7IeBhf4CFQAAAAAdAAAAABAE`}/>

    </div>
    </ThemeProvider>
  );
}

export default App;
