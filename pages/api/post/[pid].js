export default function handler(req, res) {
    const {
      query: { pid },
    } = req
  // const pid = req.query.pid
  res.end(`Post: ${pid}`)
  }
  // リクエストのquery: pid というフィールドが、URLのpidと同じになる
  // http://localhost:3000/api/post/hoge
  // => Post: hoge
  // http://localhost:3000/api/post/abc
  // => Post: abc
  // 動的なAPIルート！！