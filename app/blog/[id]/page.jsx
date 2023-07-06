import Image from "next/image";
import "./single_blog.scss";
import singleBlogImage from "../../../public/hero.png";
import axios from "axios";
import { Suspense } from "react";
import { notFound } from "next/navigation";
const getData = async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return notFound();
  }
};
const BlogPost = async ({ params }) => {
  const post = await getData(params.id);
  return (
    <div className="single_blog">
      <Suspense>
        <div className="top">
          <div className="info">
            <h1 className="title">{post.title}</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              possimus quia quasi similique at voluptas hic est non modi amet.
              Soluta, facilis vel? A similique fugiat quasi qui dolorum
              praesentium.
            </p>
            <div className="author">
              <Image
                src={singleBlogImage}
                alt=""
                width={60}
                height={60}
                className="avatar"
              />
              <span className="username">Keanu</span>
            </div>
          </div>
          <div className="imageContainer">
            <Image src={singleBlogImage} alt="single blog image" />
          </div>
        </div>
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta ducimus soluta reprehenderit, porro, quaerat explicabo nostrum
            similique, ratione quasi quam repudiandae sed commodi voluptate?
            Exercitationem, architecto. Fuga explicabo voluptates voluptatibus
            officiis sint voluptate enim error natus expedita iure, corporis ab
            praesentium, impedit molestias mollitia neque quia cupiditate
            reiciendis, nihil perferendis inventore asperiores laudantium rerum
            beatae. Amet fuga quisquam cum aliquam dolore, quas exercitationem
            eaque alias illo nihil iste suscipit. Nobis porro est nemo dolorum
            modi dolorem, praesentium deserunt facere eveniet aperiam
            repudiandae debitis consequatur placeat perferendis, dolore libero
            nihil ad harum nulla officiis? Fugit dolore accusamus omnis cum non!
          </p>
        </div>
      </Suspense>
    </div>
  );
};

export default BlogPost;
