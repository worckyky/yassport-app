import {linkTo} from "../../src/helpers/routes";
import {GetServerSideProps} from "next";


export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: linkTo('home'),
            permanent: true,
        },
    };
};

const IndexPage = (): null => null;

export default IndexPage;
