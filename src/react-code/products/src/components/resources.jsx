let path = "/wp-content/reactpress/apps/products/dist/";
if (process.env.NODE_ENV === "development") path = "/";

const Resources = (props) => {
  const content = props.product.content.rendered;
  // Find manual file
  const startFileBlock = content.search("catalog") + "catalog".length;
  const endFileBlock = content.search("/catalog");
  const fileBlock = content.slice(startFileBlock, endFileBlock);
  const fileBlockArray = fileBlock.split("resource");
  fileBlockArray.shift();
  const files = [];
  for (const index in fileBlockArray) {
    const url = fileBlockArray[index].match(/href="(.*?)"/)[1];
    const type = url.split(".").pop();
    let name;
    try {
      name = fileBlockArray[index].match(/name&gt;(.*?)<\/p>/)[1];
    } catch (error) {
      name = fileBlockArray[index].match(/name>(.*?)<\/p>/)[1];
    }
    files.push({ url: url, name: name, type: type });
  }
  console.log(files);
  const fileItems = files.map((file) => (
    <div className="resource-item">
      <a href={file.url}>
        {file.type == "pdf" || file.type == "c" || file.type == "exe" ? (
          <img src={`${path}${file.type}.png`}></img>
        ) : (
          <img src={`${path}file.png`}></img>
        )}
        <div className="file-name">{file.name}</div>
        <div className="file-type">.{file.type}</div>
      </a>
    </div>
  ));

  return (
    <div className="container">
      <div className="resources-wrapper">
        <div className="resources-title">Tài nguyên</div>
        <div className="resource-item-wrapper">{fileItems}</div>
      </div>
    </div>
  );
};
export default Resources;
