import { useCodeBlock } from '../hooks/useCodeBlock';

const CodeDescription = () => {
   const codeBlock = useCodeBlock()((state) => state.codeBlock);

   return <div className="indent-12 mt-12 mb-5 text-base md:text-xl leading-8 text-white " style={{
      whiteSpace: 'break-spaces'
   }}>{codeBlock.getDescription()}</div>;
};

export default CodeDescription;
