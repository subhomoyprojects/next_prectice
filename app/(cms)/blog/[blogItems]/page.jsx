export default async function BlogDetailsPage(props) {
  const blog = await props.params;

  console.log("server dynamic url:", blog.blogItems);

  return (
    <main className="content-card">
      <p className="eyebrow">Dynamic Blog Route</p>
      <h1>Blog item: {blog.blogItems}</h1>
      <p>
        This value comes from the dynamic URL segment. For example,
        <code> /blog/{blog.blogItems} </code> gives <strong>{blog.blogItems}</strong>.
      </p>
    </main>
  );
}
