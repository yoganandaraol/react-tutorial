import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import User from './User';
import axios from 'axios';

function Users() {

    const [users, setUsers] = useState([])
    useEffect(() => 
    axios.get('https://api.github.com/users').then(resp => {
        setUsers(resp.data)
    }).catch(error => console.log(error)), [])

    //fetch('https://api.github.com/users').then(resp => resp.json).then(data => this.setState())


    // const users = [
    //     {
    //         "login": "yoganandaraol",
    //         "id": 23414296,
    //         "node_id": "MDQ6VXNlcjIzNDE0Mjk2",
    //         "avatar_url": "https://avatars.githubusercontent.com/u/23414296?v=4",
    //         "gravatar_id": "",
    //         "url": "https://api.github.com/users/yoganandaraol",
    //         "html_url": "https://github.com/yoganandaraol",
    //         "followers_url": "https://api.github.com/users/yoganandaraol/followers",
    //         "following_url": "https://api.github.com/users/yoganandaraol/following{/other_user}",
    //         "gists_url": "https://api.github.com/users/yoganandaraol/gists{/gist_id}",
    //         "starred_url": "https://api.github.com/users/yoganandaraol/starred{/owner}{/repo}",
    //         "subscriptions_url": "https://api.github.com/users/yoganandaraol/subscriptions",
    //         "organizations_url": "https://api.github.com/users/yoganandaraol/orgs",
    //         "repos_url": "https://api.github.com/users/yoganandaraol/repos",
    //         "events_url": "https://api.github.com/users/yoganandaraol/events{/privacy}",
    //         "received_events_url": "https://api.github.com/users/yoganandaraol/received_events",
    //         "type": "User",
    //         "site_admin": false,
    //         "name": "Yogananda Rao Locherla",
    //         "company": null,
    //         "blog": "",
    //         "location": "Chennai",
    //         "email": null,
    //         "hireable": null,
    //         "bio": null,
    //         "twitter_username": null,
    //         "public_repos": 6,
    //         "public_gists": 0,
    //         "followers": 1,
    //         "following": 1,
    //         "created_at": "2016-11-12T07:21:21Z",
    //         "updated_at": "2021-05-23T05:29:39Z"
    //       }];
    return (
      <div>
        <h3>Github Users List</h3>
        <hr />
          {users.map((u) => (
            <div>
              {/* <Link to='/User'>{u.login}</Link> */}
              <User details={u} />
            </div>
          ))}
      </div>
    );
}

export default Users;