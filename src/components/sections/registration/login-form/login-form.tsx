import {Formik, Field, FormikProps} from 'formik';
import s from './login-form.module.scss';
import * as yup from 'yup'
import Input from "../../../input/input";
import React, {useEffect, useRef, useState} from "react";
import AppIconArrowBtn from "../../../app-icons/app-icon-arrowBtn";
import Button from "../../../button/button";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {closeModal, selectOnOpen} from "../../../../store/slice/loginSlice";
import AppIconEmail from "../../../app-icons/app-icon-email";
import AppIconArrowLeft from "../../../app-icons/app-icon-arrowLeft";
import classnames from 'classnames'
const cn = classnames.bind(s);


interface IFormForgotType {
    email: string
}

interface IFormLoginType extends IFormForgotType {
    password: string,
}



const LoginForm = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const [onForgot, setOnForgotPassword] = useState(false)
    const loginRef = useRef<FormikProps<any>>(null);
    const forgotRef = useRef<FormikProps<any>>(null);
    const visible = useAppSelector(selectOnOpen);

    useEffect(() => {
        forgotRef.current && forgotRef.current.resetForm()
        loginRef.current && loginRef.current.resetForm()
    },[visible])

    const validationLoginSchema = yup.object({
        password: yup.string().required('Password is required'),
        email: yup.string().email('Email must be valid').required('Email is required'),
    })

    const validationForgotSchema = yup.object({
        email: yup.string().email('Email must be valid').required('Email is required'),
    })

    const initialLoginValues: IFormLoginType = {
        password: '',
        email: '',
    }

    const initialForgetValues: IFormForgotType = {
        email: '',
    }


    const handleOnRegister = () => {
        router.push(`/registration`)
        dispatch(closeModal())
    }


    const changeForm = () => {
        if (!onForgot) {
            return (
                <Formik initialValues={initialLoginValues}
                        validateOnBlur={true}
                        validateOnChange={false}
                        innerRef={loginRef && loginRef}
                        validationSchema={validationLoginSchema}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                >
                    {
                        ({
                             values,
                             errors,
                             touched,
                             handleSubmit,
                             isSubmitting,
                         }) => (
                            <form onSubmit={handleSubmit} className={s.loginFormContainer}>
                                <Field placeholder={'Email'}
                                       name='email'
                                       type='text'
                                       width='full'
                                       icon={<AppIconEmail/>}
                                       error={errors.email}
                                       touched={touched.email}
                                       required={true}
                                       component={Input}/>
                                <Field placeholder={'Password'}
                                       name='password'
                                       type='password'
                                       width='full'
                                       error={errors.password}
                                       touched={touched.password}
                                       required={true}
                                       component={Input}/>
                                <div className={s.loginFormErrors}>
                                    {errors.email && <span>{touched.email && errors.email}</span>}
                                    {errors.password && <span>{touched.password && errors.password}</span>}
                                </div>
                                <Button btnType='submit'
                                        extraStyles={s.loginButton}
                                        type='field-primary'
                                        size='big'>
                                    <span>Enter</span><AppIconArrowBtn/>
                                </Button>
                            </form>
                        )
                    }
                </Formik>
            )
        } else {
            return (
                <Formik initialValues={initialForgetValues}
                        validateOnBlur={false}
                        validateOnChange={false}
                        innerRef={forgotRef && forgotRef}
                        validationSchema={validationForgotSchema}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                >
                    {
                        ({
                             values,
                             errors,
                             touched,
                             handleSubmit,
                             isSubmitting,
                         }) => (
                            <form onSubmit={handleSubmit} className={s.loginFormContainer}>
                                <Field placeholder={'Enter your email'}
                                       name='email'
                                       type='text'
                                       width='full'
                                       icon={<AppIconEmail/>}
                                       error={errors.email}
                                       touched={touched.email}
                                       required={true}
                                       component={Input}/>
                                <div className={s.loginFormErrors}>
                                    {errors.email && <span>{touched.email && errors.email}</span>}
                                </div>
                                <Button btnType='submit'
                                        extraStyles={s.loginButton}
                                        type='field-primary'
                                        size='big'>
                                    <span>Send</span><AppIconArrowBtn/>
                                </Button>
                            </form>
                        )
                    }
                </Formik>

            )
        }
    }

    const onForgotForm = (form: 'login' | 'forgot') => {
        switch (form) {
            case "forgot":
                forgotRef.current && forgotRef.current.resetForm()
                setOnForgotPassword(false)
                break;
            case "login":
                loginRef.current && loginRef.current.resetForm()
                setOnForgotPassword(true)
                break;
        }
    }

    return (
        <div className={s.loginForm}>
            <div className={cn(s.loginFormTitleContainer, s.loginFormTitle)}>
                {onForgot && <span onClick={() => onForgotForm('forgot')}><AppIconArrowLeft/></span>} <h2>SIGN IN</h2>
            </div>
            {changeForm()}
            <div className={s.loginFormFooter}>
                <span className={s.loginFormFooterForgot} onClick={() => onForgotForm('login')}>Forgot password?</span>
                <span className={s.loginFormFooterRegister} onClick={handleOnRegister}>Sign up</span>
            </div>
        </div>
    )
}

export default LoginForm;
