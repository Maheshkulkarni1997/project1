import { useFormStatus } from "react-dom"

function MyForm() {
    const handleSubmit = async () => {
        await new Promise(
            res => setTimeout(res, 2000)
        );
        console.log("submit");
    }

    function CustomerForm() {


        return (
            <div>
                <input type="text" name="username" placeholder="Username" />
                <br />
                <br />
                <input type="text" name="password" placeholder="Password" />
                <br />
                <br />
                <CustomButton />
            </div>
        )
    }

    return (
        <div>
            <form action={handleSubmit}>
                <CustomerForm />
            </form>
        </div>

    );
}



function CustomButton() {
    const { pending } = useFormStatus();
    return <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
    </button>
}


export default MyForm;
