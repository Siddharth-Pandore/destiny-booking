import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/36446284.webp?k=e1cd4c287f9bf7f0063100f6061bd77907b7e90ed8ec63e6d6c6f3aa374fe06f&o="
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kashmir</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/496242369.webp?k=4c1a404f4eceb8f29042936f6196596efe77ad74f26cf61a1eb7dd883805bc2d&o="
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ladakh</h1>
          <h2>Aksai Chin Property</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/323638476.webp?k=8d31eadc62e17539ad0c47667e88a5c1db500e9a874f29e841fac5f4bc968951&o="
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kerala</h1>
          <h2>KTDC Property</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
