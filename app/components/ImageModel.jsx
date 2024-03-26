import Image from "next/image";
const ImageModel = ({image}) => {
    return (
      <Image height={100} width={100} src={image} alt="image" className=" mx-auto border object-cover"/>
    );
};

export default ImageModel;