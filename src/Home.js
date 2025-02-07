import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const {data:blogs, isPending} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
