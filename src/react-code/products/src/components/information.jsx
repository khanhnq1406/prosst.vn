const Information = (props) => {
  const content = props.product.content.rendered;
  const startDescription = content.search("information") + "information".length;
  const endDescription = content.search("/information");
  const description = content
    .slice(startDescription, endDescription)
    .split("<br>");
  description.pop();
  description.shift();
  const descriptionItems = description.map((des) => <p>{des}</p>);
  return (
    <div className="container">
      <div className="product-description">
        <div className="title-description">Mô tả sản phẩm</div>
        <div className="content-description">{descriptionItems}</div>
      </div>
    </div>
  );
};

export default Information;
