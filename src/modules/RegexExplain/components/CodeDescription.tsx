import { useCodeBlock } from '../hooks/useCodeBlock';

const CodeDescription = () => {
   const codeBlock = useCodeBlock()((state) => state.codeBlock);

   return <div className="my-4 text-xl leading-8 text-white indent-10 ">{codeBlock.getDescription()}</div>;
};

export default CodeDescription;
