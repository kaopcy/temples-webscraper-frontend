import { GetServerSideProps } from 'next';

const Home = () => {
   return () => {
      <div className=""></div>;
   };
};

export const getServerSideProps: GetServerSideProps = async () => {
   return {
      redirect: {
         destination: '/temples/1',
         permanent: true,
      },
   };
};

export default Home;
