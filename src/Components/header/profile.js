import profileImg from "../../assets/profiles/1/profile.png";
import {Image} from "react-bootstrap";

const Profile = () => {
    return (
        <Image src={profileImg} className="profile-img"
               roundedCircle/>
    )
}

export default Profile
