const CodePopupInput: React.FC<{ text: string, label: string }> = ({ text, label }) => {
   return (
      <div className="relative w-full break-all rounded-md bg-text-lighter px-4 py-2  tracking-tighter">
         <div className="absolute bottom-full left-3 rounded-t-md bg-text px-4 py-1 text-white">
            {label}
         </div>
         {text}
      </div>
   );
};

export default CodePopupInput