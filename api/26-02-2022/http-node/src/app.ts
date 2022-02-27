import http from 'http';
interface Data {
  id: number;
  info: string;
}
interface Response {
  success: boolean;
  data: Data[] | null;
  error: null | string;
}
const data: Data[] = [
  {
    id: 1,
    info: 'Привет',
  },
  {
    id: 2,
    info: 'Давай',
  },
  {
    id: 3,
    info: 'До свидания',
  },
];
const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log(url, method);

  let qbody: Array<Uint8Array> = [];
  let buffer: string;

  req
    .on('data', (chunk) => {
      qbody.push(chunk);
    })
    .on('end', () => {
      buffer = Buffer.concat(qbody).toString();

      let status = 404;
      let response: Response = {
        success: false,
        data: null,
        error: null,
      };

      if (method === 'GET' && url === '/data') {
        status = 200;
        response.success = true;
        response.data = data;
      } else if (method === 'POST' && url === '/data') {
        const { id, info } = JSON.parse(buffer);

        if (!id || !info) {
          status = 400;
          response.error = 'Пожалуйста, укажите id и info';
        } else {
          data.push({ id, info });
          status = 201;
          response.success = true;
          response.data = data;
        }
      }

      res.writeHead(status, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
      });
      res.end(JSON.stringify(response));
    });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
