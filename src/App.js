import './App.css'
import { data } from './data'
import { Container, Form, FormControl, InputGroup, Table } from "react-bootstrap";
import { useState } from "react";


function App() {

    const [users, setUsers] = useState(data);
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState("ASC");

    const sorting = ( col ) => {
        if (order === 'ASC') {
            const sorted = [...data].sort(( a, b ) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setUsers(sorted);
        }
    }


    return (
        <div className="App">
            <Container>
                <h1 className='text-center mt-4'>Contact Keeper</h1>
                <Form>
                    <InputGroup className='my-3'>
                        <FormControl onChange={ ( e ) => setSearch(e.target.value) }
                                     placeholder='Search contacts'>
                        </FormControl>
                    </InputGroup>
                </Form>


                <Table striped hover>
                    <thead>
                    <tr>
                        <th onClick={ () => sorting('first_name') }>First Name</th>
                        <th onClick={ () => sorting('last_name') }>Last Name</th>
                        <th onClick={ () => sorting('email') }>Email</th>
                        <th onClick={ () => sorting('phone') }>Phone</th>
                    </tr>
                    </thead>

                    <tbody>
                    { users
                        .filter(( el ) => {
                            return search.toLowerCase() === "" ? el :
                                el.first_name.toLowerCase().includes(search.toLowerCase())
                        })
                        .map(( el ) => <tr key={ el.id }>
                            <td>{ el.first_name }</td>
                            <td>{ el.last_name }</td>
                            <td>{ el.email }</td>
                            <td>{ el.phone }</td>
                        </tr>)
                    }
                    <tr>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default App;
