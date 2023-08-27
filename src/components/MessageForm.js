import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import axios from "axios";

const MessageForm = () => {
    const formikProps = {
        initialValues:{message:'',category:''},
        validationSchema:Yup.object({
            message:Yup.string().min(10,'Sorry, message is too short').required('Sorry, message is required'),
            category:Yup.string().required('Sorry, category is required')
        }),

        onSubmit: (values,{resetForm}) => {
            axios.post(`${process.env.REACT_APP_API_URL}/messages`, values)
                .then(() => {
                    resetForm()
                    alert(`Message created`)
                })
                .catch(err => {
                    console.log(err)
                    alert(`Error: ${err}`)
                })
        }
    }

    return <div className="container">
            <div className="col-md-12 mt-5">
                <Formik {...formikProps}>
                    { () => (
                        <Form>
                            <label htmlFor="message">Message</label>
                            <Field name="message" type="text" className="form-control"/>
                             <ErrorMessage name="message"/>
                            <br/>
                            <hr className="mb-4" />
                            <label htmlFor="category">Category</label>
                            <Field
                                as="select"
                                name="category"
                                className="custom-control"
                            >
                                <option value="Finance">Finance</option>
                                <option value="Sports">Sports</option>
                                <option value="Films">Films</option>
                            </Field>
                            <ErrorMessage name={'category'}/>
                        <br/>
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
}

export default MessageForm;