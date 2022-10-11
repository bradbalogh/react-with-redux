import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {useState} from "react";
import * as accountActions from './redux/actions/accountActions'
import * as userActions from './redux/actions/userActions'

function App() {

    const [userName, setUserName] = useState("");

    const account = useSelector(state => state.account);
    const userArr = useSelector(state => state.user);

    const { depositMoney, withdrawMoney } = bindActionCreators(accountActions, useDispatch())
    const { addUser } = bindActionCreators(userActions, useDispatch())

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(userName)
    }

    return (
        <div className="App">

            <h2> Increment/Decrement Example </h2>
            <h2> {account} </h2>
            <button onClick={() => depositMoney(1000)}> Deposit </button>
            <button onClick={() => withdrawMoney(1000)}> Withdraw </button>

            <hr/>

            <h2> Adding to Array Example </h2>
            <form onSubmit={event => handleSubmit(event)}>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <button type={'submit'}> Add User</button>
            </form>
            {userArr.map((user, i) => {
                return <li key={i}> {user} </li>
            })}
        </div>
    );
}

export default App;
