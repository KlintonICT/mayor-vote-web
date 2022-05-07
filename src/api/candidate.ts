import Http from 'lib/http';
import EP from 'lib/endpoints';

const CandidateAPI = {
  getList: () => Http.get(EP.getCandidateList),
};

export default CandidateAPI;
