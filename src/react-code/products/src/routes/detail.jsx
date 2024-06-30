import { useLoaderData } from "react-router-dom";
import { getProduct } from "../api";
import Picture from "../components/picture";
import Description from "../components/description";
import Recommendation from "../components/recommendation";
import Footer from "../../../prosst-react/src/components/footer";
import Resources from "../components/resources";
import Information from "../components/information";
export async function loader({ params }) {
  return getProduct(params.productId);
}

export default function Detail() {
  const product = useLoaderData();
  return (
    <div className="container">
      <div className="picture">
        <Picture product={product} />
      </div>
      <div className="description">
        <Description product={product} />
      </div>
      <div className="resources">
        <Resources product={product} />
      </div>
      <div className="description">
        <Information product={product} />
      </div>
      <div className="recommendation">
        <Recommendation product={product} />
      </div>
      <div className="footer-custom">
        <Footer />
      </div>
    </div>
  );
}
