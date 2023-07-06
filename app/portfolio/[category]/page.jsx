import Image from "next/image";
import "./category.scss";
import contact from "../../../public/contact.png";
import { items } from "./data.js";
import { notFound } from "next/navigation";
const getData = (cat) => {
  try {
    return items[cat];
  } catch (error) {
    return notFound();
  }
};
const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className="category">
      <h1 className="title">Our Works</h1>
      <h1 className="category_title">{params.category}</h1>
      <div className="items">
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <div className="info">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>See More</button>
            </div>
            <div className="img">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt="category img"
              />
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Category;

{
  /* <div className="category">
<h1 className="title">Our Works</h1>
<h1 className="category_title">{params.category}</h1>
<div className="item">
  <div className="info">
    <h1>Creative Portfolio</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
      consectetur nobis modi reiciendis dolore eum, deserunt eligendi ex
      repellendus fuga eos assumenda laboriosam inventore distinctio magni
      numquam nam porro excepturi?
    </p>
    <button>See More</button>
  </div>
  <div className="img">
    <Image src={contact} alt="category img" />
  </div>
</div>
<div className="item">
  <div className="info">
    <h1>Creative Portfolio</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
      consectetur nobis modi reiciendis dolore eum, deserunt eligendi ex
      repellendus fuga eos assumenda laboriosam inventore distinctio magni
      numquam nam porro excepturi?
    </p>
    <button>See More</button>
  </div>
  <div className="img">
    <Image src={contact} alt="category img" />
  </div>
</div>
<div className="item">
  <div className="info">
    <h1>Creative Portfolio</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
      consectetur nobis modi reiciendis dolore eum, deserunt eligendi ex
      repellendus fuga eos assumenda laboriosam inventore distinctio magni
      numquam nam porro excepturi?
    </p>
    <button>See More</button>
  </div>
  <div className="img">
    <Image src={contact} alt="category img" />
  </div>
</div>
<div className="item">
  <div className="info">
    <h1>Creative Portfolio</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
      consectetur nobis modi reiciendis dolore eum, deserunt eligendi ex
      repellendus fuga eos assumenda laboriosam inventore distinctio magni
      numquam nam porro excepturi?
    </p>
    <button>See More</button>
  </div>
  <div className="img">
    <Image src={contact} alt="category img" />
  </div>
</div>
</div> */
}
