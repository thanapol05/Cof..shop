require('../models/database');
const Category = require('../models/Category')
const detail = require('../models/detail')



exports.homepage = async(req, res) =>{
try {
    const limitNumber = 5;
    const limitNumber2 = 10;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await detail.find({}).sort({_id:-1}).limit(limitNumber2)
    const coffee = await detail.find({'category':'coffee'}).limit(limitNumber)
    const story = await detail.find({'category':'story'}).limit(limitNumber)
    const toua = await Category.find({'category':'toua'}).limit(limitNumber)
    const kong = await Category.find({'category':'kong'}).limit(limitNumber)

    const info ={latest,coffee,story,toua,kong};

    res.render('index',{categories,info});
} catch (error) {
    res.satus(500).send({message: error.message || "Error Occured"})
}

}

exports.More = async(req, res) =>{
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        const toua = await Category.find({'category':'toua'}).limit(limitNumber)
        const kong = await Category.find({'category':'kong'}).limit(limitNumber)

        const info ={toua,kong};
    
        res.render('more',{categories,info});
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured"})
    }
    
}

exports.detail = async(req, res) =>{
    try {
       let detailId = req.params.id;

       const details = await detail.findById(detailId);
    
        res.render('detail',{details});
    } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured"})
    }
    
}
exports.Howto = async(req, res) =>{
    
        res.render('Howto');
    
}
 


