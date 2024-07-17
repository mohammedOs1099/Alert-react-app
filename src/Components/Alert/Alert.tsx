import { ReactNode } from "react";
import "./Alert.scss";
import { X } from "lucide-react";
import { AletrType } from "../../Types/Types";
interface IProps {
  title: string;
  icon: ReactNode;
  descreption?: string;
  children?: ReactNode;
  type: AletrType;
}
export default function Aletr({
  title,
  icon,
  descreption,
  type,
  children
}: IProps) {
  return (
    <>
      <div className={type}>
        <div className="header">
          <div className="titel">
            <span> {icon}</span>
            <h3>{title}</h3>
          </div>
          <span className="cloes-btn">
            <X className="cloes-icon" />
          </span>
        </div>
       
        {children?children:<p>{descreption}</p>}
      </div>
    </>
  );
}
