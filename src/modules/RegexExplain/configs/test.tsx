export const Test = () => {
   return (
      <>
         <p className="mb-2 indent-10 text-white">
            {
               'โค้ดนี้เป็นการใช้งานโมดูล re ของ Python ในการค้นหาตัวอักษรที่ตรงกับรูปแบบที่กำหนดไว้ใน pattern ซึ่งในที่นี้คือ <b>"< main[-￿]*id="ดูเพิ่ม">ดูเพิ่ม</span>"</b> ในตัวแปร data.text'
            }
         </p>
         <p className="mb-2 indent-10 text-white">
            {
               'โดย re.compile() เป็นฟังก์ชันที่ใช้ในการแปลงรูปแบบที่ต้องการค้นหาเป็น pattern ที่สามารถใช้งานได้กับฟังก์ชัน re.findall() เพื่อค้นหาตัวอักษรตาม pattern ที่กำหนดไว้ในข้อมูลที่เก็บไว้ในตัวแปร data.text'
            }
         </p>
         <p className="indent-10 text-white">
            {
               'ผลลัพธ์ที่ได้จะถูกเก็บไว้ในตัวแปร result ซึ่งเป็น list ของข้อความที่ตรงกับ pattern ที่ค้นหาได้ในข้อมูล data.text โดยในที่นี้เป็นข้อความ "< main id="ดูเพิ่ม">ดูเพิ่ม</span>" ที่ตรงกับ pattern ที่กำหนดไว้'
            }
         </p>
      </>
   );
};

export const Test2 = () => {
   return (
      <>
         <div className="mb-3 indent-10 tracking-wide text-white">
            <Code1>requests.get()</Code1> เป็น function ในการส่ง request ไปยัง webside
            ที่ต้องการจะทำการ scraping ซึ่งสิ่งที่จะ return กลับมานั้นจะเป็น object ซึ่งประกอบไปด้วย
            status เป็นการบอกสถานะ response ว่าเป็นอย่างไร เช่น ถ้า response สำเร็จ สิ่งที่ status
            จะ return กลับมาจะเป็น 200 และ text เป็นการแสดงข้อมูลหลังจากการส่ง request ไป
            ซึ่งลักษณะของข้อมูลจะเป็น string ขนาดยาว ที่ประกอบไปด้วย html code ทั้งหมด
            ซึ่งในความเป็นจริง html code ดังกล่าวจะ display อยู่บน browser เช่น Google Chrome
            เป็นต้น
         </div>
      </>
   );
};

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

export const Test3 = () => {
   return (
      <>
         <div className="mb-3 inline-block indent-10 tracking-wide text-white">
            {
               "code ส่วนนี้ เป็นการจำกัดขอบเขตจาก string ที่เป็น html code ทั้งหมด ให้เหลือส่วน html code เฉพาะที่เกี่ยวข้อง\n \
โดยลักษณะของ pattern ที่จะทำการจำกัดขอบเขตนั้น ช่วงเริ่มต้นของ string จะเป็น main tag ซึ่ง character หลังจากนั้น\n \
จะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขรหัส unicode ตั้งแต่ 0000 จนถึง FFFF และไม่จำกัดจำนวน character \n \
เพียงแต่ช่วงสุดท้ายของ string จะเป็น span tag ที่มีข้อความว่า 'ดูเพิ่ม'\n \
แล้ว pattern ดังกล่าว นำไปใช้กับ findall โดยเป็น funtion จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ "
            }
            <Code>{"'<main[\\u0000-\\uFFFF]*id='ดูเพิ่ม'>ดูเพิ่ม</span>'"}</Code>
            {
               ' และ argument \n \
               ที่สองจะเป็น string ที่ต้องการจะเปลี่ยนรูปแบบให้สอดคล้องกับ pattern ที่กำหนด แล้วสิ่งที่ '
            }
            <Code1>{'re.findall()'}</Code1>
            {
               ' ได้ return กลับมา\n \
จะเป็น list ของ string ทั้งหมด ที่เข้าข่ายเงื่อนไขตาม pattern ที่กำหนด '
            }
         </div>
      </>
   );
};

export const Test4 = () => {
   return (
      <>
         <div className="mb-3 inline-block indent-10 tracking-wide text-white">
            {
               'code ส่วนนี้ เป็นการค้นหารูปแบบ html code โดยมีลักษณะของ pattern ที่ตัวเริ่มต้นของ string นั้น จะเป็น open tag \n \
               ของ li tag แล้วถัดมาจะเป็น character อะไรก็ได้ ผ่านการกำหนดเงื่อนไขเป็น . ซึ่งไม่จำกัดจำนวน character แต่ส่วนสุดท้ายของ string \n \
               จะปิดท้ายด้วย close tag ของ li tag เสมอ\n \
               แล้ว pattern ดังกล่าว นำไปใช้กับ '
            }
            <Code1>{'re.findall()'}</Code1>
            {
               ' โดยเป็น funtion จาก re library ซึ่งจะต้องระบุ arguments ต่าง ๆ \n \
               ซึ่ง argument แรก จะเป็น pattern ซึ่งก็คือ'
            }
            <Code>{'<li>.*</li>'}</Code>

            {
               'และ argument ที่สองจะเป็น string โดยนำ result จาก code ก่อนหน้านี้\n \
               ซึ่งเป็น list ของ string มาแปลงเป็น string ก่อน โดยใช้ join ในการเชื่อม แล้วสิ่งที่'
            }

            <Code1>{'re.findall()'}</Code1>

            {
               ' ได้ return กลับมา \n \
               จะเป็น list ของ string ทั้งหมด ที่เข้าข่ายเงื่อนไขตาม pattern ที่กำหนด'
            }
         </div>
      </>
   );
};
