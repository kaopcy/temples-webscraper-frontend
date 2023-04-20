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

export const Test = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็น href ซึ่งก็คือ attribute หนึ่ง \n \
               ของ a tag ที่ทำหน้าที่ในการเก็บ link ที่จะนำทางไปยังเนื้อหาของวัดนั้น ๆ แล้วถัดมาจะเป็น string ที่เป็นคำว่า '
            }

            <Code>="/wiki/</Code>

            {
               ' เนื่องจาก link\n \
               ที่ขึ้นต้นด้วยคำว่า '
            }

            <Code>="/wiki/</Code>

            {' นั้น เป็น link ที่มีเนื้อหาของวัดนั้นแล้ว แต่ถ้าขึ้นด้วยคำอื่น เช่น '}

            <Code>/w/</Code>

            {
               ' จะเป็น link ที่ยังไม่มีข้อมูลของวัดนั้นอยู่ ต้องรอให้\n \
               บุคคลอื่นเข้ามาใส่ข้อมูลของวัดนั้นให้ ซึ่ง link ดังกล่าวจะไม่นำมาใช้ ถัดมา หลังจากคำว่า '
            }

            <Code>/wiki/</Code>
            {
               ' นั้น สามารถเป็น character อะไรก็ได้ ไม่จำกัด\n \
               จำนวน character ผ่านการกำหนดรูปแบบเป็น .* ถัดมาจะเป็น " เพื่อระบุว่า link ดังกล่าวถูกครอบด้วย "" เสมอ ถัดมา ส่วนท้ายสุดของ string\n \
               จะเป็นคำว่าวัด และตามด้วย character ภาษาไทยเท่านั้น ไม่จำกัดจำนวน character ผ่านการกำหนด '
            }

            <Code>.*วัด[u0E00-u0E60]*</Code>

            {
               ' \n \
               เมื่อทำการกำหนด pattern ดังกล่าวไปแล้ว จะมีการเพิ่มเติม () ครอบลงใน '
            }

            <Code>(/wiki/.*?)</Code>
            {
               ' เนื่องจากต้องการให้การ return นั้น เป็นเฉพาะส่วนที่ครอบเท่านั้น\n \
               ไม่ใช่เป็นการ return มาทั้ง string ที่เข้าเงื่อนไขเท่านั้น และระบุ ? ก่อน " เพื่อเป็นการบอกว่า เมื่อไล่ string ไปจนถึง " เมื่อใด ก็จะทำการ return \n \
               คำตอบนั้นทันที'
            }
         </p>
         <p className="mb-2 indent-10 text-white">
            {'โดย '}
            <Code1>re.compile()</Code1>

            {
               ' เป็นฟังก์ชันที่ใช้ในการแปลงรูปแบบที่ต้องการค้นหาเป็น pattern ที่สามารถใช้งานได้กับฟังก์ชัน '
            }
            <Code1>re.findall()</Code1>
            {' เพื่อค้นหาตัวอักษรตาม pattern ที่กำหนดไว้ในข้อมูลที่เก็บไว้ในตัวแปร '}
            <Code1>data.text</Code1>
         </p>
         <p className="indent-10 text-white">
            {'ผลลัพธ์ที่ได้จะถูกเก็บไว้ในตัวแปร '}
            <Code1>result</Code1>

            {' ซึ่งเป็น list ของข้อความที่ตรงกับ pattern ที่ค้นหาได้ในข้อมูล '}
            <Code1>data.text</Code1>

            {' โดยในที่นี้เป็นข้อความ '}
            <Code>{'"< main id="ดูเพิ่ม">ดูเพิ่ม</span>"'}</Code>
            {' ที่ตรงกับ pattern ที่กำหนดไว้'}
         </p>
      </>
   );
};

export const Test2 = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               ' code ส่วนนี้จะเป็นการตรวจสอบว่า มี link อยู่ใน html_str หรือไม่ ผ่านการตรวจสอบขนาด list ของ '
            }

            <Code1>link_list</Code1>
            {
               ' โดยถ้่าหากพบว่าไม่มี link อยู่เลย\n \
               จะทำการ return เป็น dummy link แทน ซึ่งก็คือ '
            }

            <Code>https://www.google.com</Code>

            {
               ' แต่ถ้าพบว่ามี link อยู่ ก็จะทำการ return ที่ link จะขึ้นต้นด้วยคำว่า \n \
               '
            }
            <Code>https://th.wikipedia.org</Code>
            {
               ' และต่อท้ายด้วย link ที่ค้นหามาได้ เป็น full link ที่สามารถนำทางไปยังหน้าเนื้อหาของวัดนั้นได้'
            }
         </p>
      </>
   );
};
