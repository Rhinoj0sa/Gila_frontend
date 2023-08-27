import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import Card from 'react-bootstrap/Card';

const UserForm = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formikProps = {
        initialValues: {name: '', email: '', phone: '', subscribed: [], channels: []},
        validationSchema: Yup.object({
            name: Yup.string().required('Sorry, name is required'),
            email: Yup.string()
                .required('Sorry, email is required')
                .email('Needs to be an email'),
            phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Sorry, this is required'),
            subscribed: Yup.array().min(1, 'Please select at least one'),
            channels: Yup.array().min(1, 'Please select at least one')
        }),

        onSubmit: (values, {resetForm}) => {
            axios.post(`${process.env.REACT_APP_API_URL}/user`, values)
                .then(() => {
                    resetForm()
                    alert(`User ${values.name} created`)
                })
                .catch(err => {
                    console.log(err)
                    alert(`Error: ${err}`)
                })
        }
    }

    return <Card >
        <div className="container">
            <div className="col-md-12 mt-5">
                <Formik {...formikProps}>
                    {() => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" className="form-control"/>
                            <ErrorMessage name="name"/>
                            <hr className="mb-4"/>
                            <label htmlFor="email">E-mail</label>
                            <Field name="email" type="text" className="form-control"/>
                            <ErrorMessage name="email"/>
                            <hr className="mb-4"/>
                            <label htmlFor="email">Phone</label>
                            <Field name="phone" type="text" className="form-control"/>
                            <ErrorMessage name="phone"/>
                            <hr className="mb-4"/>
                            <div id={'checkbox-group'}>Subscribed</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <div>
                                    <label>
                                        <Field type="checkbox" name="subscribed" value="Sports"/>
                                        {' Sports'}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="subscribed" value="Finance"/>
                                        {' Finance'}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="subscribed" value="Films"/>
                                        {" Films"}
                                    </label>
                                </div>
                            </div>
                            <ErrorMessage name={'subscribed'}/>
                            <hr className="mb-4"/>
                            <div id={'checkbox-group'}>Channels</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                <div>
                                    <label>
                                        <Field type="checkbox" name="channels" value="SMS"/>
                                        {' SMS'}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="channels" value="Email"/>
                                        {' Email'}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <Field type="checkbox" name="channels" value="Push"/>
                                        {" Push Notification"}
                                    </label>
                                </div>
                            </div>
                            <ErrorMessage name={'channels'}/>
                            <hr className="mb-4"/>
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                            <hr className="mb-4"/>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </Card>
}

export default UserForm;