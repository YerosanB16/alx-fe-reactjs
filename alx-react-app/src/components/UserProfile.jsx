function UserProfile(props){
     return(
      <div>
        <h2>{props.name}</h2>
        <p>{props.Age}</p>
        <p>{props.Bio}</p>
      </div>
     )
}
export default UserProfile;
