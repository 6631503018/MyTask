ชื่อ - นามสกุล (Full Name):Neree Booncharoen
รหัสนักศึกษา (Student ID):6631503018
ชื่อแอป (App Name):MyTask
Framework ที่ใช้ (Framework Used):React Native 
ลิงก์ GitHub Repository: [https://github.com/6631503018/MyTask]
ลิงก์ไฟล์ติดตั้ง (APK/IPA): [https://expo.dev/accounts/neree_booncharoen/projects/MyTask/builds/da38b938-74fb-4047-8f33-c0cb06afee68]

1. การออกแบบแอป | App Concept and Design (2 คะแนน / 2 pts)
1.1 ผู้ใช้งานเป้าหมาย | User Personas
ตัวอย่าง (Example):

Persona 1:  
ชื่อ:นายฐิติศักดิ์ โสธะโร 
อายุ: 22 ปี
อาชีพ: นักศึกษา ปี3
ความต้องการ: ต้องการวางแผนงานและจัดการโปรเจกต์ต่าง ๆ

Persona 2:  
ชื่อ:นายชยกร รัตนคร
อายุ: 21 ปี
อาชีพ: นักศึกษา ปี3
ความต้องการ: ต้องการจัดการงานและการบ้านให้เป็นระบบ
1.2 เป้าหมายของแอป | App Goals
ตัวอย่าง (Example):
-ช่วยให้ผู้ใช้งานสามารถจัดการงานและกิจกรรมต่าง ๆ ได้อย่างมีประสิทธิภาพ
-เพิ่มความสะดวกในการสร้าง แก้ไข และติดตามงาน
-มีฟีเจอร์ที่ตอบโจทย์การจัดการงานส่วนบุคคลและทีมงาน
-สนับสนุนการบริหารเวลาและการวางแผนงาน​
1.3 โครงร่างหน้าจอ / Mockup
ใส่รูปภาพ หรือคำอธิบายแต่ละหน้าหลัก 3 หน้า | Attach image or describe 3 main pages
1.หน้า Home Page
-แสดงรายการtaskทั้งหมด
-ปุ่มเพิ่มTaskใหม่
![HomePage](https://github.com/user-attachments/assets/88a4f2cf-a98c-4f75-9fda-1115315e1767)

2.หน้าCalendar
-แสดงงานในรูปแบบปฏิทิน
-สามารถดูงานตามวันที่
-แตะวันที่เพื่อดูรายละเอียดงาน
![Calendar](https://github.com/user-attachments/assets/1fffef94-b226-4212-b4b9-d54ad9b24764)

3.หน้าCompleted
-แสดงรายการtaskที่เสร็จสิ้นแล้ว
![CompleteTask](https://github.com/user-attachments/assets/dd329c70-63d7-42de-acd2-cb3ef3953469)

1.4 การไหลของผู้ใช้งาน | User Flow
ตัวอย่าง (Example):
1.เปิดแอป → หน้า Home Page
2.กดปุ่มเพิ่มงาน → หน้า Add Task → กรอกข้อมูล → บันทึกงาน
3.กลับสู่หน้า Home Page → ดูรายการงาน
4.เลือกงาน → หน้า Task Detail → แก้ไขหรือลบงาน
5.ไปที่หน้า Calendar → ดูงานตามวันที่
6.ไปที่หน้า Completed → ดูรายการงานที่เสร็จสิ้น​
2. การพัฒนาแอป | App Implementation (4 คะแนน / 4 pts)
2.1 รายละเอียดการพัฒนา | Development Details
เครื่องมือที่ใช้ / Tools used:
 ภาษาและเฟรมเวิร์ก: React Native 0.76.9
 เครื่องมือพัฒนา: Expo 52.0.46
 การจัดเก็บข้อมูลภายในเครื่อง: AsyncStorage
2.2 ฟังก์ชันที่พัฒนา | Features Implemented
Checklist:
-เพิ่มงานใหม่
-แก้ไขงาน
-ลบงาน
-แสดงรายการงานทั้งหมด
-แสดงรายละเอียดงาน
-แสดงงานในรูปแบบปฏิทิน
-แสดงรายการงานที่เสร็จสิ้น
-จัดเก็บข้อมูลงานภายในเครื่องด้วย AsyncStorag

2.3 ภาพหน้าจอแอป | App Screenshots
แนบภาพหรือ URL (Attach images or image links):
-![HomePage](https://github.com/user-attachments/assets/3d1bac3b-40f7-4337-8172-2a1b33e5963a)
-![CompleteTask](https://github.com/user-attachments/assets/27cd276f-59fe-4d51-b1ee-77b320ed1093)
-![CompleteTask](https://github.com/user-attachments/assets/77bc111a-9ab9-4346-9a1b-42c7df48e418)
-![AddTask](https://github.com/user-attachments/assets/e74af36d-2866-463f-9165-1d71718e3ca7)
-![TaskDetail](https://github.com/user-attachments/assets/bab4b6c0-b73f-4d0a-ae40-a8349b4448d3)

3. การ Build และติดตั้งแอป | Deployment (2 คะแนน / 2 pts)
3.1 ประเภท Build | Build Type
[x] Debug
[ ] Release
3.2 แพลตฟอร์มที่ทดสอบ | Platform Tested
[x] Android
[ ] iOS
3.3 ไฟล์ README และวิธีติดตั้ง | README & Install Guide
แนบไฟล์หรือคำอธิบายการติดตั้งแอป | Insert steps
1. ดาวน์โหลดไฟล์ .apk
2. เปิดในอุปกรณ์ Android
3. ติดตั้งผ่าน File Manager
4. เปิดแอปและเริ่มใช้งาน
   
4. การสะท้อนผลลัพธ์ | Reflection (2 คะแนน / 2 pts)
ตัวอย่างหัวข้อ | Suggested points:
-เรียนรู้การใช้ AsyncStorage เพื่อจัดเก็บและดึงข้อมูลงานภายในเครื่อง
-เข้าใจการจัดการ Asset (ฟอนต์, รูปภาพ) ใน React Native และการใช้ useFonts และ AppLoading เพื่อจัดการ Asset Lifecycle
-ได้ประสบการณ์ในการ Build แอปผ่าน Expo EAS Build และการตั้งค่า Android Package Name, Signing Key
-หากมีเวลาเพิ่มเติม อยากพัฒนา Feature:
-ระบบ Login/Register โดยเชื่อมกับ Firebase Authentication
 -ระบบแจ้งเตือน (Push Notification) เมื่อถึงเวลางาน
 -ระบบจัดการหมวดหมู่งาน (Categories)
 -ระบบค้นหางาน​

5. การใช้ AI ช่วยพัฒนา | AI Assisted Development (Bonus / ใช้ประกอบการพิจารณา)
5.1 ใช้ AI ช่วยคิดไอเดีย | Idea Generation
Prompt ที่ใช้:  
"Suggest features for a task management mobile app."

ผลลัพธ์:  
ได้รับไอเดียฟีเจอร์ เช่น การแจ้งเตือน, การจัดหมวดหมู่งาน, การซิงก์ข้อมูลกับคลาวด์
5.2 ใช้ AI ช่วยออกแบบ UI | UI Layout Prompt
Prompt ที่ใช้:  
"Design a simple home screen layout for a task management app using React Native."

ผลลัพธ์:  
ได้รับโครงสร้างหน้าจอ Home Page พร้อมรายการงานและปุ่มเพิ่มงานใหม่​
5.3 ใช้ AI ช่วยเขียนโค้ด | Code Writing Prompt
Prompt ที่ใช้:  
"How to display a list of tasks using AsyncStorage in React Native?"

ผลลัพธ์:  
ได้รับตัวอย่างโค้ดการดึงข้อมูลจาก AsyncStorage และแสดงใน FlatList​
5.4 ใช้ AI ช่วย debug | Debug Prompt
Prompt ที่ใช้:  
"React Native: HomeScreen shows blank after navigating back. Possible causes?"

ผลลัพธ์:  
AI แนะนำให้เช็กการโหลด Assets (เช่น รูป ฟอนต์)
ใช้ useFonts และ AppLoading เพื่อให้แน่ใจว่า Asset โหลดเสร็จก่อน render 
จัดการกับ State lifecycle ให้เรียบร้อยเวลา Navigate กลับหน้า Home

5.5 ใช้ AI ช่วย Deploy | Deployment Prompt
Prompt ที่ใช้:  
"How to build React Native app as APK using EAS Build in Expo?"

ผลลัพธ์:  
ได้ขั้นตอนใช้ Expo EAS Build สร้างไฟล์ .apk พร้อมตั้งค่า
✅ Checklist ก่อนส่ง | Final Checklist
[x] กรอกข้อมูลครบทุก Section
[x] แนบ GitHub และไฟล์ติดตั้ง

