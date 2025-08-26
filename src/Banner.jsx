function Banner() {
  return (
    <div className="d-flex flex-wrap justify-space-around p-5 align-items-center border rounded m-5">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D12AQFgXd9zwPZkUQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698697946570?e=2147483647&v=beta&t=iH99S_0fXVRalKWdXDn6ADnnOZXMuEZ-ro_N71Gp5vM"
        alt=""
        width="40%"
      />
      <ul>
        <li>JSX Syntax</li>
        <li>Components</li>
        <li>Props</li>
        <li>State Management</li>
        <li>Lifecycle Methods</li>
      </ul>
    </div>
  );
}

export default Banner;
