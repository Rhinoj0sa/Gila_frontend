import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const MessageForm = (props) => {
    const formikProps = {

        initialValues:{message:'',category:''},
        validationSchema:Yup.object({
            message:Yup.string().min(10,'Sorry, message is too short').required('Sorry, message is required'),
            category:Yup.string().required('Sorry, category is required')
        }),
        onSubmit: values => {
            console.log(`values in FormThree: ${JSON.stringify(values)}`)
            props.showData(values)
        }
    }

    return(
        <div className="container">
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
                            {/*<p>{JSON.stringify(formik.values)}</p>*/}
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>)
}

export default MessageForm;