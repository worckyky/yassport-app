import s from './registration-form.module.scss'
import classnames from 'classnames'

import React from "react";
import {Formik, Field} from 'formik';

import Input from "../../../input/input";
import {DatePicker} from "antd";
import RadioButtons, {IRadioType} from "../../../radio-buttons/radio-buttons";
import AppIconArrowBtn from "../../../app-icons/app-icon-arrowBtn";
import Button from "../../../button/button";
import AppIconEmail from "../../../app-icons/app-icon-email";
import Link from "../../../link/link";
import stringCombiner from "../../../../helpers/stringCombiner";

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

    const genderOptions: IRadioType[] = [
        {
            key: 'Male',
            value: 'male',
        },
        {
            key: 'Female',
            value: 'female'
        }
    ]

    return (
        <div className={cn(s.registrationForm, extraStyles)}>
            <Formik
                initialValues={initialValues}
                // validate={values => {
                //     const errors: { email: string } = {
                //         email: '',
                //     };
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}
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
                      ...field
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} className={s.registrationFormContainer}>
                        <div className={s.registrationInputBlock}>
                            <Field placeholder={'First name'}
                                   name='firstName'
                                   type='text'
                                   width='full'
                                   required={true}
                                   component={Input}/>
                            <Field placeholder={'Last name'}
                                   name='lastName'
                                   type='text'
                                   width='full'
                                   required={true}
                                   component={Input}/>
                        </div>
                        <div className={s.registrationInputBlock}>
                            <Field extraStyles={s.registrationInputPicker}
                                   placeHolder={'Date of birth'}
                                   name='birth'
                                   type='date'
                                   width='full'
                                   component={Input}/>
                            <RadioButtons
                                extraStyles={s.registrationInputGender}
                                label={'Radio topic'}
                                name={'gender'}
                                options={genderOptions}/>
                        </div>
                        <div className={s.registrationInputBlock}>
                            <Field icon={<AppIconEmail/>}
                                   required={true}
                                   placeholder={'Email'}
                                   name='email'
                                   type='text'
                                   width='full'
                                   component={Input}/>
                        </div>
                        <div className={s.registrationInputBlock}>
                            <Field placeholder={'Password'}
                                   required={true}
                                   name='password'
                                   type='password'
                                   width='full'
                                   component={Input}/>
                            <Field placeholder={'Repeat password'}
                                   required={true}
                                   name='checkPassword'
                                   type='password'
                                   width='full'
                                   component={Input}/>
                        </div>
                        <div className={s.registrationFormErrorsBlock}>

                        </div>
                        {errors.password && touched.password && errors.password}
                        <div className={s.registrationFormBtnContainer}>
                            <Button btnType='submit'
                                    type='field-primary'
                                    size='big'>
                                <span className={s.mainExplore}>Register</span><AppIconArrowBtn/>
                            </Button>
                            <span className={s.registrationFormRules}>
                                {stringCombiner(
                                    [
                                        <span className={s.registrationFormRulesText}>By signing up, you agree to Yassport</span>,
                                        <Link href={'#'} extraClass={s.footerLink}>Privacy Policy</Link>,
                                        <br/>,
                                        <span className={s.registrationFormRulesText}>and</span>,
                                        <Link href={'#'} extraClass={s.footerLink}>Terms of Service</Link>
                                    ]
                                )}
                            </span>
                        </div>
                    </form>
                )}
            </Formik>
            <div className={s.registrationFormLogin}>
                Already have an account? <span className={s.registrationFormLoginClick}>Sign in</span>
            </div>

        </div>
    )
}

export default RegistrationForm
