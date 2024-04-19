import { useLoaderData } from "react-router-dom";
import { getProduct } from "../api";
import Picture from "../components/picture";
export async function loader({ params }) {
  return getProduct(params.productId);
}

export default function Detail() {
  const product = useLoaderData();
  const content = product.content.rendered;
  console.log(content);
  const startDescription =
    content.search("&lt;description>") + "&lt;description>".length;
  const endDescription = content.search("&lt;/description>");
  const description = content
    .slice(startDescription, endDescription)
    .split("<br>");
  const descriptionItems = description.map((des) => <p>{des}</p>);
  return (
    <div>
      <div className="picture">
        <Picture product={product} />
      </div>
    </div>
  );
}
