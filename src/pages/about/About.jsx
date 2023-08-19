import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const data = useSelector((state) => state.app.data);
  return (
    <div>
      <h2>About</h2>
      <p>{data[3]}</p>
      <p>
        Quas dolores facere culpa voluptate, ab cupiditate, magni modi sequi
        qui, aperiam dolorem atque laborum voluptatibus. Quia error accusantium
        magnam aspernatur tenetur reprehenderit impedit nesciunt minima dolorum
        itaque eveniet, quaerat asperiores quas, iusto voluptates consequatur
        neque expedita, nostrum possimus? Inventore nisi ex odio sunt explicabo
        ratione soluta repudiandae labore eius, animi quas et eaque ea quae eum
        nihil. Quisquam voluptates, quae laudantium atque asperiores quia harum
        officiis maiores quis perspiciatis dolorum placeat odit natus? Est,
        aperiam commodi? Minima maiores enim veritatis laborum asperiores!
        Itaque reprehenderit rem recusandae aspernatur magni optio, eaque,
        placeat incidunt autem praesentium debitis labore assumenda natus
        laboriosam culpa, eligendi dolor commodi. Error tempore corporis
        accusamus iste porro commodi beatae, illo expedita ut, accusantium rem,
        maxime quidem voluptatibus deserunt eius at adipisci ratione quisquam
        quasi. Beatae, esse laboriosam quia repellat alias possimus harum
        nostrum quae debitis impedit laudantium atque voluptatem, nam
        consequuntur libero a? Laudantium inventore aut quia corrupti enim
        ratione reiciendis sint nihil commodi voluptates? Culpa dolor modi
        numquam ullam ad, dicta sint unde magni aut repudiandae? Atque rerum
        aliquam distinctio voluptatem perferendis ad maiores omnis, iste officia
        facilis veniam recusandae temporibus enim hic placeat et voluptas quam
        repudiandae.
      </p>
    </div>
  );
};

export default About;
