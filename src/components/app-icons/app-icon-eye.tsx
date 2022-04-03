import React from "react";


type IAppIconEyeType = {
    hide?: boolean
    onClick?: () => void;
}

const AppIconEye: React.FC<IAppIconEyeType> = ({hide= false, onClick}) => {

    const renderIcon = () => {
        if (hide) {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.00352 4.01224C5.26571 4.00997 5.51832 4.11076 5.70692 4.29292H5.70792L7.48792 6.07392C8.88642 5.36577 10.4323 4.99779 11.9999 4.99992C16.4779 4.99992 20.2679 7.94292 21.5419 11.9999C20.9432 13.8998 19.7914 15.578 18.2339 16.8199L19.7069 18.2929C19.8891 18.4815 19.9899 18.7341 19.9876 18.9963C19.9853 19.2585 19.8801 19.5093 19.6947 19.6947C19.5093 19.8801 19.2585 19.9853 18.9963 19.9876C18.7341 19.9899 18.4815 19.8891 18.2929 19.7069L4.29292 5.70692C4.11076 5.51832 4.00997 5.26571 4.01224 5.00352C4.01452 4.74132 4.11969 4.49051 4.3051 4.3051C4.49051 4.11969 4.74132 4.01452 5.00352 4.01224ZM9.96855 8.55355L9.96792 8.55292V8.55392C9.96813 8.5538 9.96834 8.55367 9.96855 8.55355ZM9.96855 8.55355L11.4819 10.0679C11.821 9.97787 12.1778 9.97847 12.5166 10.0696C12.8554 10.1608 13.1643 10.3394 13.4124 10.5875C13.6604 10.8356 13.839 11.1445 13.9302 11.4832C14.0214 11.822 14.022 12.1788 13.9319 12.5179L15.4459 14.0319C15.8969 13.2679 16.0811 12.3757 15.9696 11.4956C15.858 10.6155 15.4571 9.79741 14.8297 9.1701C14.2024 8.54278 13.3844 8.14181 12.5042 8.03027C11.6244 7.91875 10.7324 8.10283 9.96855 8.55355ZM11.75 15.9919L14.454 18.6969C13.669 18.8949 12.847 18.9999 12 18.9999C7.52301 18.9999 3.73201 16.0569 2.45801 11.9999C2.85236 10.7468 3.49022 9.5839 4.33501 8.57788L8.00801 12.2509C8.06918 13.2232 8.4831 14.1397 9.17206 14.8285C9.86103 15.5173 10.7777 15.931 11.75 15.9919Z" fill="#858C94"/>
                </svg>
            )
        } else {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.542 5C7.064 5 3.274 7.943 2 12C3.274 16.057 7.064 19 11.542 19C16.02 19 19.81 16.057 21.084 12C19.81 7.943 16.02 5 11.542 5ZM14.3704 14.8284C15.1206 14.0783 15.542 13.0609 15.542 12C15.542 10.9391 15.1206 9.92172 14.3704 9.17157C13.6203 8.42143 12.6029 8 11.542 8C10.4811 8 9.46372 8.42143 8.71357 9.17157C7.96343 9.92172 7.542 10.9391 7.542 12C7.542 13.0609 7.96343 14.0783 8.71357 14.8284C9.46372 15.5786 10.4811 16 11.542 16C12.6029 16 13.6203 15.5786 14.3704 14.8284ZM12.9562 13.4142C12.5811 13.7893 12.0724 14 11.542 14C11.0116 14 10.5029 13.7893 10.1278 13.4142C9.75271 13.0391 9.54199 12.5304 9.54199 12C9.54199 11.4696 9.75271 10.9609 10.1278 10.5858C10.5029 10.2107 11.0116 10 11.542 10C12.0724 10 12.5811 10.2107 12.9562 10.5858C13.3313 10.9609 13.542 11.4696 13.542 12C13.542 12.5304 13.3313 13.0391 12.9562 13.4142Z" fill="#858C94"/>
                </svg>
            )
        }
    }

    return (
        <span style={{height: 24}} onClick={onClick}>
            {renderIcon()}
        </span>
    )
}

export default AppIconEye;