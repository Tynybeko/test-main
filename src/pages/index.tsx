import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import course_data from "@/data/course-data";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      data: course_data,
    },
  };
};

const index = ({ data }) => {
  return (
    <Wrapper>
      <SEO pageTitle={'Epora'} />
      <Home data={data} />
    </Wrapper>
  );
};

export default index;