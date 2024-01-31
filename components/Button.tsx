import Image from "next/image";

interface ButtonProps{
    type:"button" | "submit";
    title:string;
    icon?:string;
    variant:string;
}

const Button = ({type,title,icon,variant}:ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <p className="bold-16 whitespace-nowrap">{title}</p>
    </button>
  )
}

export default Button