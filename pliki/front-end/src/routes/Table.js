import React, { useState } from 'react';
import './Table.css';
import axios from "axios";
function Table(props) {
    function delateStudent(_id) {
        alert("Napewno chcesz zrezygnować?")
        if(alert !== true){
            axios.delete('http://127.0.0.1:8080/api/student/delete/' + _id)
            .then(() => {
                props.dataStudent();
            });
        }
       
    };
    const [editStudent, setEditStudent] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");
    const [course, setCourse] = useState('');

    function editClick(_id) {
        setEditStudent(_id)
    };
    function newDataStudent(_id) {
        axios.put('http://127.0.0.1:8080/api/student/upodate/' + _id, { name, username, city, course })
            .then(() => {
                props.dataStudent();
            });
    };
    let arrayStudent = props.arrayStudent;
    let liElements = arrayStudent.map((user) => {

        const { name, username, city, course } = editStudent;
        if (editStudent === user._id) {
            return (
                <tr key={user._id}>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name"></input></td>
                    <td><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username"></input></td>
                    <td>
                        <select name="city" value={city} onChange={(e) => setCity(e.target.value)}  >
                            <option>Wybierz</option>
                            <option>Warszawa</option>
                            <option>Kraków</option>
                            <option>Online</option>
                        </select>
                    </td>
                    <td>
                        <select name="course" value={course} onChange={(e) => setCourse(e.target.value)}  >
                            <option>Wybierz</option>
                            <option>Kurs Front End Developer</option>
                            <option>Kurs Full Stack Developer</option>
                        </select>
                    </td>
                    <td ><button onClick={() => newDataStudent(user._id)}>Zapisz</button></td>
                </tr>

            )
        };
        return (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.city}</td>
                <td>{user.course}</td>
                <td><button onClick={() => delateStudent(user._id)}>Zrezygnuj</button>
                    <button onClick={() => {
                        setName(user.name)
                        editClick(user._id)}}>Edytuj</button>
                </td>
            </tr>
        );
    });
    return (
        <div className="list">
            <table>
                <thead>
                    <tr>
                        <th colSpan="5">Zapisani Studenci</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="nameTR">
                        <td>Imie</td>
                        <td>Nazwisko</td>
                        <td>Miasto</td>
                        <td>Rodzaj kursu</td>
                        <td>Opcje</td>
                    </tr>
                    {liElements}
                </tbody>
            </table>
        </div>
    );
};
export default Table;