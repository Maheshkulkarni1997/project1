import { useActionState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export function LoginPage() {


    function handleSubmit() {
        return (
            console.log("handleSubmit")
        )
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined);

    return (
        <div>
            <h2>User Action Hook </h2>

            <form action={action}>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name address</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}



