import { motion } from "framer-motion";
export default function Carousel(props) {
    
  console.log(props);
  return (
    <div className="bg-red-300  flex">
      <div className="my-auto  text-5xl">
        <a className="my-auto ">&lt;</a>
      </div>
      <motion.div className="mx-auto ">
        <img
          src={props.mobile}
          className=" max-w-lg px-6 py-2 object-fill  mx-auto"
        ></img>
      </motion.div>
      <div className="my-auto  text-5xl">
        <a className="my-auto ">&gt;</a>
      </div>
    </div>
  );
}
