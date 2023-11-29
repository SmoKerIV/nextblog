async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  if (res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Article({ params }) {
  let data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Article {params.id}</h1>
    </div>
  );
}
