import { Formik, Form, Field } from "formik";
import "./meal.scss";


const onSubmit = function (values) {
    console.log(values);
}

function Meal() {
    return (
        <div className="meal">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 meal-form">
                        <div>
                            <Formik
                                initialValues={{name: '', price: '', description: '', category: ''}}
                                onSubmit={onSubmit}
                                >
                                {(props)=> {
                                    return <Form onSubmit={props.handleSubmit}>
                                        <ul className="list-unstyled list-form">
                                            <li>
                                                <label className="title-field">Name</label>
                                                <Field className="meal-input" name="name" type="text" required />
                                                <span className="astrisk">*</span>
                                            </li>
                                            <li>
                                                <label className="title-field">Price</label>
                                                <Field className="meal-input" name="price" type="number" required />
                                                <span className="astrisk">*</span>
                                            </li>
                                            <li>
                                                <label className="title-field">Description</label>
                                                <Field name="description" component="textarea" required />
                                            </li>
                                            <li>
                                                <label className="title-field">Category</label>
                                                <Field className="meal-input" name="category" component="select" required>
                                                    <option value="1">one</option>
                                                    <option value="2">two</option>
                                                    <option value="3">three</option>
                                                    <option value="4">four</option>
                                                </Field>
                                                <span className="astrisk">*</span>
                                            </li>
                                            <li>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </li>
                                        </ul>
                                    </Form>
                                }}
                            </Formik>
                        </div>
                    </div>
                    <div className="col-md-4 meal-image">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meal;