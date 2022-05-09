import { Candidate, CandidateResult } from 'lib/interface';

export const candidateData = {
  id: '4',
  name: 'Choco',
  dob: 'February 14, 1977',
  bioLink: 'https://line.fandom.com/wiki/Choco',
  policy: 'Dressing up in fashionable clothes and taking selfies',
  imageURL: 'https://static.wikia.nocookie.net/line/images/4/4c/IMG_3360.JPG',
  votedCount: 1,
} as unknown as Candidate;

export const candidateResultData = [
  {
    id: '4',
    name: 'Choco',
    dob: 'February 14, 1977',
    bioLink: 'https://line.fandom.com/wiki/Choco',
    policy: 'Dressing up in fashionable clothes and taking selfies',
    imageURL: 'https://static.wikia.nocookie.net/line/images/4/4c/IMG_3360.JPG',
    votedCount: 1,
    percentage: '100%',
  },
] as unknown as CandidateResult[];
