import "./SidebarTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainCity } from "@fortawesome/free-solid-svg-icons";
const SidebarTop = () => {
  return (
    <div className="sidebartop">
      <FontAwesomeIcon className="sidebartop__icon" icon={faMountainCity}></FontAwesomeIcon>
      <span className="sidebartop__brand">The App</span>
    </div>
  )
}

export default SidebarTop