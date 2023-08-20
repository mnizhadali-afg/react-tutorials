import "./Header.css"

const Header = () => {
  return (
    <nav className="flex">
      <img
        src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
        alt=""
      />
      <ul className="flex">
        <li>Skills</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default Header
