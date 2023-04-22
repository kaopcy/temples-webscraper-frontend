const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <span className="rounded-sm bg-[#fbff0010] px-2 font-code text-[#e8c380]">{children}</span>
   );
};

const Code1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <span className="rounded-sm bg-[#fbff0010] px-2 font-code text-[#d7deec]">{children}</span>
   );
};

const UnderLineCode: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return <span className="font-bold underline">{children}</span>;
};

export const Test = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'code ส่วนนี้ เป็นการรวบรวมข้อมูลการ scraping ในส่วนต่าง ๆ ไม่ว่าจะเป็น ลิงค์วัด, ชื่อวัด, ตำบลวัด, รายละเอียดของวัด \n \
               ให้อยู่ในรูปแบบ list ซ้อน list เนื่องจากจะต้องนำข้อมูลที่มีโครงสร้างแบบนี้ นำไปส่งต่อที่ database เพื่อเก็บข้อมูลดังกล่าวทั้งหมด'
            }
         </p>
      </>
   );
};
