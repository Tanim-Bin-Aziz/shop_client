import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-10 px-16">
        <div>
          <img className="rounded-xl" src={featuredImg} alt="" />
        </div>
        <div>
          <p>May 14, 2025</p>
          <p className="uppercase">where can i get some </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum unde
            explicabo quas perspiciatis eveniet et quasi nemo? Eius itaque
            dolores dolore eveniet sit, magnam natus culpa. Hic doloribus
            accusantium saepe?
          </p>
          <button className="btn btn-soft btn-error">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
