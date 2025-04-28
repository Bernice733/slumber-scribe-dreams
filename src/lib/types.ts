
export interface Dream {
  id: string;
  title: string;
  description: string;
  date: string;
  mood: DreamMood;
  tags: string[];
  isLucid: boolean;
}

export type DreamMood = 
  | 'happy'
  | 'sad'
  | 'scared'
  | 'confused'
  | 'peaceful'
  | 'excited'
  | 'neutral';

export const DREAM_MOODS: { value: DreamMood; label: string; }[] = [
  { value: 'happy', label: 'Happy' },
  { value: 'sad', label: 'Sad' },
  { value: 'scared', label: 'Scared' },
  { value: 'confused', label: 'Confused' },
  { value: 'peaceful', label: 'Peaceful' },
  { value: 'excited', label: 'Excited' },
  { value: 'neutral', label: 'Neutral' },
];
