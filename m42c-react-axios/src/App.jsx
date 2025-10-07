import axios from 'axios'
import './App.css'
import { Suspense } from 'react';
import MarksChart from './components/MarksChart';

const MarksPromise = axios.get('/marks.json');

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <MarksChart marksPromise={MarksPromise} />
      </Suspense>
    </>
  )
}

export default App
