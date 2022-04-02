import s from './registration-form.module.scss'
import classnames from 'classnames'

import React from "react";
import {Formik} from 'formik';
import Input from "../../../input/input";
import {DatePicker} from "antd";
import RadioButtons from "../../../radio-buttons/radio-buttons";

const cn = classnames.bind(s);


type IRegistrationFormType = {
    extraStyles?: string
}

type IFormValuesType = {
    firstName: string,
    lastName: string,
    birth: string,
    gender: string,
    email: string,
    password: string,
    checkPassword: string,
}

const RegistrationForm: React.FC<IRegistrationFormType> = ({extraStyles}) => {

    const initialValues: IFormValuesType = {
        firstName: '',
        lastName: '',
        birth: '',
        gender: '',
        email: '',
        password: '',
        checkPassword: '',
    }

    return (
        <div className={cn(s.registrationForm, extraStyles)}>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors: { email: string } = {
                        email: '',
                    };
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} className={s.registrationFormContainer}>
                        <div className={s.registrationInputBlock}>
                            <Input
                                onChange={handleChange}
                                placeHolder={'First name'}
                                width='full'
                                value={values.firstName}
                                type='text'/>
                            <Input
                                onChange={handleChange}
                                placeHolder={'Last name'}
                                width='full'
                                value={values.lastName}
                                type='text'/>
                        </div>
                        <div className={s.registrationInputBlock}>
                            <Input
                                onChange={handleChange}
                                placeHolder={'Date of birth'}
                                width='full'
                                value={values.birth}
                                type='date'/>
                            <RadioButtons
                                onChange={handleChange}
                                radioData={[
                                      {
                                          id: 'gender-1',
                                          name: 'gender',
                                          value: 'Male'
                                      },
                                      {
                                          id: 'gender-1',
                                          name: 'gender',
                                          value: 'Male'
                                      }
                                ]}/>
                        </div>


                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default RegistrationForm
