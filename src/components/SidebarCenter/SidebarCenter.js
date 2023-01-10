import "./SidebarCenter.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSearch, faStream, faBook,faUser,faToolbox,faShoppingCart,faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
const SidebarCenter = () => {
  return (
    <div className="sidebarcenter">
      <ul className="sidebarcenter__list">
       <li className="sidebarcenter__list-item">
        <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faHome}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Dashboard</span>
       </li>
       <li className="sidebarcenter__list-item">
       <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faSearch}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Search</span>
       </li>
       <li className="sidebarcenter__list-item">
       <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faStream}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Insights</span>
       </li>
       <li className="sidebarcenter__list-item">
        <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faBook}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Docs</span>
       </li>
       <li className="sidebarcenter__list-item">
        <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faUser}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Community</span>
       </li>
       <li className="sidebarcenter__list-item">
        <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faToolbox}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Tools</span>
       </li>
       <li className="sidebarcenter__list-item">
        <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faShoppingCart}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Market</span>
       </li>
       <li className="sidebarcenter__list-item">
        <FontAwesomeIcon className="sidebarcenter__list-icon" icon={faQuestionCircle}></FontAwesomeIcon>
        <span className="sidebarcenter__list-text">
          Resources</span>
       </li>
      </ul>
    </div>
  )
}

export default SidebarCenter