/*async function insertDymmydetailData(){
    try {
        await detail.insertMany([
            {
                "name":"วิธีเลือกซื้อเมล็ดกาแฟให้ถูกใจ",
                "detail":"สิ่งแรกที่จะต้องรู้ในการเลือกเมล็ดให้ตรงกับความชอบของตัวเองคือ เราต้องรู้ตัวเราเองก่อนนะครับ ว่าเราเป็นคนชอบดื่มกาแฟแบบไหน หรือเราต้องการรสชาติประมาณไหนจากเมล็ดกาแฟ ซึ่งในเรื่องความชอบส่วนตัวจะมีสิ่งที่จะต้องรู้เป็นพื้นฐานในการชิมเพื่อสามารถบรรยายลักษณะความชอบได้นะครับคือ:Aroma/ Fragrance:กลิ่นของกาแฟนั่นเองครับ ซึ่งกลิ่นพวกนี้เป็นกลิ่นที่กาแฟเวลาดื่มจะมีลักษณะคล้ายกลิ่นนั้นๆ นะครับ (จะไม่ได้เหมือนแบบเป๊ะสักทีเดียว) อาทิเช่น กลิ่น ช็อกโกแลต, ถั่ว, วานิลา, ดอกไม้, ผลไม้, เบอร์รี่ นั่นเองครับAcidity: ระดับความเปรี้ยวของกาแฟ ซึ่งจะมีลักษณะทำให้สดชื่น ยิ่ง Acidity สูง ยิ่งมีความเปรี้ยวมากครับFlavor: รสชาติของกาแฟ ความหวาน, ความเปรี้ยว, ความเค็ม, ความขม ซึ่งถ้าคนที่ฝึกชิมจะแยกรายละเอียดได้อีกมาครับ เช่น ความเปรี้ยวคล้ายมะนาว, ความหวานละเอียดอ่อน, ความขมแบบเคมี,Body: ความหนาแน่นหรือมวลของเครื่องดื่มนั้นเองครับ ลองนึกภาพถึงนมกับน้ำเปล่านะครับ ความหนาแน่นก็ไม่เท่ากันจริงมั้ยครับ ความหนาแน่นระดับนมสดอาจจะเรียกได้ว่า Body สูง (Full Body) และความหนาแน่นของน้ำเปล่าอยู่ในระดับน้อยกว่า หรืออาจเรียกว่า Light Body นั่นเองครับAfter Taste: คือกลิ่นที่ติดอยู่ในลำคอหลังจากที่เราดื่มกาแฟเข้าไปครับ อาจจะมี After Taste ที่พึงประสงค์ยาวนาน (ลองจับเวลากันเล่นๆ ดูก็ได้นะครับ ว่ากลิ่นกาแฟอยู่ในคอนานขนาดไหน ซึ่งกาแฟคนละแบบกลิ่นและความยาวที่ค้างในคอก็ต่างกันครับ)Balance: คือความสมดุลย์ของรสชาติ ลองนึกภาพถึงตอนไปสั่งก๋วยเตี๋ยวนะครับ ถ้าหากชิมแล้วบอกว่าพอดีเลย ไม่ต้องปรุงเลย นั่นแหละครับตัวอย่างของความ Balanceเมื่อเรารู้ความต้องการของตนเองว่าครั้งนี้เราต้องการซื้อเมล็ดกาแฟลักษณะแบบไหน และสามารถสื่อสารออกไปได้ อาทิเช่น “รบกวนช่วยแนะนำกาแฟที่รสชาติไม่ต้องเปรี้ยวมาก Body กลางๆ ขอเป็นโทนช็อกโกแลตสูงๆ เอาไปชงแบบเอสเพรสโซ่” ผู้ขายก็สามารถที่จะแนะนำเมล็ดกาแฟที่น่าจะตรงกับความต้องการของเราได้ในระดับหนึ่งแล้วครับ",
                "image":"f1.jpeg",
                "cd":"Source: https://coffeepressthailand.com/2021/10/03/coffee-beans-selection-guide/ ",
                "category":"coffee"
            },
            {
                "name":"ระดับการคั่วกาแฟ คั่วเข้ม คั่วกลาง คั่วอ่อน",
                "detail":"การคั่วนั้นมีหลายระดับนะครับ ถ้าจะให้เรียกเป็นในเชิงวงการกาแฟก็อาจจะฟังดูซับซ้อนเล็กน้อยนะครับ คือมีหลายระดับมากไล่ตั้งแต่ Cinnamon Roast, Light Roast, City Roast (Medium Roast), Full City, Dark Roast, French Roast, Italian Roast ซึ่งฟังดูก็ยุ่งยากไม่น้อย หลักการง่ายๆ ก็คือเป็นการไล่ระดับความเข้มของการคั่วตั้งแต่อ่อนสุด (Cinnamon Roast ไปจนมากสุดที่ Italian Roast) นั่นแหละครับ หรือถ้าจะเอาง่ายขึ้นสามารถแบ่งการคั่วเมล็ดกาแฟเป็นกลุ่มใหญ่ๆ ก็สามารถแบ่งเป็นสามระดับครับนั่นคือ: ระดับการคั่วแบบอ่อน, ระดับการคั่วแบบกลาง, และระดับการคั่วแบบเข้ม นั่นเองครับ สำหรับบทสรุปการคั่วกาแฟนะครับ ก็สามารถกล่าวได้ว่ากาแฟยิ่งคั่วอ่อนยิ่งมีลักษณะที่เปรี้ยวกว่ากาแฟที่คั่วเข้มขึ้น จากปฏิกิริยา Caramelization ที่แป้งและโปรตีนในเมล็ดกาแฟได้แตกตัวออกกลายเป็นน้ำตาล และกาแฟยิ่งคั่วเข้มขึ้นจะได้ความหวานที่มากขึ้น (ก่อนจะถึงระดับ Burn ซึ่งความหวานเปลี่ยนเป็นความไหม้แทน) โดยการคั่วแต่ละลักษณะจะทำให้ได้รสชาติที่ต่างกันไปอย่างชัดเจน คราวนี้ก็ถึงคำถามสำคัญที่บอกว่ากาแฟคั่วระดับไหนดีที่สุด ก็ต้องขอตอบว่าขึ้นอยู่กับความชอบของแต่ละคนแล้วครับ ถ้าหากดื่มกาแฟคั่วระดับไหนแล้วมีความสุข ตรงจริตกับเราที่สุด ระดับนั้นแหละครับคือระดับการคั่วที่ดีที่สุดครับ ดื่มกาแฟให้อร่อยนะครับผม",
                "image":"cu1.jpg",
                "cd":"Source: https://coffeepressthailand.com/2021/08/19/coffeeroastinglevel/",
                "category":"coffee"
            },
            {
                "name":"คำศัพท์เฉพาะวงการกาแฟ ที่มืออาชีพต้องรู้! หมวดที่ 2 เมนูกาแฟ",
                "detail":"ต่อไปเราลองมาดูที่หมวดเมนูกาแฟกันบ้างนะครับ หลายครั้งที่เราไปร้านกาแฟแต่เมนูก็เยอะดีเหลือเกินจนไม่รู้ว่าจะสั่งอะไร หรือเมนูแต่ละอย่างมันต่างกันอย่างไร ถ้าหากเรารู้เมนูสุดคลาสสิคทั้งหมดนี้ต่อไปการกินกาแฟก็จะสนุกขึ้นมากเลยครับ แล้วคุณอาจจะได้พบเมนูโปรดเมนูใหม่ของคุณเลยก็ได้นะครับ ในอีกมุมหนึ่งคุณจะกลายเป็นเซียนที่บาริสต้ายังต้องเกรงในความรู้ของคุณทีเดียวครับEspresso: กาแฟสกัดอย่างรวดเร็วด้วยไอน้ำและความร้อน เป็นเบสสำหรับทุกเมนู โดยมากมักจะมีสัดส่วนปริมาณกาแฟกับน้ำที่ออกมาอยู่ที่ 1:2 และสกัดในเวลา 23-27 วินาที ปริมาณ Espresso จะอยู่ที่ประมาณ 20-30 มิลลิลิตร (เป็น Guideline นะครับ ของจริงคือต้องแล้วแต่ความชอบเลยครับ) เป็นเครื่องดื่มที่เข้มข้นมากจึงนำไปเป็นเบสให้เมนูอื่นๆAmericano: การดื่มกาแฟแบบคนอเมริกา โดยใช้น้ำร้อนผสมกับ Espresso โดยเกิดจากในยุคสงครามโลกที่ทหารอเมริกาเดินทางไปอิตาลี แต่กาแฟ Espresso เข้มข้นเกินไปจึงเติมน้ำร้อนเข้าไป จนกลายเป็นเมนู Americano ในที่สุดCafe Latte: ลาเต้แปลว่านมในภาษาอิตาลี Cafe Latte จึงมีความหมายถึงนมรสกาแฟนั่นเองครับ กาแฟลาเต้จะมีรสชาติอ่อนโดยมีความเป็นนมนำกาแฟ โดยมีสัดส่วนกาแฟ Espresso กับนมที่ประมาณ 1:3 ครับCappuccino: คาปูชิโน่ได้รับแรงบันดาลใจมาจากคณะนักบวช Capuchin จึงเป็นที่มาของเมนูนี้ครับ โดยมีลักษณะเป็นกาแฟนมที่มีฟองนมปิดหน้า สัดส่วนโดยประมาณจะเป็น กาแฟ 1 ส่วน นม 1 ส่วน และฟองนม 1 ส่วนครับCafe Mocha: กาแฟมอคค่า ในปัจจุบันหมายถึงเมนูกาแฟที่มีการผสมโกโก้ลงไปในเครื่องดื่ม แต่ที่มาของเมนูนี้มาจาก มอคค่าเป็นท่าเรือสินค้าในประเทศเยเมน ซึ่งกาแฟจากแหล่งนี้มีรสชาติที่เป็นเอกลักษณ์คือจะมีกลิ่นคล้ายกับกลิ่นของโกโก้ หลังจากนั้นจึงกลายเป็นที่มาของเมนูกาแฟมอคค่า ที่ผสมโกโก้หรือช็อกโกแลตลงไปนั่นเองครับ Macchiato: แมคเคียโต้ภาษาอิตาลีแปลว่าการประทับตรา โดยเมนี้ Macchiato นี้คือการทำ Espresso แล้วแต้มนมลงให้คล้ายกับการตราประทับนั่นเองครับ Caramel Macchiato: คาราเมลแมคเคียโต้เป็นเมนูที่ทาง Starbuck คิดค้นขึ้นมานะครับ การทำก็ง่ายดายคือเทนมผสมคาราเมลไซรัปในแก้ว แล้วเติม Espresso Shot ลงไป ก็จะได้ลักษณะแก้วที่มีสีขาวของนมแล้วตรงกลางเป็นสีดำของกาแฟเหมือนการประทับสีดำลงไปนั่นเองครับ รสชาติคล้ายลาเต้ที่เติมกลิ่นแหละความหวานของน้ำเชื่อมคาราเมลลงไปครับ",
                "image":"img4.jpg",
                "cd":"Source: https://coffeepressthailand.com/2020/10/07/%e0%b8%84%e0%b8%b3%e0%b8%a8%e0%b8%b1%e0%b8%9e%e0%b8%97%e0%b9%8c%e0%b9%80%e0%b8%89%e0%b8%9e%e0%b8%b2%e0%b8%b0%e0%b8%a7%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%81%e0%b8%b2%e0%b9%81%e0%b8%9f-2/",
                "category":"story"
            },
            {
                "name":"จุดเริ่มต้นของ Latte Art ศิลปะการวาดบนกาแฟที่น่าหลงใหล",
                "detail":"Latte Art หรือการแต่งหน้าฟองนมบนแก้วกาแฟ มีจุดเริ่มต้นมาจากเมืองซีแอตเทิล ประเทศสหรัฐอเมริกา จากร้านกาแฟ Espresso Vivace ของเดวิด โชเมอร์ ( David Schomer ) ผู้ที่มีความสนใจด้านงานศิลปะและพยายามหาจุดแตกต่างให้กาแฟที่เขาขาย จึงพยายามคิดค้นกาแฟที่ดีที่สุด เพื่อทำให้ผู้ดื่มประทับใจ เดวิดเป็นหนึ่งในผู้คิดค้นและทำให้ลาเต้อาร์ตได้รับความนิยมในช่วงทศวรรษ 1990 จนถึงปัจจุบัน และเขายังเป็นผู้ที่คิดค้นการรักษาอุณหภูมิของน้ำเพื่อดึงเอาความหวานของกาแฟเอสเพรซโซ่ออกมาได้อีกด้วยลายแรกที่ขึ้นเกิดขึ้นจากการทำลาเต้อาร์ตนั่นคือรูปหัวใจ ซึ่งถูกพัฒนาขึ่นโดยเดวิด โชเมอร์ ต่อมามีการทดลองวาดลวดลายหลากหลายแบบ และการทำ Latte Art ได้รับความนิยมมากถึงขั้นมีการแข่งขันระดับโลก เข่น World Latte Art Championship หากถามว่า Latte Art มีกี่ลวดลาย คำตอบคือนับไม่ถ้วน แต่หากถามว่ามีวิธีการทำกี่แบบ คำตอบคือ มีอยู่หลักๆ 2 วิธีครับ นั่นคือ แบบ Free Pouring การใช้ Pitcher และความชำนาญของบาริสต้าในการวาดลวดลายจากการราดฟองนมบนกาแฟเอสเพรซโซ่ และแบบ Etching คือการใช้เครื่องมือคล้ายไม้จิ้มฟัน วาดเป็นลวดลายหลังจากราดฟองนมบนเอสเพรซโซ่แล้ว ในปัจจุบัน มีการตีฟองนมจนละเอียดขนาด Micro Foam ทำให้การวาดลวดลายของ Latte Art ได้รับความนิมอย่างต่อเนื่อง เนื่องจากลวดลายที่ทำแล้วเห็นลวดลายได้ชัดเจน จนการทำ Latte Art กลายเป็นงานศิลปะชนิดหนึ่ง การที่จะได้กาแฟที่มีลาเต้อาร์ตดีๆสักแก้ว ต้องอาศัยความเชี่ยวชาญ ประสบการณ์และเทคนิคเฉพาะตัวของบาริสต้า รวมไปถึงความละเอียดของฟองนม ความลงตัวที่เข้ากันกับเอสเพรซโว่จนได้สีและลวดลายที่สวยงาม",
                "image":"la1.jpg",
                "cd":"Source: https://coffeepressthailand.com/2020/08/31/latte-art/",
                "category":"story"
            },
            {
                "name":"Crema สุดเย้ายวนจากเครื่องกาแฟเอสเพรสโซ่คืออะไร แล้วมันดีจริงหรือ?",
                "detail":"ครีม่าเกิดจากก๊าซและน้ำมันที่มีอยู่ในกาแฟเจอปฏิกิริยาความร้อนและแรงดันอย่างรวดเร็วจากเครื่องกาแฟเอสเพรสโซ่ ทำให้เกิดการสกัดครีม่าออกมาในช่วงต้นของการสกัดกาแฟนั่นเองครับ ซึ่งครีม่าจะเป็นส่วนที่มีความมันสูง (ครีม่าส่วนนี้แหละครับที่เป็นส่วนสำคัญในเวลาทำกาแฟนมออกมาแล้วหลายคนลงความเห็นว่ามันช่างนัวเหลือเกิน) ปัจจัยของการเกิดครีม่านั้นหลักๆ คือ ความสดของกาแฟ (ซึ่งกาแฟยิ่งสด เพิ่งคั่วมาใหม่ๆ ครีม่ายิ่งเยอะครับ) ระดับการคั่วกาแฟ (ยิ่งคั่วเข้ม น้ำมันในเมล็ดยิ่งเยอะ ครีม่ายิ่งมากเช่นกันครับ) สายพันธุ์ของกาแฟ (โรบัสต้าจะให้ครีม่าที่เยอะกว่าอราปิก้า) และแรงดันของเครื่องกาแฟครับต้องทำความเข้าใจเรื่องครีม่ากันก่อนนะครับ เนื่องจากครีม่านั่นเกิดจากปัจจัย เรื่อง “แรงดัน” ของเครื่องกลั่นเอสเพรซโซ่ ดังนั้น กาแฟที่ไม่ได้ผ่านกระบวนการสกัดด้วยแรงดันจะไม่มีครีม่า เช่น การสกัดแบบดริป (Pour over) ก็จะไม่มีครีม่าแต่อย่างใด ซึ่งไม่ได้หมายความว่ากาแฟนั้นไม่มีนะครับ แต่มันเป็นอีกลักษณะหนึ่งของการชงกาแฟ และรสชาติที่ได้มาถึงแม้จะใช้กาแฟแบบเดียวกัน แต่ลักษณะและรสชาติ ก็มีความแตกต่างกันอย่างมากครับ และตามที่กล่าวในข้างต้น อราปิก้ามักจะให้ครีม่าที่น้อยกว่าโรบัสต้า แต่อราปิก้าเป็นที่นิยมและมักถูกยกว่าคุณภาพดีกว่าโรบัสต้า หรือกาแฟคั่วอ่อนให้ครีม่าน้อยกว่าคั่วเข้ม ซึ่งไม่ได้หมายความว่ากาแฟคั่วอ่อนมีคุณภาพด้อยกว่าแต่อย่างใด… ฉะนั้นครีม่าจึงไม่ได้เป็นตัวชี้วัดถึงคุณภาพของกาแฟนะครับ แต่ครีม่ามีความสำคัญอีกประเภทหนึ่งคือสามารถวัดความสดได้ดีในเมล็ดกาแฟประเภทเดียวกันครับ (คือถ้ากาแฟเก็บไว้นาน ความสดหายไป ความหอมและความอร่อยจะลดลงไป ซึ่งครีม่าก็จะลดน้อยลงไปด้วย ครีม่าจึงมีความสำคัญที่ตรงนี้ครับ)",
                "image":"crena.jpg",
                "cd":"Source: https://coffeepressthailand.com/2020/08/14/crema/",
                "category":"story"
              },
              {
                "name":"Specialty Coffee คืออะไร? ทำไมกาแฟไทยจึงฮิตหาทำ",
                "detail":"Specialty Coffee คือ กาแฟพิเศษ ที่วัดกันตั้งแต่เมล็ดกาแฟจนถึง Process ทุกอย่างครับ เมล็ดกาแฟที่เป็น Specialty Coffee ต้องเป็นเมล็ดที่ชงออกมาแล้วผ่านกระบวนการคัด คั่ว บด กลั่น ชง จนได้กาแฟที่มีรสชาติดี ได้รับการรับรองว่ามีคุณภาพจากนักชิมที่มีความเชี่ยวชาญ ที่เรียกว่า Cupper หรือ Q – Grader โดยมีการทดสอบว่าในเรื่องกระบวนการผลิตเมล็ดกาแฟ การทดสอบคุณภาพ การทดสอบกลิ่นและรสชาติ และต้องได้คะแนน 80 คะแนนขึ้นไป ถึงจะเรียกว่า Specialty Coffee ได้ครับ ดังนั้น ถึงเราจะซื้อเมล็ดกาแฟนำเข้า ราคาสูงลิบลิ่ว ที่ดูพรีเมี่ยมมากแค่ไหน แต่ก็ไม่ได้แปลว่าเมล็ดกาแฟนั้นจะทำให้เราได้ดื่ม “Specailty Coffee” แต่เมล็ดกาแฟที่จำหน่ายทั่วไปตามห้างจะเรียกว่า Commercial Grade ครับด้วยกระแส Specialty Coffee ที่มาแรง ตลาดในเมืองไทยจึงเป็นที่น่าสนใจครับ ผู้คนเริ่มรับรู้เกี่ยวกับ Specialty Coffee มากขึ้นและอยากจะชิมกาแฟประเภทนี้โดยยอมจ่ายในราคาที่แพงขึ้น เพราะการพิถีพิถันในการผลิตกาแฟนี้ ดึงดูดเหล่าคอกาแฟทั้งหลายที่ปรารถนาอยากชิมรสสัมผัสที่แตกต่าง มีเอกลักษณ์ และรัญจวนใจในปี 2019 Specialty Coffee ในไทย มีมูลค่า 2,000 ล้านบาท โดยคิดเป็น 10% ของมูลค่ากาแฟคั่วบด และยังเติบโตอย่างต่อเนื่อง เกษตรกรไทยจึงควรหาทำสายพันธุ์กาแฟสายพันธุ์ที่ดี ป้อนตลาด Specialty Coffee เพราะถึงแม้เวียดนามและอินโดนีเซียเพื่อนบ้านเราจะเพาะปลูกมากกว่าและค่าแรงต่ำกว่า แต่ประเทศไทยเราได้เปรียบไปการทำเชิงคุณภาพมากกว่าปริมาณ ด้วยพื้นที่อันเป็นแหล่งเพาะปลูกระดับโลกอย่างเช่นดอยช้าง สามารถแข่งขันได้สบายๆ เพราะกาแฟที่นี่ให้รสชาติที่แตกต่าง มีเอกลักษณ์ จนสามารถสร้างชื่อเสียงระดับนานาชาติได้ หากพัฒนาพื้นที่เพาะปลูกแบบนี้ เกษตรกรคงได้รายได้กันมากขึ้นทีเดียวครับ",
                "image":"sp.jpg",
                "cd":"Source: https://coffeepressthailand.com/2020/08/07/specialty-coffee/",
                "category":"story"
              },
              {
                "name":"เรื่องราวของ Espresso และเครื่องทำกาแฟ จุดเริ่มต้นของกาแฟสมัยใหม่",
                "detail":"ถ้าพูดถึง Espresso (เอสเพรสโซ่) คือน้ำสีเข้มๆ ที่ถูกสกัดมาจากเครื่องกาแฟ ไม่ว่าจะเป็นเครื่องทำกาแฟอัตโนมัติ หรือเครื่องทำกาแฟเอสเพรสโซ่ราคาหลายแสน (ถูกต้องครับ เครื่องทำกาแฟใหญ่ๆ ที่อยู่ในร้านกาแฟทั้งหลายบางเครื่องซื้อรถป้ายแดงบางยี่ห้อได้สบายๆ เลยครับ)  ร้านกาแฟยอมลงทุนหลายแสนให้กับเครื่องทำกาแฟเพื่อจุดประสงค์หลักคือ ทำให้เอสเพรสโซ่รสชาติดีที่สุด (แค่นั้นจริงๆ ครับ เพราะเมนูทุกเมนูจะถูกเอามาผสมอีกทีกับเอสเพรสโซ่ ซึ่งไม่เกี่ยวข้องกับเครื่องทำกาแฟอีกต่อไป) หลายคนคงเริ่มสงสัยแล้วใช่มั้ยครับว่าทำไมถึงต้องลงทุนขนาดนี้ เพื่อให้ได้มาซึ่งเอสเพรสโซ่ที่คนทั่วไปไม่นิยม จะดื่มแต่ละทีก็รู้สึกดื่มยาก ฝาดปากจนร้องยี้ แต่ถ้าหากคุณรู้ถึงที่มาและความสำคัญของมัน คุณอาจจะเปลี่ยนมุมมองแล้วเอสเพรสโซ่อาจกลายเป็นเมนูโปรด ของคุณได้เลยครับกาแฟเอสเพรสโซ่ (Espresso) เป็นกาแฟที่สกัดออกมาด้วยกรรมวิธีที่ใช้เครื่องที่มีแรงดันพร้อมน้ำร้อนผ่านผงกาแฟอย่างรวดเร็ว (เราจะเรียกเครื่องนี้ว่าเครื่องทำกาแฟ Espresso นะครับ) ขั้นตอนคือนำผงกาแฟที่ถูกบดในความละเอียดที่เหมาะสม นำเข้าเครื่องทำกาแฟ Espresso ตัวเครื่องกาแฟจะทำหน้าที่ปล่อยน้ำร้อนพร้อมแรงดันจำนวนมหาศาลอย่างรวดเร็วเพื่อที่จะเปลี่ยนสภาพน้ำร้อนและผงกาแฟให้มารวมกัน กลายเป็นเครื่องดื่ม Espresso เข้มข้นนั่นเองครับ",
                "image":"es.jpg",
                "cd":"Source: https://coffeepressthailand.com/2020/05/25/%e0%b8%81%e0%b8%b2%e0%b9%81%e0%b8%9f%e0%b9%80%e0%b8%ad%e0%b8%aa%e0%b9%80%e0%b8%9e%e0%b8%a3%e0%b8%8b%e0%b9%82%e0%b8%8b%e0%b9%88/",
                "category":"story"
              },
              {
                "name":"วิธีเลือกเมล็ดกาแฟให้ถูกใจ อย่างมืออาชีพ",
                "detail":"กาแฟมามีที่มาจากผลไม้ตระกูล Berry ที่มีรสเปรี้ยวตามธรรมชาติ มีกลิ่นเขียวหญ้า กลิ่นดิน ไม่เป็นที่ยอมรับที่จะดื่มได้ จึงต้องนำเมล็ดดิบมาคั่วก่อนนะครับ โดยกาแฟคั่วอ่อน Light Roast ถึง Cinnamon Roast: (สีเริ่มมีการเปลี่ยนแปลงและเกิดความสุกขึ้น) มีรสชาติที่เปรี้ยวแบบผลไม้และมีกลิ่นของสมุนไพรหรือดอกไม้นั่นเองครับ กาแฟคั่วอ่อนจะรักษาความเป็นธรรมชาติได้มากที่สุด แต่จะมีรสชาติเปรี้ยวฝาด ซึ่งอาจะเป็นที่ชื่นชอบสำหรับใครหลายคน แต่บางคนอาจจะเกิดอาการไม่ชอบ ไม่ชิน จนถึงขั้นดื่มไม่ได้เลยครับกาแฟคั่วกลาง Medium Roast, City Roast ถึง Full City Roast : แต่เมื่อคั่วในเวลาที่นานขึ้นเมล็ดกาแฟจะเกิดการ Caramelize เกิดเป็นกลิ่นที่มีลักษณะคล้ายคาราเมล ถั่ว หรือช็อกโกแลตนั่นเองครับ ซึ่งกาแฟประเภทนี้เป็นที่ชื่นชอบของคนหลายคนเนื่องจากมีความ Balance ของรสชาติที่ดีและยังเก็บ Character ของกาแฟนั้นๆ ครับ (ถ้าชอบกาแฟการคั่วประเภทนี้ Coffee Press ก็มีกาแฟตัว Jai Hug/ ใจฮัก มาให้ลองกันนะครับ)กาแฟคั่วเข้ม (Medium to Dark Roast) กาแฟมีรสชาติการคั่วอย่างชัดเจน ทำให้มีกลิ่นคั่วซึ่งอาจเป็นที่ชื่นชอบของหลายคน โดยการชงจากเครื่อง Espresso นิยมใช้กาแฟระดับการคั่วนี้ครับ ซึ่งจะมีรสชาติหอมเข้มข้น เป็นที่นิยมมากที่สุดในปัจจุบันนี้ครับ (ถ้าชอบกาแฟการคั่วประเภทนี้ Coffee Press ก็มีกาแฟตัว Classic และ Premium มาให้ลองกันนะครับ)ซึ่งการเลือกใช้เมล็ดก็ควรเลือกให้เหมาะกับอุปกรณ์ที่ใช้ด้วยนะครับ โดยจะกล่าวถึงในหัวข้อต่อไปครับ คือ 1.อุปกรณ์ที่ใช้ในการชงกาแฟต้องสัมพันธ์กับระดับการคั่วของเมล็ด 2.แหล่งปลูกกาแฟ",
                "image":"ma.jpg",
                "cd":"Source: https://coffeepressthailand.com/2020/05/08/%e0%b8%a7%e0%b8%b4%e0%b8%98%e0%b8%b5%e0%b9%80%e0%b8%a5%e0%b8%b7%e0%b8%ad%e0%b8%81%e0%b9%80%e0%b8%a1%e0%b8%a5%e0%b9%87%e0%b8%94%e0%b8%81%e0%b8%b2%e0%b9%81%e0%b8%9f/",
                "category":"coffee"
              }
            
        ]);

    } catch (error) {
        console.log('err',+error)
        
    }
}

insertDymmydetailData();*/


















/*async function insertDymmyCategoryData(){
    try {
        await Category.insertMany([
            {
                "name":"Bialetti",
                "image":"t1.png",
                "category":"toua"
            },
            {
                "name":"Felicita",
                "image":"t2.jpg",
                "category":"toua"
            },
            {
                "name":"Imix",
                "image":"t3.png",
                "category":"toua"
            },
            {
                "name":"Moka Pot",
                "image":"t4.jpg",
                "category":"toua"
            }
        ]);

    } catch (error) {
        console.log('err',+error)
        
    }
}

insertDymmyCategoryData();*/