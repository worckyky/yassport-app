
import s from './app-animated-logo.module.scss'
import classnames from 'classnames'
import React from "react";
const cn = classnames.bind(s);

type IAnimatedLogoType = {
    extraStyles?: string
    color?: string
}

const AppAnimatedLogo: React.FC<IAnimatedLogoType> = ({extraStyles,color= "#1E1E1E"}) => {
    return (
        <div className={cn(s.animatedLogo, extraStyles)}>
            <svg className={s.animatedLogoWords} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M118.739 72.8645L113.031 68.0098L109.106 67.1206L109.414 65.7626L113.338 66.6519L120.585 64.717L120.244 66.2241L114.395 67.5972L119.081 71.3574L118.739 72.8645Z" fill="#DDBE90"/>
                <path d="M112.614 74.6642C113.386 75.0358 113.987 75.5172 114.415 76.1084C114.853 76.704 115.102 77.3503 115.163 78.0474C115.219 78.7537 115.086 79.4424 114.763 80.1133C114.445 80.7751 114.026 81.281 113.506 81.631C112.987 81.981 112.454 82.1715 111.907 82.2026L113.286 82.8661L112.675 84.1345L105.12 80.4984L105.73 79.23L107.137 79.9068C106.815 79.4463 106.626 78.8971 106.571 78.2592C106.521 77.635 106.652 76.9965 106.967 76.344C107.289 75.673 107.747 75.146 108.339 74.763C108.931 74.3799 109.6 74.1759 110.348 74.151C111.096 74.126 111.851 74.2971 112.614 74.6642ZM109.522 81.0547C110.092 81.3289 110.643 81.4529 111.177 81.4266C111.71 81.4003 112.182 81.2427 112.593 80.9536C113.008 80.6782 113.329 80.3061 113.555 79.8373C113.78 79.3686 113.876 78.8881 113.841 78.3959C113.806 77.9037 113.633 77.441 113.32 77.0077C113.008 76.5744 112.567 76.2207 111.997 75.9464C111.418 75.6677 110.857 75.5393 110.315 75.5612C109.781 75.5875 109.307 75.7384 108.891 76.0138C108.485 76.2937 108.169 76.668 107.943 77.1367C107.718 77.6055 107.622 78.086 107.657 78.5782C107.697 79.084 107.873 79.5535 108.185 79.9868C108.506 80.4245 108.952 80.7804 109.522 81.0547Z" fill="#DDBE90"/>
                <path d="M102.444 85.7183C102.824 85.2 103.251 84.7985 103.725 84.5138C104.208 84.2351 104.693 84.0911 105.18 84.0817C105.676 84.0783 106.139 84.215 106.568 84.4918L105.718 85.6518C105.356 85.4375 104.966 85.3918 104.547 85.5147C104.122 85.6458 103.741 85.9418 103.403 86.4025C103.09 86.8303 102.937 87.2369 102.945 87.6224C102.954 88.0079 103.102 88.3062 103.39 88.5173C103.686 88.7344 104 88.7625 104.333 88.6018C104.674 88.4471 105.117 88.1454 105.661 87.6967C106.16 87.2914 106.593 86.9765 106.96 86.7522C107.329 86.5421 107.73 86.4183 108.162 86.3809C108.596 86.3578 109.031 86.5061 109.467 86.8257C109.813 87.0789 110.054 87.414 110.191 87.8307C110.329 88.2474 110.341 88.7053 110.228 89.2043C110.123 89.7094 109.893 90.2046 109.537 90.69C108.988 91.4387 108.356 91.9046 107.64 92.0879C106.924 92.2712 106.224 92.1381 105.542 91.6886L106.365 90.5656C106.737 90.8003 107.127 90.8644 107.533 90.7579C107.934 90.6596 108.294 90.3925 108.614 89.9565C108.91 89.5534 109.058 89.1692 109.061 88.804C109.063 88.4388 108.924 88.1537 108.644 87.9486C108.422 87.7858 108.186 87.7201 107.935 87.7514C107.687 87.7969 107.439 87.8935 107.192 88.0411C106.946 88.2029 106.629 88.4379 106.238 88.7462C105.751 89.1351 105.33 89.4335 104.975 89.6414C104.629 89.8553 104.249 89.9758 103.838 90.0027C103.42 90.0379 103.002 89.9088 102.585 89.6155C102.214 89.3442 101.957 88.9971 101.811 88.5743C101.666 88.1516 101.645 87.6877 101.75 87.1826C101.857 86.6918 102.088 86.2037 102.444 85.7183Z" fill="#DDBE90"/>
                <path d="M97.1458 92.9297C97.6132 92.4887 98.1059 92.1711 98.6238 91.9769C99.1488 91.7901 99.6519 91.7362 100.133 91.8151C100.621 91.9015 101.051 92.1196 101.424 92.4696L100.378 93.4566C100.061 93.1804 99.6854 93.0649 99.2511 93.11C98.8095 93.1621 98.3809 93.3841 97.9654 93.7761C97.5796 94.1401 97.3559 94.5124 97.2943 94.8931C97.2328 95.2737 97.3245 95.5939 97.5695 95.8536C97.8215 96.1206 98.1257 96.2053 98.4821 96.1074C98.8455 96.0169 99.3353 95.8003 99.9514 95.4574C100.516 95.1491 100.999 94.9178 101.4 94.7635C101.801 94.6236 102.218 94.5744 102.649 94.6158C103.081 94.6717 103.482 94.8962 103.853 95.2894C104.147 95.601 104.324 95.9742 104.383 96.4088C104.443 96.8435 104.372 97.2961 104.17 97.7664C103.976 98.2442 103.66 98.6896 103.222 99.1026C102.547 99.7397 101.841 100.084 101.103 100.134C100.366 100.185 99.7023 99.9275 99.1126 99.362L100.125 98.4065C100.449 98.7045 100.82 98.838 101.239 98.8069C101.651 98.7828 102.054 98.5852 102.447 98.2142C102.811 97.8712 103.027 97.5203 103.095 97.1615C103.163 96.8027 103.078 96.4972 102.84 96.2449C102.651 96.0446 102.43 95.9372 102.178 95.9226C101.926 95.9225 101.665 95.9726 101.395 96.073C101.124 96.1878 100.769 96.3615 100.33 96.594C99.7799 96.8883 99.3117 97.1056 98.9252 97.2459C98.5457 97.3936 98.151 97.4435 97.7411 97.3955C97.3238 97.3545 96.9364 97.152 96.579 96.7881C96.264 96.4542 96.0732 96.0662 96.0067 95.6241C95.9402 95.182 96.0041 94.7221 96.1984 94.2443C96.3922 93.7809 96.708 93.3427 97.1458 92.9297Z" fill="#DDBE90"/>
                <path d="M95.5777 104.492C95.5845 105.045 95.4355 105.595 95.1309 106.142C94.8226 106.703 94.3568 107.168 93.7332 107.536C93.0921 107.915 92.4217 108.104 91.7219 108.102C91.0134 108.106 90.3438 107.915 89.7132 107.53C89.0877 107.153 88.5571 106.595 88.1213 105.858C87.6907 105.129 87.4561 104.391 87.4174 103.643C87.3788 102.896 87.5296 102.209 87.8698 101.581C88.2011 100.959 88.6874 100.459 89.3285 100.08C89.9433 99.7167 90.5682 99.5312 91.2033 99.5233C91.8348 99.5293 92.3954 99.6661 92.8851 99.9336L90.0758 95.178L91.2746 94.4698L97.5625 105.114L96.3637 105.822L95.5777 104.492ZM89.3464 105.134C89.6681 105.678 90.058 106.088 90.5163 106.362C90.9745 106.636 91.4546 106.767 91.9568 106.755C92.4502 106.748 92.9208 106.612 93.3687 106.348C93.8078 106.088 94.1514 105.737 94.3993 105.294C94.6436 104.866 94.7581 104.378 94.7426 103.83C94.7235 103.296 94.5557 102.762 94.2392 102.226C93.9175 101.681 93.525 101.268 93.0616 100.984C92.5946 100.715 92.1118 100.58 91.6133 100.578C91.1111 100.591 90.6405 100.727 90.2014 100.986C89.7535 101.25 89.4074 101.597 89.163 102.026C88.9151 102.468 88.8007 102.957 88.8197 103.49C88.844 104.033 89.0196 104.581 89.3464 105.134Z" fill="#DDBE90"/>
                <path d="M80.6335 105.25C81.3824 105.013 82.117 104.968 82.8373 105.115C83.548 105.264 84.1768 105.595 84.7237 106.107C85.264 106.631 85.6649 107.307 85.9263 108.134C86.1846 108.951 86.2371 109.726 86.0838 110.459C85.9239 111.205 85.5898 111.84 85.0817 112.364C84.5766 112.899 83.9448 113.286 83.1862 113.526C82.4276 113.765 81.6881 113.812 80.9677 113.665C80.2505 113.528 79.6184 113.204 79.0714 112.692C78.5147 112.184 78.1057 111.516 77.8443 110.689C77.5829 109.863 77.537 109.075 77.7067 108.326C77.8697 107.59 78.2086 106.953 78.7234 106.416C79.2382 105.878 79.8749 105.49 80.6335 105.25ZM81.0026 106.417C80.526 106.568 80.114 106.821 79.7665 107.177C79.419 107.533 79.1896 107.975 79.0782 108.502C78.9571 109.032 78.998 109.619 79.201 110.26C79.404 110.902 79.7026 111.407 80.097 111.774C80.4913 112.142 80.9265 112.368 81.4027 112.453C81.8819 112.547 82.3598 112.519 82.8363 112.368C83.3226 112.215 83.7346 111.961 84.0724 111.608C84.4035 111.268 84.6198 110.836 84.7215 110.312C84.8232 109.788 84.7725 109.205 84.5695 108.563C84.3635 107.911 84.073 107.399 83.6981 107.025C83.3135 106.654 82.8865 106.42 82.417 106.323C81.9506 106.235 81.4791 106.266 81.0026 106.417Z" fill="#DDBE90"/>
                <path d="M73.8682 114.857C73.7156 115.374 73.4431 115.803 73.0506 116.146C72.648 116.491 72.1259 116.724 71.4842 116.844L71.2201 115.43L71.5811 115.362C73.1152 115.076 73.7268 114.1 73.416 112.436L72.5788 107.954L73.9475 107.698L75.4869 115.94L74.1183 116.196L73.8682 114.857Z" fill="#DDBE90"/>
                <path d="M66.8405 116.303L66.5356 111.37C66.5104 110.963 66.406 110.678 66.2222 110.516C66.0391 110.363 65.7337 110.301 65.3061 110.327L64.2829 110.39L64.2102 109.214L65.4625 109.137C66.2362 109.089 66.8275 109.231 67.2364 109.564C67.6453 109.896 67.875 110.47 67.9253 111.284L68.2302 116.217L69.3144 116.15L69.3852 117.295L68.301 117.362L68.4312 119.47L67.0416 119.556L66.9113 117.448L64.7275 117.583L64.6567 116.438L66.8405 116.303Z" fill="#DDBE90"/>
                <path d="M48.0114 118.683L52.8879 112.993L53.792 109.072L55.1488 109.384L54.2446 113.306L56.1519 120.56L54.646 120.213L53.2952 114.359L49.5173 119.03L48.0114 118.683Z" fill="#DDBE90"/>
                <path d="M46.2446 112.542C45.8702 113.313 45.3866 113.911 44.7938 114.338C44.1966 114.773 43.5493 115.02 42.852 115.078C42.1455 115.132 41.4573 114.996 40.7876 114.671C40.127 114.35 39.6227 113.929 39.2746 113.408C38.9265 112.887 38.738 112.354 38.7089 111.806L38.0403 113.183L36.7742 112.567L40.4383 105.026L41.7045 105.641L41.0224 107.045C41.4841 106.725 42.034 106.538 42.6721 106.485C43.2965 106.437 43.9345 106.571 44.5859 106.888C45.2556 107.213 45.7809 107.673 46.1617 108.266C46.5426 108.859 46.7441 109.53 46.7663 110.278C46.7885 111.026 46.6146 111.78 46.2446 112.542ZM39.8657 109.426C39.5893 109.994 39.4633 110.546 39.4876 111.079C39.5119 111.613 39.6678 112.085 39.9554 112.497C40.2293 112.914 40.6002 113.236 41.0681 113.463C41.536 113.69 42.0161 113.787 42.5084 113.755C43.0008 113.722 43.4641 113.55 43.8985 113.239C44.333 112.929 44.6884 112.489 44.9647 111.92C45.2456 111.342 45.3761 110.782 45.3562 110.239C45.3319 109.706 45.1828 109.231 44.9089 108.814C44.6305 108.407 44.2574 108.089 43.7895 107.862C43.3216 107.634 42.8414 107.537 42.3491 107.57C41.8432 107.608 41.373 107.782 40.9386 108.093C40.4997 108.412 40.1421 108.857 39.8657 109.426Z" fill="#DDBE90"/>
                <path d="M35.2481 102.333C35.765 102.715 36.1649 103.144 36.4479 103.619C36.7248 104.103 36.8671 104.588 36.8747 105.076C36.8763 105.571 36.7379 106.034 36.4595 106.462L35.3026 105.607C35.5183 105.247 35.5654 104.857 35.444 104.437C35.3144 104.012 35.0199 103.63 34.5604 103.29C34.1338 102.975 33.7277 102.821 33.3422 102.828C32.9566 102.835 32.6578 102.982 32.4457 103.269C32.2275 103.564 32.1982 103.879 32.3577 104.212C32.5112 104.554 32.8113 104.997 33.258 105.543C33.6615 106.044 33.9748 106.478 34.1978 106.846C34.4065 107.215 34.5288 107.616 34.5646 108.049C34.5861 108.483 34.4363 108.918 34.1151 109.353C33.8606 109.697 33.5247 109.937 33.1074 110.073C32.6902 110.209 32.2323 110.219 31.7337 110.104C31.229 109.998 30.7346 109.766 30.2505 109.408C29.5039 108.857 29.0402 108.223 28.8595 107.506C28.6789 106.789 28.8145 106.09 29.2665 105.41L30.3865 106.237C30.1505 106.608 30.085 106.997 30.19 107.404C30.2867 107.806 30.5526 108.167 30.9874 108.488C31.3894 108.785 31.7731 108.935 32.1383 108.939C32.5035 108.942 32.7891 108.804 32.9952 108.525C33.1588 108.304 33.2254 108.068 33.195 107.817C33.1504 107.568 33.0547 107.32 32.908 107.072C32.7471 106.827 32.5132 106.508 32.2064 106.117C31.8193 105.628 31.5224 105.206 31.3158 104.85C31.1031 104.503 30.9841 104.123 30.9586 103.711C30.925 103.293 31.0556 102.876 31.3504 102.46C31.6231 102.091 31.9711 101.834 32.3944 101.69C32.8177 101.546 33.2817 101.528 33.7864 101.634C34.2768 101.743 34.764 101.976 35.2481 102.333Z" fill="#DDBE90"/>
                <path d="M28.0707 97.0154C28.51 97.4844 28.8258 97.9782 29.0181 98.4969C29.203 99.0225 29.2551 99.5258 29.1744 100.007C29.0863 100.495 28.8666 100.924 28.5153 101.295L27.5321 100.245C27.8094 99.9295 27.9263 99.5545 27.8828 99.1201C27.8323 98.6782 27.6118 98.2488 27.2213 97.8319C26.8587 97.4448 26.4872 97.2198 26.1068 97.1568C25.7264 97.0938 25.4059 97.1844 25.1453 97.4285C24.8773 97.6795 24.7916 97.9834 24.8882 98.3401C24.9773 98.7039 25.1922 99.1944 25.5328 99.8118C25.8391 100.377 26.0686 100.861 26.2214 101.263C26.3599 101.665 26.4076 102.081 26.3646 102.513C26.3072 102.944 26.0812 103.344 25.6866 103.714C25.374 104.007 25.0002 104.182 24.5653 104.24C24.1304 104.298 23.6781 104.225 23.2085 104.022C22.7314 103.826 22.2871 103.509 21.8757 103.069C21.2412 102.392 20.8999 101.684 20.8519 100.947C20.8038 100.209 21.0636 99.5465 21.6313 98.9589L22.5831 99.9751C22.2839 100.297 22.1491 100.668 22.1787 101.088C22.2013 101.5 22.3974 101.903 22.767 102.298C23.1086 102.662 23.4588 102.88 23.8173 102.949C24.1759 103.018 24.4817 102.935 24.7348 102.698C24.9358 102.509 25.0441 102.289 25.0595 102.037C25.0606 101.784 25.0114 101.523 24.912 101.253C24.7982 100.982 24.6258 100.626 24.3948 100.186C24.1025 99.6351 23.8869 99.1662 23.748 98.7791C23.6017 98.3991 23.5533 98.0042 23.6028 97.5945C23.6453 97.1773 23.8492 96.7907 24.2144 96.4346C24.5494 96.1208 24.9381 95.9315 25.3805 95.8665C25.8228 95.8016 26.2825 95.8672 26.7596 96.0632C27.2223 96.2588 27.6593 96.5761 28.0707 97.0154Z" fill="#DDBE90"/>
                <path d="M16.5399 95.4409C15.987 95.4456 15.4375 95.2946 14.8914 94.988C14.3313 94.6777 13.8683 94.2101 13.5022 93.5852C13.1259 92.9427 12.9396 92.2716 12.9435 91.5718C12.9422 90.8633 13.1355 90.1944 13.5235 89.5652C13.9027 88.9412 14.462 88.4126 15.2013 87.9795C15.9318 87.5516 16.6708 87.3197 17.4181 87.2838C18.1655 87.2479 18.8523 87.4012 19.4785 87.7437C20.0995 88.0774 20.5982 88.5655 20.9746 89.208C21.3355 89.8241 21.5187 90.4497 21.5243 91.0848C21.5159 91.7162 21.3771 92.2763 21.1078 92.7651L25.8737 89.9733L26.5775 91.1747L15.9102 97.4234L15.2064 96.222L16.5399 95.4409ZM15.9205 89.2073C15.3748 89.527 14.964 89.9154 14.688 90.3726C14.4121 90.8298 14.2793 91.3095 14.2898 91.8117C14.2951 92.3051 14.4292 92.7762 14.6921 93.2251C14.9499 93.6651 15.2997 94.01 15.7414 94.2595C16.1692 94.5054 16.6569 94.6217 17.2046 94.6082C17.7384 94.5911 18.2737 94.4252 18.8106 94.1107C19.3563 93.7911 19.7715 93.4001 20.0563 92.9377C20.3271 92.4717 20.4643 91.9894 20.4678 91.4909C20.4573 90.9887 20.3232 90.5176 20.0654 90.0775C19.8024 89.6286 19.4571 89.2812 19.0293 89.0353C18.5876 88.7857 18.0998 88.6695 17.5661 88.6867C17.0235 88.7089 16.475 88.8825 15.9205 89.2073Z" fill="#DDBE90"/>
                <path d="M15.8272 80.4856C16.0612 81.2354 16.1035 81.9702 15.9541 82.69C15.8017 83.4 15.4686 84.0276 14.9548 84.5726C14.4283 85.1109 13.7512 85.5092 12.9235 85.7675C12.1056 86.0227 11.3303 86.0723 10.5978 85.9162C9.85242 85.7535 9.2185 85.417 8.696 84.9069C8.16376 84.3998 7.77914 83.7665 7.54212 83.007C7.30511 82.2475 7.26128 81.5079 7.41065 80.7881C7.55028 80.0713 7.87698 79.4404 8.39077 78.8954C8.90152 78.3407 9.57072 77.9342 10.3984 77.6759C11.226 77.4176 12.0141 77.3747 12.7625 77.5472C13.4981 77.713 14.1335 78.0543 14.6688 78.5711C15.2041 79.088 15.5902 79.7261 15.8272 80.4856ZM14.6588 80.8503C14.5099 80.3731 14.2581 79.9602 13.9035 79.6114C13.5489 79.2626 13.1081 79.0315 12.5812 78.9181C12.0512 78.7949 11.4649 78.8337 10.8223 79.0342C10.1796 79.2348 9.67384 79.5315 9.30494 79.9245C8.93603 80.3174 8.70828 80.7518 8.62169 81.2276C8.52536 81.7064 8.55164 82.1844 8.70054 82.6615C8.85247 83.1484 9.10423 83.5614 9.4558 83.9004C9.79461 84.2328 10.2259 84.4508 10.7498 84.5545C11.2737 84.6581 11.857 84.6097 12.4996 84.4091C13.152 84.2055 13.6657 83.917 14.0407 83.5435C14.4126 83.1603 14.6483 82.7342 14.7476 82.2651C14.8373 81.799 14.8076 81.3274 14.6588 80.8503Z" fill="#DDBE90"/>
                <path d="M6.25564 73.7528C5.74001 73.5982 5.3114 73.324 4.9698 72.9302C4.62637 72.5264 4.39595 72.0034 4.27855 71.3612L5.69334 71.1026L5.75938 71.4638C6.04005 72.999 7.0132 73.6143 8.67885 73.3098L13.164 72.4898L13.4144 73.8595L5.1665 75.3674L4.9161 73.9977L6.25564 73.7528Z" fill="#DDBE90"/>
                <path d="M4.82513 66.7072L9.7589 66.4213C10.1662 66.3977 10.4514 66.2943 10.6145 66.1112C10.7674 65.9286 10.8315 65.6235 10.8067 65.1958L10.7474 64.1724L11.9236 64.1042L11.9961 65.3568C12.041 66.1307 11.8964 66.7215 11.5624 67.1291C11.2284 67.5367 10.6541 67.7641 9.83943 67.8113L4.90567 68.0972L4.9685 69.1817L3.82289 69.2481L3.76005 68.1636L1.65213 68.2857L1.57159 66.8957L3.67951 66.7735L3.55295 64.5892L4.69857 64.5229L4.82513 66.7072Z" fill="#DDBE90"/>
                <path d="M2.49353 47.8714L8.16511 52.7694L12.0828 53.6885L11.7647 55.0441L7.8471 54.125L0.585449 56.0046L0.938409 54.5001L6.79778 53.1716L2.14057 49.3758L2.49353 47.8714Z" fill="#DDBE90"/>
                <path d="M8.6049 46.1637C7.83562 45.7864 7.23885 45.3005 6.81461 44.7062C6.3812 44.1073 6.13674 43.4592 6.08121 42.7616C6.03017 42.0549 6.1686 41.3673 6.49649 40.6988C6.81989 40.0394 7.24257 39.5366 7.76453 39.1905C8.28649 38.8443 8.82107 38.6578 9.36829 38.6308L7.99457 37.957L8.61442 36.6932L16.1424 40.3853L15.5225 41.6491L14.1214 40.9619C14.4397 41.4248 14.6241 41.9754 14.6746 42.6136C14.7204 43.2383 14.5839 43.8757 14.265 44.5259C13.9371 45.1944 13.4758 45.718 12.8811 46.0967C12.2864 46.4753 11.6151 46.6743 10.8671 46.6937C10.1191 46.7132 9.36502 46.5365 8.6049 46.1637ZM11.7448 39.7963C11.177 39.5179 10.6263 39.3898 10.0928 39.4121C9.5592 39.4345 9.08595 39.5886 8.67302 39.8746C8.25541 40.147 7.93208 40.5167 7.703 40.9838C7.47393 41.4508 7.37497 41.9306 7.40611 42.423C7.43726 42.9155 7.60732 43.3795 7.9163 43.815C8.22529 44.2506 8.66368 44.6076 9.23148 44.8861C9.80844 45.1691 10.3683 45.3016 10.911 45.2838C11.4446 45.2615 11.9202 45.1141 12.3378 44.8418C12.7462 44.5649 13.065 44.193 13.294 43.7259C13.5231 43.2588 13.6221 42.7791 13.5909 42.2866C13.5551 41.7806 13.3827 41.3097 13.0737 40.8742C12.7556 40.4341 12.3126 40.0748 11.7448 39.7963Z" fill="#DDBE90"/>
                <path d="M18.8361 35.1922C18.4524 35.7077 18.0224 36.1061 17.546 36.3873C17.0615 36.6625 16.5755 36.803 16.0879 36.8088C15.5922 36.8086 15.1306 36.6685 14.7032 36.3885L15.5619 35.2348C15.9218 35.4518 16.3116 35.5003 16.7314 35.3805C17.1573 35.2524 17.5408 34.9593 17.8819 34.5011C18.1986 34.0756 18.3542 33.6701 18.3487 33.2845C18.3432 32.899 18.1973 32.5996 17.9109 32.3864C17.6163 32.1672 17.302 32.1367 16.968 32.295C16.6259 32.4472 16.1812 32.7457 15.634 33.1904C15.1316 33.5921 14.6962 33.9038 14.3277 34.1254C13.9572 34.3328 13.5557 34.4537 13.1234 34.4879C12.6889 34.5078 12.2548 34.3564 11.8212 34.0336C11.4775 33.7778 11.2386 33.4411 11.1045 33.0233C10.9703 32.6056 10.9615 32.1477 11.078 31.6494C11.1863 31.1452 11.4202 30.6516 11.7795 30.1689C12.3337 29.4242 12.9695 28.9629 13.687 28.7848C14.4045 28.6068 15.1027 28.745 15.7816 29.1995L14.9503 30.3164C14.5802 30.0791 14.1913 30.0121 13.7837 30.1156C13.3821 30.2109 13.02 30.4754 12.6972 30.9091C12.3987 31.31 12.2471 31.6931 12.2424 32.0583C12.2376 32.4235 12.3743 32.7096 12.6525 32.9167C12.8734 33.0811 13.1093 33.1486 13.3601 33.1191C13.6088 33.0754 13.8574 32.9806 14.1057 32.8349C14.352 32.6749 14.6714 32.4421 15.0641 32.1367C15.5543 31.7514 15.9776 31.4561 16.3338 31.2508C16.6819 31.0394 17.062 30.9217 17.474 30.8978C17.8921 30.8656 18.3087 30.9977 18.7239 31.2941C19.0921 31.5681 19.3474 31.9171 19.4897 32.3409C19.632 32.7647 19.649 33.2288 19.5407 33.7331C19.4303 34.2231 19.1954 34.7095 18.8361 35.1922Z" fill="#DDBE90"/>
                <path d="M24.1227 28.0587C23.6521 28.4963 23.1571 28.8103 22.6377 29.0007C22.1114 29.1837 21.608 29.2339 21.1274 29.1515C20.6399 29.0616 20.2113 28.8403 19.8416 28.4877L20.8948 27.5083C21.2095 27.7868 21.5841 27.9051 22.0187 27.8631C22.4607 27.8142 22.8909 27.5953 23.3092 27.2063C23.6977 26.8451 23.9241 26.4745 23.9884 26.0943C24.0527 25.7141 23.9634 25.3933 23.7203 25.1318C23.4702 24.8629 23.1666 24.7761 22.8095 24.8714C22.4454 24.9592 21.9541 25.1723 21.3355 25.5107C20.7687 25.8148 20.2841 26.0426 19.8816 26.194C19.4797 26.3309 19.063 26.3771 18.6316 26.3326C18.2007 26.2736 17.8012 26.0462 17.433 25.6503C17.1413 25.3365 16.9673 24.9621 16.9109 24.527C16.8546 24.0919 16.9287 23.6399 17.1334 23.171C17.3312 22.6946 17.6504 22.2515 18.0911 21.8417C18.7709 21.2096 19.4797 20.8709 20.2175 20.8256C20.9554 20.7802 21.6171 21.0425 22.2026 21.6123L21.183 22.5604C20.8619 22.26 20.4915 22.1239 20.0719 22.1519C19.6597 22.173 19.2557 22.3676 18.8598 22.7358C18.4938 23.0761 18.2754 23.4254 18.2046 23.7837C18.1338 24.142 18.2165 24.4482 18.4527 24.7022C18.6402 24.9038 18.86 25.0129 19.112 25.0293C19.3646 25.0312 19.6261 24.983 19.8968 24.8846C20.1679 24.7717 20.5242 24.6006 20.9656 24.3713C21.5174 24.081 21.9871 23.8671 22.3746 23.7296C22.7552 23.5847 23.1503 23.5377 23.5598 23.5887C23.9768 23.6327 24.3627 23.838 24.7175 24.2045C25.0301 24.5407 25.218 24.93 25.2813 25.3726C25.3446 25.8152 25.2774 26.2747 25.0796 26.751C24.8824 27.213 24.5634 27.6489 24.1227 28.0587Z" fill="#DDBE90"/>
                <path d="M25.9575 16.3285C25.9569 15.7756 26.1119 15.2272 26.4226 14.6834C26.737 14.1256 27.208 13.6661 27.8356 13.3046C28.4808 12.933 29.1533 12.7517 29.853 12.7607C30.5615 12.7646 31.229 12.9629 31.8553 13.3555C32.4765 13.7393 33.001 14.3024 33.4286 15.0449C33.8511 15.7786 34.0776 16.5192 34.108 17.2668C34.1383 18.0145 33.98 18.7001 33.6329 19.3237C33.2946 19.9423 32.8029 20.4374 32.1576 20.809C31.5389 21.1654 30.912 21.344 30.2768 21.3449C29.6455 21.3318 29.0864 21.1889 28.5996 20.916L31.3563 25.7024L30.1497 26.3973L23.9797 15.6842L25.1863 14.9893L25.9575 16.3285ZM32.1955 15.7551C31.8799 15.207 31.4945 14.7934 31.0394 14.514C30.5842 14.2347 30.1055 14.0984 29.6032 14.1052C29.1098 14.1069 28.6377 14.2375 28.1869 14.4971C27.745 14.7517 27.3976 15.0989 27.1448 15.5388C26.8957 15.9647 26.7759 16.4516 26.7853 16.9994C26.7985 17.5333 26.9604 18.0698 27.2709 18.609C27.5866 19.157 27.9745 19.5751 28.4347 19.8633C28.8987 20.1375 29.38 20.2782 29.8785 20.2854C30.3808 20.2786 30.8529 20.148 31.2948 19.8934C31.7456 19.6338 32.0956 19.291 32.3446 18.8651C32.5974 18.4252 32.7172 17.9383 32.704 17.4044C32.6858 16.8617 32.5163 16.3119 32.1955 15.7551Z" fill="#DDBE90"/>
                <path d="M40.7202 15.7885C39.9695 16.0197 39.2346 16.0592 38.5154 15.9071C37.8059 15.752 37.1796 15.4166 36.6366 14.9007C36.1002 14.3721 35.7045 13.6935 35.4493 12.8649C35.1972 12.046 35.1505 11.2706 35.3094 10.5386C35.4749 9.79388 35.8138 9.16123 36.3259 8.64066C36.835 8.11035 37.4697 7.72812 38.2301 7.49397C38.9905 7.25983 39.7303 7.2188 40.4495 7.37088C41.1657 7.51322 41.7954 7.8423 42.3385 8.35815C42.8913 8.87099 43.2953 9.54172 43.5504 10.3704C43.8056 11.199 43.8455 11.9872 43.6702 12.7349C43.5016 13.4699 43.1579 14.104 42.639 14.6373C42.1202 15.1707 41.4806 15.5544 40.7202 15.7885ZM40.36 14.6187C40.8376 14.4716 41.2516 14.2214 41.6017 13.8681C41.9518 13.5148 42.1846 13.0749 42.3 12.5484C42.4251 12.019 42.3886 11.4325 42.1905 10.7891C41.9924 10.1457 41.6975 9.63881 41.306 9.26842C40.9144 8.89803 40.4809 8.66865 40.0054 8.58025C39.527 8.48212 39.0489 8.50659 38.5712 8.65368C38.0838 8.80377 37.6699 9.05397 37.3295 9.40426C36.9958 9.74181 36.7762 10.1723 36.6705 10.6958C36.5649 11.2193 36.6112 11.8027 36.8093 12.4461C37.0104 13.0993 37.297 13.6141 37.669 13.9905C38.0508 14.3638 38.4761 14.6011 38.9448 14.7022C39.4106 14.7936 39.8823 14.7658 40.36 14.6187Z" fill="#DDBE90"/>
                <path d="M47.4112 6.24178C47.5678 5.72675 47.8436 5.29919 48.2387 4.9591C48.6439 4.61721 49.1678 4.3888 49.8104 4.27385L50.0636 5.68962L49.7021 5.75428C48.1659 6.02907 47.5468 6.99987 47.845 8.66666L48.6478 13.155L47.2772 13.4001L45.8009 5.14647L47.1715 4.90131L47.4112 6.24178Z" fill="#DDBE90"/>
                <path d="M54.5198 4.81134L54.7866 9.74617C54.8087 10.1536 54.9109 10.4392 55.0935 10.603C55.2754 10.7566 55.5803 10.8218 56.0081 10.7987L57.0317 10.7433L57.0953 11.9198L55.8425 11.9875C55.0684 12.0294 54.4782 11.8825 54.0719 11.5469C53.6656 11.2114 53.4404 10.6362 53.3963 9.82135L53.1295 4.88652L52.0447 4.94517L51.9828 3.79931L53.0675 3.74066L52.9535 1.63228L54.3438 1.5571L54.4578 3.66548L56.6426 3.54734L56.7046 4.6932L54.5198 4.81134Z" fill="#DDBE90"/>
                <path d="M73.4062 2.52256L68.4865 8.17546L67.5525 12.0896L66.1982 11.7664L67.1322 7.85229L65.2803 0.583542L66.7834 0.942226L68.0896 6.80661L71.903 2.16388L73.4062 2.52256Z" fill="#DDBE90"/>
                <path d="M75.105 8.6258C75.4852 7.85793 75.9732 7.26297 76.5691 6.84093C77.1696 6.40975 77.8187 6.16769 78.5164 6.11475C79.2233 6.06634 79.9104 6.20732 80.5777 6.53768C81.2359 6.86353 81.7371 7.28807 82.0813 7.81131C82.4255 8.33455 82.6101 8.86982 82.6351 9.41713L83.3139 8.04592L84.5754 8.67045L80.8554 16.1847L79.5939 15.5601L80.2863 14.1615C79.8222 14.4781 79.271 14.6605 78.6325 14.7086C78.0077 14.7521 77.3708 14.6133 76.7218 14.2919C76.0545 13.9616 75.5326 13.4983 75.1562 12.9022C74.7797 12.3061 74.5832 11.6341 74.5666 10.886C74.5499 10.1379 74.7294 9.38454 75.105 8.6258ZM81.4607 11.7893C81.7412 11.2226 81.8714 10.6724 81.851 10.1387C81.8306 9.60506 81.6782 9.13125 81.3938 8.71725C81.123 8.29864 80.7545 7.97394 80.2883 7.74313C79.822 7.51233 79.3427 7.41158 78.8501 7.4409C78.3576 7.47022 77.8929 7.63856 77.4562 7.94593C77.0195 8.25329 76.6608 8.69036 76.3803 9.25712C76.0952 9.83303 75.9605 10.3924 75.9763 10.9352C75.9967 11.4688 76.1423 11.9449 76.4131 12.3635C76.6884 12.773 77.0592 13.0931 77.5254 13.324C77.9916 13.5548 78.471 13.6555 78.9635 13.6262C79.4697 13.5922 79.9412 13.4216 80.3779 13.1142C80.8192 12.7977 81.1801 12.3561 81.4607 11.7893Z" fill="#DDBE90"/>
                <path d="M86.0699 18.9035C85.5558 18.518 85.159 18.0865 84.8795 17.6091C84.6062 17.1236 84.4674 16.637 84.4633 16.1495C84.4654 15.6537 84.6072 15.1927 84.8887 14.7663L86.0393 15.6292C85.821 15.9883 85.771 16.3779 85.8894 16.7982C86.0158 17.2246 86.3076 17.6091 86.7645 17.9518C87.1889 18.2701 87.5938 18.4272 87.9794 18.4231C88.365 18.419 88.6649 18.2742 88.8791 17.9885C89.0994 17.6948 89.131 17.3806 88.9739 17.046C88.823 16.7033 88.5261 16.2576 88.0834 15.7088C87.6836 15.2049 87.3735 14.7683 87.1532 14.3991C86.9471 14.0278 86.8278 13.6259 86.7951 13.1934C86.7768 12.7589 86.9298 12.3253 87.2541 11.8929C87.5112 11.5501 87.8488 11.3125 88.267 11.1798C88.6852 11.0472 89.1432 11.0401 89.641 11.1584C90.1449 11.2686 90.6376 11.5042 91.119 11.8653C91.8616 12.4222 92.3206 13.0597 92.4961 13.7778C92.6715 14.4959 92.5308 15.1936 92.0738 15.8709L90.9599 15.0355C91.1986 14.6663 91.2669 14.2777 91.1649 13.8696C91.0711 13.4678 90.8079 13.1046 90.3754 12.7803C89.9756 12.4804 89.5931 12.3274 89.2279 12.3213C88.8627 12.3151 88.5761 12.4508 88.368 12.7283C88.2028 12.9486 88.1344 13.1842 88.163 13.4351C88.2058 13.684 88.2997 13.9329 88.4445 14.1818C88.6036 14.4286 88.8352 14.7489 89.1392 15.1427C89.5227 15.6343 89.8165 16.0586 90.0205 16.4156C90.2306 16.7645 90.3469 17.145 90.3693 17.5571C90.3999 17.9753 90.2663 18.3914 89.9685 18.8056C89.6931 19.1728 89.3432 19.4268 88.9189 19.5675C88.4945 19.7083 88.0304 19.7236 87.5265 19.6135C87.0369 19.5013 86.5514 19.2646 86.0699 18.9035Z" fill="#DDBE90"/>
                <path d="M93.4223 24.4386C92.9881 23.9649 92.6777 23.4676 92.4911 22.9469C92.3119 22.4192 92.2653 21.9154 92.3513 21.4355C92.4447 20.9486 92.6691 20.5216 93.0244 20.1545L93.9961 21.2149C93.7154 21.5275 93.5944 21.9012 93.6331 22.3361C93.6788 22.7785 93.8946 23.2103 94.2805 23.6314C94.6389 24.0224 95.0079 24.2515 95.3876 24.3186C95.7673 24.3857 96.0888 24.2987 96.352 24.0575C96.6227 23.8094 96.7118 23.5064 96.6191 23.1486C96.5339 22.7839 96.3244 22.2911 95.9905 21.6701C95.6905 21.1011 95.4662 20.6148 95.3178 20.2113C95.1837 19.8083 95.1406 19.3913 95.1883 18.9602C95.2504 18.5298 95.4807 18.1319 95.8793 17.7667C96.1951 17.4772 96.5708 17.3059 97.0063 17.2527C97.4418 17.1995 97.8932 17.277 98.3606 17.4851C98.8356 17.6863 99.2763 18.0087 99.6829 18.4524C100.31 19.1368 100.644 19.848 100.684 20.5862C100.724 21.3243 100.457 21.9841 99.8825 22.5655L98.9418 21.539C99.2445 21.2201 99.3834 20.8507 99.3584 20.4309C99.3403 20.0186 99.1486 19.6131 98.7833 19.2146C98.4457 18.8461 98.0979 18.6251 97.7401 18.5518C97.3824 18.4784 97.0756 18.5589 96.8199 18.7932C96.6169 18.9792 96.5063 19.1982 96.4881 19.4501C96.4843 19.7026 96.5306 19.9646 96.627 20.2359C96.7379 20.5079 96.9064 20.8654 97.1325 21.3084C97.4188 21.8624 97.6293 22.3336 97.7639 22.7221C97.9061 23.1037 97.9502 23.4991 97.8963 23.9083C97.8492 24.325 97.6411 24.7093 97.272 25.0614C96.9336 25.3715 96.5429 25.5566 96.0999 25.6167C95.6569 25.6768 95.1979 25.6063 94.723 25.405C94.2624 25.2045 93.8289 24.8823 93.4223 24.4386Z" fill="#DDBE90"/>
                <path d="M104.94 26.1123C105.493 26.1137 106.041 26.2708 106.583 26.5834C107.14 26.8999 107.598 27.3726 107.957 28.0015C108.326 28.6481 108.505 29.3212 108.493 30.0209C108.487 30.7294 108.286 31.3961 107.891 32.021C107.505 32.6408 106.94 33.1632 106.196 33.588C105.461 34.0079 104.719 34.2316 103.971 34.2592C103.224 34.2868 102.539 34.1259 101.916 33.7766C101.299 33.436 100.806 32.9425 100.436 32.2958C100.082 31.6758 99.9061 31.0482 99.9075 30.4131C99.9229 29.7818 100.068 29.2232 100.343 28.7375L95.5461 31.4765L94.8557 30.2674L105.591 24.1369L106.282 25.346L104.94 26.1123ZM105.49 32.3524C106.039 32.0388 106.455 31.6549 106.736 31.2008C107.017 30.7467 107.155 30.2685 107.15 29.7662C107.15 29.2728 107.021 28.8002 106.763 28.3484C106.51 27.9055 106.164 27.5569 105.725 27.3024C105.3 27.0518 104.814 26.9302 104.266 26.9376C103.732 26.9489 103.195 27.1087 102.655 27.4173C102.105 27.7309 101.686 28.1173 101.396 28.5765C101.12 29.0394 100.978 29.5202 100.969 30.0187C100.973 30.5209 101.102 30.9935 101.355 31.4364C101.613 31.8882 101.955 32.2394 102.38 32.49C102.819 32.7444 103.305 32.866 103.839 32.8548C104.382 32.8385 104.932 32.671 105.49 32.3524Z" fill="#DDBE90"/>
                <path d="M105.449 40.9448C105.221 40.1933 105.184 39.4582 105.339 38.7395C105.497 38.0307 105.834 37.4057 106.352 36.8646C106.883 36.3302 107.563 35.9371 108.393 35.685C109.212 35.436 109.988 35.3922 110.719 35.5538C111.463 35.7222 112.095 36.0635 112.613 36.5775C113.142 37.0886 113.522 37.7248 113.753 38.4861C113.984 39.2473 114.022 39.9873 113.868 40.7059C113.723 41.4216 113.391 42.05 112.873 42.5911C112.358 43.142 111.686 43.5435 110.856 43.7955C110.027 44.0475 109.239 44.0844 108.492 43.9063C107.757 43.7349 107.124 43.3888 106.593 42.868C106.062 42.3471 105.68 41.7061 105.449 40.9448ZM106.62 40.589C106.766 41.0672 107.014 41.4821 107.366 41.8336C107.718 42.185 108.157 42.4195 108.683 42.5368C109.212 42.6639 109.799 42.6297 110.443 42.434C111.087 42.2383 111.595 41.9454 111.967 41.5552C112.339 41.1651 112.57 40.7324 112.66 40.2573C112.76 39.7792 112.737 39.301 112.592 38.8228C112.444 38.3348 112.195 37.9199 111.846 37.5782C111.51 37.2433 111.08 37.022 110.557 36.9144C110.034 36.8068 109.45 36.8508 108.806 37.0465C108.152 37.2452 107.636 37.5298 107.259 37.9005C106.884 38.2808 106.645 38.7052 106.542 39.1736C106.449 39.6389 106.475 40.1108 106.62 40.589Z" fill="#DDBE90"/>
                <path d="M115.031 47.9905C115.545 48.151 115.97 48.4301 116.307 48.8278C116.646 49.2356 116.87 49.7612 116.981 50.4047L115.563 50.6471L115.501 50.2851C115.238 48.7468 114.272 48.1203 112.603 48.4057L108.109 49.1741L107.874 47.8017L116.139 46.3886L116.373 47.761L115.031 47.9905Z" fill="#DDBE90"/>
                <path d="M116.364 54.8621L111.429 55.11C111.021 55.1304 110.735 55.2316 110.571 55.4135C110.416 55.5948 110.35 55.8995 110.371 56.3273L110.423 57.3512L109.246 57.4103L109.183 56.1572C109.144 55.3829 109.293 54.7933 109.631 54.3883C109.968 53.9833 110.544 53.7603 111.359 53.7194L116.295 53.4716L116.24 52.3866L117.386 52.3291L117.441 53.414L119.549 53.3081L119.619 54.6987L117.51 54.8046L117.62 56.9898L116.474 57.0474L116.364 54.8621Z" fill="#DDBE90"/>
            </svg>
            <svg className={s.animatedLogoY} width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_296_32656" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.5944 5.65083C22.5944 2.42214 20.1729 0 16.9442 0C11.6972 0 9.27573 6.0541 12.9083 9.6867C16.5403 13.3193 22.5944 10.8971 22.5944 5.65083ZM32.1238 18.3035L21.1157 29.3111L21.1157 41.1307C21.1157 43.3833 19.2898 45.2091 17.0372 45.2091C14.7841 45.2091 12.9582 43.3833 12.9582 41.1307V29.8901L1.22001 18.1525C-0.40667 16.5258 -0.40667 13.8884 1.22001 12.2617C2.84669 10.6351 5.48406 10.6351 7.1107 12.2617L16.7474 21.898L26.2331 12.4122C27.8598 10.7855 30.4971 10.7855 32.1238 12.4122C33.7505 14.0389 33.7505 16.6762 32.1238 18.3035Z"/>
                </mask>
                <path d="M12.9083 9.6867L13.6155 8.97965L13.6154 8.9796L12.9083 9.6867ZM21.1157 29.3111L20.4086 28.604L20.1157 28.8969V29.3111H21.1157ZM32.1238 18.3035L32.8309 19.0107L32.8311 19.0105L32.1238 18.3035ZM12.9582 29.8901H13.9582V29.4758L13.6653 29.1829L12.9582 29.8901ZM1.22001 18.1525L0.512904 18.8596L0.512922 18.8596L1.22001 18.1525ZM1.22001 12.2617L0.512911 11.5546L0.512904 11.5546L1.22001 12.2617ZM7.1107 12.2617L6.4036 12.9688L6.40362 12.9689L7.1107 12.2617ZM16.7474 21.898L16.0403 22.6051L16.7474 23.3122L17.4545 22.6051L16.7474 21.898ZM26.2331 12.4122L25.526 11.7051L25.526 11.7051L26.2331 12.4122ZM32.1238 12.4122L31.4167 13.1193L31.4167 13.1193L32.1238 12.4122ZM16.9442 1C19.6204 1 21.5944 2.97428 21.5944 5.65083H23.5944C23.5944 1.87 20.7253 -1 16.9442 -1V1ZM13.6154 8.9796C10.6044 5.96856 12.6 1 16.9442 1V-1C10.7945 -1 7.94706 6.13963 12.2012 10.3938L13.6154 8.9796ZM21.5944 5.65083C21.5944 9.99464 16.6257 11.9904 13.6155 8.97965L12.2011 10.3938C16.4549 14.6482 23.5944 11.7996 23.5944 5.65083H21.5944ZM21.8228 30.0183L32.8309 19.0107L31.4167 17.5964L20.4086 28.604L21.8228 30.0183ZM22.1157 41.1307L22.1157 29.3111H20.1157L20.1157 41.1307H22.1157ZM17.0372 46.2091C19.8421 46.2091 22.1157 43.9355 22.1157 41.1307H20.1157C20.1157 42.831 18.7376 44.2091 17.0372 44.2091V46.2091ZM11.9582 41.1307C11.9582 43.9356 14.2319 46.2091 17.0372 46.2091V44.2091C15.3363 44.2091 13.9582 42.8309 13.9582 41.1307H11.9582ZM11.9582 29.8901V41.1307H13.9582V29.8901H11.9582ZM0.512922 18.8596L12.2511 30.5972L13.6653 29.1829L1.9271 17.4453L0.512922 18.8596ZM0.512904 11.5546C-1.5043 13.5718 -1.5043 16.8424 0.512904 18.8596L1.92712 17.4454C0.690961 16.2092 0.690961 14.205 1.92712 12.9688L0.512904 11.5546ZM7.81781 11.5546C5.80064 9.53746 2.53011 9.53747 0.512911 11.5546L1.92711 12.9689C3.16327 11.7327 5.16748 11.7327 6.4036 12.9688L7.81781 11.5546ZM17.4545 21.1908L7.81779 11.5546L6.40362 12.9689L16.0403 22.6051L17.4545 21.1908ZM25.526 11.7051L16.0403 21.1908L17.4545 22.6051L26.9402 13.1193L25.526 11.7051ZM32.8309 11.7051C30.8137 9.6879 27.5432 9.6879 25.526 11.7051L26.9402 13.1193C28.1764 11.8832 30.1806 11.8832 31.4167 13.1193L32.8309 11.7051ZM32.8311 19.0105C34.848 16.9928 34.8482 13.7224 32.8309 11.7051L31.4167 13.1193C32.6528 14.3554 32.653 16.3597 31.4166 17.5966L32.8311 19.0105Z" fill={color} mask="url(#path-1-inside-1_296_32656)"/>
            </svg>
        </div>
    )
}

export default AppAnimatedLogo;
