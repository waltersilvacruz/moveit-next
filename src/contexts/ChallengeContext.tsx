import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
};

interface ChallengesProviderProps {
  children: ReactNode
};

interface ChallengeProviderData {
  level: number, 
  currentExperience: number, 
  challengesCompleted: number,
  levelUp: () => void, 
  startNewChallenge: () => void,
  activeChallenge: Challenge
}

export const ChallengesContext = createContext({} as ChallengeProviderData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [ level, setLevel ] = useState(1);
  const [ currentExperience, setCurrentExperience ] = useState(0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(0);
  const [ activeChallenge, setActiveChallenge ] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  return (
    <ChallengesContext.Provider value={{
      level, 
      levelUp, 
      currentExperience, 
      challengesCompleted,
      startNewChallenge,
      activeChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}