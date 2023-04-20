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
               'code ส่วนนี้ เป็นการจำกัดขอบเขตจาก string ที่เป็น html code ทั้งหมด ให้เหลือส่วน html code เฉพาะที่เกี่ยวข้อง\n \
               โดยลักษณะของ pattern ที่จะทำการจำกัดขอบเขตนั้น ช่วงเริ่มต้นของ string จะเป็น main tag ซึ่ง character หลังจากนั้น\n \
               จะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขรหัส unicode ตั้งแต่ '
            }

            <UnderLineCode>0000 จนถึง FFFF</UnderLineCode>

            {
               ' และไม่จำกัดจำนวน character \n \
               เพียงแต่ช่วงสุดท้ายของ string จะเป็น close tag ของ div tag \n \
               แล้ว pattern ดังกล่าว นำไปใช้กับ '
            }

            <Code1>search</Code1>
            {
               ' โดยเป็น function จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
               ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ '
            }

            <Code>{'"<main class="mw-parser-output"[\u0000-\uFFFF]*</div>"'}</Code>
            {
               ' และ argument\n \
               ที่สองจะเป็น string ที่ต้องการจะเปลี่ยนรูปแบบให้สอดคล้องกับ pattern ที่กำหนด แล้วสิ่งที่ '
            }
            <Code1>re.search()</Code1>
            {
               ' ได้ return กลับมา \n \
               จะเป็น string ที่เข้าข่ายเงื่อนไขตาม pattern ที่กำหนด '
            }
         </p>
      </>
   );
};

export const Test2 = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {'เงื่อนไขจะเป็นการคัดกรองเนื้อหาของ html ที่รายละเอียดของวัดนั้น จะต้องไม่มีคำว่า '}
            <Code>"อาจหมายถึง"</Code>
            {
               ' เนื่องจากคำดังกล่าวนั้น\n \
               เป็นคำที่บ่งบองได้ว่า '
            }
            <UnderLineCode>html ดังกล่าว ไม่มีข้อมูลของวัด</UnderLineCode>
            {' แต่เป็นรายชื่อวัดทั้งหมดที่ชื่อซ้ำกันโดยอยู่ละที่แทน'}
         </p>
      </>
   );
};

export const Test3 = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็น open tag \n \
            ของ p tag โดยถ้าพบหลายตำแหน่ง จะเลือกตำแหน่งแรกเสมอ แล้วถัดมาจะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขเป็น '
            }
            <Code>.</Code>
            {
               ' \n \
            ซึ่งไม่จำกัดจำนวน character แต่ส่วนสุดท้ายของ string จะปิดท้ายด้วย close tag ของ p tag เสมอ โดยถ้่าพบหลายตำแหน่ง \n \
            จะเลือกตำแหน่งสุดท้ายเสมอ  \n \
            แล้ว pattern ดังกล่าว นำไปใช้กับ '
            }

            <Code1>findall</Code1>
            {
               ' โดยเป็น function จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
            ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ '
            }
            <Code>{'"<p>.*</p>"'}</Code>

            {' และ argument ที่สองจะเป็น string โดยนำ '}
            <Code1>result</Code1>

            {
               ' จาก code ก่อนหน้านี้\n \
               ซึ่งเป็น list ของ string มาแปลงเป็น string ก่อน โดยใช้ '
            }

            <Code1>join()</Code1>

            {' ในการเชื่อม แล้วสิ่งที่ '}

            <Code1>re.findall()</Code1>
            {
               ' ได้ return กลับมา \n \
            จะเป็น list ของ string ทั้งหมด ที่เข้าข่ายเงื่อนไขตาม pattern ที่กำหนด  '
            }
         </p>
      </>
   );
};

