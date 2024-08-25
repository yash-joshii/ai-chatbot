import { Link } from "react-router-dom"
type Props= {
    to:string;
    bg:string;
    text:string;
    textColor:string;
    onClick?: () => Promise<void>;
}

const NavigationLink = ( props: Props) => {
  return (
    <div>
      
      <Link onClick={props.onClick} className=" sm:p-2 text-sm lg:text-lg lg:p-2 sm:px-1 lg:px-4 rounded-md  tracking-wider " 
      to={props.to} style={{background:props.bg , color :props.textColor}}> {props.text}</Link>
    </div>
  )
}

export default NavigationLink
