export interface Candidate {
  id: string;
  name: string;
  dob: string;
  bioLink: string;
  policy: string;
  imageURL: string;
  votedCount: number;
}

export interface CandidateResult extends Candidate {
  percentage: string;
}

export interface ElectionStatus {
  enable: boolean;
}
