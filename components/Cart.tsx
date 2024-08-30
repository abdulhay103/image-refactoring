import Image from "next/image";
// import NaturalImage from "/public/img/natural1.jpg";

type Props = {};

export default function Cart({}: Props) {
  return (
    <div className=" w-[400px] h-auto border border-red-500">
      <Image
        src="https://ik.imagekit.io/aerodevs/practice/natural1.jpg"
        // src={NaturalImage}
        className=" w-[250px] md:w-[400px] h-auto"
        width={382}
        height={264.562}
        alt="Natural-image"
        sizes=" (max-width:768) 250px, 400"
      />
    </div>
  );
}
