import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured bg-fixed text-white rounded-xl mb-10 pt-10 ">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500/30 rounded-xl">
        <div>
          <img className="rounded-xl" src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>May 14, 2025</p>
          <p className="uppercase">where can i get some </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum unde
            explicabo quas perspiciatis eveniet et quasi nemo? Eius itaque
            dolores dolore eveniet sit, magnam natus culpa. Hic doloribus
            accusantium saepe?
          </p>
          <button className="btn btn-soft btn-error border-0 border-b-4 mt-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
