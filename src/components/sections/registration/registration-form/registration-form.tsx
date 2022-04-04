import s from './registration-form.module.scss'
import classnames from 'classnames'

import React from "react";
import {Formik, Field, FormikErrors} from 'formik';

import Input from "../../../input/input";
import {DatePicker} from "antd";
import RadioButtons, {IRadioType} from "../../../radio-buttons/radio-buttons";
import AppIconArrowBtn from "../../../app-icons/app-icon-arrowBtn";
import Button from "../../../button/button";
import AppIconEmail from "../../../app-icons/app-icon-email";
import Link from "../../../link/link";
import stringCombiner from "../../../../helpers/stringCombiner";
import * as yup from 'yup'
import {useAppDispatch} from "../../../../store/hooks";
import {openModal} from "../../../../store/slice/loginSlice";

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

    const dispatch = useAppDispatch()

    const validationSchema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Email must be valid').required('Email is required'),
        password: yup
            .string()
            .required("Please enter your password")
            .min(8, 'Password is too short - should be 8 chars minimum.'),
        checkPassword: yup.string().oneOf([], "Password doesn't match")
    })


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
                validateOnBlur={true}
                validateOnChange={false}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }
            }
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
                    <form onSubmit={handleSubmit} className={s.registrationFormContainer} >
                        <div className={s.registrationInputBlock}>
                            <Field placeholder={'First name'}
                                   name='firstName'
                                   type='text'
                                   width='full'
                                   error={errors.firstName}
                                   touched={touched.firstName}
                                   required={true}
                                   component={Input}/>
                            <Field placeholder={'Last name'}
                                   name='lastName'
                                   type='text'
                                   width='full'
                                   error={errors.lastName}
                                   touched={touched.lastName}
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
                                   error={errors.email}
                                   touched={errors.email}
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
                                   error={errors.password}
                                   touched={errors.password}
                                   width='full'
                                   component={Input}/>
                            <Field placeholder={'Repeat password'}
                                   required={true}
                                   name='checkPassword'
                                   type='password'
                                   error={errors.checkPassword}
                                   touched={errors.checkPassword}
                                   width='full'
                                   component={Input}/>
                        </div>
                        <div className={s.registrationFormErrorsBlock}>
                            {errors.firstName && <span>{touched.firstName && errors.firstName}</span>}
                            {errors.lastName && <span>{touched.lastName && errors.lastName}</span>}
                            {errors.email && <span>{touched.email && errors.email}</span>}
                            {errors.password && <span>{touched.password && errors.password}</span>}
                            {errors.checkPassword && <span>{touched.checkPassword && errors.checkPassword}</span>}
                        </div>
                        <div className={s.registrationFormBtnContainer}>
                            <Button btnType='submit'
                                    type='field-primary'
                                    size='big'>
                                <span className={s.mainExplore}>Register</span><AppIconArrowBtn/>
                            </Button>
                            <span className={s.registrationFormRules}>
                                {stringCombiner(
                                    [
                                        <span key={'1'} className={s.registrationFormRulesText}>By signing up, you agree to Yassport</span>,
                                        <Link key={'2'} href={'#'} extraClass={s.footerLink}>Privacy Policy</Link>,
                                        <br key={'3'} />,
                                        <span key={'4'} className={s.registrationFormRulesText}>and</span>,
                                        <Link key={'5'} href={'#'} extraClass={s.footerLink}>Terms of Service</Link>
                                    ]
                                )}
                            </span>
                        </div>
                    </form>
                )}
            </Formik>
            <div className={s.registrationFormLogin}>
                Already have an account? <span onClick={() => dispatch(openModal())} className={s.registrationFormLoginClick}>Sign in</span>
            </div>

        </div>
    )
}

export default RegistrationForm;
