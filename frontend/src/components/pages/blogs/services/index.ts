export async function getPosts() {
  const req = await fetch('https://dummy-json.mock.beeceptor.com/posts');
  const data = await req.json();
  return data;
}

export async function getPostaa() {
  const req = await fetch('/api/blogs');
  const data = await req.json();
  return data;
}
