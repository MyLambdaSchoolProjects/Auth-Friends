import React from "react";
//import moment from "moment";
//import Loader from "react-loader-spinner";
import axios from "axios";
import FriendCard from "./friendsCard";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
    !sessionStorage.getItem("token")
      ? console.log("Please Login")
      : console.log("Logged In");
  }

  getData = () => {
    const authAxios = axiosWithAuth();
    authAxios
      .get("http://localhost:5000/api/friends")
      .then(resp => {
        console.log("fetch", resp);
        this.setState({ friends: resp.data });
      });
  };

  formatData = () => {
    const friendData = [];
    console.log('formatdata',this.state.friends);
    this.state.friends.forEach(friend => {
      friendData.push({
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email
      });
    });
    return friendData;
  };

  render() {
    const myFriends = this.formatData();
    console.log('myFriends',myFriends);
    return (
      <div>
        {myFriends
          ? myFriends.map(friend => {
              return (
                <FriendCard
                  key={friend.id}
                  name={friend.name}
                  age={friend.age}
                  email={friend.email}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default FriendsList;
