import { Router } from 'next/router';

const RegexExplainBackgroundText: React.FC<{ router: Router }> = ({ router }) => {
   return (
      <div className=" mb-10 flex w-full flex-col items-center ">
         <h1 className="my-10  w-full text-center text-4xl tracking-wider text-stone-50 sm:text-7xl">
            Regular Expression
         </h1>
      </div>
   );
};

export default RegexExplainBackgroundText;
