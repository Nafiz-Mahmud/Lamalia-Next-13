import Image from "next/image";
import Link from "next/link";
import blogImage from "../../public/hero.png";
import "./blog.scss";
import axios from "axios";
import { Suspense } from "react";

const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Blog = async () => {
  const posts = await getData();

  return (
    <div className="blogs">
      <Suspense fallback={<h1>Loading...</h1>}>
        {posts?.map((post) => (
          <div className="blog" key={post.id}>
            <div className="img">
              <Link href={`/blog/${post.id}`}>
                <Image src={blogImage} alt="blog image" />
              </Link>
            </div>
            <div className="info">
              <h1 className="blog_title">
                <Link href="/blog/1">{post.title}</Link>
              </h1>
              <p className="desc">Description</p>
            </div>
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default Blog;

{
  /* <div className="blogs">
  <div className="blog">
    <div className="img">
      <Link href="/blog/1">
        <Image src={blogImage} alt="blog image" />
      </Link>
    </div>
    <div className="info">
      <h1 className="blog_title">
        <Link href="/blog/1">Title</Link>
      </h1>
      <p className="desc">Description</p>
    </div>
  </div>
  <div className="blog">
    <div className="img">
      <Link href="/blog/2">
        <Image src={blogImage} alt="blog image" />
      </Link>
    </div>
    <div className="info">
      <h1 className="blog_title">
        <Link href="/blog/2">Title</Link>
      </h1>
      <p className="desc">Description</p>
    </div>
  </div>
  <div className="blog">
    <div className="img">
      <Link href="/blog/3">
        <Image src={blogImage} alt="blog image" />
      </Link>
    </div>
    <div className="info">
      <h1 className="blog_title">
        <Link href="/blog/3">Title</Link>
      </h1>
      <p className="desc">Description</p>
    </div>
  </div>
</div>; */
}
