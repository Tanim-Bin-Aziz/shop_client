import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>

      <div>
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>p</div>
      </div>
    </div>
  );
};

export default Featured;
