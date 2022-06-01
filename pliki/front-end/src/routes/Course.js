import React, { Component } from "react";
import axios from "axios";
import Table from "./Table";
import Form from "./Form";

class Course extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentUser: []
        };
    };
    componentDidMount = () => {
        this.dataStudent();
    };
    dataStudent = () => {
        console.log("test");
        axios.post('http://127.0.0.1:8080/api/student/all')
            .then(res => {
                this.setState({
                    studentUser: res.data
                });
            });
    };
    render() {
        return (
            <div><p>Wypełnij Formularz zgłoszeniowy</p>
                <Form dataStudent={this.dataStudent} />
                <Table arrayStudent={this.state.studentUser} dataStudent={this.dataStudent} />
            </div>
        )
    };
};
export default Course;