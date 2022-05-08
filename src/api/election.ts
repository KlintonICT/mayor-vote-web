import Http from 'lib/http';
import EP from 'lib/endpoints';

const ElectionAPI = {
  getStatus: () => Http.get(EP.getElectionStatus),
  getResult: () => Http.get(EP.getElectionResult),
};

export default ElectionAPI;
