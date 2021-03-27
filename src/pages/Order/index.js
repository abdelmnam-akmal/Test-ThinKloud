import React from "react";
import {Formik, Form, Field} from "formik";
import $ from "jquery";
import "./order.scss";
class Order extends React.Component {

    state = {
        item: "-",
        q: 0,
        price: 0,
        addons: "-",
        total: 0,
        allTotal: 0,
        totalAdd: 0
    }

    onSubmit = (values) => {
        console.log(values);
    }

    componentDidMount() {
        // Special functions about select box
        $('.order .order-form .meal-select').attr('disabled', 'disabled');
        $('.order .order-form .category-select').on('change', function (event) {
            const selectVal = event.target.value;
            if (selectVal === '') {
                $('.order .order-form .meal-select').attr('disabled', 'disabled');
            } else {
                $('.order .order-form .meal-select').attr('disabled', false);
            }
            $('.order .order-form .meal-select .option-special').each(function () {
                const optionID = $(this).attr('id');
                if (selectVal === optionID) {
                    $('.order .order-form .meal-select .option-special').removeClass('active');
                    $('#' + optionID).addClass('active');
                } else if (selectVal === '') {
                    $('.order .order-form .meal-select .option-special').removeClass('active');
                }
            });
        });
    }

    render() {
        return (
                <div className="container">
                    <div className="order">
                        <Formik
                            initialValues={{name: '', meal: '', q: ''}}
                            onSubmit={this.onSubmit}>
                                {(props)=> {
                                    return <Form onSubmit={props.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 order-form">
                                                <ul className="list-unstyled list-order">
                                                    <li>
                                                        <label className="title-field">Category</label>
                                                        <Field className="meal-input category-select" name="name" component="select" required>
                                                            <option></option>
                                                            <option value="breakfast">Breakfast</option>
                                                            <option value="lunch">Lunch</option>
                                                            <option value="dinner">Dinner</option>
                                                        </Field>
                                                    </li>
                                                    <li>
                                                        <label className="title-field">meal</label>
                                                        <Field className="meal-input meal-select" name="meal" component="select" required>
                                                            <option></option>
                                                            <optgroup id="breakfast" label="Breakfast" className="option-special">
                                                                <option value="1" data-price="6">Eggs</option>
                                                                <option value="2" data-price="4">Bacon</option>
                                                                <option value="3" data-price="8">Sausages</option>
                                                                <option value="4" data-price="3">Fried Bread</option>
                                                            </optgroup>
                                                            <optgroup id="lunch" label="lunch" className="option-special">
                                                                <option value="5" data-price="10">Sandwich</option>
                                                                <option value="6" data-price="7">A Packet of Crisps</option>
                                                                <option value="7" data-price="13">Tuna Mayonnaise</option>
                                                                <option value="8" data-price="9">Chilli and Cheese</option>
                                                            </optgroup>
                                                            <optgroup id="dinner" label="dinner" className="option-special">
                                                                <option value="9" data-price="23">Roast Lamb</option>
                                                                <option value="10" data-price="11">Roast Potatos</option>
                                                                <option value="11" data-price="17">Meat and two veg</option>
                                                                <option value="12" data-price="22">Rice with slice of meat</option>
                                                            </optgroup>
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
                                                        <Field name="addons" type="checkbox" />
                                                        <label>Combo - add 2LE</label>
                                                    </div>
                                                    <div>
                                                        <Field name="addons" type="checkbox" />
                                                        <label>Spicy - add 1LE</label>
                                                    </div>
                                                </div>
                                                <div className="addOrder-btn">
                                                    <h4 className="d-block">Price {this.state.totalAdd} LE</h4>
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
                                    <td>{this.state.item}</td>
                                    <td>{this.state.q}</td>
                                    <td>{this.state.price}</td>
                                    <td>{this.state.addons}</td>
                                    <td>{this.state.total}</td>
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
                            <caption>Total {this.state.allTotal} LE</caption>
                        </table>
                    </div>
                    <div className="new-order-btn">
                        <button type="submit" className="btn btn-primary">New Order</button>
                    </div>
                </div>
        )
    }
}

export default Order;