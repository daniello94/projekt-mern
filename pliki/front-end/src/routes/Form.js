import React from 'react';
import axios from 'axios';
import './Form.css';

const validate = (form) => {
    if (!form.name) {
        return "* Wpisz imie"
    } else if (!/^[^\s]*$/.test(form.name)){
        return "* Nie może zawierać pustych znaków"
    }else if(form.name.length < 3){
        return "* Pole imie jest żle wypełnine"
    };
    if(!form.username){
        return "* Wpisz Nazwisko "
    } else if (!/^[^\s]*$/.test(form.username)){
        return "* Nie może zawierać pustych znaków"
    }else if(form.username.length < 3){
        return "* Pole nazwisko jest źle wypełnine"
    };
    if(!form.city){
        return "* Wybierz miejsce kursu "
    };
    if(!form.course){
        return "* Wybierz rodzaj kursu "
    };
    return ""
};

 function Form(props) {
    const [error, setError] = React.useState(null)
    const [form, setForm] = React.useState({
        name: "",
        username: "",
        course: "",
        city: ""
    });

    const submitStudent = (e) => {
        e.preventDefault();
        const errorss = validate(form);
        if (errorss) {
            setError(errorss);
             e.preventDefault();
            return;
        }else{
            const { name, username, city, course } = form;
            axios.post('http://127.0.0.1:8080/api/student/add', { name, username, city, course })
                .then((res) => {
                    props.dataStudent();
                    setError(<span>Zostałeś zapisany</span>)
                    console.log(res.data);
                });
        }
    };

    let Test =(e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    {
        const { name, username, city, course } = form;
        
        return (
            <form >
                <p>{error}</p>
                <input type="text" onChange={Test} value={name} name="name" placeholder="Podaj swoje imię" /><br />
                <input type="text" name="username" value={username} onChange={Test} placeholder="Podaj swoje nazwisko" />
                <div>
                    <label> Wybierz miasto : <br />
                        <select name="city" value={city} onChange={Test}>
                            <option>Wybierz</option>
                            <option>Warszawa</option>
                            <option>Kraków</option>
                            <option>Online</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Rodzaj Kursu: <br />
                        <select name="course" value={course} onChange={Test}>
                            <option>Wybierz</option>
                            <option>Kurs Front End Developer</option>
                            <option>Kurs Full Stack Developer</option>
                        </select>
                    </label>
                </div>
                <button onClick={submitStudent} type="submit">Zapisz się</button>
            </form>
        );
    };
};
export default Form;