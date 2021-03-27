import React from "react";
import {Formik, Form, Field} from "formik";
import "./order.scss";

const onSumbit = function (values) {
    console.log(values);
}
class Order extends React.Component {
    render() {
        return (
                <div className="container">
                    <div className="order">
                        <Formik
                            initialValues={{name: '', meal: '', q: ''}}
                            onSubmit={onSumbit}>
                                {(props)=> {
                                    return <Form onSubmit={props.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 order-form">
                                                <ul className="list-unstyled list-order">
                                                    <li>
                                                        <label className="title-field">Category</label>
                                                        <Field className="meal-input" name="name" component="select" required>
                                                            <option></option>
                                                            <option value="breakfast">Breakfast</option>
                                                            <option value="lunch">Lunch</option>
                                                            <option value="dinner">Dinner</option>
                                                            <option vlaue="fast meals">Fast Meals</option>
                                                        </Field>
                                                    </li>
                                                    <li>
                                                        <label className="title-field">meal</label>
                                                        <Field className="meal-input" name="meal" component="select" required>
                                                            <option></option>
                                                            {}
                                                        </Field>
                                                    </li>
                                                    <li>
                                                        <label className="title-field">q</label>
                                                        <Field className="meal-input" name="q" type="number" required />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 submit-order">
                                                <div className="check-order">
                                                    <div>
                                                        <Field name="addMeal1" type="checkbox" />
                                                        <label>Combo - add 2LE</label>
                                                    </div>
                                                    <div>
                                                        <Field name="addMeal2" type="checkbox" />
                                                        <label>Spicy - add 1LE</label>
                                                    </div>
                                                </div>
                                                <div className="addOrder-btn">
                                                    <h4 className="d-block">Price {} LE</h4>
                                                    <button className="btn btn-primary d-block" type="submit">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                }}
                        </Formik>
                    </div>
                    <div className="table-cont">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Q</th>
                                    <th>Price</th>
                                    <th>Addons</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="special">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tfoot>
                            <caption>Total {} LE</caption>
                        </table>
                    </div>
                    <div class="new-order-btn">
                        <button type="submit" className="btn btn-primary">New Order</button>
                    </div>
                </div>
        )
    }
}

export default Order;