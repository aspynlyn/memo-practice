import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

class HttpService {
  //save메소드 구현
  async save(jsonBody) {
    const res = await axios.post('/memo', jsonBody);
    // axios의 post메소드는 (URL, 객체)를 파라미터로 보내고 객체를 알아서 json으로 바꿔서 보내줌 그리고 promise 객체를 받아옴
    return res.data;
    // res에 담긴 건 axios가 만든 response객체
  }

  // findAll메소드 구현
  async findAll(params) {
    const res = await axios.get('/memo', { params });
    // get메소드는 두번째 인자로 객체를 보내는데 params 속성에 객체를 넣어주면 알아서 쿼리스트링으로 만들어서 보냄
    return res.data;
  }

  async findById(id) {
    const res = await axios.get(`/memo/${id}`);
    return res.data;
  }

  async modify(jsonBody) {
    const res = await axios.put('/memo', jsonBody);
    return res.data;
  }

  async deleteById(params) {
    const res = await axios.delete(`/memo`, { params });
    return res.data;
  }
}

export default new HttpService();