export const Test4 = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็นคำว่า '
            }
            <Code>{'"<meta "'}</Code>

            {
               ' \n \
               แล้วถัดมาจะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขรหัส unicode ตั้งแต่ '
            }

            <UnderLineCode>0000 จนถึง FFFF</UnderLineCode>
            {
               ' และไม่จำกัดจำนวน character \n \
               เมื่อทำการกำหนด pattern ดังกล่าวไปแล้ว จะมีการระบุ '
            }
            <Code>?</Code>

            {' ก่อน '}

            <Code>{'>'}</Code>

            {' เพื่อเป็นบอกว่า ถ้าพบ '}
            <Code>{'>'}</Code>
            {
               ' เมื่อใด ให้ทำการ replace ออกไปและแทนที่\n \
               ด้วย empty string \n \
               แล้ว pattern ดังกล่าว นำไปใช้กับ '
            }
            <Code1>sub()</Code1>
            {
               ' โดยเป็น function จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
               ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ '
            }
            <Code>{'"<meta [\\u0000-\\uFFFF]*?>"'}</Code>
            {
               ' ส่วน argument ที่สอง จะเป็นการระบุว่า ให้ทำการ replace \n \
               แทนด้วย string ที่กำหนด ซึ่งในที่นี้เป็น empty string และ argument ที่สามจะเป็น string โดยนำ '
            }
            <Code1>pipeline_str</Code1>

            {
               ' ซึ่งเป็น string \n \
               ที่ได้จากผลลัพธ์ก่อนหน้านี้มาค้นหา แล้วสิ่งที่ '
            }
            <Code1>re.sub()</Code1>

            {
               ' ได้ return กลับมา จะเป็น string ที่ได้ทำการ replace meta tag ทั้งหมด ที่อยู่ใน \n \
               '
            }
            <Code1>pipeline_str</Code1>
            {' ออกไป แล้วแทนที่ด้วย empty string'}
         </p>
      </>
   );
};

export const Test5 = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็นคำว่า '
            }

            <Code>{'"<h2>"'}</Code>
            {
               ' \n \
               แล้วถัดมาจะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขรหัส unicode ตั้งแต่ '
            }
            <UnderLineCode>0000 จนถึง FFFF</UnderLineCode>
            {
               ' และไม่จำกัดจำนวน character \n \
               แล้ว pattern ดังกล่าว นำไปใช้กับ '
            }
            <Code1>sub()</Code1>

            {
               ' โดยเป็น function จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
               ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ '
            }
            <Code>{'"<h2>[\\u0000-\\uFFFF]*"'}</Code>

            {
               ' ส่วน argument ที่สอง จะเป็นการระบุว่า ให้ทำการ replace \n \
               แทนด้วย string ที่กำหนด ซึ่งในที่นี้เป็น empty string และ argument ที่สามจะเป็น string โดยนำ '
            }
            <Code1>pipeline_str</Code1>

            {
               ' ซึ่งเป็น string \n \
               ที่ได้จากผลลัพธ์ก่อนหน้านี้มาค้นหา แล้วสิ่งที่ '
            }

            <Code1>re.sub()</Code1>
            {
               ' ได้ return กลับมา จะเป็น string ที่ได้ทำการ replace meta tag ทั้งหมด ที่อยู่ใน \n \
               pipeline_str ออกไป แล้วแทนที่ด้วย empty string'
            }
         </p>
      </>
   );
};

