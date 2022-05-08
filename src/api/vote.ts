import Http from 'lib/http';
import EP from 'lib/endpoints';

const VoteAPI = {
  post: (data: { candidateId: string; nationalId: string }) =>
    Http.post(EP.postVote, data),
};

export default VoteAPI;
