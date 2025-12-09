const QUESTIONS = [
  {
    id: "CH001",
    question: "Mỹ học là một môn khoa học triết học, nghĩa là nó phải đóng vai trò gì?",
    answers: ["Thế giới quan", "Nhân sinh quan", "Giác quan", "Cả A và B đều đúng."],
    correct: [3]
  },
  {
    id: "CH002",
    question: "Mỹ học khám phá, phát sinh ra những giá trị trên cơ sở quy luật của cái đẹp, trong đó nghệ thuật có giá trị như thế nào",
    answers: ["Giá trị trung bình", "Giá trị thấp nhất", "Giá trị vừa cao vừa thấp", "Giá trị cao nhất."],
    correct: [3]
  },
  {
    id: "CH003",
    question: "hãy điền tiếp vào nội dung còn thiếu sau: Triết gia Alexander Baumgarten người Đức đã dùng từ “mỹ học” cho lý thuyết về…?",
    answers: ["Nghệ thuật tự do hay khoa học về cái đẹp nhận thức được", "Nghệ thuật tự do hay khoa học về cái đẹp nhận thức được", "Nghệ thuật tự do hay khoa học về cái đẹp", "Khoa học về cái đẹp nhận thức được"],
    correct: [0, 1]
  },
  {
    id: "CH004",
    question: "Năm 1750, Baumgacten đã cho xuất bản cuốn sách gì?",
    answers: ["lịch sử học đầu tiên", "Hóa học đầu tiên", "Mỹ học đầu tiên", "Triết học đầu tiên"],
    correct: [2]
  },
  {
    id: "CH005",
    question: "Thời kỳ cổ điển Đức, ai là người cho đối tượng của mỹ học là lĩnh vực sự phán đoán về thị hiếu thẩm mỹ?",
    answers: ["Alexander Baumgarten", "Kant", "Trecnexepxki", "Ôđixê"],
    correct: [1]
  },
  {
    id: "CH006",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Trecnexepxki xác nhận…mà không xem xét nghệ thuật một cách thỏa đáng trong hệ thống mỹ học của mình?",
    answers: ["Cái đẹp là cuộc sống", "Cái đẹp là cử chỉ", "Cái đẹp là hành động", "Cái đẹp là nghĩa vụ"],
    correct: [0]
  },
  {
    id: "CH007",
    question: "Hai phương diện đối lập nhau trong quan hệ thẩm mỹ nay là?",
    answers: ["khách thể thẩm mỹ và tự do thẩm mỹ", "giáo dục thẩm mỹ và chủ thể thẩm mỹ", "Khách thể thẩm mỹ và chủ thể thẩm mỹ", "Tư tưởng thẩm mỹ và chủ thể thẩm mỹ"],
    correct: [2]
  },
  {
    id: "CH008",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Nghệ thuật là một lĩnh vực tinh thần của đời sống xã hội được nhiều kiểu dạng hoạt động lý luận quan tâm đến như:…?",
    answers: ["Sử học, văn hóa học", "Sử học, nhân sinh học", "Sử học, triết học", "Sử học, xã hội học"],
    correct: [3]
  },
  {
    id: "CH009",
    question: "Tư tưởng mỹ học cổ đại được hình thành vào khoảng thế kỷ bao nhiêu?",
    answers: ["Thế kỷ IIX (TCN)", "Thế kỷ X (TCN)", "Thế kỷ IX ( TCN)", "Thế kỷ XI (TCN)"],
    correct: [2]
  },
  {
    id: "CH010",
    question: "Hêraclit biện giải hài hòa là gì?",
    answers: ["Sự thống nhất giữa những hài hòa", "Sự thống nhất giữa những mâu thuẫn", "Thống nhất giữa một mâu thuẫn", "Thống nhất giữa những yếu tố tự nhiên"],
    correct: [1]
  },
  {
    id: "CH011",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Đêmôcrít ( 460 – 370 TCN) lý giải sự hình thành của nghệ thuật bằng các nguyên nhân vật chất:…?",
    answers: ["Đó là sự bắt chước tự nhiên và các động vật", "Đó là sự bắt chước tự nhiên và các loài vật", "Đó là sự bắt chước tự nhiên và các thực vật", "Đó là sự bắt chước không tự nhiên và các loài vật"],
    correct: [1]
  },
  {
    id: "CH012",
    question: "Xôcrat còn đưa ra tiêu chí lựa chọn đối tượng để thể hiện trong tác phẩm nghệ thuật, đó là tiêu chí nào?",
    answers: ["Thiên nhiên có tính cách đẹp, nhân hậu, có phẩm hạnh cao", "Động vật có tính cách đẹp, nhân hậu, có phẩm hạnh cao", "Những con người có tính cách đẹp, nhân hậu, có phẩm hạnh cao", "những con người có tính cách đẹp"],
    correct: [2]
  },
  {
    id: "CH013",
    question: "Những thành tựu văn hóa cao nhất ở thời kỳ trung cổ là gì?",
    answers: ["Các bộ kinh Tôn giáo và các phong cách kiến trúc", "Các bộ kinh Kito giáo và các phong cách kiến trúc", "Các bộ phận Kito giáo và các phong cách tôn giáo", "Các bộ kinh Kato giáo và các phong cách cổ điển"],
    correct: [1]
  },
  {
    id: "CH014",
    question: "Cuối thời kỳ Trung cổ, ai là người nổi lên như nhà thần học lớn nhất?",
    answers: ["Ôguytxtanh (354-430)", "Tômat Đacanh (1225-1274)", "Lêôn Battixta Anbecti ( 1404 – 1472 )", "Lêôn đơ Vanhxi ( 1452 – 1529 )"],
    correct: [1]
  },
  {
    id: "CH015",
    question: "nêu đặc điểm quan trọng nhất của tư tưởng mỹ học thời Phục hưng?",
    answers: ["Tư tưởng mỹ học cảm tính, thực tiễn", "Tư tưởng mỹ học cảm tính, trực tiếp", "Tư tưởng mỹ học cá nhân, thực tế", "Tư tưởng mỹ học khách quan và chủ quan"],
    correct: [0]
  },
  {
    id: "CH016",
    question: "Hai thời kỳ thế giới quan của Kant là hai thời kỳ nào?",
    answers: ["thời kỳ tiền khen ngợi và thời kỳ phê phán", "Thời kỳ tiền phê phán và thời kỳ phê phán", "Thời kỳ phê phán và châm biếm", "Thời kỳ không phê phán"],
    correct: [1]
  },
  {
    id: "CH017",
    question: "Thế giới quan của Kant có thể chia ra hai thời kỳ: thời kỳ tiền phê phán và thời kỳ phê phán lấy năm nào làm mốc phân định>",
    answers: ["1770", "1780", "1790", "1771"],
    correct: [0]
  },
  {
    id: "CH018",
    question: "Đêni Điđrô ( 1713 – 1784 ) là nhà duy vật điển hình của triết học nào?",
    answers: ["Triết học Khai sáng Pháp", "Triết học Khai sáng Đức", "Triết học Khai sáng Nga", "Triết học Khai sáng Hy Lạp"],
    correct: [0]
  },
  {
    id: "CH019",
    question: "Cơ sở triết học của mỹ học Macxit: Sự ra đời của chủ nghĩa Mac là gì?",
    answers: ["Cuộc cách mạng vĩ đại nhất trong thế kỷ của nhân loại", "Cuộc cách mạng vĩ đại nhất trong khoa học xã hội của nhân loại", "Cuộc cách mạng hùng vĩ nhất trong xã hội của loài người", "Cuộc cách mạng công khai nhất trong khoa học xã hội"],
    correct: [1]
  },
  {
    id: "CH020",
    question: "Mac–Ăngghen quan niệm nguồn gốc của nghệ thuật là gì?",
    answers: ["Cái đẹp, nghệ thuật, này sinh do thực tiễn của con người – thực tiễn sản xuất", "Cảm xúc thẩm mỹ nảy sinh do thực tiễn của con người-thực tiễn lao động", "Cảm xúc cái đẹp nảy sinh do thực tiễn con người – lao động sản xuất", "Cảm xúc thẩm mỹ, cái đẹp, nghệ thuật, nảy sinh do thực tiễn của con người -  thực tiễn lao động sản xuất"],
    correct: [3]
  },
  {
    id: "CH021",
    question: "Nguyên tắc cơ bản trong nguyên lý tính đảng trong nghệ thuật của Lênin là gì?",
    answers: ["Nghệ thuật là một bộ phận trong sự nghiệp của giai cấp vô sản, do giai cấp vô sản lãnh đạo, và giai cấp vô sản phải lãnh đạo nghệ thuật theo đặc trưng của nó để hướng nghệ thuật phục vụ mình. Yếu tố duy vật vừa mang yếu tố biện chứng", "Nghệ thuật là một bộ phận trong sự nghiệp của giai cấp vô sản và giai cấp vô sản phải lãnh đạo nghệ thuật theo đặc trưng của nó để hướng nghệ thuật phục vụ mình", "Nghệ thuật là một bộ phận trong sự nghiệp của giai cấp vô sản, do giai cấp vô sản lãnh đạo", "Nghệ thuật là giai cấp vô sản phải lãnh đạo nghệ thuật theo đặc trưng của nó để hướng nghệ thuật phục vụ mình"],
    correct: [0]
  },
  {
    id: "CH022",
    question: "Tư tưởng mỹ học của Hegel mang yếu tố nào?",
    answers: ["Vừa mang yếu tố duy tâm vừa mang yếu tố biện chứng", "Vừa mang yếu tố duy vật vừa mang yếu tố biện chứng", "Vừa mang yếu tố duy tâm vừa mang yếu tố khảo sát", "Vừa mang yếu tố duy tâm vừa mang yếu tố khoa học"],
    correct: [0]
  },
  {
    id: "CH023",
    question: "Giai đoạn cao nhất của quá trình phát triển lý luận nghệ thuật duy vật trước Mác là mỹ học nào?",
    answers: ["Mỹ học Dân chủ Cách mạng Hy Lạp", "Mỹ học Dân chủ Cách mạng Đức", "Mỹ học Dân chủ Cách mạng Pháp", "Mỹ học Dân chủ Cách mạng Nga"],
    correct: [3]
  },
  {
    id: "CH024",
    question: "Học thuyết Mác đã góp phần bổ sung, làm cho hoàn chỉnh và vững chắc hơn về những định nghĩa cái đẹp. Đó là gì?",
    answers: ["Sự giải thích nguồn gốc của những giá trị chân – thiện – mỹ nói chung", "Sự giải thích nguồn gốc của cái đẹp", "Của những giá trị chân – thiện – mỹ nói chung", "Sự giải thích nguồn gốc của cái đẹp, của những giá trị chân – thiện – mỹ nói chung"],
    correct: [3]
  },
  {
    id: "CH025",
    question: "Lý thuyết cái đẹp định ra tiêu chuẩn gì?",
    answers: ["Một tiêu chuẩn khá lý trí cho cái đẹp", "Một tiêu chuẩn khá đơn giản cho cái đẹp", "Một tiêu chuẩn khá lý trí và đơn giản cho cái đẹp", "Một tiêu chuẩn khá lý trí hoặc đơn giản cho cái đẹp"],
    correct: [2]
  },
  {
    id: "CH026",
    question: "Ai là người đã phát triển quan niệm nghệ thuật tuyệt đối của Kant?",
    answers: ["C. Mác và Ph. Ăngghen", "A. Potebnia", "Heidegger", "Kant"],
    correct: [2]
  },
  {
    id: "CH027",
    question: "Nghệ thuật theo Kant là cách biểu diễn cái đẹp của một yếu tố nào?",
    answers: ["Công năng", "Hiệu ứng", "Hình thức", "Khả thi"],
    correct: [2]
  },
  {
    id: "CH028",
    question: "Một hiện tượng có thể được xem là đẹp với tính toàn vẹn cụ thể cảm tính của người tiếp nhận, chúng hiện diện như thế nào?",
    answers: ["Những giá trị xã hội – nhân văn", "Những giá trị xã hội – kinh tế", "Những giá trị cuộc sống – nhân dân", "Những giá trị xã hội – nhân bản"],
    correct: [3]
  },
  {
    id: "CH029",
    question: "Theo quan điểm của ai, cái đẹp không phải là phẩm chất vốn có trong sự vật, nó chỉ có trong tinh thần và chỉ tinh thần mới chiêm nghiệm được nó?",
    answers: ["Hume", "Aquinas", "Thomas Aquinas", "Hogarth"],
    correct: [0]
  },
  {
    id: "CH030",
    question: "Thượng đế Hegel cho rằng cái đẹp là gì?",
    answers: ["Là hình thể nhận tính của các ý niệm", "Là hình thể cảm tính của các ý niệm", "Là hình thể lý tính của các ý niệm", "Là hình thể trung tính của các ý niệm"],
    correct: [1]
  },
  {
    id: "CH031",
    question: "Theo quan điểm của Karl Marx cái đẹp là khách quan bởi vì nó là giá trị gì?",
    answers: ["Nhân bản – xã hội", "Nhân hóa – xã hội", "Nhân cách – xã hội", "Nhân tâm – xã hội"],
    correct: [0]
  },
  {
    id: "CH032",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Platôn cho rằng …… là cái đẹp trong ý niệm, các đồ vật đẹp chỉ là cái bóng của ý niệm đẹp?",
    answers: ["Cái đẹp vĩnh hằng", "Cái đẹp tâm hồn", "Cái đẹp tư tưởng", "Cái đẹp chân thực"],
    correct: [0]
  },
  {
    id: "CH033",
    question: "Về mỹ học, Kant được coi là người có tư tưởng duy tâm chủ quan một cách nhất quán, ông cho rằng cái đẹp như thế nào?",
    answers: ["Cái đẹp hoàn toàn phụ thuộc vào chủ thể cảm nhận", "Cái đẹp hoàn toàn phụ thuộc vào chủ thể cảm thụ", "Cái đẹp không hoàn toàn phụ thuộc vào chủ thể cảm thụ", "Cái xấu hoàn toàn phụ thuộc vào chủ thể cảm thụ"],
    correct: [1]
  },
  {
    id: "CH034",
    question: "Nhà lịch sử triết học đầu tiên là ai?",
    answers: ["Arixstot – một nhà toán toàn thư", "Arixstot – một hóa học khoa toán thư", "Arixstot – một nhà bách khoa toàn thư", "Arixstot – một nhà sử học toàn thư"],
    correct: [2]
  },
  {
    id: "CH035",
    question: "Ai là người đã có một bước tiến so với các nhà duy vật Hy Lạp cổ đại?",
    answers: ["Trecnuxepxki, nhà dân chủ cách mạng Nga", "Trecnuxepxki, nhà tư bản cách mạng Nga", "Trecnuxepxki, nhà xã hội cách mạng Nga", "Trecnuxepxki, nhà cao cấp quyền cách mạng Nga"],
    correct: [0]
  },
  {
    id: "CH036",
    question: "Mỹ học Mác – Lenin trước tiên xác định cái đẹp là gì?",
    answers: ["Một phạm trù mỹ học", "Một phạm trù triết học", "Một phạm trù khoa học", "Một phạm trù lý luận học"],
    correct: [0]
  },
  {
    id: "CH037",
    question: "Trong số các phạm trù mỹ học, phạm trù cái đẹp giữ vị trí trung tâm được thể hiện ở mấy phương diện nào?",
    answers: ["Trong cuộc sống thường ngày, trong nghệ thuật và trong mỹ học", "Trong cuộc sống thường ngày, trong lý luận nghệ thuật và trong triết học", "Trong cuộc sống thường ngày, trong chính trị và trong mỹ học", "Trong cuộc sống thường ngày, trong lý luận nghệ thuật và trong mỹ học"],
    correct: [3]
  },
  {
    id: "CH038",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Cái đẹp là phạm trù…., phản ánh giá trị thẩm mỹ tích cực ở các sự vật, hiện tượng mang lại khoái cảm vô tư, trong sáng cho con người.",
    answers: ["Mỹ học khoa học", "Mỹ học Cổ đại", "Mỹ học trung tâm", "Mỹ học thần linh"],
    correct: [2]
  },
  {
    id: "CH039",
    question: "Nêu khái niệm cái cao cả?",
    answers: ["Cái cao cả là phạm trù mỹ học cơ bản, gây nên cảm xúc khâm phục, choáng ngợp cho chủ thể thẩm mỹ", "Cái cao cả là phạm trù mỹ học cơ bản, phản ánh giá trị thẩm mỹ tích cực ở cấp độ phi thường, gây nên cảm xúc khâm phục", "Cái cao cả là phạm trù mỹ học cơ bản, phản ánh giá trị thẩm mỹ tích cực ở cấp độ phi thường, choáng ngợp cho chủ thể thẩm mỹ", "Cái cao cả là phạm trù mỹ học cơ bản, phản ánh giá trị thẩm mỹ tích cực ở cấp độ phi thường, gây nên cảm xúc khâm phục, choáng ngợp cho chủ thể thẩm mỹ"],
    correct: [3]
  },
  {
    id: "CH040",
    question: "Cái cao cả mang lại cho con người những cảm xúc thẩm mỹ đặc biệt gì?",
    answers: ["Cảm giác tôn kính, cảm giác về sự vĩ đại", "Cảm giác ngưỡng mộ, tôn kính, cảm giác về sự vĩ đại, sức mạnh tiềm tàng", "Cảm giác ngưỡng mộ, tôn kính, sức mạnh tiềm tàng", "Cảm giác ngưỡng mộ, tôn kính"],
    correct: [1]
  },
  {
    id: "CH041",
    question: "Cái bi là một phạm trù mỹ học phản ánh cái gì?",
    answers: ["Hai thuộc tính thẩm mỹ của những hiện tượng và khách thể có sự xung đột giữa cái đẹp, cái thiện với cái xấu, cái ác, dẫn đến sự mất mát, đau thương", "Ba thuộc tính thẩm mỹ của những hiện tượng có sự xung đột giữa cái đẹp, cái thiện với cái xấu, cái ác, dẫn đến sự mất mát, đau thương", "Một thuộc tính thẩm mỹ của những hiện tượng và khách thể có sự xung đột giữa cái đẹp, cái thiện với cái xấu, cái ác, dẫn đến sự mất mát, đau thương", "Bốn thuộc tính thẩm mỹ của những hiện tượng và khách thể có sự xung đột giữa cái đẹp, cái thiện với cái xấu, cái ác"],
    correct: [2]
  },
  {
    id: "CH042",
    question: "Cái bi trong nghệ thuật phản ánh cái gì?",
    answers: ["Cái bi trong cuộc sống một cách tập trung nhất, cảm xúc về sự cao thượng", "Cái bi trong cuộc sống một cách tập trung nhất, gây ấn tượng đau thương thấm thía", "Cái bi trong cuộc sống một cách gây ấn tượng đau thương thấm thía và cảm xúc về sự cao thượng", "Cái bi trong cuộc sống một cách tập trung nhất, gây ấn tượng đau thương thấm thía và cảm xúc về sự cao thượng"],
    correct: [3]
  },
  {
    id: "CH043",
    question: "Cái hài mang lại cho con người những cảm xúc thẩm mỹ đặc biệt gì?",
    answers: ["Đó là cảm giác không vui vẻ, sảng khoái", "Đó là cảm giác sảng khoái", "Đó là cảm giác vui vẻ, sảng khoái, giải tỏa căng thẳng", "Đó là cảm giác giải tỏa căng thẳng"],
    correct: [2]
  },
  {
    id: "CH044",
    question: "Arixstot cho rằng hài kịch là cái bắt chước cái xấu nhưng không phải toàn bộ sự xấu xa, bị ổi mà chỉ là gì?",
    answers: ["Một sự kỳ quặc nào đó", "Một sai lầm, một sự kỳ quặc nào đó", "Một hiểu lầm, một sự không kỳ quặc nào đó", "Hai sai lầm, hai sự kỳ quặc nào đó"],
    correct: [1]
  },
  {
    id: "CH045",
    question: "Bi kịch lạc quan xuất hiện chủ yếu trong loại hình nghệ thuật nào?",
    answers: ["Nghệ thuật xã hội chủ nghĩa", "Nghệ thuật tạo hình", "Nghệ thuật tư bản chủ nghĩa", "Nghệ thuật cảm tính"],
    correct: [0]
  },
  {
    id: "CH046",
    question: "Ý thức thẩm mỹ có đặc trưng là sự phản ánh mang tính gì về thế giới hiện thực khách quan?",
    answers: ["Cá nhân – hình tượng", "Khách thể – cá thể", "Khái quát – nhân văn", "Hình tượng – cảm tính"],
    correct: [3]
  },
  {
    id: "CH047",
    question: "Nhu cầu thẩm mỹ là gì?",
    answers: ["Là tinh thần thường trực, là trạng thái đòi hỏi sự thỏa mãn các giá trị thẩm mỹ", "Là tiềm năng tinh thần thường trực của chủ thể thẩm mỹ", "Là trạng thái đòi hỏi sự thỏa mãn các giá trị thẩm mỹ của con người", "Là tiềm năng tinh thần thường trực của chủ thể thẩm mỹ, là trạng thái đòi hỏi sự thỏa mãn các giá trị thẩm mỹ của con người"],
    correct: [3]
  },
  {
    id: "CH048",
    question: "Nhu cầu thẩm mỹ là?",
    answers: ["Tiềm năng tinh thần thường trực, là trạng thái đòi hỏi sự thỏa mãn các giá trị thẩm mỹ", "Tiềm năng tinh thần thường trực của chủ thể thẩm mỹ", "Là trạng thái đòi hỏi sự thỏa mãn các giá trị thẩm mỹ của con người", "Tiềm năng tinh thần thường trực của chủ thể thẩm mỹ, là trạng thái đòi hỏi sự thỏa mãn các giá trị thẩm mỹ của con người"],
    correct: [3]
  },
  {
    id: "CH049",
    question: "Nhu cầu nói chung của con người có thể xếp vào hai tuyến nào?",
    answers: ["Tuyến tự nhiên và tuyến cuộc sống", "Tuyến tự nhiên và tuyến xã hội", "Tuyến cảm tính và tuyến trực tính", "Tuyến xã hội và tuyến hình thành"],
    correct: [1]
  },
  {
    id: "CH050",
    question: "Kant nhận định rằng: Nhu cầu thẩm mỹ chỉ được thỏa mãn và tình cảm thẩm mỹ chỉ được như thế nào?",
    answers: ["Khi con người không vượt lên trên những suy tính vụ lợi, ích kỷ tầm thường", "Nảy sinh khi con người vượt lên trên những suy tính vụ lợi", "Nảy sinh khi con người vượt lên trên những ích kỷ tầm thường", "Nảy sinh khi con người vượt lên trên những suy tính vụ lợi, ích kỷ tầm thường"],
    correct: [3]
  },
  {
    id: "CH051",
    question: "Thị hiếu thẩm mỹ ở mỗi con người không phải là bẩm sinh, bất biến, mà thay đổi tùy theo yếu tố nào?",
    answers: ["Lứa tuổi, từng thời kỳ", "Lứa tuổi, theo giới tính khác nhau", "Từng thời kỳ, theo giới tính khác nhau", "Lứa tuổi, từng thời kỳ, theo giới tính khác nhau"],
    correct: [3]
  },
  {
    id: "CH052",
    question: "Yếu tố nào là trạng thái tình cảm tương đối ổn định, lặp đi lặp lại trước đối tượng thẩm mỹ?",
    answers: ["Nhu cầu thẩm mỹ", "Cảm thụ thẩm mỹ", "Thị hiếu thẩm mỹ", "Cuộc sống thẩm mỹ"],
    correct: [2]
  },
  {
    id: "CH053",
    question: "Lý tưởng thẩm mỹ là gì?",
    answers: ["Là một thành tố cơ bản, là hạt nhân của thẩm mỹ", "Là một thành tố cơ bản, là hạt nhân của ý thức thẩm mỹ", "Là một thành tố cơ bản, là hạt nhân của nhận thức thẩm mỹ", "Là một thành tố cơ bản, là hạt nhân của hoạt động thẩm mỹ"],
    correct: [1]
  },
  {
    id: "CH054",
    question: "Những hình tượng trong lý tưởng thẩm mỹ thường là con người thuộc yếu tố nào?",
    answers: ["Thuộc một tầng lớp trong xã hội nhất định với những quan hệ cụ thể của họ với thế giới xung quanh", "Một thời đại nhất định và những quan hệ cụ thể của họ với thế giới xung quanh", "Một thời đại nhất định, thuộc một tầng lớp trong xã hội nhất định", "Một thời đại nhất định, thuộc một tầng lớp trong xã hội nhất định với những quan hệ cụ thể của họ với thế giới xung quanh"],
    correct: [3]
  },
  {
    id: "CH055",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Thông thường lý tưởng thẩm mỹ được thể hiện … qua các hình tượng những nhân vật tích cực, nhân vật chính diện, nhân vật anh hùng?",
    answers: ["Gián tiếp", "Trực tiếp", "Trung gian", "Trực tiếp hoặc gián tiếp"],
    correct: [1]
  },
  {
    id: "CH056",
    question: "Có mấy nhóm chủ thể thẩm mỹ?",
    answers: ["3", "4", "5", "6"],
    correct: [2]
  },
  {
    id: "CH057",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Giáo dục thẩm mỹ theo … đều hướng tới làm cho con người phát triển phong phú và hài hòa và làm cho văn hóa thẩm mỹ được xác lập trong các quan hệ xã hội?",
    answers: ["Triết lý hay tư tưởng", "Nghĩa hẹp hay nghĩa rộng", "Nghĩa bóng hay nghĩa đen", "Thành phần hay tổng hợp"],
    correct: [1]
  },
  {
    id: "CH058",
    question: "Giáo dục thẩm mỹ làm hình thái năng động của chủ thể thẩm mỹ phát triển như thế nào trên cơ sở nhân sinh quan và thế giới quan đúng đắn?",
    answers: ["Mạnh mẽ hoặc tự do", "Tự do", "Mạnh mẽ", "Mạnh mẽ và tự do"],
    correct: [3]
  },
  {
    id: "CH059",
    question: "Hình thức giáo dục thẩm mỹ thứ hai là gì?",
    answers: ["Thông qua cải thiện môi trường thẩm mỹ, ăn mặc đối với vật dụng và với môi trường sống", "Thông qua cải thiện môi trường thẩm mỹ, trong đó có văn hóa giao tiếp, quan hệ đối với vật dụng", "Môi trường thẩm mỹ, trong đó có văn hóa, ăn mặc, quan hệ đối với vật dụng và với môi trường sống", "Thông qua cải thiện môi trường thẩm mỹ, trong đó có văn hóa giao tiếp, ăn mặc, quan hệ đối với vật dụng và với môi trường sống"],
    correct: [3]
  },
  {
    id: "CH060",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Nhóm chủ thể thưởng thức phản ánh thụ cảm những quá trình thẩm mỹ xảy ra trong … nhờ vào giác quan mà tích lũy được những giá trị thẩm mỹ?",
    answers: ["Cuộc sống và thẩm mỹ", "Cuộc sống và xã hội", "Cuộc sống và nghệ thuật", "Tinh thần và nghệ thuật"],
    correct: [2]
  },
  {
    id: "CH061",
    question: "Nhóm định hướng các giá trị thẩm mỹ giữ vai trò như thế nào trong việc liên kết các sản phẩm sáng tạo có giá trị thẩm mỹ cao với người tiêu thụ?",
    answers: ["Chủ yếu", "Đặc biệt", "Định hướng", "Quan trọng"],
    correct: [3]
  },
  {
    id: "CH062",
    question: "Tính chất sáng tạo của chủ thể đánh giá còn có vai trò quan trọng ở chỗ khai thác các giá trị nào?",
    answers: ["Giá trị thẩm mỹ không còn chìm ẩn trong các tác phẩm nghệ thuật", "Giá trị thẩm mỹ chưa tìm thấy nhiều trong các tác phẩm nghệ thuật", "Giá trị thẩm mỹ còn nguyên vẹn trong các tác phẩm nghệ thuật", "Giá trị thẩm mỹ còn chìm ẩn trong các tác phẩm nghệ thuật"],
    correct: [3]
  },
  {
    id: "CH063",
    question: "Hoạt động nào ra những giá trị thẩm mỹ trước hết cũng là những hoạt động phản ánh?",
    answers: ["Hoạt động thực tiễn", "Hoạt động sản xuất", "Hoạt động tinh thần", "Hoạt động gia công"],
    correct: [1]
  },
  {
    id: "CH064",
    question: "Mục đích của chủ thể sáng tạo là gì?",
    answers: ["Là nhận định về đối tượng và nêu lên những nét nổi bật, chính xác của đối tượng", "Là liên kết những nhận thức về đối tượng chính xác của đối tượng", "Là liên kết những xúc cảm về đối tượng và nêu lên những nét nổi bật, chính xác của đối tượng", "Là liên kết những thẩm mỹ về đối tượng và nêu lên những nét nổi bật"],
    correct: [2]
  },
  {
    id: "CH065",
    question: "Trong chủ thể sáng tạo nghệ thuật thì yếu tố nào có vai trò cực kỳ quan trọng?",
    answers: ["Tưởng tượng và cá tính sáng tạo", "Tưởng tượng, liên tưởng", "Tưởng tượng, liên tưởng và cá tính sáng tạo", "Liên tưởng và cá tính sáng tạo"],
    correct: [2]
  },
  {
    id: "CH066",
    question: "Nhóm chủ thể biểu hiện thẩm mỹ là gì?",
    answers: ["Là một nhóm chủ thể thực hiện việc truyền đạt sản phẩm của chủ thể sáng tạo thẩm mỹ", "Là một nhóm chủ thể thực hiện việc sáng tạo thẩm mỹ cho chủ thể tiêu thụ thẩm định", "Là một nhóm cá thể thực hiện việc truyền đạt sản phẩm của chủ thể sáng tạo thẩm mỹ cho chủ thể tiêu thụ thẩm mỹ", "Là một nhóm chủ thể thực hiện việc truyền đạt sản phẩm của chủ thể sáng tạo thẩm mỹ cho chủ thể tiêu thụ thẩm mỹ"],
    correct: [3]
  },
  {
    id: "CH067",
    question: "Mỗi chủ thể biểu hiện không thể tự mình biểu đạt được các sản phẩm sáng tạo mà họ cần phải có những yếu tố nào để biểu đạt?",
    answers: ["Vật chất, tinh thần", "Cơ cấu, phương tiện", "Công cụ, phương tiện", "Công cụ hoặc phương tiện"],
    correct: [2]
  },
  {
    id: "CH068",
    question: "Các phương tiện của nhóm chủ thể tổng hợp các giá trị thẩm mỹ bao gồm các sản phẩm của những người nào?",
    answers: ["Các công cụ sáng tạo của chủ thể biểu hiện và cả bản thân chủ thể biểu hiện", "Các thủ pháp sáng tạo, các công cụ sáng tạo của chủ thể biểu hiện và cả bản thân chủ thể biểu hiện", "Người sáng tạo, các công cụ sáng tạo của chủ thể biểu hiện và cả bản thân chủ thể biểu hiện", "Người sáng tạo, các thủ pháp sáng tạo, các công cụ sáng tạo của chủ thể biểu hiện và cả bản thân chủ thể biểu hiện"],
    correct: [3]
  },
  {
    id: "CH069",
    question: "Lao động đạt đến độ thành thạo khéo léo được coi là lao động gì?",
    answers: ["Lao động nghệ thuật", "Hoạt động nghệ thuật", "Văn hóa nghệ thuật", "Triển lãm nghệ thuật"],
    correct: [0]
  },
  {
    id: "CH070",
    question: "Nghệ thuật là đối tượng nghiên cứu của lĩnh vực nào?",
    answers: ["Văn học", "Mỹ học", "Triết học", "Khoa học"],
    correct: [1]
  },
  {
    id: "CH071",
    question: "Lĩnh vực nào được coi như một hình thái ý thức xã hội?",
    answers: ["Thẩm mỹ", "Cái đẹp", "Cuộc sống", "Nghệ thuật"],
    correct: [3]
  },
  {
    id: "CH072",
    question: "Nghệ thuật có mấy chức năng xã hội cơ bản?",
    answers: ["2", "3", "4", "5"],
    correct: [1]
  },
  {
    id: "CH073",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Chức năng thỏa mãn nhu cầu thẩm mỹ của các … nói chung, đó là chức năng đặc thù của nghệ thuật?",
    answers: ["Cá nhân và xã hội", "Cá nhân và tập thể", "Tập thể và xã hội", "Cá thể và tập thể"],
    correct: [0]
  },
  {
    id: "CH074",
    question: "Chức năng nhận thức – phản ánh của nghệ thuật là gì?",
    answers: ["Chức năng chủ yếu với mọi hình thái ý thức xã hội", "Chức năng chủ yếu với mọi hình thái ý thức xã hội, trong đó ý thức thẩm mỹ", "Chức năng chủ yếu với mọi hình thái ý thức xã hội, được tập trung một cách cao nhất trong nghệ thuật", "Chức năng chủ yếu với mọi hình thái ý thức xã hội, trong đó ý thức thẩm mỹ, được tập trung một cách cao nhất trong nghệ thuật"],
    correct: [3]
  },
  {
    id: "CH075",
    question: "Nghệ thuật phản ánh quan hệ thẩm mỹ của con người với yếu tố nào?",
    answers: ["Hiện thực khách quan", "Hiện thực chủ quan", "Thế giới hiện thực khách quan", "Thế giới hiện thực tương quan"],
    correct: [2]
  },
  {
    id: "CH076",
    question: "Nghệ thuật và triết học là gì?",
    answers: ["Một dạng hoạt động tinh thần có vị trí, vai trò, chức năng khác nhau, nhưng có mối quan hệ mật thiết với nhau", "Hai dạng hoạt động tinh thần có vị trí, nhưng có mối quan hệ mật thiết với nhau", "Hai dạng hoạt động tinh thần có vị trí, vai trò, chức năng khác nhau, nhưng có mối quan hệ mật thiết với nhau", "Hai dạng hoạt động tinh thần có vị trí, vai trò, chức năng khác nhau"],
    correct: [2]
  },
  {
    id: "CH077",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Cơ sở mục đích và tiêu chí của khoa học được diễn ra trong hệ thống các … dự đoán khám phá hướng tới tri thức?",
    answers: ["Khái niệm, phạm trù, định lý, định luật, giả thuyết", "Phạm trù, định lý, định luật, giả thuyết", "Khái niệm, phạm trù, định lý, định luật", "Khái niệm, phạm trù, định lý, giả thuyết"],
    correct: [0]
  },
  {
    id: "CH078",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Người nghệ sĩ sống và sáng tác bao giờ cũng phải đứng trong … nào đó?",
    answers: ["Một tập đoàn, một giai cấp, một quốc gia", "Một giai cấp, một quốc gia", "Một tập đoàn, một giai cấp", "Một tập đoàn, một quốc gia"],
    correct: [0]
  },
  {
    id: "CH079",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Có nội dung tốt ….. sẽ làm cho công chúng có đạo đức tốt?",
    answers: ["Hình tượng nghệ thuật", "Cuộc sống nghệ thuật", "Tác phẩm nghệ thuật", "Văn hóa nghệ thuật"],
    correct: [2]
  },
  {
    id: "CH080",
    question: "Cái gì phản ánh sự tồn tại xã hội nhất định?",
    answers: ["Văn hóa và nghệ thuật", "Mỹ học và nghệ thuật", "Khoa học và nghệ thuật", "Tôn giáo và nghệ thuật"],
    correct: [3]
  },
  {
    id: "CH081",
    question: "Tôn giáo có thể dùng nghệ thuật để làm hình thức gì trong mỹ học?",
    answers: ["Biểu hiện", "Hành động", "Chi phối", "Điều khiển"],
    correct: [0]
  },
  {
    id: "CH082",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Nghệ thuật là một ……., nên nó cũng mang bản chất của nhận thức chung?",
    answers: ["Tri thức nhận thức", "Hình thức nhận thức", "Hành động nhận thức", "Trạng thái nhận thức"],
    correct: [1]
  },
  {
    id: "CH083",
    question: "Trong thời kỳ Phục Hưng, lý thuyết nào đã trở thành nguyên lý phân tích nghệ thuật phổ biến?",
    answers: ["Hài hước", "Mỹ học", "Bắt chước", "Khoa học"],
    correct: [2]
  },
  {
    id: "CH084",
    question: "Tính đặc thù của sự phản ánh hiện thực trong nghệ thuật được thể hiện thông qua quá trình nào?",
    answers: ["Quá trình con người tiến hóa thế giới", "Quá trình con người cảm hóa thế giới", "Quá trình con người đồng hóa thế giới", "Quá trình con người hòa đồng thế giới"],
    correct: [2]
  },
  {
    id: "CH085",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Sự chiếm hữu thế giới bằng thẩm mỹ của nghệ thuật được tái hiện dưới ….. phong phú trong tất cả các trường lịch sử, xã hội, văn hóa?",
    answers: ["Đa dạng hình thức", "Ít hình thức", "Nhiều hình thức", "Hình thức phong phú"],
    correct: [2]
  },
  {
    id: "CH086",
    question: "Nội dung nghệ thuật là gì?",
    answers: ["Hiện thực chủ quan đã được mô tả trong tác phẩm nghệ thuật", "Hiện thực khách quan đã được mô tả trong tác phẩm nghệ thuật", "Hiện thực tổng quan đã được mô tả trong tác phẩm nghệ thuật", "Hiện thực trực quan đã được mô tả trong tác phẩm nghệ thuật"],
    correct: [1]
  },
  {
    id: "CH087",
    question: "Hình tượng nghệ thuật là gì?",
    answers: ["Phương thức đặc thù của nghệ thuật để thể hiện tư tưởng, tình cảm của người nghệ sĩ", "Phương thức đặc thù của nghệ thuật để mô tả hiện thực", "Phương thức đặc thù của nghệ thuật để mô tả hiện thực hoặc thể hiện tư tưởng, tình cảm của người nghệ sĩ", "Cả A, B đều đúng"],
    correct: [3]
  },
  {
    id: "CH088",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Bố cục là phương thức xây dựng tác phẩm nghệ thuật, là … cùng kiểu và khác loại cho nhất trí với nhau và với chỉnh thể?",
    answers: ["Nguyên tắc liên hệ giữa các thành tố", "Nguyên tắc liên hệ giữa các bộ phận", "Nguyên tắc liên hệ giữa các thành tố hoặc bộ phận", "Cả A, B đều đúng"],
    correct: [3]
  },
  {
    id: "CH089",
    question: "Chất liệu nghệ thuật là cơ sở vật chất của tác phẩm nghệ thuật, nhờ nó mà ý đồ nghệ thuật được thể hiện như thế nào?",
    answers: ["Khách quan hóa", "Chủ quan hóa", "Tinh tế hóa", "Trừu tượng hóa"],
    correct: [0]
  },
  {
    id: "CH090",
    question: "Thưởng thức nghệ thuật là gì?",
    answers: ["Thưởng thức các tác phẩm cụ thể, với một loại hình cụ thể", "Các tác phẩm cụ thể, với một loại hình cụ thể", "Thưởng thức các tác phẩm cụ thể", "Thưởng thức các tác phẩm không cụ thể, với một loại hình cụ thể"],
    correct: [0]
  },
  {
    id: "CH091",
    question: "Mỹ học là gì?",
    answers: ["Là một môn khoa học triết học", "Là một môn khoa học sử học", "Là một môn khoa học văn học", "Là một môn khoa học toán học"],
    correct: [0]
  },
  {
    id: "CH092",
    question: "Ai là người sáng tạo ra thuật ngữ Mỹ học?",
    answers: ["Alexander Baumgarten", "Kant", "Trecneexpkki", "Iliat và Ôđixê"],
    correct: [0]
  },
  {
    id: "CH093",
    question: "Trong quá trình sử dụng và nghiên cứu, định nghĩa từ \"mỹ học\", người ta ví mỹ học như cái cây có nhiều cành và luôn phát triển vì sao?",
    answers: ["Mỹ học luôn tồn tại trong thiên nhiên và nghệ thuật", "Mỹ học luôn tồn tại trong xã hội và nghệ thuật", "Mỹ học luôn tồn tại trong nghệ thuật", "Mỹ học luôn tồn tại trong xã hội, trong thiên nhiên và nghệ thuật"],
    correct: [3]
  },
  {
    id: "CH094",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Năm …., Baumgarten đã cho xuất bản cuốn mỹ học đầu tiên, ở đó ông xác định môn học này là nghiên cứu việc nhận thức thế giới bằng cảm xúc?",
    answers: ["1740", "1750", "1760", "1770"],
    correct: [1]
  },
  {
    id: "CH095",
    question: "Giữa thế kỷ XIX, Trécneexpkki coi đối tượng của mỹ học là gì?",
    answers: ["Quan hệ thẩm mỹ của thiên nhiên với hiện thực", "Quan hệ thẩm mỹ của xã hội với hiện thực", "Quan hệ thẩm mỹ của con người với chủ nghĩa", "Quan hệ thẩm mỹ của con người với hiện thực"],
    correct: [3]
  },
  {
    id: "CH096",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: ……như phương thức và kết quả cao nhất của sự tác động qua lại lẫn nhau giữa khách thể thẩm mỹ và chủ thể thẩm mỹ?",
    answers: ["Văn học", "Nghệ thuật", "Mỹ học", "Triết học"],
    correct: [1]
  },
  {
    id: "CH097",
    question: "Mỹ học Mác – Lênin là một hệ thống tri thức hoàn chỉnh với ba mảng chính nào?",
    answers: ["Lịch sử sự phát triển tư tưởng mỹ học, lý luận cơ bản và nghiên cứu mỹ học", "Lịch sử sự phát triển tư tưởng mỹ học, lý luận cơ bản và triết học ngoài mácxít", "Lịch sử sự phát triển tư tưởng mỹ học, lý luận cơ bản và nghiên cứu mỹ học – triết học ngoài mácxít", "Lịch sử sự phát triển tư tưởng khoa học, lý luận cơ bản và nghiên cứu mỹ học – triết học ngoài mácxít"],
    correct: [2]
  },
  {
    id: "CH098",
    question: "Tư tưởng mỹ học Cổ đại đạt đến độ cực thịnh vào thế kỷ IV (TCN) và kết thúc vào thế kỷ nào?",
    answers: ["Đầu thế kỷ thứ VI sau công nguyên", "Đầu thế kỷ thứ VII sau công nguyên", "Nửa đầu thế kỷ thứ VIII sau công nguyên", "Nửa đầu thế kỷ thứ VI sau công nguyên"],
    correct: [0]
  },
  {
    id: "CH099",
    question: "Mỹ học Hy Lạp cổ đại phát triển rực rỡ nhất ở đâu?",
    answers: ["Đảo Sisin", "Nam bán đảo Italia", "Aten", "Địa Trung Hải"],
    correct: [2]
  },
  {
    id: "CH100",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau Theo Pitago (580 – 500 TCN) cho rằng…?",
    answers: ["Cái đẹp là sự tương phản trong quan hệ số lượng", "Cái đẹp là sự hài hòa trong quan hệ chất lượng", "Cái đẹp là sự trung hòa trong quan hệ số lượng", "Cái đẹp là sự hài hòa trong quan hệ số lượng"],
    correct: [3]
  },
  {
    id: "CH101",
    question: "Hêraclit (530 – 470 TCN) – nhà thơ và nhà triết gia vĩ đại theo xu hướng duy vật, xem xét sự vật theo quan điểm nào?",
    answers: ["Biện chứng khởi đầu", "Biện chứng khoa học", "Biện chứng sơ khai", "Biện chứng lý tưởng"],
    correct: [2]
  },
  {
    id: "CH102",
    question: "Ai là người được coi là một trong những đại biểu sớm nhất giải thích các khái niệm thẩm mỹ theo xu hướng duy vật và có tính chất biện chứng sơ khai?",
    answers: ["Hêraclit", "Kant", "Mác – Lênin", "Trécnexepxki"],
    correct: [0]
  },
  {
    id: "CH103",
    question: "Đêmôcrit nêu lên tính chất về mức độ của vẻ đẹp là gì?",
    answers: ["Sự vừa phải, không thừa, không thiếu", "Sự trung bình, không thừa, không thiếu", "Sự trung bình, vừa phải, không thừa", "Sự trung bình, vừa phải, không thừa, không thiếu"],
    correct: [3]
  },
  {
    id: "CH104",
    question: "Triết học Xôcrat cho rằng con người xem xét ở các góc độ hoạt động nào?",
    answers: ["Thực tiễn, hành vi, phẩm chất", "Thực tiễn, hành động, phẩm hạnh", "Thực tiễn, hành vi, phẩm hạnh", "Thực hành, hành vi, phẩm hạnh"],
    correct: [2]
  },
  {
    id: "CH105",
    question: "Triết học Xôcrat khẳng định điều gì?",
    answers: ["Sự vật nào cũng có thể là đẹp và cũng có thể không đẹp trong những tình huống khác nhau", "Sự vật nào cũng có thể là đẹp và cũng có thể không đẹp trong những tình huống giống nhau", "Sự vật nào cũng có thể là đẹp", "Sự vật nào cũng có thể không đẹp trong những tình huống khác nhau"],
    correct: [0]
  },
  {
    id: "CH106",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Theo Xôcrat nghệ thuật không những tái hiện thiên nhiên ở cái có … mà nó còn có khả năng diễn tả các trạng thái tinh thần con người?",
    answers: ["Tạo hình, màu sắc, hình khối", "Đường nét, màu sắc, ánh sáng", "Âm thanh, màu sắc, hình khối", "Đường nét, màu sắc, hình khối"],
    correct: [3]
  },
  {
    id: "CH107",
    question: "Theo Xôcrat nghệ thuật không những tái hiện thiên nhiên ở cái có đường nét, màu sắc, hình khối mà nó còn có khả năng diễn tả gì?",
    answers: ["Các trạng thái tinh thần con người", "Các trạng thái tinh thần con vật", "Tinh thần con người", "Các trạng thái con người"],
    correct: [0]
  },
  {
    id: "CH108",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Mỹ học thời Trung cổ bắt đầu … và kết thúc vào …?",
    answers: ["Vào thế kỷ II / cuối thế kỷ III", "Vào thế kỷ IV / cuối thế kỷ XIII", "Vào thế kỷ II / cuối thế kỷ XI", "Vào thế kỷ III / cuối thế kỷ XIII"],
    correct: [3]
  },
  {
    id: "CH109",
    question: "Ai là nhà tư tưởng điển hình có nhiều quan điểm mỹ học trong giai đoạn đầu của thời kỳ Trung cổ?",
    answers: ["Ôguýtxtanh", "Arixstot", "Xôcrat", "Đêmôcrit"],
    correct: [0]
  },
  {
    id: "CH110",
    question: "Tomat Đacanh coi nghệ thuật là gì?",
    answers: ["Sứ mệnh cơ bản của nghệ thuật", "Sự mô phỏng cơ bản của nghệ thuật", "Sự mô phỏng, sứ mệnh cơ bản của nghệ thuật", "Sự mô phỏng, sứ mệnh cơ bản của mỹ học"],
    correct: [2]
  },
  {
    id: "CH111",
    question: "Tomat Đacan xem cái đẹp chính là gì?",
    answers: ["Hình tượng phản ánh một sự vật, thậm chí trong trường hợp chính bản thân sự vật ấy không đẹp", "Phản ánh một cách đầy đủ, trọn vẹn nhất của một sự vật", "Hình tượng phản ánh một cách đầy đủ, thậm chí trong trường hợp chính bản thân sự vật ấy không đẹp", "Hình tượng phản ánh một cách đầy đủ, trọn vẹn nhất của một sự vật, thậm chí trong trường hợp chính bản thân sự vật ấy không đẹp"],
    correct: [3]
  },
  {
    id: "CH112",
    question: "Lêôna đơ Vanhxi đặc biệt quan tâm đến quan hệ lý thuyết và thực tiễn, ông khẳng định như thế nào?",
    answers: ["“Người ham mê thực tiễn mà thiếu khoa học chẳng khác nào thuyền trưởng đi tàu mà không có tay lái”", "“Người ham mê thực tiễn mà không thiếu khoa học chẳng khác nào thuyền trưởng đi tàu mà không có tay lái hoặc thiếu địa bàn”", "“Người ham mê thực tiễn mà thiếu khoa học chẳng khác nào thuyền trưởng đi tàu mà không có tay lái hoặc thiếu địa bàn”", "“Người ham mê thực tiễn mà thiếu khoa học chẳng khác nào thuyền trưởng đi tàu mà thiếu địa bàn”"],
    correct: [2]
  },
  {
    id: "CH113",
    question: "Kant luận giải khá sâu về thiên tài, ông phân định cái đẹp như thế nào?",
    answers: ["Cái đẹp trong tự nhiên là con người đẹp, trong nghệ thuật là cảm giác đẹp về vật", "Cái đẹp trong tự nhiên là vũ trụ, trong nghệ thuật là cảm giác đẹp về vật", "Cái đẹp trong tự nhiên là vật đẹp, trong nghệ thuật là cảm giác đẹp về thần linh", "Cái đẹp trong tự nhiên là vật đẹp, trong nghệ thuật là cảm giác đẹp về vật"],
    correct: [3]
  },
  {
    id: "CH114",
    question: "Hệ thống triết học – mỹ học của Kant mang tính nhân văn sâu sắc, nó hướng tới việc gì?",
    answers: ["Thúc đẩy cá nhân con người và tự do lý trí", "Giải phóng cá nhân con người và tự do lý trí", "Giải phóng cá nhân con người", "Tự do lý trí"],
    correct: [1]
  },
  {
    id: "CH115",
    question: "Mỹ học cổ điển Đức đỉnh cao của nó là gì?",
    answers: ["Mỹ học", "Triết học", "Khoa học", "Văn hóa học"],
    correct: [0]
  },
  {
    id: "CH116",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Thế kỷ XVIII, triết học khai sáng là …… vì tiến bộ xã hội, vì tự do của con người?",
    answers: ["Cơ sở lý luận cho xu hướng nghệ thuật truyền thống", "Cơ sở lý luận cho xu hướng nghệ thuật hiện đại", "Cơ sở lý luận cho xu hướng nghệ thuật thường thức", "Cơ sở lý luận cho xu hướng nghệ thuật đấu tranh"],
    correct: [3]
  },
  {
    id: "CH117",
    question: "Đeni Điđrô khẳng định mục đích chính của nghệ thuật là gì?",
    answers: ["Giáo dục đạo đức cho quần chúng nhân dân, tố cáo cái xấu, cái ác, tố cáo sự suy đồi", "Phục vụ nhân dân, giáo dục đạo đức cho quần chúng nhân dân", "Phục vụ nhân dân, tố cáo cái xấu, cái ác, tố cáo sự suy đồi", "Phục vụ nhân dân, giáo dục đạo đức cho quần chúng nhân dân, tố cáo cái xấu, cái ác, tố cáo sự suy đồi"],
    correct: [3]
  },
  {
    id: "CH118",
    question: "Cái đẹp được Letxing quan niệm bộc lộ như thế nào?",
    answers: ["Trong hoạt động, trong khát vọng chống lại bất công và tội ác", "Trong cuộc đấu tranh, trong khát vọng chống lại bất công và tội ác", "Trong cuộc đấu tranh, trong hoạt động, trong khát vọng chống lại bất công và tội ác", "Trong cuộc đấu tranh, trong hoạt động, trong khát vọng chống lại bất công"],
    correct: [2]
  },
  {
    id: "CH119",
    question: "Bản chất xã hội của nghệ thuật là gì?",
    answers: ["Nghệ thuật là một hình thái ý thức xã hội do cơ sở kinh tế sinh ra và bị cơ sở địa phương quyết định", "Nghệ thuật là một hình thái ý thức xã hội do cơ sở kinh tế quyết định", "Nghệ thuật là một hình thái ý thức xã hội do cơ sở kinh tế sinh ra và bị cơ sở kinh tế quyết định", "Nghệ thuật là một hình thái ý thức xã hội do cơ sở kinh tế sinh ra"],
    correct: [2]
  },
  {
    id: "CH120",
    question: "Bản chất nhận thức nghệ thuật là gì?",
    answers: ["Nghệ thuật là một trong những biện pháp phản ánh hiện thực", "Nghệ thuật là một hình thức nhận thức có ý nghĩa to lớn", "Bất kỳ một nhận thức nào về hiện thực cũng là một sự phản ánh hiện thực vào đầu óc con người", "Là một sự phản ánh hiện thực vào đầu óc con người. Là một trong những biện pháp phản ánh hiện thực. Là một hình thức nhận thức có ý nghĩa to lớn"],
    correct: [3]
  },
  {
    id: "CH121",
    question: "Cơ sở lý luận chủ nghĩa Mác – Chủ nghĩa duy vật biện chứng và Chủ nghĩa duy vật lịch sử xuất hiện như thế nào?",
    answers: ["Mở đầu cho một thời đại mới trong quá trình phát triển nhận thức nhân loại", "Mở đầu cho một thời đại mới", "Mở đầu cho một quá trình phát triển nhận thức nhân loại", "Quá trình phát triển nhận thức nhân loại"],
    correct: [0]
  },
  {
    id: "CH122",
    question: "Những đóng góp trực tiếp của Lênin trong mỹ học là gì?",
    answers: ["Nguyên lý tính đảng trong nghệ thuật và vấn đề kế thừa và sáng tạo của nghệ thuật", "Phản ánh luận và vấn đề kế thừa và sáng tạo của nghệ thuật", "Nguyên lý tính đảng trong nghệ thuật, phản ánh luận và vấn đề kế thừa và sáng tạo của nghệ thuật", "Vấn đề kế thừa và sáng tạo của nghệ thuật"],
    correct: [2]
  },
  {
    id: "CH123",
    question: "Phản ánh luận là cống hiến quan trọng thứ mấy của Lênin vào kho tàng lý luận nghệ thuật Mác-xít?",
    answers: ["Thứ một", "Thứ hai", "Thứ ba", "Thứ tư"],
    correct: [1]
  },
  {
    id: "CH124",
    question: "Ai là người đã làm phong phú, đào sâu và phát triển thêm những vấn đề cơ bản của mỹ học Mác-xít?",
    answers: ["C. Mác và Ph. Ăngghen", "A. Potebnia", "Lênin", "T. Benfei"],
    correct: [2]
  },
  {
    id: "CH125",
    question: "Tư tưởng mỹ học và lý luận nghệ thuật Đức cuối XVIII đầu XIX như thế nào?",
    answers: ["Tư tưởng mỹ học nhân loại đạt tới mức phát triển thấp", "Tư tưởng mỹ học nhân loại đạt tới mức phát triển trung bình", "Tư tưởng mỹ học nhân loại đạt tới mức phát triển không cao", "Tư tưởng mỹ học nhân loại đạt tới mức phát triển cao"],
    correct: [3]
  },
  {
    id: "CH126",
    question: "Hegel xem cái đẹp là gì?",
    answers: ["Là hiện thân của ý niệm tương đối", "Là thể hiện của ý niệm tuyệt đối", "Là hiện thân của ý niệm tuyệt đối", "Là hiện thân của ý niệm"],
    correct: [2]
  },
  {
    id: "CH127",
    question: "Bielinski coi nghệ thuật là gì? CHƯƠNG 2: KHÁCH THỂ THẨM MỸ",
    answers: ["Cái tái hiện hiện thực; cuộc sống là đối tượng của thẩm mỹ", "Cái cuộc sống là đối tượng của nghệ thuật", "Cái tái hiện hiện thực; cuộc sống là đối tượng của nghệ thuật", "Cái tái hiện hiện thực hoặc cuộc sống là đối tượng của triết học"],
    correct: [2]
  },
  {
    id: "CH128",
    question: "Học thuyết nào đã góp phần bổ sung, làm cho hoàn chỉnh và vững chắc hơn về những định nghĩa cái đẹp?",
    answers: ["Cổ điển Đức", "Hy Lạp", "Mac", "Nga"],
    correct: [2]
  },
  {
    id: "CH129",
    question: "Học thuyết Mac có cho rằng cái đẹp không xuất phát từ thần linh, từ ý niệm tuyệt đối, mà xuất phát từ đâu?",
    answers: ["Lao động đấu tranh sinh tồn, con người tự hoàn thiện mình từng bước về thể chất và tinh thần, những giác quan, những cảm quan về cái đẹp được nảy sinh và phát triển", "Con người tự hoàn thiện mình từng bước về thể chất và tinh thần và những giác quan, những cảm quan về cái đẹp được nảy sinh và phát triển", "Lao động đấu tranh sinh tồn và những giác quan, những cảm quan về cái đẹp được nảy sinh và phát triển", "Lao động đấu tranh sinh tồn, con người tự hoàn thiện mình từng bước về thể chất và tinh thần"],
    correct: [0]
  },
  {
    id: "CH130",
    question: "Lao động là … làm cho đời sống, nhu cầu tinh thần phong phú thêm, trong đó có nhu cầu sáng tạo nghệ thuật?",
    answers: ["Hoạt động thực tiễn", "Hoạt động thể thao", "Hoạt động vui chơi", "Hoạt động giải trí"],
    correct: [0]
  },
  {
    id: "CH131",
    question: "Một cách tiếp cận khác đến cái đẹp là do nó bằng … của người xem?",
    answers: ["Cảm xúc", "Cảm nhận", "Giác quan", "Ý tưởng"],
    correct: [0]
  },
  {
    id: "CH132",
    question: "Kant cho rằng cái đẹp là gì?",
    answers: ["Cái đẹp là cái gì đó không có bất kỳ một chức năng nào khác ngoài chức năng làm cái đẹp", "Cái gì đó không có bất kỳ hai chức năng nào khác ngoài chức năng làm cái đẹp", "Cái gì đó không có bất kỳ ba chức năng nào khác ngoài chức năng làm cái đẹp", "Cái gì đó không có bất kỳ bốn chức năng nào khác ngoài chức năng làm cái đẹp"],
    correct: [0]
  },
  {
    id: "CH133",
    question: "Một hiện tượng có thể được xem là đẹp khi với tính toàn vẹn cụ thể cảm tính của người nào?",
    answers: ["Tiếp nhận", "Cảm nhận", "Đồng cảm", "Tiếp thu"],
    correct: [0]
  },
  {
    id: "CH134",
    question: "Trong mỹ học và lịch sử nghệ thuật, cái đẹp và sự tiếp nhận cái đẹp được nghiên cứu ở bình diện quan hệ giữa các yếu tố nào?",
    answers: ["Vật chất và tinh thần, khách quan và chủ quan, tự nhiên và xã hội", "Vật chất và tinh thần, tự nhiên và xã hội, hình thức và nội dung", "Khách quan và chủ quan, tự nhiên và xã hội, hình thức và nội dung", "Vật chất và tinh thần, khách quan và chủ quan, tự nhiên và xã hội, hình thức và nội dung"],
    correct: [3]
  },
  {
    id: "CH135",
    question: "Đặc trưng của cái đẹp được xác định thông qua mối quan hệ của nó với các loại hình giá trị khác nào?",
    answers: ["Giá trị thực dụng (lợi ích), giá trị nhận thức (chân lý), giá trị đạo đức (chân, thiện)", "Giá trị nhận thức (chân lý), giá trị đạo đức (chân, thiện)", "Giá trị thực dụng (lợi ích), giá trị đạo đức (chân, thiện)", "Giá trị thực dụng (lợi ích), giá trị nhận thức (chân lý)"],
    correct: [0]
  },
  {
    id: "CH136",
    question: "Mỹ học duy vật tìm cái gì?",
    answers: ["Nguồn gốc của không tiếp nhận và trải nghiệm cái đẹp ở thực tại vật chất", "Nguồn gốc của tiếp nhận và không trải nghiệm cái đẹp ở thực tại vật chất", "Nguồn gốc của tiếp nhận và trải nghiệm cái đẹp ở thực tại vật chất", "Nguồn gốc của tiếp thu và không trải nghiệm cái đẹp ở thực tại vật chất"],
    correct: [2]
  },
  {
    id: "CH137",
    question: "Mỹ học duy vật thể hiện các xu hướng nhìn nhận cái gì?",
    answers: ["Cái thẩm mỹ", "Cái cuộc sống", "Cái đẹp", "Cái nồng nỗi"],
    correct: [2]
  },
  {
    id: "CH138",
    question: "Tchernyshevski cho rằng cái đẹp là gì?",
    answers: ["Lý tưởng", "Tự do", "Cuộc sống", "Sự sống"],
    correct: [3]
  },
  {
    id: "CH139",
    question: "Các đại biểu của mỹ học theo chủ thuyết nào nêu lên sự liên hệ có tính quy luật giữa cái đẹp với lao động của con người?",
    answers: ["Chủ thuyết Roma", "Chủ thuyết Marx", "Chủ thuyết Tcherny", "Chủ thuyết Marry"],
    correct: [1]
  },
  {
    id: "CH140",
    question: "Mỹ học theo chủ thuyết Marx cũng nhấn mạnh đặc biệt mối liên hệ biện chứng giữa cái gì?",
    answers: ["Cái không đẹp và cái có ích, cái đẹp và chân lý", "Cái đẹp và cái có ích, cái đẹp và chân lý", "Cái đẹp và cái không có ích, cái đẹp và chân lý", "Cái không đẹp và cái không có ích, cái đẹp và chân lý"],
    correct: [1]
  },
  {
    id: "CH141",
    question: "Thời Hy Lạp cổ đại, xuất phát từ thế giới quan cho rằng thế giới các vật thụ cảm là cái gì?",
    answers: ["Cái bi của thế giới ý niệm", "Cái tâm của thế giới ý niệm", "Cái hình của thế giới ý niệm", "Cái bóng của thế giới ý niệm"],
    correct: [3]
  },
  {
    id: "CH142",
    question: "Hêghen – nhà duy tâm khách quan người Đức quan niệm cái đẹp như là một sự thể hiện đặc biệt của ý niệm gì?",
    answers: ["Ý niệm tương đối dưới hình thức cụ thể thụ tính", "Ý niệm tuyệt đối dưới hình thức cụ thể nhân tính", "Ý niệm tuyệt đối dưới hình thức cụ thể bản tính", "Ý niệm tuyệt đối dưới hình thức cụ thể cảm tính"],
    correct: [3]
  },
  {
    id: "CH143",
    question: "Ai là nhà tư tưởng duy vật có tính biện chứng chất phác đồng nhất cái đẹp với sự hài hòa, còn bản thân sự hài hòa là thống nhất giữa các mặt mâu thuẫn?",
    answers: ["Hêraclit", "Platôn", "Hêghen", "Kant"],
    correct: [0]
  },
  {
    id: "CH144",
    question: "Nhà nguyên tử luận Đêmôcrit phát hiện vẻ đẹp có quy mô gì?",
    answers: ["Quy mô vừa phải, có chừng mực giữa các bộ phận trong một chỉnh thể", "Quy mô vừa phải, nó tồn tại trong sự cân xứng", "Quy mô vừa phải, nó tồn tại trong sự cân xứng, có chừng mực giữa các bộ phận trong một chỉnh thể", "Tồn tại trong sự cân xứng, có chừng mực giữa các bộ phận trong một chỉnh thể"],
    correct: [1]
  },
  {
    id: "CH145",
    question: "Trecxnưxepxki, nhà dân chủ cách mạng Nga cho cái đẹp là gì?",
    answers: ["Ý niệm", "Thần linh", "Vật chất", "Cuộc sống"],
    correct: [3]
  },
  {
    id: "CH146",
    question: "Trong số các phạm trù mỹ học, phạm trù cái đẹp giữ vị trí như thế nào?",
    answers: ["Chính diện", "Trung tâm", "Tổng thể", "Đầu tiên"],
    correct: [1]
  },
  {
    id: "CH147",
    question: "Trong số các phạm trù mỹ học, phạm trù cái đẹp giữ vị trí trung tâm được thể hiện ở mấy phương diện?",
    answers: ["2", "3", "4", "5"],
    correct: [1]
  },
  {
    id: "CH148",
    question: "Cái gì được đánh giá là đẹp phải diễn ra hoặc được phản ánh lại một cách chân thực, nghĩa là nó không thể giả dối?",
    answers: ["Sự vật, hiện tượng", "Hiện tượng", "Sự vật", "Sự vật hoặc hiện tượng"],
    correct: [0]
  },
  {
    id: "CH149",
    question: "Những con người xã hội, những hiện tượng xã hội chỉ được đánh giá là đẹp khi nó như thế nào?",
    answers: ["Góp phần mang lại lợi ích cho xã hội", "Góp phần mang lại lợi ích cho tập thể, cho xã hội", "Góp phần mang lại lợi ích cho cá nhân, cho xã hội", "Góp phần mang lại lợi ích cho con người, cho xã hội"],
    correct: [3]
  },
  {
    id: "CH150",
    question: "Biểu hiện của cái đẹp là nói đến các sự vật hiện tượng như thế nào?",
    answers: ["Các sự vật, hiện tượng được đánh giá là đẹp", "Hiện tượng được đánh giá là đẹp, các vẻ đẹp cụ thể", "Các sự vật, hiện tượng được đánh giá là đẹp, các vẻ đẹp cụ thể", "Các sự vật, các vẻ đẹp cụ thể"],
    correct: [2]
  },
  {
    id: "CH151",
    question: "Vẻ đẹp được cảm nhận chủ yếu qua đâu?",
    answers: ["Thị giác và vị giác", "Thị giác và thính giác", "Khứu giác và thính giác", "Vị giác và thính giác"],
    correct: [1]
  },
  {
    id: "CH152",
    question: "Lĩnh vực biểu hiện của cái đẹp có thể phân ra mấy lĩnh vực biểu hiện?",
    answers: ["5", "4", "3", "2"],
    correct: [2]
  },
  {
    id: "CH153",
    question: "Nêu ra ba lĩnh vực biểu hiện của cái đẹp?",
    answers: ["Trong tự nhiên, trong xã hội, trong nghệ thuật", "Trong thiên nhiên, trong xã hội, trong nghệ thuật", "Trong tự nhiên, trong cuộc sống, trong nghệ thuật", "Trong tự nhiên, trong xã hội hoặc trong nghệ thuật"],
    correct: [0]
  },
  {
    id: "CH154",
    question: "Cái cao cả có thể tìm thấy ở đâu?",
    answers: ["Trong thiên nhiên, trong xã hội, trong con người và trong nghệ thuật", "Trong xã hội, trong con người và trong nghệ thuật", "Trong thiên nhiên, trong con người và trong nghệ thuật", "Trong thiên nhiên, trong xã hội, trong con người"],
    correct: [0]
  },
  {
    id: "CH155",
    question: "Có mấy kiểu cao cả?",
    answers: ["1", "2", "3", "4"],
    correct: [1]
  },
  {
    id: "CH156",
    question: "Mỹ học Mác – Lênin xác định rằng hiện tượng thẩm mỹ được xem là đối tượng của cái cao cả bao gồm hai phương diện nào?",
    answers: ["Phương diện toàn diện và phương diện cá nhân", "Phương diện xã hội và phương diện cá nhân", "Phương diện khách thể và phương diện chủ thể", "Phương diện tâm linh và phương diện tín ngưỡng"],
    correct: [2]
  },
  {
    id: "CH157",
    question: "Cái cao cả được thể hiện ra trong nghệ thuật thông thường qua các hình thức điển hình nào?",
    answers: ["Tính trung bình, hoành tráng", "Tính đồ sộ, hoành tráng", "Tính nhỏ bé, hoành tráng", "Tính đồ sộ, quá khổ"],
    correct: [1]
  },
  {
    id: "CH158",
    question: "Mỹ học Mác – Lênin khẳng định bi kịch là gì?",
    answers: ["Một loại hiện tượng xã hội", "Một loại hiện tượng tự nhiên", "Một loại hiện tượng khoa học", "Một loại hiện tượng triết học"],
    correct: [0]
  },
  {
    id: "CH159",
    question: "Bi hùng phản ánh cái gì?",
    answers: ["Sự hy sinh cho cái mới một cách thấp hèn", "Sự hy sinh cho cái mới một cách cao cả", "Sự hy sinh cho cái mới một cách", "Sự hy sinh cho cái mới một cách cao cả"],
    correct: [1, 3]
  },
  {
    id: "CH160",
    question: "Cái hài là một phạm trù mỹ học phản ánh một thuộc tính thẩm mỹ của những hiện tượng và khách thể có tính chất nào?",
    answers: ["Trái ngược, mâu thuẫn, tạo ra tiếng cười", "Mâu thuẫn, tạo ra tiếng cười", "Trái ngược, tạo ra tiếng cười", "Trái ngược, mâu thuẫn"],
    correct: [0]
  },
  {
    id: "CH161",
    question: "Ai là người cho hài kịch là cái bắt chước cái xấu nhưng không phải toàn bộ sự xấu xa, bi đỡi mà chỉ là một sai lầm, một sự kỳ quặc nào đó?",
    answers: ["Arixtot", "Kant xet", "Hêghen", "Trécnexép¬xki"],
    correct: [0]
  },
  {
    id: "CH162",
    question: "Mỹ học Mác – Lênin xác định cơ sở khách quan của cái hài là gì?",
    answers: ["Sự thể hiện bề ngoài của nó, là sự không phù hợp giữa một sự vật, hiện tượng nào đó với môi trường, với xu thế vận động của ngoại cảnh", "Sự thống nhất giữa phẩm chất bên trong của hiện tượng hài, là sự không phù hợp giữa một sự vật, hiện tượng nào đó với môi trường, với xu thế vận động của ngoại cảnh", "Sự thống nhất giữa phẩm chất bên trong của hiện tượng hài và sự thể hiện bề ngoài của nó, là sự không phù hợp giữa một sự vật", "Sự thống nhất giữa phẩm chất bên trong của hiện tượng hài và sự thể hiện bề ngoài của nó, là sự không phù hợp giữa một sự vật, hiện tượng nào đó với môi trường, với xu thế vận động của ngoại cảnh"],
    correct: [3]
  },
  {
    id: "CH163",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Dạng hài lịch sử – xã hội có cơ sở là …… giữa xu hướng phát triển của tiến bộ xã hội, của các lực lượng cách mạng với các lực lượng xã hội lạc hậu?",
    answers: ["Mâu thuẫn", "Hòa thuận", "Hỗ trợ", "Mật thiết"],
    correct: [0]
  },
  {
    id: "CH164",
    question: "Tiếng cười trong cái hài khác tiếng cười sinh lý đơn thuần vì sao?",
    answers: ["Một dạng mang ý nghĩa không nhận thức, khám phá", "Một dạng mang ý nghĩa nhận thức, tìm hiểu", "Một dạng mang ý nghĩa nhận thức, khám phá", "Một dạng mang ý nghĩa khám phá"],
    correct: [2]
  },
  {
    id: "CH165",
    question: "Bi kịch nào khắc họa sâu vào sự bi quan, mất niềm tin hoặc cảm nhận phi lý về đời sống hiện thực, hoặc cái nhìn u ám về tương lai của nhân loại?",
    answers: ["Bi kịch lạc quan", "Bi kịch xã hội chủ nghĩa", "Bi kịch tư sản hiện đại", "Bi kịch cổ đại"],
    correct: [2]
  },
  {
    id: "CH166",
    question: "Chủ thể thẩm mỹ là phương diện thứ mấy của quan hệ thẩm mỹ?",
    answers: ["Hai", "Ba", "Bốn", "Năm"],
    correct: [0]
  },
  {
    id: "CH167",
    question: "Chủ thể thẩm mỹ là phương diện thứ hai của quan hệ thẩm mỹ, đó chính là gì?",
    answers: ["Các tập đoàn xã hội, các tập đoàn xã hội các hoạt động người trong hoạt động thường thức, đánh giá", "Con người xã hội, các tập đoàn xã hội các hoạt động người trong hoạt động đánh giá, sáng tạo các giá trị thẩm mỹ", "Con người xã hội, các tập đoàn xã hội các hoạt động người trong hoạt động thường thức, sáng tạo các giá trị thẩm mỹ", "Con người xã hội, các tập đoàn xã hội các hoạt động người trong hoạt động thường thức, đánh giá, sáng tạo các giá trị thẩm mỹ"],
    correct: [3]
  },
  {
    id: "CH168",
    question: "Ý thức thẩm mỹ là khái niệm đi liền với khái niệm hoạt động gì?",
    answers: ["Thẩm định", "Thẩm quyền", "Thẩm mỹ", "Thẩm thấu"],
    correct: [2]
  },
  {
    id: "CH169",
    question: "Ý thức thẩm mỹ không chỉ phản ánh tồn tại xã hội một cách thụ động, mà còn như thế nào?",
    answers: ["Tích cực cùng với sự phát triển của tồn tại xã hội", "Tác động tích cực với sự tồn tại xã hội", "Tác động tích cực trở lại với sự phát triển của tồn tại xã hội", "Tác động không tích cực trở lại với sự phát triển của tồn tại xã hội"],
    correct: [2]
  },
  {
    id: "CH170",
    question: "Cảm xúc thẩm mỹ là một trong những thành tố thứ mấy của ý thức thẩm mỹ?",
    answers: ["Đầu tiên", "Thứ hai", "Thứ ba", "Thứ tư"],
    correct: [0]
  },
  {
    id: "CH171",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Nhu cầu thẩm mỹ là một trong những thành tố …. của ý thức thẩm mỹ?",
    answers: ["Chủ yếu", "Đầu tiên", "Cơ bản", "Trọng tâm"],
    correct: [2]
  },
  {
    id: "CH172",
    question: "Nhu cầu thẩm mỹ thuộc về tuyến xã hội, nó mang tính chất gì?",
    answers: ["Tinh thần", "Vật chất", "Giai cấp", "Xã hội"],
    correct: [0]
  },
  {
    id: "CH173",
    question: "Nhu cầu thẩm mỹ ở con người được bộc lộ qua mấy xu hướng?",
    answers: ["Hai", "Ba", "Bốn", "Năm"],
    correct: [0]
  },
  {
    id: "CH174",
    question: "Thị hiếu thẩm mỹ là gì?",
    answers: ["Là thái độ tình cảm của con người trước cái đẹp, cái xấu", "Là sở thích của con người về phương diện thẩm mỹ", "Sở thích của con người về phương diện thẩm mỹ", "Sở thích của con người về phương diện thẩm định"],
    correct: [1]
  },
  {
    id: "CH175",
    question: "Thị hiếu thẩm mỹ ổn định và bền vững hơn, nó là sự thống nhất giữa yếu tố nào?",
    answers: ["Giữa tình cảm thẩm mỹ và bản chất", "Giữa tình cảm thẩm mỹ và cái đẹp", "Giữa tình cảm thẩm mỹ và lý trí", "Giữa tình cảm và lý trí"],
    correct: [2]
  },
  {
    id: "CH176",
    question: "Thị hiếu thẩm mỹ nghiêng về phía nào thì sẽ bền vững, ổn định hơn?",
    answers: ["Tinh cảm", "Lý trí", "Cảm xúc", "Xã hội"],
    correct: [1]
  },
  {
    id: "CH177",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Giữa ….. không có ranh giới cứng nhắc, chúng chịu sự chi phối của quan điểm chính trị của một xã hội nhất định nào đó?",
    answers: ["Thị hiếu thẩm mỹ và thị hiếu thẩm mỹ độc hại", "Thị hiếu thẩm mỹ lành mạnh và thị hiếu thẩm mỹ hiện đại", "Thị hiếu thẩm mỹ lành mạnh và thị hiếu thẩm mỹ độc hại", "Thị hiếu thẩm mỹ lành mạnh và thị hiếu thẩm mỹ không lành mạnh"],
    correct: [3]
  },
  {
    id: "CH178",
    question: "Một đối tượng thẩm mỹ có thể là lành mạnh, không lành mạnh tùy thuộc vào gì??",
    answers: ["Người cảm nhận và mức độ tiếp xúc của người đó với đối tượng", "Người cảm thụ và mức độ tiếp xúc của người đó với đối tượng", "Người cảm nhận và mức độ của đối tượng", "Mức độ tiếp xúc của người đó với đối tượng"],
    correct: [0]
  },
  {
    id: "CH179",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Mốt – xem xét dưới góc độ mỹ học – Triết học – là….?",
    answers: ["Sự thay đổi một cách cục bộ các hình thức bề ngoài, xảy ra dưới sự ảnh hưởng của nhiều yếu tố xã hội", "Sự thay đổi một cách thường xuyên, cục bộ các hình thức bề ngoài", "Sự thay đổi một cách thường xuyên, xảy ra dưới sự ảnh hưởng của nhiều yếu tố xã hội", "Sự thay đổi một cách thường xuyên, cục bộ các hình thức bề ngoài, xảy ra dưới sự ảnh hưởng của nhiều yếu tố xã hội"],
    correct: [3]
  },
  {
    id: "CH180",
    question: "Trong mỹ học, mốt có thể làm cho những yếu tố truyền thống trở nên như thế nào?",
    answers: ["Lỗi thời, không phù hợp với cuộc sống hiện tại", "Không phù hợp với cuộc sống hiện tại", "Lỗi thời, không phù hợp với cuộc sống", "Lỗi thời, phù hợp với cuộc sống hiện tại"],
    correct: [0]
  },
  {
    id: "CH181",
    question: "Lý tưởng thẩm mỹ đóng vai trò như thế nào cho các giá trị thẩm mỹ cần thiết và mong muốn?",
    answers: ["Hình tượng", "Hình ảnh", "Hình thái", "Hình mẫu"],
    correct: [3]
  },
  {
    id: "CH182",
    question: "Đánh giá nào bao giờ cũng phải tuân theo các chuẩn mực?",
    answers: ["Đánh giá thẩm định", "Đánh giá thẩm mỹ", "Đánh giá cảm xúc", "Đánh giá cuộc sống"],
    correct: [1]
  },
  {
    id: "CH183",
    question: "Hãy điền tiếp nội dung còn thiếu sau: Lý tưởng thẩm mỹ được biểu hiện ra thông qua ….. mang tính toàn vẹn và cụ thể cảm tính?",
    answers: ["Thực vật", "Con người", "Nhân vật", "Hình tượng"],
    correct: [3]
  },
  {
    id: "CH184",
    question: "Lý tưởng thẩm mỹ trong nghệ thuật là gì?",
    answers: ["Sự thể hiện một cách tập trung sâu sắc lý tưởng thẩm mỹ ngoài đời sống xã hội, nó có khả năng dẫn dắt lý tưởng thẩm mỹ ngoài hiện thực", "Sự thể hiện một cách tập trung sâu sắc lý tưởng thẩm mỹ ngoài đời sống xã hội", "Tập trung sâu sắc thẩm mỹ ngoài đời sống xã hội, nó có khả năng không dẫn dắt lý tưởng thẩm mỹ ngoài hiện thực", "Dẫn dắt lý tưởng thẩm mỹ ngoài hiện thực"],
    correct: [0]
  },
  {
    id: "CH185",
    question: "Nhóm nào được gọi là nhóm cảm thụ các giá trị thẩm mỹ?",
    answers: ["Chủ thể thẩm định", "Chủ thể thưởng thức", "Chủ thể thẩm mỹ", "Chủ thể định cư"],
    correct: [2]
  },
  {
    id: "CH186",
    question: "Giáo dục thẩm mỹ bao giờ cũng nhằm làm hình thành một chủ thể thẩm mỹ biết đánh giá và sáng tạo cái gì?",
    answers: ["Đánh giá và sáng tạo trên mọi mặt của cuộc sống theo quy luật của cái đẹp", "Hưởng thụ, sáng tạo trên mọi mặt của cuộc sống theo quy luật của cái đẹp", "Sáng tạo trên mọi mặt của cuộc sống theo quy luật của cái đẹp", "Hưởng thụ, đánh giá và sáng tạo trên mọi mặt của cuộc sống theo quy luật của cái đẹp"],
    correct: [3]
  },
  {
    id: "CH187",
    question: "Bản chất của giáo dục thẩm mỹ theo quan điểm của mỹ học Mác – Lênin gắn liền với các hoạt động nào?",
    answers: ["Sáng tạo", "Nhận thức", "Chủ nghĩa hiện thực", "Xã hội tư bản"],
    correct: [0]
  },
  {
    id: "CH188",
    question: "Các yếu tố nào của giai cấp đều phụ thuộc vào điều kiện sinh sống và mục tiêu giáo dục của giai cấp đó?",
    answers: ["Thị hiếu thẩm mỹ và lý tưởng thẩm mỹ", "Tình cảm thẩm mỹ và lý tưởng thẩm mỹ", "Tình cảm thẩm mỹ, thị hiếu thẩm mỹ và lý tưởng thẩm mỹ", "Tình cảm thẩm mỹ, thị hiếu thẩm mỹ"],
    correct: [2]
  },
  {
    id: "CH189",
    question: "Tính xã hội của giáo dục thẩm mỹ còn gắn liền với tính gì?",
    answers: ["Tính thời đại", "Tính hiện đại", "Tính công chúng", "Tính giai cấp"],
    correct: [0]
  },
  {
    id: "CH190",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Mỹ học ….. khẳng định giáo dục thẩm mỹ gắn bó chặt chẽ với giáo dục lao động?",
    answers: ["Mác", "Kant", "Mác – Lênin", "Lênin"],
    correct: [2]
  },
  {
    id: "CH191",
    question: "Giáo dục thẩm mỹ bằng các tư tưởng mỹ học là hình thức giáo dục như thế nào?",
    answers: ["Giáo dục thấp nhất", "Giáo dục cao nhất", "Giáo dục vừa phải", "Giáo dục cá nhân"],
    correct: [1]
  },
  {
    id: "CH192",
    question: "Khả năng tiếp nhận, cảm thụ các giá trị thẩm mỹ phụ thuộc vào mấy yếu tố?",
    answers: ["Một", "Hai", "Nhiều", "Ít"],
    correct: [2]
  },
  {
    id: "CH193",
    question: "Nhóm định hướng còn có chức năng liên kết nào?",
    answers: ["Khả năng kiểm soát chung", "Khả năng sáng tạo chung", "Khả năng học hành chung", "Khả năng hình thành chung"],
    correct: [1]
  },
  {
    id: "CH194",
    question: "Nhóm chủ thể sáng tạo thẩm mỹ là gì?",
    answers: ["Những chủ thể tiếp nối quá trình tiêu thụ, quan sát của nhóm chủ thể thưởng thức để chuyển sang một quá trình mới – quá trình sản xuất", "Quan sát của nhóm chủ thể thưởng thức để chuyển sang một quá trình mới – quá trình sản xuất", "Những chủ thể tiếp nối quá trình tiêu thụ, quan sát của nhóm chủ thể thưởng thức để chuyển sang một quá trình mới", "Tiếp nối quá trình tiêu thụ, quan sát của nhóm chủ thể thưởng thức để chuyển sang một quá trình mới – quá trình sản xuất"],
    correct: [0]
  },
  {
    id: "CH195",
    question: "Việc quan sát của chủ thể sáng tạo không phải là nhận thức đơn thuần. Đó là gì?",
    answers: ["Quá trình nhận thức sâu hơn về bản chất đối tượng", "Quá trình thưởng thức sâu hơn về bản chất đối tượng", "Quá trình cảm nhận sâu hơn về bản chất đối tượng", "Quá trình hình thành sâu hơn về bản chất đối tượng"],
    correct: [0]
  },
  {
    id: "CH196",
    question: "Nghệ sĩ được coi là chủ thể nào khi họ phản ánh lại hiện tượng thẩm mỹ?",
    answers: ["Chủ thể nhân tạo", "Chủ thể cá nhân", "Chủ thể thưởng thức", "Chủ thể sáng tạo"],
    correct: [3]
  },
  {
    id: "CH197",
    question: "Bản chất của quá trình sáng tạo là gì?",
    answers: ["Quá trình phản ánh", "Quá trình hình thành", "Quá trình nhận thức", "Quá trình cảm nhận"],
    correct: [0]
  },
  {
    id: "CH198",
    question: "Sáng tạo thẩm mỹ là gì?",
    answers: ["Là sáng tạo theo quy luật cái không đẹp, được thể hiện trong sáng tạo nghệ thuật", "Là sáng tạo theo quy luật cái đẹp, được thể hiện cao nhất trong sáng tạo nghệ thuật", "Là được thể hiện cao nhất trong sáng tạo nghệ thuật", "Là sáng tạo theo quy luật cái đẹp, được thể hiện trong sáng tạo"],
    correct: [1]
  },
  {
    id: "CH199",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Đặc trưng của nhóm chủ thể biểu hiện thẩm mỹ là … cái bản chất của toàn bộ sản phẩm sáng tạo đến người tiêu thụ?",
    answers: ["Nhằm truyền đạt một cách trung thành", "Nhằm truyền đạt một cách trung thành", "Nhằm truyền đạt một cách trung thành", "Nhằm truyền đạt một cách trung thành"],
    correct: [0, 1, 2, 3]
  },
  {
    id: "CH200",
    question: "Nhóm chủ thể tổng hợp các giá trị thẩm mỹ là nhóm nào?",
    answers: ["Là nhóm vừa là người sáng tạo, vừa là người biểu hiện và cũng là nhà phê bình", "Là nhóm vừa có thể là người thụ cảm, vừa là người sáng tạo, vừa là người biểu hiện và cũng là nhà phê bình", "Là nhóm vừa có thể là người thụ cảm, vừa là người sáng tạo và cũng là nhà phê bình", "Là nhóm vừa có thể là người thụ cảm, vừa là người sáng tạo"],
    correct: [1]
  },
  {
    id: "CH201",
    question: "Khái niệm giáo dục thẩm mỹ trong mỹ học Mác – Lênin được xác định ở mấy định nghĩa?",
    answers: ["1", "2", "3", "4"],
    correct: [1]
  },
  {
    id: "CH202",
    question: "Giáo dục thẩm mỹ bao giờ cũng nhằm hình thành một chủ thể thẩm mỹ biết như thế nào?",
    answers: ["Hưởng thụ, đánh giá trên mọi mặt của cuộc sống theo quy luật của cái đẹp", "Hưởng thụ và sáng tạo trên mọi mặt của cuộc sống theo quy luật của cái đẹp", "Đánh giá và sáng tạo trên mọi mặt của cuộc sống theo quy luật của cái đẹp", "Hưởng thụ, đánh giá và sáng tạo trên mọi mặt của cuộc sống theo quy luật của cái đẹp"],
    correct: [3]
  },
  {
    id: "CH203",
    question: "Nghệ thuật chịu sự chi phối của quy luật nào?",
    answers: ["Các quy luật xã hội", "Các quy luật cuộc sống", "Các quy luật lịch sử", "Các quy luật khoa học"],
    correct: [2]
  },
  {
    id: "CH204",
    question: "Mục đích của sự hoàn thiện, hoàn mỹ trong nghệ thuật là gì?",
    answers: ["Mục đích không vươn tới của nghệ thuật", "Mục đích vươn tới của nghệ thuật", "Mục tiêu vươn tới của nghệ sĩ", "Mục đích vươn tới của cá nhân và tập thể"],
    correct: [1]
  },
  {
    id: "CH205",
    question: "Nghệ thuật giáo dục con người một cách như thế nào?",
    answers: ["Lãng mạn, tự giác, khả năng giáo dục lâu dài", "Lãng mạn, tự giác, khả năng giáo dục lâu dài từ thế hệ này đến thế hệ khác", "Tự giác, khả năng giáo dục lâu dài từ thế hệ này đến thế hệ khác", "Khả năng giáo dục lâu dài từ thế hệ này đến thế hệ khác"],
    correct: [1]
  },
  {
    id: "CH206",
    question: "Nghệ thuật giáo dục và cảm hóa con người bằng cách nào?",
    answers: ["Nêu gương thông qua hình tượng nghệ thuật", "Thông qua hình tượng con người", "Thông qua hình tượng nghệ thuật", "Nêu gương thông qua hình tượng văn hóa"],
    correct: [0]
  },
  {
    id: "CH207",
    question: "Tất cả các chức năng xã hội cơ bản của nghệ thuật suy cho cùng chỉ là một, đó là chức năng gì?",
    answers: ["Con người thấy và vươn tới các giá trị tích cực của xã hội, thiện, mỹ mà thôi", "Hướng con người thấy và vươn tới các giá trị tích cực của xã hội, giá trị chân, thiện, mỹ", "Vươn tới các giá trị tích cực của xã hội, giá trị chân, mỹ mà thôi", "Hướng đưa con người thấy và vươn tới các giá trị tích cực của xã hội"],
    correct: [1]
  },
  {
    id: "CH208",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: ….. đều là thể hiện quan hệ chủ thể với khách thể?",
    answers: ["Triết học và nghệ thuật", "Mỹ học và nghệ thuật", "Triết học và khoa học", "Văn học và nghệ thuật"],
    correct: [0]
  },
  {
    id: "CH209",
    question: "Triết học và nghệ thuật có quan hệ như thế nào?",
    answers: ["Gắn bó", "Vận động", "Hỗ trợ", "Cạnh tranh"],
    correct: [2]
  },
  {
    id: "CH210",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Nghệ thuật mang dấu ấn…., mang lại khoái cảm….?",
    answers: ["Cá thể/ Nhân loại", "Cá nhân/ Thẩm mỹ", "Hình thức/ Thẩm mỹ", "Cá nhân/ Thẩm định"],
    correct: [1]
  },
  {
    id: "CH211",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Nghệ thuật không chỉ đưa lại tư liệu đồ sộ về…., mà còn gợi mở kích thích trí tưởng tượng phong phú sáng tạo đối với khoa học?",
    answers: ["Nhận thức xã hội", "Nhận thức văn hóa", "Nhận thức trí tuệ", "Nhận thức cuộc sống"],
    correct: [3]
  },
  {
    id: "CH212",
    question: "Nghệ thuật có sức mạnh tiềm tàng trong việc tác động đến những yếu tố nào?",
    answers: ["Tinh thần, quan điểm lý luận của con người thông qua chức năng giáo dục", "Tinh thần, quan điểm chính trị của con người thông qua chức năng giáo dục", "Tinh thần, quan điểm chính trị của con người không thông qua chức năng giáo dục", "Tinh thần hoặc quan điểm chính trị của con người thông qua chức năng giáo dục"],
    correct: [1]
  },
  {
    id: "CH213",
    question: "Đạo đức thường xuyên có mặt trong các tác phẩm nào?",
    answers: ["Tác phẩm ca nhạc", "Tác phẩm văn học", "Tác phẩm nghệ thuật", "Tác phẩm hài kịch"],
    correct: [2]
  },
  {
    id: "CH214",
    question: "Với đạo đức tốt, người ta sáng tạo và sử dụng những tác phẩm có nội dung như thế nào?",
    answers: ["Tốt", "Xấu", "Bình thường", "Thấp hèn"],
    correct: [0]
  },
  {
    id: "CH215",
    question: "Sự thống nhất và mối liên hệ hữu cơ này có cơ sở từ sự thống nhất của cái gì?",
    answers: ["Chân, thiện, mỹ", "Đẹp, xấu, hài", "Cao cả, bao dung, rộng lượng", "Bi, hài, cao cả"],
    correct: [0]
  },
  {
    id: "CH216",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: ….. cổ vũ cuộc đấu tranh cho tự do, cho hạnh phúc trần gian đích thực. Còn …… khuyên nhủ sự nhẫn nhục, chịu đựng để hứa hẹn hạnh phúc ở thế giới khác?",
    answers: ["Nghệ thuật/ Mỹ học", "Nghệ thuật/ Đạo đức", "Nghệ thuật/ Khoa học", "Nghệ thuật/ Tôn giáo"],
    correct: [3]
  },
  {
    id: "CH217",
    question: "Giữa nghệ thuật và tôn giáo có sự chi phối, ảnh hưởng lẫn nhau hay không?",
    answers: ["Không", "Có", "Không chắc chắn", "Không biết"],
    correct: [1]
  },
  {
    id: "CH218",
    question: "Ai viết: “ý niệm chẳng qua chỉ là cái vật chất được đem chuyển vào trong óc con người và được cải biến đi ở trong đó”?",
    answers: ["Kant", "Mác", "Arix tót", "Tsecnu sepxki"],
    correct: [1]
  },
  {
    id: "CH219",
    question: "Nghệ thuật có vai trò quan trọng trong hoạt động nào?",
    answers: ["Thế giới nhận thức", "Trạng thái nhận thức", "Hành động nhận thức", "Hoạt động nhận thức"],
    correct: [3]
  },
  {
    id: "CH220",
    question: "Khi diễn đạt tư tưởng của mình về “Thuyết bắt chước\", Arixtốt cũng khẳng định mấy điều?",
    answers: ["Một", "Hai", "Ba", "Bốn"],
    correct: [1]
  },
  {
    id: "CH221",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Arixtot khẳng định rằng: ….?",
    answers: ["Một cái gì mơ hồ ở thế giới các ý niệm hay ở thế giới siêu nghiệm", "Sự thích thú thẩm mỹ không phải là một cái gì mơ hồ ở thế giới các ý niệm", "Sự thích thú thẩm mỹ không phải là một cái gì mơ hồ ở thế giới siêu nghiệm", "Sự thích thú thẩm mỹ không phải là một cái gì mơ hồ ở thế giới các ý niệm và thế giới siêu nghiệm"],
    correct: [3]
  },
  {
    id: "CH222",
    question: "Mac đã khẳng định nghệ thuật là gì?",
    answers: ["Một hình thái ý thức xã hội đặc thù", "Một hình thái ý thức xã hội đặc trưng", "Một hình thái ý thức xã hội đặc sắc", "Một hình thái ý thức xã hội đặc công"],
    correct: [0]
  },
  {
    id: "CH223",
    question: "Luận điểm cơ bản của triết học Mác – Lênin là gì?",
    answers: ["Phương thức sản xuất vật chất quy định các quá trình xã hội", "Phương thức sản xuất vật chất quy định các quá trình chính trị và tinh thần của toàn bộ đời sống xã hội nói chung", "Phương thức sản xuất vật chất không quy định các quá trình tinh thần của toàn bộ đời sống xã hội nói chung", "Cả A, B đều đúng"],
    correct: [3]
  },
  {
    id: "CH224",
    question: "Bản chất của hoạt động nhận thức của nghệ thuật với tư cách là sự tái hiện thế giới hiện thực một cách đặc thù có thể xem như thế nào?",
    answers: ["Một loại hoạt động bằng cách nhân hóa ý tưởng", "Một loại phản ánh", "Một loại hoạt động bằng cách mô hình hoá ý tưởng", "Cả A, B, C đều đúng"],
    correct: [3]
  },
  {
    id: "CH225",
    question: "Trong lý luận phản ánh, Lênin khẳng định?",
    answers: ["Nhận thức là một quá trình từ trực quan sinh động đến tư duy trừu tượng và từ tư duy trừu tượng đến thực tiễn", "Nhận thức là một quá trình từ trực quan sinh động đến tư duy trừu tượng", "Nhận thức là một quá trình từ trực quan sinh động đến thực tiễn", "Nhận thức là một quá trình từ tư duy trừu tượng đến trực quan sinh động và từ tư duy trừu tượng đến thực tiễn"],
    correct: [0]
  },
  {
    id: "CH226",
    question: "Cấu trúc của hình tượng nào hướng vào cảm quan của người cảm thụ để thể hiện, diễn cảm làm rung động tâm hồn người cảm thụ?",
    answers: ["Nghệ thuật", "Mỹ học", "Triết học", "Khoa học"],
    correct: [0]
  },
  {
    id: "CH227",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Trong hình tượng nghệ thuật cái lý trí phải được thể hiện bằng…, còn tình cảm phải luôn được kiểm tra bằng….?",
    answers: ["Tình cảm / lý trí", "Cảm xúc / lý trí", "Tinh cảm / cái đẹp", "Tình cảm / cuộc sống"],
    correct: [0]
  },
  {
    id: "CH228",
    question: "Nội dung nghệ thuật có đồng nhất với đối tượng phản ánh hay không?",
    answers: ["Không đồng nhất", "Có đồng nhất", "Vừa không đồng nhất, vừa có đồng nhất", "Cả A, B đều đúng"],
    correct: [0]
  },
  {
    id: "CH229",
    question: "Hình tượng nghệ thuật là phương thức, phương tiện biểu hiện và tồn tại yếu tố nào?",
    answers: ["Của nội dung", "Của hình thức", "Của cuộc sống", "Của thẩm mỹ"],
    correct: [0]
  },
  {
    id: "CH230",
    question: "Cái gì là tổng hòa các sự kiện có liên hệ liên nhau theo thời gian và không gian, được miêu tả trong tác phẩm?",
    answers: ["Văn học", "Cốt truyện", "Nghệ thuật", "Văn hóa"],
    correct: [1]
  },
  {
    id: "CH231",
    question: "Ngôn ngữ nghệ thuật là gì?",
    answers: ["Hệ thống các phương tiện thiên nhiên biểu hiện", "Phương tiện xã hội biểu hiện ở một loại hình nghệ thuật nhất định", "Hệ thống các phương tiện vật chất biểu hiện ở một loại hình nghệ thuật không nhất định", "Hệ thống các phương tiện vật chất biểu hiện ở một loại hình nghệ thuật nhất định"],
    correct: [3]
  },
  {
    id: "CH232",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Giữa … có sự thống nhất biện chứng?",
    answers: ["Nội dung và hình thức nghệ thuật", "Vật chất và hình thức nghệ thuật", "Tư tưởng và hình thức nghệ thuật", "Thành phần và hình thức nghệ thuật"],
    correct: [0]
  },
  {
    id: "CH233",
    question: "Nội dung – Hình thức trong nghệ thuật có xu hướng thay đổi như thế nào?",
    answers: ["Không mới thường xuyên", "Mới thường xuyên", "Cũ thường xuyên", "Không thường xuyên"],
    correct: [1]
  },
  {
    id: "CH234",
    question: "Trong nghệ thuật hình thức có ảnh hưởng như thế nào đến nội dung?",
    answers: ["Tiêu cực", "Tích cực", "Tích cực hoặc tiêu cực", "Không tích cực hoặc không tiêu cực"],
    correct: [2]
  },
  {
    id: "CH235",
    question: "Nêu các loại hình nghệ thuật?",
    answers: ["Kiến trúc, điêu khắc, hội họa", "Văn học, kịch, âm nhạc", "Múa, điện ảnh, phim truyền hình, sân khấu truyền hình", "Cả A, B, C đều đúng"],
    correct: [3]
  },
  {
    id: "CH236",
    question: "Nghệ thuật kiến trúc là gì?",
    answers: ["Là một nghệ thuật nhằm kết hợp cái đẹp với cái thực dụng để sáng tạo không gian sinh tồn của con người", "Là hai nghệ thuật nhằm kết hợp cái đẹp với cái không thực dụng để sáng tạo không gian sinh tồn của con người", "Là một nghệ thuật nhằm kết hợp cái đẹp với cái thực dụng", "Là một nghệ thuật nhằm kết hợp cái thực dụng để sáng tạo không gian sinh tồn của con người"],
    correct: [0]
  },
  {
    id: "CH237",
    question: "Điêu khắc là gì?",
    answers: ["Là nghệ thuật tạo hình bằng cách phối mảng, khối, nét trong không gian không đa chiều", "Là nghệ thuật tạo hình bằng cách phối mảng, khối trong không gian đa chiều", "Là nghệ thuật tạo hình bằng cách phối nét trong không gian đa chiều", "Là nghệ thuật tạo hình bằng cách phối mảng, khối, nét trong không gian đa chiều"],
    correct: [3]
  },
  {
    id: "CH238",
    question: "Hội họa là nghệ thuật phát triển khả năng gì?",
    answers: ["Thường ngoạn tối đa của thị giác trực tiếp và cảm quan cụ thể đối với nhân vật là hiện tượng tái hiện trong tranh", "Thường ngoạn tối thiểu của thị giác trực tiếp và cảm quan cụ thể đối với nhân vật là hiện tượng tái hiện trong tranh", "Thường ngoạn tối đa của khứu giác trực tiếp và cảm quan cụ thể đối với nhân vật là hiện tượng tái hiện trong tranh", "Thường ngoạn tối đa của vị giác trực tiếp và cảm quan cụ thể đối với nhân vật là hiện tượng tái hiện trong tranh"],
    correct: [0]
  },
  {
    id: "CH239",
    question: "Âm nhạc là nghệ thuật gì?",
    answers: ["Khứu giác", "Thính giác", "Vị giác", "Ngũ giác"],
    correct: [1]
  },
  {
    id: "CH240",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Kịch là nghệ thuật tái hiện …?",
    answers: ["Các cảnh huống của cuộc đời, các tính cách, các số phận con người", "Các cảnh huống của cuộc đời, các số phận con người", "Các các tính cách, các số phận con người", "Các cảnh huống của cuộc đời, các tính cách"],
    correct: [0]
  },
  {
    id: "CH241",
    question: "Mỹ học nghiên cứu cái gì?",
    answers: ["Quan hệ thẩm mỹ của thế giới với hiện thực", "Quan hệ thẩm mỹ của con người với hiện thực", "Quan hệ thẩm mỹ của con người", "Quan hệ thẩm mỹ của hiện thực"],
    correct: [1]
  },
  {
    id: "CH242",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Mỹ học là bộ môn khoa học có tính lý thuyết gì?",
    answers: ["Sự thưởng thức và nhận thức về cái đẹp", "Sự nhận thức hoặc thưởng thức cái đẹp", "Sự nhận thức và thưởng thức cái đẹp", "Sự nhận thức, thụ hưởng và thưởng thức cái đẹp"],
    correct: [2]
  },
  {
    id: "CH243",
    question: "Từ khi hình thành khoa học triết học cho đến thế kỷ thứ XVIII, tư tưởng mỹ học có phải là một đối tượng nghiên cứu riêng không hay chỉ như một phần của triết học?",
    answers: ["Có", "Không", "Không biết", "Tất cả các ý trên"],
    correct: [0]
  },
  {
    id: "CH244",
    question: "Là một khoa học triết học, mỹ học có quan hệ trước nhất với gì?",
    answers: ["Sử học", "Khoa học", "Triết học", "Mỹ học"],
    correct: [2]
  },
  {
    id: "CH245",
    question: "Mỹ học có quan hệ mật thiết với các môn khoa học khác hay không?",
    answers: ["Có", "Không", "Tương đối", "Hoàn toàn không"],
    correct: [0]
  },
  {
    id: "CH246",
    question: "Các tư tưởng mỹ học Hy Lạp cổ đại ban đầu hình thành ở đâu?",
    answers: ["Dải đất Iôni, phía tây Địa Trung Hải", "Dải đất Iôni, phía đông Địa Trung Hải", "Dải đất Iôni, phía nam Địa Trung Hải", "Dải đất Iôni, phía bắc Địa Trung Hải"],
    correct: [1]
  },
  {
    id: "CH247",
    question: "Ai là người đã chứng minh bằng hiện tượng chất lượng âm thanh phụ thuộc vào chiều dài dây đàn và tìm ra quan hệ số lượng trong âm nhạc như quãng tám: 1:2; quãng năm: 2:3; quãng bốn: 3:4?",
    answers: ["Pitago", "Trecneexpkki", "Platon", "Kant"],
    correct: [0]
  },
  {
    id: "CH248",
    question: "Ai là người cho rằng lửa là khởi nguyên của vũ trụ, thế giới tồn tại là do ngọn lửa vận động vĩnh cửu?",
    answers: ["Trecneexpkki", "Platon", "Kant", "Hêraclit"],
    correct: [3]
  },
  {
    id: "CH249",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Hêraclit được coi là một trong những ….. giải thích các khái niệm thẩm mỹ theo xu hướng duy vật và có tính chất biện chứng sơ khai?",
    answers: ["Đại biểu trung gian", "Đại biểu gương mẫu", "Đại biểu sớm nhất", "Đại biểu sau cùng"],
    correct: [2]
  },
  {
    id: "CH250",
    question: "Ai là người coi nghệ thuật như một phương diện quan trọng của đời sống xã hội?",
    answers: ["Xốc Xocratpyyp", "Xocrattpor", "Xôcrat", "Xitpôcrat"],
    correct: [2]
  },
  {
    id: "CH251",
    question: "Platôn cho rằng, các vật thụ cảm thay đổi, thoáng qua, nó xuất hiện rồi tiêu biến, vì thế nó có tồn tại đích thực hay không?",
    answers: ["Không", "Có", "Không chắc chắn", "Không biết"],
    correct: [0]
  },
  {
    id: "CH252",
    question: "Triết học cổ điển Đức, ai là nhà triết học vĩ đại nhất của lịch sử triết học trước Mác?",
    answers: ["Xecvantec (1547–1616)", "Uyliam Sếchxpia (1564–1616)", "Kant (1724–1804)", "Lêôna đơ Vanhxi (1452–1529)"],
    correct: [2]
  },
  {
    id: "CH253",
    question: "Ai là người phân biệt nghệ thuật là hoạt động tự do, thủ công là hoạt động để kiếm sống?",
    answers: ["Arixtot", "Xôcrat", "Kant", "Đê-mô-crít"],
    correct: [2]
  },
  {
    id: "CH254",
    question: "Mác – Ăngghen đưa ra mấy bản chất của nghệ thuật?",
    answers: ["2", "3", "4", "5"],
    correct: [0]
  },
  {
    id: "CH255",
    question: "Sự cống hiến cơ bản của các nhà triết học nào mà họ đã tìm cách lý giải bằng phép biện chứng những vấn đề chủ yếu nhất của mỹ học?",
    answers: ["Duy tâm Pháp", "Duy vật Đức", "Duy tâm Đức", "Duy tâm Nga"],
    correct: [2]
  },
  {
    id: "CH256",
    question: "Câu định nghĩa nổi tiếng nào là đỉnh cao của tư tưởng mỹ học thế kỷ XIX?",
    answers: ["“Cái đẹp là lý tưởng”", "“Cái đẹp là cuộc sống”", "“Cái đẹp là thiên nhiên”", "“Cái đẹp là xã hội”"],
    correct: [1]
  },
  {
    id: "CH257",
    question: "Lao động có yếu tố nào của con người đã gắn liền với quy luật của cái đẹp? E. Hoạt động giải trí",
    answers: ["Mục tiêu, có sáng tạo", "Mục đích, có sáng tạo", "Mục đích, không sáng tạo", "Mục đích hoặc có sáng tạo"],
    correct: [1]
  },
  {
    id: "CH258",
    question: "Lao động giúp con người được tự do về kinh tế, về chính trị, mới có thể tự do về gì?",
    answers: ["Tự do về kinh tế mới có thể tự do về sáng tạo", "Tự do về kinh tế, về chính trị", "Tự do về chính trị, mới có thể tự do về sáng tạo", "Tự do về sáng tạo và hưởng thụ cái đẹp và nghệ thuật"],
    correct: [3]
  },
  {
    id: "CH259",
    question: "“Đẹp là coi cái đẹp như sự bắt chước tự nhiên” là lý thuyết đơn giản về cái gì trong mỹ học?",
    answers: ["Cái cao cả", "Cái đẹp", "Cái hài", "Cái bi"],
    correct: [1]
  },
  {
    id: "CH260",
    question: "Lý thuyết nào về cái đẹp thì cho rằng một vật chỉ đẹp khi có hình thức phù hợp với công dụng của nó?",
    answers: ["“Hiện đại”", "“Cổ điển”", "“Phục hưng”", "“Giai cấp”"],
    correct: [0]
  },
  {
    id: "CH261",
    question: "Lý thuyết nào hoàn toàn trái ngược với quan điểm của Oscar Wilde?",
    answers: ["Lý thuyết “hiện đại” về cái hài", "Lý thuyết “hiện đại” về cái bi", "Lý thuyết “hiện đại” về cái xấu", "Lý thuyết “hiện đại” về cái đẹp"],
    correct: [3]
  },
  {
    id: "CH262",
    question: "Có mấy bình diện trong cái đẹp của mỹ học?",
    answers: ["2", "3", "4", "5"],
    correct: [2]
  },
  {
    id: "CH263",
    question: "Mỹ học nào giải thích tác động của cái đẹp đến con người bằng quan niệm cho rằng ở cái đẹp bộc lộ những sức mạnh tâm linh siêu nhiên?",
    answers: ["Duy vật biện chứng", "Duy vật", "Duy ý chí", "Duy tâm"],
    correct: [3]
  },
  {
    id: "CH264",
    question: "Trong thực tế lịch sử mỹ học nói riêng và triết học nói chung, quan niệm về cái đẹp có thống nhất hay không?",
    answers: ["Thống nhất", "Không thống nhất", "Không quan điểm", "Không đồng nhất"],
    correct: [1]
  },
  {
    id: "CH265",
    question: "Mỹ học duy vật thể hiện mấy xu hướng nhìn nhận cái đẹp?",
    answers: ["2", "3", "4", "5"],
    correct: [0]
  },
  {
    id: "CH266",
    question: "Ai là người nêu định đề nổi tiếng “con người cũng sáng tạo theo quy luật của cái đẹp”?",
    answers: ["Kal - Marx", "Marx", "Karl", "Karl Marx"],
    correct: [3]
  },
  {
    id: "CH267",
    question: "Vì sao Hêghen – nhà duy tâm khách quan người Đức mặc dù thừa nhận cái đẹp của tự nhiên, nhưng ông lại loại trừ nó ra khỏi đối tượng nghiên cứu của mỹ học?",
    answers: ["Vì cho rằng cái đẹp trong tự nhiên không phản ánh cái đẹp thuộc về tinh thần", "Vì cho rằng cái đẹp trong tự nhiên chỉ là phản ánh cái đẹp thuộc về tinh thần", "Vì cho rằng cái đẹp trong tự nhiên chỉ là phản ánh cái đẹp thuộc về vật chất", "Vì cho rằng cái đẹp trong tự nhiên chỉ là phản ánh cái đẹp thuộc về nhu cầu sử dụng"],
    correct: [1]
  },
  {
    id: "CH268",
    question: " Ai là người khẳng định cái đẹp trong tự nhiên hấp dẫn hơn cái đẹp trong nghệ thuật?",
    answers: ["Hêraclit", "Platon", "Hêghen", "Kant"],
    correct: [2]
  },
  {
    id: "CH269",
    question: "Arixxtot đã bổ sung các dấu hiệu của cái đẹp bao gồm những yếu tố nào?",
    answers: ["Hòa nhịp, cân xứng, xác định", "Hòa nhịp, xác định, chính thể", "Cân xứng, xác định, chính thể", "Hòa nhịp, cân xứng, xác định, chính thể"],
    correct: [3]
  },
  {
    id: "CH270",
    question: "Trước đối tượng hài, tùy quy mô và mức độ vi phạm của nó vào chuẩn mực thẩm mỹ tích cực, chủ thể thẩm mỹ xử lý bằng các hình thức nào?",
    answers: ["Đả kích; Mỉa mai, châm biếm; Bông đùa hài hước", "Mỉa mai, châm biếm; Bông đùa hài hước", "Đả kích; Bông đùa hài hước", "Đả kích; Mỉa mai, châm biếm"],
    correct: [0]
  },
  {
    id: "CH271",
    question: "Để trở thành chủ thể thẩm mỹ, thông thường chủ thể xã hội phải vượt qua trạng thái gì?",
    answers: ["Ứng dụng", "Thực thi", "Thực dụng", "Thực vật"],
    correct: [2]
  },
  {
    id: "CH272",
    question: "Cơ sở khách quan của đối tượng thẩm mỹ là gì?",
    answers: ["Thị hiếu thẩm mỹ", "Cảm xúc thẩm mỹ", "Nhu cầu thẩm mỹ", "Cảm tính thẩm mỹ"],
    correct: [1]
  },
  {
    id: "CH273",
    question: "So với cảm xúc thẩm mỹ, thị hiếu thẩm mỹ như thế nào?",
    answers: ["Không ổn định và bền vững hơn", "Kiên định và bền vững hơn", "Ổn định và chặt chẽ hơn", "Ổn định và bền vững hơn"],
    correct: [3]
  },
  {
    id: "CH274",
    question: "Thị hiếu thẩm mỹ nghiêng về phía tính cảm sẽ như thế nào?",
    answers: ["Thay đổi nhanh", "Thay đổi vừa", "Thay đổi chậm", "Thay đổi cực nhanh"],
    correct: [0]
  },
  {
    id: "CH275",
    question: "Người có thị hiếu thẩm mỹ phát triển cao, một mặt do xuất phát từ đâu?",
    answers: ["Bản năng nhạy cảm khác nhau đối với thế giới", "Bản năng nhạy cảm khác nhau đối với thế giới hòa bình", "Bản năng nhạy cảm khác nhau đối với thế giới xung quanh", "Bản năng không nhạy cảm khác nhau đối với thế giới xung quanh"],
    correct: [2]
  },
  {
    id: "CH276",
    question: "Sự thấp kém về thị hiếu thẩm mỹ có thể được khắc phục một mức độ lớn bởi sự thay đổi những điều kiện nào?",
    answers: ["Chính trị – xã hội", "Kinh tế – xã hội", "Kinh tế – cuộc sống", "Xã hội – cuộc sống"],
    correct: [1]
  },
  {
    id: "CH277",
    question: "Trong mỹ học mốt có liên hệ chặt chẽ với gì?",
    answers: ["Truyền thống văn nghệ", "Truyền thống văn hóa", "Truyền thống cổ xưa", "Truyền thống mỹ học"],
    correct: [1]
  },
  {
    id: "CH278",
    question: "Hãy điền tiếp vào nội dung còn thiếu sau: Đánh giá thẩm mỹ có các chuẩn mực đánh giá có thể …., có thể ….?",
    answers: ["Nặng về cảm tính/ Nặng về lý tính", "Nặng về suy nghĩ/ Nặng về tinh thần", "Nặng về tình cảm/ Nặng về cảm xúc", "Nặng về cảm nhận/ Nặng về cảm tính"],
    correct: [0]
  },
  {
    id: "CH279",
    question: "Trong các chuẩn mực của mỹ học, chuẩn mực nào cao nhất?",
    answers: ["Lý tưởng cá nhân", "Lý tưởng mỹ học", "Lý tưởng thẩm mỹ", "Lý tưởng cuộc sống"],
    correct: [2]
  },
  {
    id: "CH280",
    question: "Lý tưởng thẩm mỹ ở mỗi thời đại, mỗi xã hội thể hiện rõ rệt nhất qua hình thức nào?",
    answers: ["Âm nhạc", "Nghệ thuật", "Hội họa", "Văn học"],
    correct: [1]
  },
  {
    id: "CH281",
    question: "Nhóm nào bao gồm các thành viên như các nhà quản lý văn hóa nghệ thuật, giới nghiên cứu mỹ học, các nhà phê bình và lý luận nghệ thuật?",
    answers: ["Nhóm định hướng các giá trị thẩm mỹ", "Nhóm thưởng thức các giá trị thẩm mỹ", "Nhóm cảm nhận các giá trị thẩm mỹ", "Nhóm thẩm định các giá trị thẩm mỹ"],
    correct: [0]
  },
  {
    id: "CH282",
    question: "Đặc điểm cơ bản thứ mấy của sự thụ cảm biến đổi trong chủ thể sáng tạo là biết rút ra từ đối tượng những nét bản chất?",
    answers: ["Đầu tiên", "Thứ hai", "Thứ ba", "Thứ tư"],
    correct: [0]
  },
  {
    id: "CH283",
    question: "Việc quan sát của chủ thể sáng tạo có phải là nhận thức đơn thuần hay không?",
    answers: ["Phải", "Không phải", "Gần như", "Hình như"],
    correct: [1]
  },
  {
    id: "CH284",
    question: "Phương tiện thực hiện và thể hiện các hoạt động thẩm mỹ của nhóm chủ thể tổng hợp các giá trị thẩm mỹ rộng lớn hay không?",
    answers: ["Có", "Không", "Vừa", "Nhỏ"],
    correct: [0]
  },
  {
    id: "CH285",
    question: "Tính gì trong giáo dục thẩm mỹ mang nội dung xã hội sâu sắc trước tiên?",
    answers: ["Tính dân chủ", "Tính giai cấp", "Tính dân tộc", "Tính xã hội"],
    correct: [2]
  },
  {
    id: "CH286",
    question: "Chức năng xã hội cơ bản đầu tiên của nghệ thuật là gì?",
    answers: ["Chức năng thỏa mãn nhu cầu làm đẹp", "Chức năng thỏa mãn nhu cầu thẩm định", "Chức năng thỏa mãn nhu cầu đánh giá", "Chức năng thỏa mãn nhu cầu thẩm mỹ"],
    correct: [3]
  },
  {
    id: "CH287",
    question: "Hình thái nào cùng phản ánh hiện thực khách quan, nhưng khoa học là hình thức hoạt động lý luận cao nhất đồng thời cũng là kết quả của hình thái đó?",
    answers: ["Nghệ thuật và mỹ học", "Nghệ thuật và triết học", "Nghệ thuật và đạo đức", "Nghệ thuật và khoa học"],
    correct: [3]
  },
  {
    id: "CH288",
    question: "Nghệ thuật và chính trị là hai lĩnh vực tinh thần khác nhau của đời sống xã hội nhưng nó có sự tác động lẫn nhau như thế nào?",
    answers: ["Một cách tích cực", "Một cách tiêu cực", "Một cách đa dạng", "Một cách lý tưởng"],
    correct: [0]
  },
  {
    id: "CH289",
    question: "Những nguyên tắc nào mà người nghệ sĩ thấm đượm sẽ giúp đi sâu, mổ xẻ tâm lý hành vi nhân vật của mình được sâu sắc hơn?",
    answers: ["Khoa học", "Cái đẹp", "Cuộc sống", "Đạo đức"],
    correct: [3]
  },
  {
    id: "CH290",
    question: "Nghệ thuật phản ánh thẩm mỹ từ cuộc sống hiện thực qua hình tượng nghệ thuật. Ngược lại, tôn giáo lại phản ánh cái gì?",
    answers: ["Thực trạng một cách hư ảo hoang đường", "Hiện thực một cách hư ảo hoang đường", "Xã hội một cách hư ảo hoang đường", "Trào lưu một cách hư ảo hoang đường"],
    correct: [1]
  },
  {
    id: "CH291",
    question: "Nguyên lý nào đã làm cơ sở cho chủ nghĩa duy vật của mỹ học?",
    answers: ["Nguyên lý bắt chước", "Nguyên lý mỹ học", "Nguyên lý cuộc sống", "Nguyên lý xã hội"],
    correct: [0]
  },
  {
    id: "CH292",
    question: "Hêghen trong … của mình cũng đã báo trước rằng: nghệ thuật hiện thực chủ nghĩa cần phải đề phòng sự tìm tòi hình thức chủ nghĩa “cái thiên tài thần linh”?",
    answers: ["“Những bài giảng văn học”", "“Những bài giảng triết học”", "“Những bài giảng khoa học”", "“Những bài giảng mỹ học”"],
    correct: [3]
  },
  {
    id: "CH293",
    question: "Là một hình thái ý thức xã hội đặc thù, nghệ thuật phản ánh thế giới hiện thực bằng các hình tượng gì?",
    answers: ["Các hình tượng trong tính toàn vẹn, bảo đảm sự thống nhất giữa nội dung và hình thức, với hình thái đặc trưng là tính cảm tính", "Các hình tượng trong tính toàn vẹn, hình thái đặc trưng là tính cảm tính", "Các hình tượng trong tính toàn vẹn và hình thái đặc trưng là tính cảm tính", "Bảo đảm sự thống nhất giữa nội dung và hình thức, với hình thái đặc trưng là tính cảm tính"],
    correct: [0]
  },
  {
    id: "CH294",
    question: "Hình tượng nghệ thuật là sự tổng hợp của các yếu tố nào?",
    answers: ["Cả lý trí, cảm tính và lý tính", "Cả tình cảm, cảm tính và lý tính", "Cả cảm tính và lý tính", "Cả tình cảm và lý trí"],
    correct: [1]
  },
  {
    id: "CH295",
    question: "Hình tượng nghệ thuật dựa trên hai phẩm chất quan trọng nào?",
    answers: ["Tính xã hội và tính văn hóa", "Tính nhân văn và tính thẩm mỹ", "Tính tổng thể và tính cụ thể cảm tính", "Tính trừu tượng và tính cụ thể cảm tính"],
    correct: [3]
  },
  {
    id: "CH296",
    question: "Hình tượng nghệ thuật sau khi hình thành nó lại tồn tại như thế nào đối với người sáng tạo?",
    answers: ["Tổng thể khách quan", "Tự chủ khách quan", "Cá nhân khách quan", "Độc lập khách quan"],
    correct: [3]
  },
  {
    id: "CH297",
    question: "Tư tưởng của cái gì được toát lên một cách khách quan từ bản thân tác phẩm nghệ thuật chứ không phải ý đồ hay tư tưởng chủ quan của tác giả?",
    answers: ["Tác phẩm đồ họa", "Tác phẩm thời trang", "Tác phẩm văn học", "Tác phẩm nghệ thuật"],
    correct: [3]
  },
  {
    id: "CH298",
    question: "Trong các loại hình nghệ thuật thời gian (văn chương, âm nhạc), yếu tố gì chuyển hóa thành nội dung gián tiếp?",
    answers: ["Thời gian", "Trung gian", "Không gian", "Cả A, B đều đúng"],
    correct: [2]
  },
  {
    id: "CH299",
    question: "Việc sử dụng chất liệu nghệ thuật phụ thuộc vào đâu?",
    answers: ["Thiên hướng, phong cách của nghệ sĩ", "Vào ý đồ, phong cách của nghệ sĩ", "Vào ý đồ, thiên hướng", "Vào ý đồ, thiên hướng, phong cách của nghệ sĩ"],
    correct: [3]
  },
  {
    id: "CH300",
    question: "Nội dung nghệ thuật đóng vai trò gì, quyết định đối với hình thức nghệ thuật?",
    answers: ["Thiết yếu", "Quan trọng", "Chủ đạo", "Thành phần"],
    correct: [2]
  },
];
