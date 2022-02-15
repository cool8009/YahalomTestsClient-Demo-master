import http from "./httpService";


const serverRoute = "/api/Questions/";

const QuestionService = {
  async getAllQuestions() {
    return await http.get(serverRoute + "getQuestions");
  },

  async addQuestion(question) {
    return await http.post(serverRoute + "addQuestion", question);
  },
};

export default QuestionService;
