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
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็นคำว่า '
            }
            <Code>"วัด"</Code>

            {
               ' \n \
               แล้วถัดมาจะเป็น character ภาษาไทย ผ่านการกำหนดเงื่อนไขรหัส unicode ตั้งแต่ 0E00 จนถึง 0E60 และไม่จำกัดจำนวน character \n  '
            }

            {
               ' \n \
               และถ้าหากว่าผลลัพธ์จากการค้นหานั้นไม่มี string ที่เข้าเงื่อนไขดังกล่าวอยู่เลย ก็จะทำการ return เป็น empty string แทน'
            }
         </p>
         <p className="mb-2 indent-10 text-white">
            {'               แล้ว pattern ดังกล่าว นำไปใช้กับ '}
            <Code1>findall</Code1>
            {
               ' โดยเป็น function จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
                  ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ '
            }
            <Code>"วัด[\u0E00-\u0E60]*"</Code>

            {' และ argument ที่สองจะเป็น string โดยนำ '}

            <Code1>html_str</Code1>
            {
               ' \n \
                  ซึ่งเป็น string แล้วสิ่งที่ '
            }
            <Code1>re.findall()</Code1>
            {' ได้ return กลับมา จะเป็น list ของ string ทั้งหมด ที่ขึ้นต้นด้วยคำว่า'}

            <Code>"วัด"</Code>
            {
               'แล้วตามด้วย\n \
                  character '
            }
            <UnderLineCode>ภาษาไทยเท่านั้น</UnderLineCode>
         </p>

         <p className="mb-2 indent-10 text-white">
            {
               'และถ้าหากว่าผลลัพธ์จากการค้นหานั้นไม่มี string ที่เข้าเงื่อนไขดังกล่าวอยู่เลย ก็จะทำการ return เป็น empty string แทน \
               แต่ถ้าหากพบว่ามี จะทำการ return '
            }
            <UnderLineCode>ผลลัพธ์ที่อยู่ใน index แรกเสมอ</UnderLineCode>
            {
               ' โดยในบางครั้ง ผลลัพธ์ที่ได้อาจจะมีมากกว่า 1 กรณี เนื่องจากมีชื่อวัดอยู่หลายตำแหน่ง \
               และข้อมูลใน index แรกจะเป็นชื่อวัดเสมอ'
            }
         </p>
      </>
   );
};
