import React, {useState} from 'react';
import SuperButton from "../components/superButton/SuperButton";

export default {
  title: 'React.memo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
  console.log("Counter render");
  return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("Users render");
  return <div>{
    props.users.map((u, i) => <div key={i}>{u}</div>)
  }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
  console.log('Example')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

  const addUser = () => {
    const newUsers = [...users, users[1] + new Date().getTime()]
    setUsers(newUsers)
  }

  users.push(users[0] + new Date().getTime())

  return <>
  <div style={{display:"flex"}}>
    <SuperButton onClick={() =>
        setCounter(counter + 1)
    }>+
    </SuperButton>
    <SuperButton onClick={addUser}>add user
    </SuperButton>
  </div>
    <NewMessagesCounter count={counter}/>
    <Users users={users}/>
  </>


}