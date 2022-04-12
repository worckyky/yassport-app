import s from './registration-form.module.scss'
import classnames from 'classnames'

import React, {useState} from "react";
import {Formik, Field, FormikErrors} from 'formik';

import Input from "../../../input/input";
import {DatePicker, Modal} from "antd";
import RadioButtons, {IRadioType} from "../../../radio-buttons/radio-buttons";
import AppIconArrowBtn from "../../../app-icons/app-icon-arrowBtn";
import Button from "../../../button/button";
import AppIconEmail from "../../../app-icons/app-icon-email";
import CustomLink from "../../../link/link";
import stringCombiner from "../../../../helpers/stringCombiner";
import * as yup from 'yup'
import {useAppDispatch} from "../../../../store/hooks";
import {openModal} from "../../../../store/slice/loginSlice";
import {authUser, IFormValuesType} from "../../../../store/slice/authSlice";
import AppIconCloseModalSmall from "../../../app-icons/app-icon-closeModalSmall";
import {EDeviceType, useWindowSize} from "../../../../helpers/device-helper";
import {useRouter} from "next/router";

const cn = classnames.bind(s);


type IRegistrationFormType = {
    extraStyles?: string
}




const RegistrationForm: React.FC<IRegistrationFormType> = ({extraStyles}) => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const device = useWindowSize();
    const [error, setError] = useState('')
    const [visible, setVisible] = useState(false);
    const condition = [EDeviceType.MOBILE, EDeviceType.TABLET].includes(device as EDeviceType)

    const onSuccessClose = () => {
        setVisible(false);
        router.push('/');
    }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Email must be valid').required('Email is required'),
        password: yup
            .string()
            .required("Please enter your password")
            .min(8, 'Password is too short - should be 8 chars minimum.'),
        checkPassword: yup.string().oneOf([yup.ref('password'), null], "Password doesn't match")
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
                    const {birth,email,gender,lastName,password,firstName} = values
                    console.log(email)
                    dispatch(authUser({
                        birth,
                        email,
                        gender,
                        lastName,
                        password,
                        firstName
                    })).then((e) => {
                        console.log(e)
                        if (e.payload?.error?.email[0]) {
                            setError(e.payload.error.email[0])
                            setSubmitting(false);
                            return;
                        } else {
                            setVisible(true);
                            setSubmitting(false);
                        }
                    })
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
                      dirty,
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
                            {error && <span>{error}</span>}
                            {errors.firstName && <span>{touched.firstName && errors.firstName}</span>}
                            {errors.lastName && <span>{touched.lastName && errors.lastName}</span>}
                            {errors.email && <span>{touched.email && errors.email}</span>}
                            {errors.password && <span>{touched.password && errors.password}</span>}
                            {errors.checkPassword && <span>{touched.checkPassword && errors.checkPassword}</span>}
                        </div>
                        <div className={s.registrationFormBtnContainer}>
                            <Button btnType='submit'
                                    disabled={isSubmitting}
                                    type='field-primary'
                                    size='big'>
                                <span className={s.mainExplore}>Register</span><AppIconArrowBtn/>
                            </Button>
                            <span className={s.registrationFormRules}>
                                {stringCombiner(
                                    [
                                        <span key={'1'} className={s.registrationFormRulesText}>By signing up, you agree to Yassport</span>,
                                        <CustomLink key={'2'} href={'#'} extraClass={s.footerLink}>Privacy Policy</CustomLink>,
                                        <br key={'3'} />,
                                        <span key={'4'} className={s.registrationFormRulesText}>and</span>,
                                        <CustomLink key={'5'} href={'#'} extraClass={s.footerLink}>Terms of Service</CustomLink>
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
            <Modal
                centered
                visible={visible}
                onCancel={() => onSuccessClose()}
                width={condition ? '100%' : 400}
                footer={null}
                closeIcon={<AppIconCloseModalSmall/>}
            >
                <div className={s.registrationSuccess} >
                    <img src="/img/rocket.png" alt="Success!"/>
                    <h2>Success!</h2>
                </div>
            </Modal>

        </div>
    )
}

export default RegistrationForm;