export const Test6 = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็น open tag ของ sup tag \n \
               แล้วถัดมาจะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขรหัส unicode ตั้งแต่ '
            }
            <UnderLineCode>0000 จนถึง FFFF</UnderLineCode>

            {
               ' และไม่จำกัดจำนวน character \n \
               และส่วนสุดท้ายของ string นั้นจะเป็น close tag ของ sup tag เมื่อทำการกำหนด pattern ดังกล่าวไปแล้ว จะมีการระบุ '
            }
            <Code>?</Code>
            {' ก่อน '}
            <Code>{'</sup>'}</Code>
            {
               '\n  \
               เพื่อเป็นบอกว่า ถ้าพบ '
            }
            <Code>{'</sup>'}</Code>

            {
               ' เมื่อใด ให้ทำการ replace ออกไปและแทนที่ด้วย string อื่นแทนแล้ว pattern ดังกล่าว นำไปใช้กับ '
            }
            <Code1>sub()</Code1>

            {
               ' \n \
               โดยเป็น function จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ '
            }

            <Code>{'"<sup[\\u0000-\\uFFFF]*?</sup>"'}</Code>
            {
               ' \n \
               ส่วน argument ที่สอง จะเป็นการระบุว่า ให้ทำการ replace แทนด้วย string ที่กำหนด ซึ่งในที่นี้เป็น empty string และ argument \n \
               ที่สามจะเป็น string โดยนำ '
            }

            <Code1>pipeline_str</Code1>
            {
               ' ซึ่งเป็น string จากผลลัพธ์ก่อนหน้านี้ที่ได้จากผลลัพธ์ก่อนหน้านี้มาค้นหา แล้วสิ่งที่ '
            }
            <Code1>re.sub()</Code1>

            {
               ' ได้ \n \
               return กลับมา จะเป็น string ที่ได้ทำการ replace sup tag ทั้งหมด ที่อยู่ใน '
            }
            <Code1>pipeline_str</Code1>

            {' ออกไป แล้วแทนที่ด้วย empty string'}
         </p>
      </>
   );
};

export const Test7 = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็น '
            }

            <Code>href</Code>
            {
               ' ซึ่งเป็น attribute  \n  \
               ที่มีหน้าที่ในการระบุ link ที่ต้องจะนำไปยังอีก website หนึ่ง ซึ่งเป็น string ที่ไม่ได้ต้องการใช้งาน ถัดมา จะเป็น string ที่ตามด้วย '
            }
            <Code>=</Code>

            {
               ' \n \
               แล้วถัดมาจะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขรหัส unicode ตั้งแต่ '
            }
            <UnderLineCode>0000 จนถึง FFFF</UnderLineCode>

            {
               ' และไม่จำกัดจำนวน character \n \
               ถัดมาจะเป็น '
            }
            <Code>"</Code>
            {' เพื่อระบุว่า link ดังกล่าวถูกครอบด้วย '}
            <Code>""</Code>
            {
               ' เสมอ \n \
               เมื่อทำการกำหนด pattern ดังกล่าวไปแล้ว จะมีการระบุ '
            }
            <Code>?</Code>
            {' ก่อน " เพื่อเป็นการบอกว่า ถ้าพบ '}
            <Code>{'"'}</Code>

            {
               ' เมื่อใด ให้ทำการ replace ออกไปและแทนที่ด้วย \n \
               string อื่นแทน \n \
               แล้ว pattern ดังกล่าว นำไปใช้กับ '
            }
            <Code1>sub()</Code1>
            {
               ' โดยเป็น function จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
               ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ '
            }
            <Code>{'"href="[\\u0000-\\uFFFF]*?""'}</Code>

            {
               ' ส่วน argument ที่สอง จะเป็นการระบุว่า ให้ทำการ replace \n \
               แทนด้วย string ที่กำหนด ซึ่งในที่นี้เป็น empty string และ argument ที่สามจะเป็น string โดยนำ '
            }
            <Code1>pipeline_str</Code1>
            {
               ' ซึ่งเป็น string \n \
               จากผลลัพธ์ก่อนหน้านี้ ที่ได้จากผลลัพธ์ก่อนหน้านี้มาค้นหา แล้วสิ่งที่ '
            }
            <Code1>re.sub()</Code1>
            {
               ' ได้ return กลับมา จะเป็น string ที่ได้ทำการ replace link\n \
               ทั้งหมดที่อยู่ใน '
            }
            <Code1>pipeline_str</Code1>
            {' ออกไป แล้วแทนที่ด้วย empty string'}
         </p>
      </>
   );
};

export const Test8 = () => {
   return (
      <>
         
      </>
   );
};
