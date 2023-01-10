import "./SidebarBottom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const SidebarBottom = () => {
  return (
    <div className="sidebarbottom">
      <div className="sidebarbottom__colorbox">
       <div className="sidebarbottom__colorbox-dark">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
       </div>
      <div className="sidebarbottom__colorbox-night">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
      </div>
      <div className="sidebarbottom__colorbox-light">
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </div>
      </div>
    </div>
  )
}

export default SidebarBottom