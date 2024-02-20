import LSBlock from '../components/Signup/LeftSideBlock';
import Form from '../components/Signup/Form';


function Signup() {
    return (
        <>
            <div className="container text-center">
                <div class="row">
                    <div class="col">
                        <LSBlock />
                    </div>
                    <div class="col">
                        <Form />
                    </div>
                </div>
            </div>
        </>);
};


export default Signup;