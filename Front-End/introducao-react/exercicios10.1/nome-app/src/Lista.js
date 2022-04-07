import React from "react";

const Task = (value) => {
    return (
    <li key={value}>{value}</li>
    );
}
const tasks = ['fazer café', 'colocar leite', 'pegar copo', 'baunilha', 'chocolate', 'creme']

class Lista extends React.Component {
    render() {
        return (
            <ol>{tasks.map(elemento => Task(elemento))}</ol>
        )
    }
}

export default Lista;