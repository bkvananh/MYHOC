const QUESTIONS = [
  {
    question: "M\u1ef9 h\u1ecdc l\u00e0 m\u1ed9t m\u00f4n khoa h\u1ecdc tri\u1ebft h\u1ecdc, ngh\u0129a l\u00e0 n\u00f3 ph\u1ea3i \u0111\u00f3ng vai tr\u00f2 g\u00ec?",
    answers: ["A. Th\u1ebf gi\u1edbi quan", "B. Nh\u00e2n sinh quan", "C. Gi\u00e1c quan", "D. C\u1ea3 A v\u00e0 B \u0111\u1ec1u \u0111\u00fang."],
    correct: 3
  },
  {
    question: "M\u1ef9 h\u1ecdc kh\u00e1m ph\u00e1, ph\u00e1t sinh ra nh\u1eefng gi\u00e1 tr\u1ecb tr\u00ean c\u01a1 s\u1edf quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p, trong \u0111\u00f3 ngh\u1ec7 thu\u1eadt c\u00f3 gi\u00e1 tr\u1ecb nh\u01b0 th\u1ebf n\u00e0o",
    answers: ["A. Gi\u00e1 tr\u1ecb trung b\u00ecnh", "B. Gi\u00e1 tr\u1ecb th\u1ea5p nh\u1ea5t", "C. Gi\u00e1 tr\u1ecb v\u1eeba cao v\u1eeba th\u1ea5p", "D. Gi\u00e1 tr\u1ecb cao nh\u1ea5t."],
    correct: 3
  },
  {
    question: "h\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Tri\u1ebft gia Alexander Baumgarten ng\u01b0\u1eddi \u0110\u1ee9c \u0111\u00e3 d\u00f9ng t\u1eeb \u201cm\u1ef9 h\u1ecdc\u201d cho l\u00fd thuy\u1ebft v\u1ec1\u2026?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt t\u1ef1 do hay khoa h\u1ecdc v\u1ec1 c\u00e1i \u0111\u1eb9p nh\u1eadn th\u1ee9c \u0111\u01b0\u1ee3c", "B. Ngh\u1ec7 thu\u1eadt t\u1ef1 do hay khoa h\u1ecdc v\u1ec1 c\u00e1i \u0111\u1eb9p nh\u1eadn th\u1ee9c \u0111\u01b0\u1ee3c", "C. Ngh\u1ec7 thu\u1eadt t\u1ef1 do hay khoa h\u1ecdc v\u1ec1 c\u00e1i \u0111\u1eb9p", "D. Khoa h\u1ecdc v\u1ec1 c\u00e1i \u0111\u1eb9p nh\u1eadn th\u1ee9c \u0111\u01b0\u1ee3c"],
    correct: 1,
    correct: 0
  },
  {
    question: "N\u0103m 1750, Baumgacten \u0111\u00e3 cho xu\u1ea5t b\u1ea3n cu\u1ed1n s\u00e1ch g\u00ec?",
    answers: ["A. l\u1ecbch s\u1eed h\u1ecdc \u0111\u1ea7u ti\u00ean", "B. H\u00f3a h\u1ecdc \u0111\u1ea7u ti\u00ean", "C. M\u1ef9 h\u1ecdc \u0111\u1ea7u ti\u00ean", "D. Tri\u1ebft h\u1ecdc \u0111\u1ea7u ti\u00ean"],
    correct: 2
  },
  {
    question: "Th\u1eddi k\u1ef3 c\u1ed5 \u0111i\u1ec3n \u0110\u1ee9c, ai l\u00e0 ng\u01b0\u1eddi cho \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a m\u1ef9 h\u1ecdc l\u00e0 l\u0129nh v\u1ef1c s\u1ef1 ph\u00e1n \u0111o\u00e1n v\u1ec1 th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9?",
    answers: ["A. Alexander Baumgarten", "B. Kant", "C. Trecnexepxki", "D. \u00d4\u0111ix\u00ea"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Trecnexepxki x\u00e1c nh\u1eadn\u2026m\u00e0 kh\u00f4ng xem x\u00e9t ngh\u1ec7 thu\u1eadt m\u1ed9t c\u00e1ch th\u1ecfa \u0111\u00e1ng trong h\u1ec7 th\u1ed1ng m\u1ef9 h\u1ecdc c\u1ee7a m\u00ecnh?",
    answers: ["A. C\u00e1i \u0111\u1eb9p l\u00e0 cu\u1ed9c s\u1ed1ng", "B. C\u00e1i \u0111\u1eb9p l\u00e0 c\u1eed ch\u1ec9", "C. C\u00e1i \u0111\u1eb9p l\u00e0 h\u00e0nh \u0111\u1ed9ng", "D. C\u00e1i \u0111\u1eb9p l\u00e0 ngh\u0129a v\u1ee5"],
    correct: 0
  },
  {
    question: "Hai ph\u01b0\u01a1ng di\u1ec7n \u0111\u1ed1i l\u1eadp nhau trong quan h\u1ec7 th\u1ea9m m\u1ef9 nay l\u00e0?",
    answers: ["A. kh\u00e1ch th\u1ec3 th\u1ea9m m\u1ef9 v\u00e0 t\u1ef1 do th\u1ea9m m\u1ef9", "B. gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 v\u00e0 ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9", "C. Kh\u00e1ch th\u1ec3 th\u1ea9m m\u1ef9 v\u00e0 ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9", "D. T\u01b0 t\u01b0\u1edfng th\u1ea9m m\u1ef9 v\u00e0 ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9"],
    correct: 2
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t l\u0129nh v\u1ef1c tinh th\u1ea7n c\u1ee7a \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i \u0111\u01b0\u1ee3c nhi\u1ec1u ki\u1ec3u d\u1ea1ng ho\u1ea1t \u0111\u1ed9ng l\u00fd lu\u1eadn quan t\u00e2m \u0111\u1ebfn nh\u01b0:\u2026?",
    answers: ["A. S\u1eed h\u1ecdc, v\u0103n h\u00f3a h\u1ecdc", "B. S\u1eed h\u1ecdc, nh\u00e2n sinh h\u1ecdc", "C. S\u1eed h\u1ecdc, tri\u1ebft h\u1ecdc", "D. S\u1eed h\u1ecdc, x\u00e3 h\u1ed9i h\u1ecdc"],
    correct: 3
  },
  {
    question: "T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc c\u1ed5 \u0111\u1ea1i \u0111\u01b0\u1ee3c h\u00ecnh th\u00e0nh v\u00e0o kho\u1ea3ng th\u1ebf k\u1ef7 bao nhi\u00eau?",
    answers: ["A. Th\u1ebf k\u1ef7 IIX (TCN)", "B. Th\u1ebf k\u1ef7 X (TCN)", "C. Th\u1ebf k\u1ef7 IX ( TCN)", "D. Th\u1ebf k\u1ef7 XI (TCN)"],
    correct: 2
  },
  {
    question: "H\u00earaclit bi\u1ec7n gi\u1ea3i h\u00e0i h\u00f2a l\u00e0 g\u00ec?",
    answers: ["A. S\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa nh\u1eefng h\u00e0i h\u00f2a", "B. S\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa nh\u1eefng m\u00e2u thu\u1eabn", "C. Th\u1ed1ng nh\u1ea5t gi\u1eefa m\u1ed9t m\u00e2u thu\u1eabn", "D. Th\u1ed1ng nh\u1ea5t gi\u1eefa nh\u1eefng y\u1ebfu t\u1ed1 t\u1ef1 nhi\u00ean"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: \u0110\u00eam\u00f4cr\u00edt ( 460 \u2013 370 TCN) l\u00fd gi\u1ea3i s\u1ef1 h\u00ecnh th\u00e0nh c\u1ee7a ngh\u1ec7 thu\u1eadt b\u1eb1ng c\u00e1c nguy\u00ean nh\u00e2n v\u1eadt ch\u1ea5t:\u2026?",
    answers: ["A. \u0110\u00f3 l\u00e0 s\u1ef1 b\u1eaft ch\u01b0\u1edbc t\u1ef1 nhi\u00ean v\u00e0 c\u00e1c \u0111\u1ed9ng v\u1eadt", "B. \u0110\u00f3 l\u00e0 s\u1ef1 b\u1eaft ch\u01b0\u1edbc t\u1ef1 nhi\u00ean v\u00e0 c\u00e1c lo\u00e0i v\u1eadt", "C. \u0110\u00f3 l\u00e0 s\u1ef1 b\u1eaft ch\u01b0\u1edbc t\u1ef1 nhi\u00ean v\u00e0 c\u00e1c th\u1ef1c v\u1eadt", "D. \u0110\u00f3 l\u00e0 s\u1ef1 b\u1eaft ch\u01b0\u1edbc kh\u00f4ng t\u1ef1 nhi\u00ean v\u00e0 c\u00e1c lo\u00e0i v\u1eadt"],
    correct: 1
  },
  {
    question: "X\u00f4crat c\u00f2n \u0111\u01b0a ra ti\u00eau ch\u00ed l\u1ef1a ch\u1ecdn \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u1ec3 th\u1ec3 hi\u1ec7n trong t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt, \u0111\u00f3 l\u00e0 ti\u00eau ch\u00ed n\u00e0o?",
    answers: ["A. Thi\u00ean nhi\u00ean c\u00f3 t\u00ednh c\u00e1ch \u0111\u1eb9p, nh\u00e2n h\u1eadu, c\u00f3 ph\u1ea9m h\u1ea1nh cao", "B. \u0110\u1ed9ng v\u1eadt c\u00f3 t\u00ednh c\u00e1ch \u0111\u1eb9p, nh\u00e2n h\u1eadu, c\u00f3 ph\u1ea9m h\u1ea1nh cao", "C. Nh\u1eefng con ng\u01b0\u1eddi c\u00f3 t\u00ednh c\u00e1ch \u0111\u1eb9p, nh\u00e2n h\u1eadu, c\u00f3 ph\u1ea9m h\u1ea1nh cao", "D. nh\u1eefng con ng\u01b0\u1eddi c\u00f3 t\u00ednh c\u00e1ch \u0111\u1eb9p"],
    correct: 2
  },
  {
    question: "Nh\u1eefng th\u00e0nh t\u1ef1u v\u0103n h\u00f3a cao nh\u1ea5t \u1edf th\u1eddi k\u1ef3 trung c\u1ed5 l\u00e0 g\u00ec?",
    answers: ["A. C\u00e1c b\u1ed9 kinh T\u00f4n gi\u00e1o v\u00e0 c\u00e1c phong c\u00e1ch ki\u1ebfn tr\u00fac", "B. C\u00e1c b\u1ed9 kinh Kito gi\u00e1o v\u00e0 c\u00e1c phong c\u00e1ch ki\u1ebfn tr\u00fac", "C. C\u00e1c b\u1ed9 ph\u1eadn Kito gi\u00e1o v\u00e0 c\u00e1c phong c\u00e1ch t\u00f4n gi\u00e1o", "D. C\u00e1c b\u1ed9 kinh Kato gi\u00e1o v\u00e0 c\u00e1c phong c\u00e1ch c\u1ed5 \u0111i\u1ec3n"],
    correct: 1
  },
  {
    question: "Cu\u1ed1i th\u1eddi k\u1ef3 Trung c\u1ed5, ai l\u00e0 ng\u01b0\u1eddi n\u1ed5i l\u00ean nh\u01b0 nh\u00e0 th\u1ea7n h\u1ecdc l\u1edbn nh\u1ea5t?",
    answers: ["A. \u00d4guytxtanh (354-430)", "B. T\u00f4mat \u0110acanh (1225-1274)", "C. L\u00ea\u00f4n Battixta Anbecti ( 1404 \u2013 1472 )", "D. L\u00ea\u00f4n \u0111\u01a1 Vanhxi ( 1452 \u2013 1529 )"],
    correct: 1
  },
  {
    question: "n\u00eau \u0111\u1eb7c \u0111i\u1ec3m quan tr\u1ecdng nh\u1ea5t c\u1ee7a t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc th\u1eddi Ph\u1ee5c h\u01b0ng?",
    answers: ["A. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc c\u1ea3m t\u00ednh, th\u1ef1c ti\u1ec5n", "B. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc c\u1ea3m t\u00ednh, tr\u1ef1c ti\u1ebfp", "C. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc c\u00e1 nh\u00e2n, th\u1ef1c t\u1ebf", "D. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc kh\u00e1ch quan v\u00e0 ch\u1ee7 quan"],
    correct: 0
  },
  {
    question: "Hai th\u1eddi k\u1ef3 th\u1ebf gi\u1edbi quan c\u1ee7a Kant l\u00e0 hai th\u1eddi k\u1ef3 n\u00e0o?",
    answers: ["A. th\u1eddi k\u1ef3 ti\u1ec1n khen ng\u1ee3i v\u00e0 th\u1eddi k\u1ef3 ph\u00ea ph\u00e1n", "B. Th\u1eddi k\u1ef3 ti\u1ec1n ph\u00ea ph\u00e1n v\u00e0 th\u1eddi k\u1ef3 ph\u00ea ph\u00e1n", "C. Th\u1eddi k\u1ef3 ph\u00ea ph\u00e1n v\u00e0 ch\u00e2m bi\u1ebfm", "D. Th\u1eddi k\u1ef3 kh\u00f4ng ph\u00ea ph\u00e1n"],
    correct: 1
  },
  {
    question: "Th\u1ebf gi\u1edbi quan c\u1ee7a Kant c\u00f3 th\u1ec3 chia ra hai th\u1eddi k\u1ef3: th\u1eddi k\u1ef3 ti\u1ec1n ph\u00ea ph\u00e1n v\u00e0 th\u1eddi k\u1ef3 ph\u00ea ph\u00e1n l\u1ea5y n\u0103m n\u00e0o l\u00e0m m\u1ed1c ph\u00e2n \u0111\u1ecbnh>",
    answers: ["A. 1770", "B. 1780", "C. 1790", "D. 1771"],
    correct: 0
  },
  {
    question: "\u0110\u00eani \u0110i\u0111r\u00f4 ( 1713 \u2013 1784 ) l\u00e0 nh\u00e0 duy v\u1eadt \u0111i\u1ec3n h\u00ecnh c\u1ee7a tri\u1ebft h\u1ecdc n\u00e0o?",
    answers: ["A. Tri\u1ebft h\u1ecdc Khai s\u00e1ng Ph\u00e1p", "B. Tri\u1ebft h\u1ecdc Khai s\u00e1ng \u0110\u1ee9c", "C. Tri\u1ebft h\u1ecdc Khai s\u00e1ng Nga", "D. Tri\u1ebft h\u1ecdc Khai s\u00e1ng Hy L\u1ea1p"],
    correct: 0
  },
  {
    question: "C\u01a1 s\u1edf tri\u1ebft h\u1ecdc c\u1ee7a m\u1ef9 h\u1ecdc Macxit: S\u1ef1 ra \u0111\u1eddi c\u1ee7a ch\u1ee7 ngh\u0129a Mac l\u00e0 g\u00ec?",
    answers: ["A. Cu\u1ed9c c\u00e1ch m\u1ea1ng v\u0129 \u0111\u1ea1i nh\u1ea5t trong th\u1ebf k\u1ef7 c\u1ee7a nh\u00e2n lo\u1ea1i", "B. Cu\u1ed9c c\u00e1ch m\u1ea1ng v\u0129 \u0111\u1ea1i nh\u1ea5t trong khoa h\u1ecdc x\u00e3 h\u1ed9i c\u1ee7a nh\u00e2n lo\u1ea1i", "C. Cu\u1ed9c c\u00e1ch m\u1ea1ng h\u00f9ng v\u0129 nh\u1ea5t trong x\u00e3 h\u1ed9i c\u1ee7a lo\u00e0i ng\u01b0\u1eddi", "D. Cu\u1ed9c c\u00e1ch m\u1ea1ng c\u00f4ng khai nh\u1ea5t trong khoa h\u1ecdc x\u00e3 h\u1ed9i"],
    correct: 1
  },
  {
    question: "Mac\u2013\u0102ngghen quan ni\u1ec7m ngu\u1ed3n g\u1ed1c c\u1ee7a ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. C\u00e1i \u0111\u1eb9p, ngh\u1ec7 thu\u1eadt, n\u00e0y sinh do th\u1ef1c ti\u1ec5n c\u1ee7a con ng\u01b0\u1eddi \u2013 th\u1ef1c ti\u1ec5n s\u1ea3n xu\u1ea5t", "B. C\u1ea3m x\u00fac th\u1ea9m m\u1ef9 n\u1ea3y sinh do th\u1ef1c ti\u1ec5n c\u1ee7a con ng\u01b0\u1eddi-th\u1ef1c ti\u1ec5n lao \u0111\u1ed9ng", "C. C\u1ea3m x\u00fac c\u00e1i \u0111\u1eb9p n\u1ea3y sinh do th\u1ef1c ti\u1ec5n con ng\u01b0\u1eddi \u2013 lao \u0111\u1ed9ng s\u1ea3n xu\u1ea5t", "D. C\u1ea3m x\u00fac th\u1ea9m m\u1ef9, c\u00e1i \u0111\u1eb9p, ngh\u1ec7 thu\u1eadt, n\u1ea3y sinh do th\u1ef1c ti\u1ec5n c\u1ee7a con ng\u01b0\u1eddi -  th\u1ef1c ti\u1ec5n lao \u0111\u1ed9ng s\u1ea3n xu\u1ea5t"],
    correct: 3
  },
  {
    question: "Nguy\u00ean t\u1eafc c\u01a1 b\u1ea3n trong nguy\u00ean l\u00fd t\u00ednh \u0111\u1ea3ng trong ngh\u1ec7 thu\u1eadt c\u1ee7a L\u00eanin l\u00e0 g\u00ec?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t b\u1ed9 ph\u1eadn trong s\u1ef1 nghi\u1ec7p c\u1ee7a giai c\u1ea5p v\u00f4 s\u1ea3n, do giai c\u1ea5p v\u00f4 s\u1ea3n l\u00e3nh \u0111\u1ea1o, v\u00e0 giai c\u1ea5p v\u00f4 s\u1ea3n ph\u1ea3i l\u00e3nh \u0111\u1ea1o ngh\u1ec7 thu\u1eadt theo \u0111\u1eb7c tr\u01b0ng c\u1ee7a n\u00f3 \u0111\u1ec3 h\u01b0\u1edbng ngh\u1ec7 thu\u1eadt ph\u1ee5c v\u1ee5 m\u00ecnh. Y\u1ebfu t\u1ed1 duy v\u1eadt v\u1eeba mang y\u1ebfu t\u1ed1 bi\u1ec7n ch\u1ee9ng", "B. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t b\u1ed9 ph\u1eadn trong s\u1ef1 nghi\u1ec7p c\u1ee7a giai c\u1ea5p v\u00f4 s\u1ea3n v\u00e0 giai c\u1ea5p v\u00f4 s\u1ea3n ph\u1ea3i l\u00e3nh \u0111\u1ea1o ngh\u1ec7 thu\u1eadt theo \u0111\u1eb7c tr\u01b0ng c\u1ee7a n\u00f3 \u0111\u1ec3 h\u01b0\u1edbng ngh\u1ec7 thu\u1eadt ph\u1ee5c v\u1ee5 m\u00ecnh", "C. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t b\u1ed9 ph\u1eadn trong s\u1ef1 nghi\u1ec7p c\u1ee7a giai c\u1ea5p v\u00f4 s\u1ea3n, do giai c\u1ea5p v\u00f4 s\u1ea3n l\u00e3nh \u0111\u1ea1o", "D. Ngh\u1ec7 thu\u1eadt l\u00e0 giai c\u1ea5p v\u00f4 s\u1ea3n ph\u1ea3i l\u00e3nh \u0111\u1ea1o ngh\u1ec7 thu\u1eadt theo \u0111\u1eb7c tr\u01b0ng c\u1ee7a n\u00f3 \u0111\u1ec3 h\u01b0\u1edbng ngh\u1ec7 thu\u1eadt ph\u1ee5c v\u1ee5 m\u00ecnh"],
    correct: 0
  },
  {
    question: "T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc c\u1ee7a Hegel mang y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. V\u1eeba mang y\u1ebfu t\u1ed1 duy t\u00e2m v\u1eeba mang y\u1ebfu t\u1ed1 bi\u1ec7n ch\u1ee9ng", "B. V\u1eeba mang y\u1ebfu t\u1ed1 duy v\u1eadt v\u1eeba mang y\u1ebfu t\u1ed1 bi\u1ec7n ch\u1ee9ng", "C. V\u1eeba mang y\u1ebfu t\u1ed1 duy t\u00e2m v\u1eeba mang y\u1ebfu t\u1ed1 kh\u1ea3o s\u00e1t", "D. V\u1eeba mang y\u1ebfu t\u1ed1 duy t\u00e2m v\u1eeba mang y\u1ebfu t\u1ed1 khoa h\u1ecdc"],
    correct: 0
  },
  {
    question: "Giai \u0111o\u1ea1n cao nh\u1ea5t c\u1ee7a qu\u00e1 tr\u00ecnh ph\u00e1t tri\u1ec3n l\u00fd lu\u1eadn ngh\u1ec7 thu\u1eadt duy v\u1eadt tr\u01b0\u1edbc M\u00e1c l\u00e0 m\u1ef9 h\u1ecdc n\u00e0o?",
    answers: ["A. M\u1ef9 h\u1ecdc D\u00e2n ch\u1ee7 C\u00e1ch m\u1ea1ng Hy L\u1ea1p", "B. M\u1ef9 h\u1ecdc D\u00e2n ch\u1ee7 C\u00e1ch m\u1ea1ng \u0110\u1ee9c", "C. M\u1ef9 h\u1ecdc D\u00e2n ch\u1ee7 C\u00e1ch m\u1ea1ng Ph\u00e1p", "D. M\u1ef9 h\u1ecdc D\u00e2n ch\u1ee7 C\u00e1ch m\u1ea1ng Nga"],
    correct: 3
  },
  {
    question: "H\u1ecdc thuy\u1ebft M\u00e1c \u0111\u00e3 g\u00f3p ph\u1ea7n b\u1ed5 sung, l\u00e0m cho ho\u00e0n ch\u1ec9nh v\u00e0 v\u1eefng ch\u1eafc h\u01a1n v\u1ec1 nh\u1eefng \u0111\u1ecbnh ngh\u0129a c\u00e1i \u0111\u1eb9p. \u0110\u00f3 l\u00e0 g\u00ec?",
    answers: ["A. S\u1ef1 gi\u1ea3i th\u00edch ngu\u1ed3n g\u1ed1c c\u1ee7a nh\u1eefng gi\u00e1 tr\u1ecb ch\u00e2n \u2013 thi\u1ec7n \u2013 m\u1ef9 n\u00f3i chung", "B. S\u1ef1 gi\u1ea3i th\u00edch ngu\u1ed3n g\u1ed1c c\u1ee7a c\u00e1i \u0111\u1eb9p", "C. C\u1ee7a nh\u1eefng gi\u00e1 tr\u1ecb ch\u00e2n \u2013 thi\u1ec7n \u2013 m\u1ef9 n\u00f3i chung", "D. S\u1ef1 gi\u1ea3i th\u00edch ngu\u1ed3n g\u1ed1c c\u1ee7a c\u00e1i \u0111\u1eb9p, c\u1ee7a nh\u1eefng gi\u00e1 tr\u1ecb ch\u00e2n \u2013 thi\u1ec7n \u2013 m\u1ef9 n\u00f3i chung"],
    correct: 3
  },
  {
    question: "L\u00fd thuy\u1ebft c\u00e1i \u0111\u1eb9p \u0111\u1ecbnh ra ti\u00eau chu\u1ea9n g\u00ec?",
    answers: ["A. M\u1ed9t ti\u00eau chu\u1ea9n kh\u00e1 l\u00fd tr\u00ed cho c\u00e1i \u0111\u1eb9p", "B. M\u1ed9t ti\u00eau chu\u1ea9n kh\u00e1 \u0111\u01a1n gi\u1ea3n cho c\u00e1i \u0111\u1eb9p", "C. M\u1ed9t ti\u00eau chu\u1ea9n kh\u00e1 l\u00fd tr\u00ed v\u00e0 \u0111\u01a1n gi\u1ea3n cho c\u00e1i \u0111\u1eb9p", "D. M\u1ed9t ti\u00eau chu\u1ea9n kh\u00e1 l\u00fd tr\u00ed ho\u1eb7c \u0111\u01a1n gi\u1ea3n cho c\u00e1i \u0111\u1eb9p"],
    correct: 2
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi \u0111\u00e3 ph\u00e1t tri\u1ec3n quan ni\u1ec7m ngh\u1ec7 thu\u1eadt tuy\u1ec7t \u0111\u1ed1i c\u1ee7a Kant?",
    answers: ["A. C. M\u00e1c v\u00e0 Ph. \u0102ngghen", "B. A. Potebnia", "C. Heidegger", "D. Kant"],
    correct: 2
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt theo Kant l\u00e0 c\u00e1ch bi\u1ec3u di\u1ec5n c\u00e1i \u0111\u1eb9p c\u1ee7a m\u1ed9t y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. C\u00f4ng n\u0103ng", "B. Hi\u1ec7u \u1ee9ng", "C. H\u00ecnh th\u1ee9c", "D. Kh\u1ea3 thi"],
    correct: 2
  },
  {
    question: "M\u1ed9t hi\u1ec7n t\u01b0\u1ee3ng c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c xem l\u00e0 \u0111\u1eb9p v\u1edbi t\u00ednh to\u00e0n v\u1eb9n c\u1ee5 th\u1ec3 c\u1ea3m t\u00ednh c\u1ee7a ng\u01b0\u1eddi ti\u1ebfp nh\u1eadn, ch\u00fang hi\u1ec7n di\u1ec7n nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Nh\u1eefng gi\u00e1 tr\u1ecb x\u00e3 h\u1ed9i \u2013 nh\u00e2n v\u0103n", "B. Nh\u1eefng gi\u00e1 tr\u1ecb x\u00e3 h\u1ed9i \u2013 kinh t\u1ebf", "C. Nh\u1eefng gi\u00e1 tr\u1ecb cu\u1ed9c s\u1ed1ng \u2013 nh\u00e2n d\u00e2n", "D. Nh\u1eefng gi\u00e1 tr\u1ecb x\u00e3 h\u1ed9i \u2013 nh\u00e2n b\u1ea3n"],
    correct: 3
  },
  {
    question: "Theo quan \u0111i\u1ec3m c\u1ee7a ai, c\u00e1i \u0111\u1eb9p kh\u00f4ng ph\u1ea3i l\u00e0 ph\u1ea9m ch\u1ea5t v\u1ed1n c\u00f3 trong s\u1ef1 v\u1eadt, n\u00f3 ch\u1ec9 c\u00f3 trong tinh th\u1ea7n v\u00e0 ch\u1ec9 tinh th\u1ea7n m\u1edbi chi\u00eam nghi\u1ec7m \u0111\u01b0\u1ee3c n\u00f3?",
    answers: ["A. Hume", "B. Aquinas", "C. Thomas Aquinas", "D. Hogarth"],
    correct: 0
  },
  {
    question: "Th\u01b0\u1ee3ng \u0111\u1ebf Hegel cho r\u1eb1ng c\u00e1i \u0111\u1eb9p l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 h\u00ecnh th\u1ec3 nh\u1eadn t\u00ednh c\u1ee7a c\u00e1c \u00fd ni\u1ec7m", "B. L\u00e0 h\u00ecnh th\u1ec3 c\u1ea3m t\u00ednh c\u1ee7a c\u00e1c \u00fd ni\u1ec7m", "C. L\u00e0 h\u00ecnh th\u1ec3 l\u00fd t\u00ednh c\u1ee7a c\u00e1c \u00fd ni\u1ec7m", "D. L\u00e0 h\u00ecnh th\u1ec3 trung t\u00ednh c\u1ee7a c\u00e1c \u00fd ni\u1ec7m"],
    correct: 1
  },
  {
    question: "Theo quan \u0111i\u1ec3m c\u1ee7a Karl Marx c\u00e1i \u0111\u1eb9p l\u00e0 kh\u00e1ch quan b\u1edfi v\u00ec n\u00f3 l\u00e0 gi\u00e1 tr\u1ecb g\u00ec?",
    answers: ["A. Nh\u00e2n b\u1ea3n \u2013 x\u00e3 h\u1ed9i", "B. Nh\u00e2n h\u00f3a \u2013 x\u00e3 h\u1ed9i", "C. Nh\u00e2n c\u00e1ch \u2013 x\u00e3 h\u1ed9i", "D. Nh\u00e2n t\u00e2m \u2013 x\u00e3 h\u1ed9i"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Plat\u00f4n cho r\u1eb1ng \u2026\u2026 l\u00e0 c\u00e1i \u0111\u1eb9p trong \u00fd ni\u1ec7m, c\u00e1c \u0111\u1ed3 v\u1eadt \u0111\u1eb9p ch\u1ec9 l\u00e0 c\u00e1i b\u00f3ng c\u1ee7a \u00fd ni\u1ec7m \u0111\u1eb9p?",
    answers: ["A. C\u00e1i \u0111\u1eb9p v\u0129nh h\u1eb1ng", "B. C\u00e1i \u0111\u1eb9p t\u00e2m h\u1ed3n", "C. C\u00e1i \u0111\u1eb9p t\u01b0 t\u01b0\u1edfng", "D. C\u00e1i \u0111\u1eb9p ch\u00e2n th\u1ef1c"],
    correct: 0
  },
  {
    question: "V\u1ec1 m\u1ef9 h\u1ecdc, Kant \u0111\u01b0\u1ee3c coi l\u00e0 ng\u01b0\u1eddi c\u00f3 t\u01b0 t\u01b0\u1edfng duy t\u00e2m ch\u1ee7 quan m\u1ed9t c\u00e1ch nh\u1ea5t qu\u00e1n, \u00f4ng cho r\u1eb1ng c\u00e1i \u0111\u1eb9p nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. C\u00e1i \u0111\u1eb9p ho\u00e0n to\u00e0n ph\u1ee5 thu\u1ed9c v\u00e0o ch\u1ee7 th\u1ec3 c\u1ea3m nh\u1eadn", "B. C\u00e1i \u0111\u1eb9p ho\u00e0n to\u00e0n ph\u1ee5 thu\u1ed9c v\u00e0o ch\u1ee7 th\u1ec3 c\u1ea3m th\u1ee5", "C. C\u00e1i \u0111\u1eb9p kh\u00f4ng ho\u00e0n to\u00e0n ph\u1ee5 thu\u1ed9c v\u00e0o ch\u1ee7 th\u1ec3 c\u1ea3m th\u1ee5", "D. C\u00e1i x\u1ea5u ho\u00e0n to\u00e0n ph\u1ee5 thu\u1ed9c v\u00e0o ch\u1ee7 th\u1ec3 c\u1ea3m th\u1ee5"],
    correct: 1
  },
  {
    question: "Nh\u00e0 l\u1ecbch s\u1eed tri\u1ebft h\u1ecdc \u0111\u1ea7u ti\u00ean l\u00e0 ai?",
    answers: ["A. Arixstot \u2013 m\u1ed9t nh\u00e0 to\u00e1n to\u00e0n th\u01b0", "B. Arixstot \u2013 m\u1ed9t h\u00f3a h\u1ecdc khoa to\u00e1n th\u01b0", "C. Arixstot \u2013 m\u1ed9t nh\u00e0 b\u00e1ch khoa to\u00e0n th\u01b0", "D. Arixstot \u2013 m\u1ed9t nh\u00e0 s\u1eed h\u1ecdc to\u00e0n th\u01b0"],
    correct: 2
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi \u0111\u00e3 c\u00f3 m\u1ed9t b\u01b0\u1edbc ti\u1ebfn so v\u1edbi c\u00e1c nh\u00e0 duy v\u1eadt Hy L\u1ea1p c\u1ed5 \u0111\u1ea1i?",
    answers: ["A. Trecnuxepxki, nh\u00e0 d\u00e2n ch\u1ee7 c\u00e1ch m\u1ea1ng Nga", "B. Trecnuxepxki, nh\u00e0 t\u01b0 b\u1ea3n c\u00e1ch m\u1ea1ng Nga", "C. Trecnuxepxki, nh\u00e0 x\u00e3 h\u1ed9i c\u00e1ch m\u1ea1ng Nga", "D. Trecnuxepxki, nh\u00e0 cao c\u1ea5p quy\u1ec1n c\u00e1ch m\u1ea1ng Nga"],
    correct: 0
  },
  {
    question: "M\u1ef9 h\u1ecdc M\u00e1c \u2013 Lenin tr\u01b0\u1edbc ti\u00ean x\u00e1c \u0111\u1ecbnh c\u00e1i \u0111\u1eb9p l\u00e0 g\u00ec?",
    answers: ["A. M\u1ed9t ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc", "B. M\u1ed9t ph\u1ea1m tr\u00f9 tri\u1ebft h\u1ecdc", "C. M\u1ed9t ph\u1ea1m tr\u00f9 khoa h\u1ecdc", "D. M\u1ed9t ph\u1ea1m tr\u00f9 l\u00fd lu\u1eadn h\u1ecdc"],
    correct: 0
  },
  {
    question: "Trong s\u1ed1 c\u00e1c ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc, ph\u1ea1m tr\u00f9 c\u00e1i \u0111\u1eb9p gi\u1eef v\u1ecb tr\u00ed trung t\u00e2m \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n \u1edf m\u1ea5y ph\u01b0\u01a1ng di\u1ec7n n\u00e0o?",
    answers: ["A. Trong cu\u1ed9c s\u1ed1ng th\u01b0\u1eddng ng\u00e0y, trong ngh\u1ec7 thu\u1eadt v\u00e0 trong m\u1ef9 h\u1ecdc", "B. Trong cu\u1ed9c s\u1ed1ng th\u01b0\u1eddng ng\u00e0y, trong l\u00fd lu\u1eadn ngh\u1ec7 thu\u1eadt v\u00e0 trong tri\u1ebft h\u1ecdc", "C. Trong cu\u1ed9c s\u1ed1ng th\u01b0\u1eddng ng\u00e0y, trong ch\u00ednh tr\u1ecb v\u00e0 trong m\u1ef9 h\u1ecdc", "D. Trong cu\u1ed9c s\u1ed1ng th\u01b0\u1eddng ng\u00e0y, trong l\u00fd lu\u1eadn ngh\u1ec7 thu\u1eadt v\u00e0 trong m\u1ef9 h\u1ecdc"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: C\u00e1i \u0111\u1eb9p l\u00e0 ph\u1ea1m tr\u00f9\u2026., ph\u1ea3n \u00e1nh gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 t\u00edch c\u1ef1c \u1edf c\u00e1c s\u1ef1 v\u1eadt, hi\u1ec7n t\u01b0\u1ee3ng mang l\u1ea1i kho\u00e1i c\u1ea3m v\u00f4 t\u01b0, trong s\u00e1ng cho con ng\u01b0\u1eddi.",
    answers: ["A. M\u1ef9 h\u1ecdc khoa h\u1ecdc", "B. M\u1ef9 h\u1ecdc C\u1ed5 \u0111\u1ea1i", "C. M\u1ef9 h\u1ecdc trung t\u00e2m", "D. M\u1ef9 h\u1ecdc th\u1ea7n linh"],
    correct: 2
  },
  {
    question: "N\u00eau kh\u00e1i ni\u1ec7m c\u00e1i cao c\u1ea3?",
    answers: ["A. C\u00e1i cao c\u1ea3 l\u00e0 ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc c\u01a1 b\u1ea3n, g\u00e2y n\u00ean c\u1ea3m x\u00fac kh\u00e2m ph\u1ee5c, cho\u00e1ng ng\u1ee3p cho ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9", "B. C\u00e1i cao c\u1ea3 l\u00e0 ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc c\u01a1 b\u1ea3n, ph\u1ea3n \u00e1nh gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 t\u00edch c\u1ef1c \u1edf c\u1ea5p \u0111\u1ed9 phi th\u01b0\u1eddng, g\u00e2y n\u00ean c\u1ea3m x\u00fac kh\u00e2m ph\u1ee5c", "C. C\u00e1i cao c\u1ea3 l\u00e0 ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc c\u01a1 b\u1ea3n, ph\u1ea3n \u00e1nh gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 t\u00edch c\u1ef1c \u1edf c\u1ea5p \u0111\u1ed9 phi th\u01b0\u1eddng, cho\u00e1ng ng\u1ee3p cho ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9", "D. C\u00e1i cao c\u1ea3 l\u00e0 ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc c\u01a1 b\u1ea3n, ph\u1ea3n \u00e1nh gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 t\u00edch c\u1ef1c \u1edf c\u1ea5p \u0111\u1ed9 phi th\u01b0\u1eddng, g\u00e2y n\u00ean c\u1ea3m x\u00fac kh\u00e2m ph\u1ee5c, cho\u00e1ng ng\u1ee3p cho ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9"],
    correct: 3
  },
  {
    question: "C\u00e1i cao c\u1ea3 mang l\u1ea1i cho con ng\u01b0\u1eddi nh\u1eefng c\u1ea3m x\u00fac th\u1ea9m m\u1ef9 \u0111\u1eb7c bi\u1ec7t g\u00ec?",
    answers: ["A. C\u1ea3m gi\u00e1c t\u00f4n k\u00ednh, c\u1ea3m gi\u00e1c v\u1ec1 s\u1ef1 v\u0129 \u0111\u1ea1i", "B. C\u1ea3m gi\u00e1c ng\u01b0\u1ee1ng m\u1ed9, t\u00f4n k\u00ednh, c\u1ea3m gi\u00e1c v\u1ec1 s\u1ef1 v\u0129 \u0111\u1ea1i, s\u1ee9c m\u1ea1nh ti\u1ec1m t\u00e0ng", "C. C\u1ea3m gi\u00e1c ng\u01b0\u1ee1ng m\u1ed9, t\u00f4n k\u00ednh, s\u1ee9c m\u1ea1nh ti\u1ec1m t\u00e0ng", "D. C\u1ea3m gi\u00e1c ng\u01b0\u1ee1ng m\u1ed9, t\u00f4n k\u00ednh"],
    correct: 1
  },
  {
    question: "C\u00e1i bi l\u00e0 m\u1ed9t ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc ph\u1ea3n \u00e1nh c\u00e1i g\u00ec?",
    answers: ["A. Hai thu\u1ed9c t\u00ednh th\u1ea9m m\u1ef9 c\u1ee7a nh\u1eefng hi\u1ec7n t\u01b0\u1ee3ng v\u00e0 kh\u00e1ch th\u1ec3 c\u00f3 s\u1ef1 xung \u0111\u1ed9t gi\u1eefa c\u00e1i \u0111\u1eb9p, c\u00e1i thi\u1ec7n v\u1edbi c\u00e1i x\u1ea5u, c\u00e1i \u00e1c, d\u1eabn \u0111\u1ebfn s\u1ef1 m\u1ea5t m\u00e1t, \u0111au th\u01b0\u01a1ng", "B. Ba thu\u1ed9c t\u00ednh th\u1ea9m m\u1ef9 c\u1ee7a nh\u1eefng hi\u1ec7n t\u01b0\u1ee3ng c\u00f3 s\u1ef1 xung \u0111\u1ed9t gi\u1eefa c\u00e1i \u0111\u1eb9p, c\u00e1i thi\u1ec7n v\u1edbi c\u00e1i x\u1ea5u, c\u00e1i \u00e1c, d\u1eabn \u0111\u1ebfn s\u1ef1 m\u1ea5t m\u00e1t, \u0111au th\u01b0\u01a1ng", "C. M\u1ed9t thu\u1ed9c t\u00ednh th\u1ea9m m\u1ef9 c\u1ee7a nh\u1eefng hi\u1ec7n t\u01b0\u1ee3ng v\u00e0 kh\u00e1ch th\u1ec3 c\u00f3 s\u1ef1 xung \u0111\u1ed9t gi\u1eefa c\u00e1i \u0111\u1eb9p, c\u00e1i thi\u1ec7n v\u1edbi c\u00e1i x\u1ea5u, c\u00e1i \u00e1c, d\u1eabn \u0111\u1ebfn s\u1ef1 m\u1ea5t m\u00e1t, \u0111au th\u01b0\u01a1ng", "D. B\u1ed1n thu\u1ed9c t\u00ednh th\u1ea9m m\u1ef9 c\u1ee7a nh\u1eefng hi\u1ec7n t\u01b0\u1ee3ng v\u00e0 kh\u00e1ch th\u1ec3 c\u00f3 s\u1ef1 xung \u0111\u1ed9t gi\u1eefa c\u00e1i \u0111\u1eb9p, c\u00e1i thi\u1ec7n v\u1edbi c\u00e1i x\u1ea5u, c\u00e1i \u00e1c"],
    correct: 2
  },
  {
    question: "C\u00e1i bi trong ngh\u1ec7 thu\u1eadt ph\u1ea3n \u00e1nh c\u00e1i g\u00ec?",
    answers: ["A. C\u00e1i bi trong cu\u1ed9c s\u1ed1ng m\u1ed9t c\u00e1ch t\u1eadp trung nh\u1ea5t, c\u1ea3m x\u00fac v\u1ec1 s\u1ef1 cao th\u01b0\u1ee3ng", "B. C\u00e1i bi trong cu\u1ed9c s\u1ed1ng m\u1ed9t c\u00e1ch t\u1eadp trung nh\u1ea5t, g\u00e2y \u1ea5n t\u01b0\u1ee3ng \u0111au th\u01b0\u01a1ng th\u1ea5m th\u00eda", "C. C\u00e1i bi trong cu\u1ed9c s\u1ed1ng m\u1ed9t c\u00e1ch g\u00e2y \u1ea5n t\u01b0\u1ee3ng \u0111au th\u01b0\u01a1ng th\u1ea5m th\u00eda v\u00e0 c\u1ea3m x\u00fac v\u1ec1 s\u1ef1 cao th\u01b0\u1ee3ng", "D. C\u00e1i bi trong cu\u1ed9c s\u1ed1ng m\u1ed9t c\u00e1ch t\u1eadp trung nh\u1ea5t, g\u00e2y \u1ea5n t\u01b0\u1ee3ng \u0111au th\u01b0\u01a1ng th\u1ea5m th\u00eda v\u00e0 c\u1ea3m x\u00fac v\u1ec1 s\u1ef1 cao th\u01b0\u1ee3ng"],
    correct: 3
  },
  {
    question: "C\u00e1i h\u00e0i mang l\u1ea1i cho con ng\u01b0\u1eddi nh\u1eefng c\u1ea3m x\u00fac th\u1ea9m m\u1ef9 \u0111\u1eb7c bi\u1ec7t g\u00ec?",
    answers: ["A. \u0110\u00f3 l\u00e0 c\u1ea3m gi\u00e1c kh\u00f4ng vui v\u1ebb, s\u1ea3ng kho\u00e1i", "B. \u0110\u00f3 l\u00e0 c\u1ea3m gi\u00e1c s\u1ea3ng kho\u00e1i", "C. \u0110\u00f3 l\u00e0 c\u1ea3m gi\u00e1c vui v\u1ebb, s\u1ea3ng kho\u00e1i, gi\u1ea3i t\u1ecfa c\u0103ng th\u1eb3ng", "D. \u0110\u00f3 l\u00e0 c\u1ea3m gi\u00e1c gi\u1ea3i t\u1ecfa c\u0103ng th\u1eb3ng"],
    correct: 2
  },
  {
    question: "Arixstot cho r\u1eb1ng h\u00e0i k\u1ecbch l\u00e0 c\u00e1i b\u1eaft ch\u01b0\u1edbc c\u00e1i x\u1ea5u nh\u01b0ng kh\u00f4ng ph\u1ea3i to\u00e0n b\u1ed9 s\u1ef1 x\u1ea5u xa, b\u1ecb \u1ed5i m\u00e0 ch\u1ec9 l\u00e0 g\u00ec?",
    answers: ["A. M\u1ed9t s\u1ef1 k\u1ef3 qu\u1eb7c n\u00e0o \u0111\u00f3", "B. M\u1ed9t sai l\u1ea7m, m\u1ed9t s\u1ef1 k\u1ef3 qu\u1eb7c n\u00e0o \u0111\u00f3", "C. M\u1ed9t hi\u1ec3u l\u1ea7m, m\u1ed9t s\u1ef1 kh\u00f4ng k\u1ef3 qu\u1eb7c n\u00e0o \u0111\u00f3", "D. Hai sai l\u1ea7m, hai s\u1ef1 k\u1ef3 qu\u1eb7c n\u00e0o \u0111\u00f3"],
    correct: 1
  },
  {
    question: "Bi k\u1ecbch l\u1ea1c quan xu\u1ea5t hi\u1ec7n ch\u1ee7 y\u1ebfu trong lo\u1ea1i h\u00ecnh ngh\u1ec7 thu\u1eadt n\u00e0o?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt x\u00e3 h\u1ed9i ch\u1ee7 ngh\u0129a", "B. Ngh\u1ec7 thu\u1eadt t\u1ea1o h\u00ecnh", "C. Ngh\u1ec7 thu\u1eadt t\u01b0 b\u1ea3n ch\u1ee7 ngh\u0129a", "D. Ngh\u1ec7 thu\u1eadt c\u1ea3m t\u00ednh"],
    correct: 0
  },
  {
    question: "\u00dd th\u1ee9c th\u1ea9m m\u1ef9 c\u00f3 \u0111\u1eb7c tr\u01b0ng l\u00e0 s\u1ef1 ph\u1ea3n \u00e1nh mang t\u00ednh g\u00ec v\u1ec1 th\u1ebf gi\u1edbi hi\u1ec7n th\u1ef1c kh\u00e1ch quan?",
    answers: ["A. C\u00e1 nh\u00e2n \u2013 h\u00ecnh t\u01b0\u1ee3ng", "B. Kh\u00e1ch th\u1ec3 \u2013 c\u00e1 th\u1ec3", "C. Kh\u00e1i qu\u00e1t \u2013 nh\u00e2n v\u0103n", "D. H\u00ecnh t\u01b0\u1ee3ng \u2013 c\u1ea3m t\u00ednh"],
    correct: 3
  },
  {
    question: "Nhu c\u1ea7u th\u1ea9m m\u1ef9 l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 tinh th\u1ea7n th\u01b0\u1eddng tr\u1ef1c, l\u00e0 tr\u1ea1ng th\u00e1i \u0111\u00f2i h\u1ecfi s\u1ef1 th\u1ecfa m\u00e3n c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9", "B. L\u00e0 ti\u1ec1m n\u0103ng tinh th\u1ea7n th\u01b0\u1eddng tr\u1ef1c c\u1ee7a ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9", "C. L\u00e0 tr\u1ea1ng th\u00e1i \u0111\u00f2i h\u1ecfi s\u1ef1 th\u1ecfa m\u00e3n c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi", "D. L\u00e0 ti\u1ec1m n\u0103ng tinh th\u1ea7n th\u01b0\u1eddng tr\u1ef1c c\u1ee7a ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9, l\u00e0 tr\u1ea1ng th\u00e1i \u0111\u00f2i h\u1ecfi s\u1ef1 th\u1ecfa m\u00e3n c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi"],
    correct: 3
  },
  {
    question: "Nhu c\u1ea7u th\u1ea9m m\u1ef9 l\u00e0?",
    answers: ["A. Ti\u1ec1m n\u0103ng tinh th\u1ea7n th\u01b0\u1eddng tr\u1ef1c, l\u00e0 tr\u1ea1ng th\u00e1i \u0111\u00f2i h\u1ecfi s\u1ef1 th\u1ecfa m\u00e3n c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9", "B. Ti\u1ec1m n\u0103ng tinh th\u1ea7n th\u01b0\u1eddng tr\u1ef1c c\u1ee7a ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9", "C. L\u00e0 tr\u1ea1ng th\u00e1i \u0111\u00f2i h\u1ecfi s\u1ef1 th\u1ecfa m\u00e3n c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi", "D. Ti\u1ec1m n\u0103ng tinh th\u1ea7n th\u01b0\u1eddng tr\u1ef1c c\u1ee7a ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9, l\u00e0 tr\u1ea1ng th\u00e1i \u0111\u00f2i h\u1ecfi s\u1ef1 th\u1ecfa m\u00e3n c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi"],
    correct: 3
  },
  {
    question: "Nhu c\u1ea7u n\u00f3i chung c\u1ee7a con ng\u01b0\u1eddi c\u00f3 th\u1ec3 x\u1ebfp v\u00e0o hai tuy\u1ebfn n\u00e0o?",
    answers: ["A. Tuy\u1ebfn t\u1ef1 nhi\u00ean v\u00e0 tuy\u1ebfn cu\u1ed9c s\u1ed1ng", "B. Tuy\u1ebfn t\u1ef1 nhi\u00ean v\u00e0 tuy\u1ebfn x\u00e3 h\u1ed9i", "C. Tuy\u1ebfn c\u1ea3m t\u00ednh v\u00e0 tuy\u1ebfn tr\u1ef1c t\u00ednh", "D. Tuy\u1ebfn x\u00e3 h\u1ed9i v\u00e0 tuy\u1ebfn h\u00ecnh th\u00e0nh"],
    correct: 1
  },
  {
    question: "Kant nh\u1eadn \u0111\u1ecbnh r\u1eb1ng: Nhu c\u1ea7u th\u1ea9m m\u1ef9 ch\u1ec9 \u0111\u01b0\u1ee3c th\u1ecfa m\u00e3n v\u00e0 t\u00ecnh c\u1ea3m th\u1ea9m m\u1ef9 ch\u1ec9 \u0111\u01b0\u1ee3c nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Khi con ng\u01b0\u1eddi kh\u00f4ng v\u01b0\u1ee3t l\u00ean tr\u00ean nh\u1eefng suy t\u00ednh v\u1ee5 l\u1ee3i, \u00edch k\u1ef7 t\u1ea7m th\u01b0\u1eddng", "B. N\u1ea3y sinh khi con ng\u01b0\u1eddi v\u01b0\u1ee3t l\u00ean tr\u00ean nh\u1eefng suy t\u00ednh v\u1ee5 l\u1ee3i", "C. N\u1ea3y sinh khi con ng\u01b0\u1eddi v\u01b0\u1ee3t l\u00ean tr\u00ean nh\u1eefng \u00edch k\u1ef7 t\u1ea7m th\u01b0\u1eddng", "D. N\u1ea3y sinh khi con ng\u01b0\u1eddi v\u01b0\u1ee3t l\u00ean tr\u00ean nh\u1eefng suy t\u00ednh v\u1ee5 l\u1ee3i, \u00edch k\u1ef7 t\u1ea7m th\u01b0\u1eddng"],
    correct: 3
  },
  {
    question: "Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 \u1edf m\u1ed7i con ng\u01b0\u1eddi kh\u00f4ng ph\u1ea3i l\u00e0 b\u1ea9m sinh, b\u1ea5t bi\u1ebfn, m\u00e0 thay \u0111\u1ed5i t\u00f9y theo y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. L\u1ee9a tu\u1ed5i, t\u1eebng th\u1eddi k\u1ef3", "B. L\u1ee9a tu\u1ed5i, theo gi\u1edbi t\u00ednh kh\u00e1c nhau", "C. T\u1eebng th\u1eddi k\u1ef3, theo gi\u1edbi t\u00ednh kh\u00e1c nhau", "D. L\u1ee9a tu\u1ed5i, t\u1eebng th\u1eddi k\u1ef3, theo gi\u1edbi t\u00ednh kh\u00e1c nhau"],
    correct: 3
  },
  {
    question: "Y\u1ebfu t\u1ed1 n\u00e0o l\u00e0 tr\u1ea1ng th\u00e1i t\u00ecnh c\u1ea3m t\u01b0\u01a1ng \u0111\u1ed1i \u1ed5n \u0111\u1ecbnh, l\u1eb7p \u0111i l\u1eb7p l\u1ea1i tr\u01b0\u1edbc \u0111\u1ed1i t\u01b0\u1ee3ng th\u1ea9m m\u1ef9?",
    answers: ["A. Nhu c\u1ea7u th\u1ea9m m\u1ef9", "B. C\u1ea3m th\u1ee5 th\u1ea9m m\u1ef9", "C. Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9", "D. Cu\u1ed9c s\u1ed1ng th\u1ea9m m\u1ef9"],
    correct: 2
  },
  {
    question: "L\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 m\u1ed9t th\u00e0nh t\u1ed1 c\u01a1 b\u1ea3n, l\u00e0 h\u1ea1t nh\u00e2n c\u1ee7a th\u1ea9m m\u1ef9", "B. L\u00e0 m\u1ed9t th\u00e0nh t\u1ed1 c\u01a1 b\u1ea3n, l\u00e0 h\u1ea1t nh\u00e2n c\u1ee7a \u00fd th\u1ee9c th\u1ea9m m\u1ef9", "C. L\u00e0 m\u1ed9t th\u00e0nh t\u1ed1 c\u01a1 b\u1ea3n, l\u00e0 h\u1ea1t nh\u00e2n c\u1ee7a nh\u1eadn th\u1ee9c th\u1ea9m m\u1ef9", "D. L\u00e0 m\u1ed9t th\u00e0nh t\u1ed1 c\u01a1 b\u1ea3n, l\u00e0 h\u1ea1t nh\u00e2n c\u1ee7a ho\u1ea1t \u0111\u1ed9ng th\u1ea9m m\u1ef9"],
    correct: 1
  },
  {
    question: "Nh\u1eefng h\u00ecnh t\u01b0\u1ee3ng trong l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 th\u01b0\u1eddng l\u00e0 con ng\u01b0\u1eddi thu\u1ed9c y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. Thu\u1ed9c m\u1ed9t t\u1ea7ng l\u1edbp trong x\u00e3 h\u1ed9i nh\u1ea5t \u0111\u1ecbnh v\u1edbi nh\u1eefng quan h\u1ec7 c\u1ee5 th\u1ec3 c\u1ee7a h\u1ecd v\u1edbi th\u1ebf gi\u1edbi xung quanh", "B. M\u1ed9t th\u1eddi \u0111\u1ea1i nh\u1ea5t \u0111\u1ecbnh v\u00e0 nh\u1eefng quan h\u1ec7 c\u1ee5 th\u1ec3 c\u1ee7a h\u1ecd v\u1edbi th\u1ebf gi\u1edbi xung quanh", "C. M\u1ed9t th\u1eddi \u0111\u1ea1i nh\u1ea5t \u0111\u1ecbnh, thu\u1ed9c m\u1ed9t t\u1ea7ng l\u1edbp trong x\u00e3 h\u1ed9i nh\u1ea5t \u0111\u1ecbnh", "D. M\u1ed9t th\u1eddi \u0111\u1ea1i nh\u1ea5t \u0111\u1ecbnh, thu\u1ed9c m\u1ed9t t\u1ea7ng l\u1edbp trong x\u00e3 h\u1ed9i nh\u1ea5t \u0111\u1ecbnh v\u1edbi nh\u1eefng quan h\u1ec7 c\u1ee5 th\u1ec3 c\u1ee7a h\u1ecd v\u1edbi th\u1ebf gi\u1edbi xung quanh"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Th\u00f4ng th\u01b0\u1eddng l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n \u2026 qua c\u00e1c h\u00ecnh t\u01b0\u1ee3ng nh\u1eefng nh\u00e2n v\u1eadt t\u00edch c\u1ef1c, nh\u00e2n v\u1eadt ch\u00ednh di\u1ec7n, nh\u00e2n v\u1eadt anh h\u00f9ng?",
    answers: ["A. Gi\u00e1n ti\u1ebfp", "B. Tr\u1ef1c ti\u1ebfp", "C. Trung gian", "D. Tr\u1ef1c ti\u1ebfp ho\u1eb7c gi\u00e1n ti\u1ebfp"],
    correct: 1
  },
  {
    question: "C\u00f3 m\u1ea5y nh\u00f3m ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9?",
    answers: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correct: 4
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 theo \u2026 \u0111\u1ec1u h\u01b0\u1edbng t\u1edbi l\u00e0m cho con ng\u01b0\u1eddi ph\u00e1t tri\u1ec3n phong ph\u00fa v\u00e0 h\u00e0i h\u00f2a v\u00e0 l\u00e0m cho v\u0103n h\u00f3a th\u1ea9m m\u1ef9 \u0111\u01b0\u1ee3c x\u00e1c l\u1eadp trong c\u00e1c quan h\u1ec7 x\u00e3 h\u1ed9i?",
    answers: ["A. Tri\u1ebft l\u00fd hay t\u01b0 t\u01b0\u1edfng", "B. Ngh\u0129a h\u1eb9p hay ngh\u0129a r\u1ed9ng", "C. Ngh\u0129a b\u00f3ng hay ngh\u0129a \u0111en", "D. Th\u00e0nh ph\u1ea7n hay t\u1ed5ng h\u1ee3p"],
    correct: 1
  },
  {
    question: "Gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 l\u00e0m h\u00ecnh th\u00e1i n\u0103ng \u0111\u1ed9ng c\u1ee7a ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9 ph\u00e1t tri\u1ec3n nh\u01b0 th\u1ebf n\u00e0o tr\u00ean c\u01a1 s\u1edf nh\u00e2n sinh quan v\u00e0 th\u1ebf gi\u1edbi quan \u0111\u00fang \u0111\u1eafn?",
    answers: ["A. M\u1ea1nh m\u1ebd ho\u1eb7c t\u1ef1 do", "B. T\u1ef1 do", "C. M\u1ea1nh m\u1ebd", "D. M\u1ea1nh m\u1ebd v\u00e0 t\u1ef1 do"],
    correct: 3
  },
  {
    question: "H\u00ecnh th\u1ee9c gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 th\u1ee9 hai l\u00e0 g\u00ec?",
    answers: ["A. Th\u00f4ng qua c\u1ea3i thi\u1ec7n m\u00f4i tr\u01b0\u1eddng th\u1ea9m m\u1ef9, \u0103n m\u1eb7c \u0111\u1ed1i v\u1edbi v\u1eadt d\u1ee5ng v\u00e0 v\u1edbi m\u00f4i tr\u01b0\u1eddng s\u1ed1ng", "B. Th\u00f4ng qua c\u1ea3i thi\u1ec7n m\u00f4i tr\u01b0\u1eddng th\u1ea9m m\u1ef9, trong \u0111\u00f3 c\u00f3 v\u0103n h\u00f3a giao ti\u1ebfp, quan h\u1ec7 \u0111\u1ed1i v\u1edbi v\u1eadt d\u1ee5ng", "C. M\u00f4i tr\u01b0\u1eddng th\u1ea9m m\u1ef9, trong \u0111\u00f3 c\u00f3 v\u0103n h\u00f3a, \u0103n m\u1eb7c, quan h\u1ec7 \u0111\u1ed1i v\u1edbi v\u1eadt d\u1ee5ng v\u00e0 v\u1edbi m\u00f4i tr\u01b0\u1eddng s\u1ed1ng", "D. Th\u00f4ng qua c\u1ea3i thi\u1ec7n m\u00f4i tr\u01b0\u1eddng th\u1ea9m m\u1ef9, trong \u0111\u00f3 c\u00f3 v\u0103n h\u00f3a giao ti\u1ebfp, \u0103n m\u1eb7c, quan h\u1ec7 \u0111\u1ed1i v\u1edbi v\u1eadt d\u1ee5ng v\u00e0 v\u1edbi m\u00f4i tr\u01b0\u1eddng s\u1ed1ng"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Nh\u00f3m ch\u1ee7 th\u1ec3 th\u01b0\u1edfng th\u1ee9c ph\u1ea3n \u00e1nh th\u1ee5 c\u1ea3m nh\u1eefng qu\u00e1 tr\u00ecnh th\u1ea9m m\u1ef9 x\u1ea3y ra trong \u2026 nh\u1edd v\u00e0o gi\u00e1c quan m\u00e0 t\u00edch l\u0169y \u0111\u01b0\u1ee3c nh\u1eefng gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9?",
    answers: ["A. Cu\u1ed9c s\u1ed1ng v\u00e0 th\u1ea9m m\u1ef9", "B. Cu\u1ed9c s\u1ed1ng v\u00e0 x\u00e3 h\u1ed9i", "C. Cu\u1ed9c s\u1ed1ng v\u00e0 ngh\u1ec7 thu\u1eadt", "D. Tinh th\u1ea7n v\u00e0 ngh\u1ec7 thu\u1eadt"],
    correct: 2
  },
  {
    question: "Nh\u00f3m \u0111\u1ecbnh h\u01b0\u1edbng c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 gi\u1eef vai tr\u00f2 nh\u01b0 th\u1ebf n\u00e0o trong vi\u1ec7c li\u00ean k\u1ebft c\u00e1c s\u1ea3n ph\u1ea9m s\u00e1ng t\u1ea1o c\u00f3 gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 cao v\u1edbi ng\u01b0\u1eddi ti\u00eau th\u1ee5?",
    answers: ["A. Ch\u1ee7 y\u1ebfu", "B. \u0110\u1eb7c bi\u1ec7t", "C. \u0110\u1ecbnh h\u01b0\u1edbng", "D. Quan tr\u1ecdng"],
    correct: 3
  },
  {
    question: "T\u00ednh ch\u1ea5t s\u00e1ng t\u1ea1o c\u1ee7a ch\u1ee7 th\u1ec3 \u0111\u00e1nh gi\u00e1 c\u00f2n c\u00f3 vai tr\u00f2 quan tr\u1ecdng \u1edf ch\u1ed7 khai th\u00e1c c\u00e1c gi\u00e1 tr\u1ecb n\u00e0o?",
    answers: ["A. Gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 kh\u00f4ng c\u00f2n ch\u00ecm \u1ea9n trong c\u00e1c t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "B. Gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 ch\u01b0a t\u00ecm th\u1ea5y nhi\u1ec1u trong c\u00e1c t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "C. Gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 c\u00f2n nguy\u00ean v\u1eb9n trong c\u00e1c t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "D. Gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 c\u00f2n ch\u00ecm \u1ea9n trong c\u00e1c t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt"],
    correct: 3
  },
  {
    question: "Ho\u1ea1t \u0111\u1ed9ng n\u00e0o ra nh\u1eefng gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 tr\u01b0\u1edbc h\u1ebft c\u0169ng l\u00e0 nh\u1eefng ho\u1ea1t \u0111\u1ed9ng ph\u1ea3n \u00e1nh?",
    answers: ["A. Ho\u1ea1t \u0111\u1ed9ng th\u1ef1c ti\u1ec5n", "B. Ho\u1ea1t \u0111\u1ed9ng s\u1ea3n xu\u1ea5t", "C. Ho\u1ea1t \u0111\u1ed9ng tinh th\u1ea7n", "D. Ho\u1ea1t \u0111\u1ed9ng gia c\u00f4ng"],
    correct: 1
  },
  {
    question: "M\u1ee5c \u0111\u00edch c\u1ee7a ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 nh\u1eadn \u0111\u1ecbnh v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng v\u00e0 n\u00eau l\u00ean nh\u1eefng n\u00e9t n\u1ed5i b\u1eadt, ch\u00ednh x\u00e1c c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng", "B. L\u00e0 li\u00ean k\u1ebft nh\u1eefng nh\u1eadn th\u1ee9c v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng ch\u00ednh x\u00e1c c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng", "C. L\u00e0 li\u00ean k\u1ebft nh\u1eefng x\u00fac c\u1ea3m v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng v\u00e0 n\u00eau l\u00ean nh\u1eefng n\u00e9t n\u1ed5i b\u1eadt, ch\u00ednh x\u00e1c c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng", "D. L\u00e0 li\u00ean k\u1ebft nh\u1eefng th\u1ea9m m\u1ef9 v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng v\u00e0 n\u00eau l\u00ean nh\u1eefng n\u00e9t n\u1ed5i b\u1eadt"],
    correct: 2
  },
  {
    question: "Trong ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o ngh\u1ec7 thu\u1eadt th\u00ec y\u1ebfu t\u1ed1 n\u00e0o c\u00f3 vai tr\u00f2 c\u1ef1c k\u1ef3 quan tr\u1ecdng?",
    answers: ["A. T\u01b0\u1edfng t\u01b0\u1ee3ng v\u00e0 c\u00e1 t\u00ednh s\u00e1ng t\u1ea1o", "B. T\u01b0\u1edfng t\u01b0\u1ee3ng, li\u00ean t\u01b0\u1edfng", "C. T\u01b0\u1edfng t\u01b0\u1ee3ng, li\u00ean t\u01b0\u1edfng v\u00e0 c\u00e1 t\u00ednh s\u00e1ng t\u1ea1o", "D. Li\u00ean t\u01b0\u1edfng v\u00e0 c\u00e1 t\u00ednh s\u00e1ng t\u1ea1o"],
    correct: 2
  },
  {
    question: "Nh\u00f3m ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n th\u1ea9m m\u1ef9 l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 m\u1ed9t nh\u00f3m ch\u1ee7 th\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c truy\u1ec1n \u0111\u1ea1t s\u1ea3n ph\u1ea9m c\u1ee7a ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o th\u1ea9m m\u1ef9", "B. L\u00e0 m\u1ed9t nh\u00f3m ch\u1ee7 th\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c s\u00e1ng t\u1ea1o th\u1ea9m m\u1ef9 cho ch\u1ee7 th\u1ec3 ti\u00eau th\u1ee5 th\u1ea9m \u0111\u1ecbnh", "C. L\u00e0 m\u1ed9t nh\u00f3m c\u00e1 th\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c truy\u1ec1n \u0111\u1ea1t s\u1ea3n ph\u1ea9m c\u1ee7a ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o th\u1ea9m m\u1ef9 cho ch\u1ee7 th\u1ec3 ti\u00eau th\u1ee5 th\u1ea9m m\u1ef9", "D. L\u00e0 m\u1ed9t nh\u00f3m ch\u1ee7 th\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c truy\u1ec1n \u0111\u1ea1t s\u1ea3n ph\u1ea9m c\u1ee7a ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o th\u1ea9m m\u1ef9 cho ch\u1ee7 th\u1ec3 ti\u00eau th\u1ee5 th\u1ea9m m\u1ef9"],
    correct: 3
  },
  {
    question: "M\u1ed7i ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n kh\u00f4ng th\u1ec3 t\u1ef1 m\u00ecnh bi\u1ec3u \u0111\u1ea1t \u0111\u01b0\u1ee3c c\u00e1c s\u1ea3n ph\u1ea9m s\u00e1ng t\u1ea1o m\u00e0 h\u1ecd c\u1ea7n ph\u1ea3i c\u00f3 nh\u1eefng y\u1ebfu t\u1ed1 n\u00e0o \u0111\u1ec3 bi\u1ec3u \u0111\u1ea1t?",
    answers: ["A. V\u1eadt ch\u1ea5t, tinh th\u1ea7n", "B. C\u01a1 c\u1ea5u, ph\u01b0\u01a1ng ti\u1ec7n", "C. C\u00f4ng c\u1ee5, ph\u01b0\u01a1ng ti\u1ec7n", "D. C\u00f4ng c\u1ee5 ho\u1eb7c ph\u01b0\u01a1ng ti\u1ec7n"],
    correct: 2
  },
  {
    question: "C\u00e1c ph\u01b0\u01a1ng ti\u1ec7n c\u1ee7a nh\u00f3m ch\u1ee7 th\u1ec3 t\u1ed5ng h\u1ee3p c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 bao g\u1ed3m c\u00e1c s\u1ea3n ph\u1ea9m c\u1ee7a nh\u1eefng ng\u01b0\u1eddi n\u00e0o?",
    answers: ["A. C\u00e1c c\u00f4ng c\u1ee5 s\u00e1ng t\u1ea1o c\u1ee7a ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n v\u00e0 c\u1ea3 b\u1ea3n th\u00e2n ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n", "B. C\u00e1c th\u1ee7 ph\u00e1p s\u00e1ng t\u1ea1o, c\u00e1c c\u00f4ng c\u1ee5 s\u00e1ng t\u1ea1o c\u1ee7a ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n v\u00e0 c\u1ea3 b\u1ea3n th\u00e2n ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n", "C. Ng\u01b0\u1eddi s\u00e1ng t\u1ea1o, c\u00e1c c\u00f4ng c\u1ee5 s\u00e1ng t\u1ea1o c\u1ee7a ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n v\u00e0 c\u1ea3 b\u1ea3n th\u00e2n ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n", "D. Ng\u01b0\u1eddi s\u00e1ng t\u1ea1o, c\u00e1c th\u1ee7 ph\u00e1p s\u00e1ng t\u1ea1o, c\u00e1c c\u00f4ng c\u1ee5 s\u00e1ng t\u1ea1o c\u1ee7a ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n v\u00e0 c\u1ea3 b\u1ea3n th\u00e2n ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n"],
    correct: 3
  },
  {
    question: "Lao \u0111\u1ed9ng \u0111\u1ea1t \u0111\u1ebfn \u0111\u1ed9 th\u00e0nh th\u1ea1o kh\u00e9o l\u00e9o \u0111\u01b0\u1ee3c coi l\u00e0 lao \u0111\u1ed9ng g\u00ec?",
    answers: ["A. Lao \u0111\u1ed9ng ngh\u1ec7 thu\u1eadt", "B. Ho\u1ea1t \u0111\u1ed9ng ngh\u1ec7 thu\u1eadt", "C. V\u0103n h\u00f3a ngh\u1ec7 thu\u1eadt", "D. Tri\u1ec3n l\u00e3m ngh\u1ec7 thu\u1eadt"],
    correct: 0
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng nghi\u00ean c\u1ee9u c\u1ee7a l\u0129nh v\u1ef1c n\u00e0o?",
    answers: ["A. V\u0103n h\u1ecdc", "B. M\u1ef9 h\u1ecdc", "C. Tri\u1ebft h\u1ecdc", "D. Khoa h\u1ecdc"],
    correct: 1
  },
  {
    question: "L\u0129nh v\u1ef1c n\u00e0o \u0111\u01b0\u1ee3c coi nh\u01b0 m\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i?",
    answers: ["A. Th\u1ea9m m\u1ef9", "B. C\u00e1i \u0111\u1eb9p", "C. Cu\u1ed9c s\u1ed1ng", "D. Ngh\u1ec7 thu\u1eadt"],
    correct: 3
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt c\u00f3 m\u1ea5y ch\u1ee9c n\u0103ng x\u00e3 h\u1ed9i c\u01a1 b\u1ea3n?",
    answers: ["A. 2", "B. 3", "C. 4", "D. 5"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Ch\u1ee9c n\u0103ng th\u1ecfa m\u00e3n nhu c\u1ea7u th\u1ea9m m\u1ef9 c\u1ee7a c\u00e1c \u2026 n\u00f3i chung, \u0111\u00f3 l\u00e0 ch\u1ee9c n\u0103ng \u0111\u1eb7c th\u00f9 c\u1ee7a ngh\u1ec7 thu\u1eadt?",
    answers: ["A. C\u00e1 nh\u00e2n v\u00e0 x\u00e3 h\u1ed9i", "B. C\u00e1 nh\u00e2n v\u00e0 t\u1eadp th\u1ec3", "C. T\u1eadp th\u1ec3 v\u00e0 x\u00e3 h\u1ed9i", "D. C\u00e1 th\u1ec3 v\u00e0 t\u1eadp th\u1ec3"],
    correct: 0
  },
  {
    question: "Ch\u1ee9c n\u0103ng nh\u1eadn th\u1ee9c \u2013 ph\u1ea3n \u00e1nh c\u1ee7a ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Ch\u1ee9c n\u0103ng ch\u1ee7 y\u1ebfu v\u1edbi m\u1ecdi h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i", "B. Ch\u1ee9c n\u0103ng ch\u1ee7 y\u1ebfu v\u1edbi m\u1ecdi h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i, trong \u0111\u00f3 \u00fd th\u1ee9c th\u1ea9m m\u1ef9", "C. Ch\u1ee9c n\u0103ng ch\u1ee7 y\u1ebfu v\u1edbi m\u1ecdi h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i, \u0111\u01b0\u1ee3c t\u1eadp trung m\u1ed9t c\u00e1ch cao nh\u1ea5t trong ngh\u1ec7 thu\u1eadt", "D. Ch\u1ee9c n\u0103ng ch\u1ee7 y\u1ebfu v\u1edbi m\u1ecdi h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i, trong \u0111\u00f3 \u00fd th\u1ee9c th\u1ea9m m\u1ef9, \u0111\u01b0\u1ee3c t\u1eadp trung m\u1ed9t c\u00e1ch cao nh\u1ea5t trong ngh\u1ec7 thu\u1eadt"],
    correct: 3
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt ph\u1ea3n \u00e1nh quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi v\u1edbi y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. Hi\u1ec7n th\u1ef1c kh\u00e1ch quan", "B. Hi\u1ec7n th\u1ef1c ch\u1ee7 quan", "C. Th\u1ebf gi\u1edbi hi\u1ec7n th\u1ef1c kh\u00e1ch quan", "D. Th\u1ebf gi\u1edbi hi\u1ec7n th\u1ef1c t\u01b0\u01a1ng quan"],
    correct: 2
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt v\u00e0 tri\u1ebft h\u1ecdc l\u00e0 g\u00ec?",
    answers: ["A. M\u1ed9t d\u1ea1ng ho\u1ea1t \u0111\u1ed9ng tinh th\u1ea7n c\u00f3 v\u1ecb tr\u00ed, vai tr\u00f2, ch\u1ee9c n\u0103ng kh\u00e1c nhau, nh\u01b0ng c\u00f3 m\u1ed1i quan h\u1ec7 m\u1eadt thi\u1ebft v\u1edbi nhau", "B. Hai d\u1ea1ng ho\u1ea1t \u0111\u1ed9ng tinh th\u1ea7n c\u00f3 v\u1ecb tr\u00ed, nh\u01b0ng c\u00f3 m\u1ed1i quan h\u1ec7 m\u1eadt thi\u1ebft v\u1edbi nhau", "C. Hai d\u1ea1ng ho\u1ea1t \u0111\u1ed9ng tinh th\u1ea7n c\u00f3 v\u1ecb tr\u00ed, vai tr\u00f2, ch\u1ee9c n\u0103ng kh\u00e1c nhau, nh\u01b0ng c\u00f3 m\u1ed1i quan h\u1ec7 m\u1eadt thi\u1ebft v\u1edbi nhau", "D. Hai d\u1ea1ng ho\u1ea1t \u0111\u1ed9ng tinh th\u1ea7n c\u00f3 v\u1ecb tr\u00ed, vai tr\u00f2, ch\u1ee9c n\u0103ng kh\u00e1c nhau"],
    correct: 2
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: C\u01a1 s\u1edf m\u1ee5c \u0111\u00edch v\u00e0 ti\u00eau ch\u00ed c\u1ee7a khoa h\u1ecdc \u0111\u01b0\u1ee3c di\u1ec5n ra trong h\u1ec7 th\u1ed1ng c\u00e1c \u2026 d\u1ef1 \u0111o\u00e1n kh\u00e1m ph\u00e1 h\u01b0\u1edbng t\u1edbi tri th\u1ee9c?",
    answers: ["A. Kh\u00e1i ni\u1ec7m, ph\u1ea1m tr\u00f9, \u0111\u1ecbnh l\u00fd, \u0111\u1ecbnh lu\u1eadt, gi\u1ea3 thuy\u1ebft", "B. Ph\u1ea1m tr\u00f9, \u0111\u1ecbnh l\u00fd, \u0111\u1ecbnh lu\u1eadt, gi\u1ea3 thuy\u1ebft", "C. Kh\u00e1i ni\u1ec7m, ph\u1ea1m tr\u00f9, \u0111\u1ecbnh l\u00fd, \u0111\u1ecbnh lu\u1eadt", "D. Kh\u00e1i ni\u1ec7m, ph\u1ea1m tr\u00f9, \u0111\u1ecbnh l\u00fd, gi\u1ea3 thuy\u1ebft"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Ng\u01b0\u1eddi ngh\u1ec7 s\u0129 s\u1ed1ng v\u00e0 s\u00e1ng t\u00e1c bao gi\u1edd c\u0169ng ph\u1ea3i \u0111\u1ee9ng trong \u2026 n\u00e0o \u0111\u00f3?",
    answers: ["A. M\u1ed9t t\u1eadp \u0111o\u00e0n, m\u1ed9t giai c\u1ea5p, m\u1ed9t qu\u1ed1c gia", "B. M\u1ed9t giai c\u1ea5p, m\u1ed9t qu\u1ed1c gia", "C. M\u1ed9t t\u1eadp \u0111o\u00e0n, m\u1ed9t giai c\u1ea5p", "D. M\u1ed9t t\u1eadp \u0111o\u00e0n, m\u1ed9t qu\u1ed1c gia"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: C\u00f3 n\u1ed9i dung t\u1ed1t \u2026.. s\u1ebd l\u00e0m cho c\u00f4ng ch\u00fang c\u00f3 \u0111\u1ea1o \u0111\u1ee9c t\u1ed1t?",
    answers: ["A. H\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt", "B. Cu\u1ed9c s\u1ed1ng ngh\u1ec7 thu\u1eadt", "C. T\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "D. V\u0103n h\u00f3a ngh\u1ec7 thu\u1eadt"],
    correct: 2
  },
  {
    question: "C\u00e1i g\u00ec ph\u1ea3n \u00e1nh s\u1ef1 t\u1ed3n t\u1ea1i x\u00e3 h\u1ed9i nh\u1ea5t \u0111\u1ecbnh?",
    answers: ["A. V\u0103n h\u00f3a v\u00e0 ngh\u1ec7 thu\u1eadt", "B. M\u1ef9 h\u1ecdc v\u00e0 ngh\u1ec7 thu\u1eadt", "C. Khoa h\u1ecdc v\u00e0 ngh\u1ec7 thu\u1eadt", "D. T\u00f4n gi\u00e1o v\u00e0 ngh\u1ec7 thu\u1eadt"],
    correct: 3
  },
  {
    question: "T\u00f4n gi\u00e1o c\u00f3 th\u1ec3 d\u00f9ng ngh\u1ec7 thu\u1eadt \u0111\u1ec3 l\u00e0m h\u00ecnh th\u1ee9c g\u00ec trong m\u1ef9 h\u1ecdc?",
    answers: ["A. Bi\u1ec3u hi\u1ec7n", "B. H\u00e0nh \u0111\u1ed9ng", "C. Chi ph\u1ed1i", "D. \u0110i\u1ec1u khi\u1ec3n"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t \u2026\u2026., n\u00ean n\u00f3 c\u0169ng mang b\u1ea3n ch\u1ea5t c\u1ee7a nh\u1eadn th\u1ee9c chung?",
    answers: ["A. Tri th\u1ee9c nh\u1eadn th\u1ee9c", "B. H\u00ecnh th\u1ee9c nh\u1eadn th\u1ee9c", "C. H\u00e0nh \u0111\u1ed9ng nh\u1eadn th\u1ee9c", "D. Tr\u1ea1ng th\u00e1i nh\u1eadn th\u1ee9c"],
    correct: 1
  },
  {
    question: "Trong th\u1eddi k\u1ef3 Ph\u1ee5c H\u01b0ng, l\u00fd thuy\u1ebft n\u00e0o \u0111\u00e3 tr\u1edf th\u00e0nh nguy\u00ean l\u00fd ph\u00e2n t\u00edch ngh\u1ec7 thu\u1eadt ph\u1ed5 bi\u1ebfn?",
    answers: ["A. H\u00e0i h\u01b0\u1edbc", "B. M\u1ef9 h\u1ecdc", "C. B\u1eaft ch\u01b0\u1edbc", "D. Khoa h\u1ecdc"],
    correct: 2
  },
  {
    question: "T\u00ednh \u0111\u1eb7c th\u00f9 c\u1ee7a s\u1ef1 ph\u1ea3n \u00e1nh hi\u1ec7n th\u1ef1c trong ngh\u1ec7 thu\u1eadt \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n th\u00f4ng qua qu\u00e1 tr\u00ecnh n\u00e0o?",
    answers: ["A. Qu\u00e1 tr\u00ecnh con ng\u01b0\u1eddi ti\u1ebfn h\u00f3a th\u1ebf gi\u1edbi", "B. Qu\u00e1 tr\u00ecnh con ng\u01b0\u1eddi c\u1ea3m h\u00f3a th\u1ebf gi\u1edbi", "C. Qu\u00e1 tr\u00ecnh con ng\u01b0\u1eddi \u0111\u1ed3ng h\u00f3a th\u1ebf gi\u1edbi", "D. Qu\u00e1 tr\u00ecnh con ng\u01b0\u1eddi h\u00f2a \u0111\u1ed3ng th\u1ebf gi\u1edbi"],
    correct: 2
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: S\u1ef1 chi\u1ebfm h\u1eefu th\u1ebf gi\u1edbi b\u1eb1ng th\u1ea9m m\u1ef9 c\u1ee7a ngh\u1ec7 thu\u1eadt \u0111\u01b0\u1ee3c t\u00e1i hi\u1ec7n d\u01b0\u1edbi \u2026.. phong ph\u00fa trong t\u1ea5t c\u1ea3 c\u00e1c tr\u01b0\u1eddng l\u1ecbch s\u1eed, x\u00e3 h\u1ed9i, v\u0103n h\u00f3a?",
    answers: ["A. \u0110a d\u1ea1ng h\u00ecnh th\u1ee9c", "B. \u00cdt h\u00ecnh th\u1ee9c", "C. Nhi\u1ec1u h\u00ecnh th\u1ee9c", "D. H\u00ecnh th\u1ee9c phong ph\u00fa"],
    correct: 2
  },
  {
    question: "N\u1ed9i dung ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Hi\u1ec7n th\u1ef1c ch\u1ee7 quan \u0111\u00e3 \u0111\u01b0\u1ee3c m\u00f4 t\u1ea3 trong t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "B. Hi\u1ec7n th\u1ef1c kh\u00e1ch quan \u0111\u00e3 \u0111\u01b0\u1ee3c m\u00f4 t\u1ea3 trong t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "C. Hi\u1ec7n th\u1ef1c t\u1ed5ng quan \u0111\u00e3 \u0111\u01b0\u1ee3c m\u00f4 t\u1ea3 trong t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "D. Hi\u1ec7n th\u1ef1c tr\u1ef1c quan \u0111\u00e3 \u0111\u01b0\u1ee3c m\u00f4 t\u1ea3 trong t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt"],
    correct: 1
  },
  {
    question: "H\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Ph\u01b0\u01a1ng th\u1ee9c \u0111\u1eb7c th\u00f9 c\u1ee7a ngh\u1ec7 thu\u1eadt \u0111\u1ec3 th\u1ec3 hi\u1ec7n t\u01b0 t\u01b0\u1edfng, t\u00ecnh c\u1ea3m c\u1ee7a ng\u01b0\u1eddi ngh\u1ec7 s\u0129", "B. Ph\u01b0\u01a1ng th\u1ee9c \u0111\u1eb7c th\u00f9 c\u1ee7a ngh\u1ec7 thu\u1eadt \u0111\u1ec3 m\u00f4 t\u1ea3 hi\u1ec7n th\u1ef1c", "C. Ph\u01b0\u01a1ng th\u1ee9c \u0111\u1eb7c th\u00f9 c\u1ee7a ngh\u1ec7 thu\u1eadt \u0111\u1ec3 m\u00f4 t\u1ea3 hi\u1ec7n th\u1ef1c ho\u1eb7c th\u1ec3 hi\u1ec7n t\u01b0 t\u01b0\u1edfng, t\u00ecnh c\u1ea3m c\u1ee7a ng\u01b0\u1eddi ngh\u1ec7 s\u0129", "D. C\u1ea3 A, B \u0111\u1ec1u \u0111\u00fang"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: B\u1ed1 c\u1ee5c l\u00e0 ph\u01b0\u01a1ng th\u1ee9c x\u00e2y d\u1ef1ng t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt, l\u00e0 \u2026 c\u00f9ng ki\u1ec3u v\u00e0 kh\u00e1c lo\u1ea1i cho nh\u1ea5t tr\u00ed v\u1edbi nhau v\u00e0 v\u1edbi ch\u1ec9nh th\u1ec3?",
    answers: ["A. Nguy\u00ean t\u1eafc li\u00ean h\u1ec7 gi\u1eefa c\u00e1c th\u00e0nh t\u1ed1", "B. Nguy\u00ean t\u1eafc li\u00ean h\u1ec7 gi\u1eefa c\u00e1c b\u1ed9 ph\u1eadn", "C. Nguy\u00ean t\u1eafc li\u00ean h\u1ec7 gi\u1eefa c\u00e1c th\u00e0nh t\u1ed1 ho\u1eb7c b\u1ed9 ph\u1eadn", "D. C\u1ea3 A, B \u0111\u1ec1u \u0111\u00fang"],
    correct: 3
  },
  {
    question: "Ch\u1ea5t li\u1ec7u ngh\u1ec7 thu\u1eadt l\u00e0 c\u01a1 s\u1edf v\u1eadt ch\u1ea5t c\u1ee7a t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt, nh\u1edd n\u00f3 m\u00e0 \u00fd \u0111\u1ed3 ngh\u1ec7 thu\u1eadt \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Kh\u00e1ch quan h\u00f3a", "B. Ch\u1ee7 quan h\u00f3a", "C. Tinh t\u1ebf h\u00f3a", "D. Tr\u1eebu t\u01b0\u1ee3ng h\u00f3a"],
    correct: 0
  },
  {
    question: "Th\u01b0\u1edfng th\u1ee9c ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Th\u01b0\u1edfng th\u1ee9c c\u00e1c t\u00e1c ph\u1ea9m c\u1ee5 th\u1ec3, v\u1edbi m\u1ed9t lo\u1ea1i h\u00ecnh c\u1ee5 th\u1ec3", "B. C\u00e1c t\u00e1c ph\u1ea9m c\u1ee5 th\u1ec3, v\u1edbi m\u1ed9t lo\u1ea1i h\u00ecnh c\u1ee5 th\u1ec3", "C. Th\u01b0\u1edfng th\u1ee9c c\u00e1c t\u00e1c ph\u1ea9m c\u1ee5 th\u1ec3", "D. Th\u01b0\u1edfng th\u1ee9c c\u00e1c t\u00e1c ph\u1ea9m kh\u00f4ng c\u1ee5 th\u1ec3, v\u1edbi m\u1ed9t lo\u1ea1i h\u00ecnh c\u1ee5 th\u1ec3"],
    correct: 0
  },
  {
    question: "M\u1ef9 h\u1ecdc l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 m\u1ed9t m\u00f4n khoa h\u1ecdc tri\u1ebft h\u1ecdc", "B. L\u00e0 m\u1ed9t m\u00f4n khoa h\u1ecdc s\u1eed h\u1ecdc", "C. L\u00e0 m\u1ed9t m\u00f4n khoa h\u1ecdc v\u0103n h\u1ecdc", "D. L\u00e0 m\u1ed9t m\u00f4n khoa h\u1ecdc to\u00e1n h\u1ecdc"],
    correct: 0
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi s\u00e1ng t\u1ea1o ra thu\u1eadt ng\u1eef M\u1ef9 h\u1ecdc?",
    answers: ["A. Alexander Baumgarten", "B. Kant", "C. Trecneexpkki", "D. Iliat v\u00e0 \u00d4\u0111ix\u00ea"],
    correct: 0
  },
  {
    question: "Trong qu\u00e1 tr\u00ecnh s\u1eed d\u1ee5ng v\u00e0 nghi\u00ean c\u1ee9u, \u0111\u1ecbnh ngh\u0129a t\u1eeb \"m\u1ef9 h\u1ecdc\", ng\u01b0\u1eddi ta v\u00ed m\u1ef9 h\u1ecdc nh\u01b0 c\u00e1i c\u00e2y c\u00f3 nhi\u1ec1u c\u00e0nh v\u00e0 lu\u00f4n ph\u00e1t tri\u1ec3n v\u00ec sao?",
    answers: ["A. M\u1ef9 h\u1ecdc lu\u00f4n t\u1ed3n t\u1ea1i trong thi\u00ean nhi\u00ean v\u00e0 ngh\u1ec7 thu\u1eadt", "B. M\u1ef9 h\u1ecdc lu\u00f4n t\u1ed3n t\u1ea1i trong x\u00e3 h\u1ed9i v\u00e0 ngh\u1ec7 thu\u1eadt", "C. M\u1ef9 h\u1ecdc lu\u00f4n t\u1ed3n t\u1ea1i trong ngh\u1ec7 thu\u1eadt", "D. M\u1ef9 h\u1ecdc lu\u00f4n t\u1ed3n t\u1ea1i trong x\u00e3 h\u1ed9i, trong thi\u00ean nhi\u00ean v\u00e0 ngh\u1ec7 thu\u1eadt"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: N\u0103m \u2026., Baumgarten \u0111\u00e3 cho xu\u1ea5t b\u1ea3n cu\u1ed1n m\u1ef9 h\u1ecdc \u0111\u1ea7u ti\u00ean, \u1edf \u0111\u00f3 \u00f4ng x\u00e1c \u0111\u1ecbnh m\u00f4n h\u1ecdc n\u00e0y l\u00e0 nghi\u00ean c\u1ee9u vi\u1ec7c nh\u1eadn th\u1ee9c th\u1ebf gi\u1edbi b\u1eb1ng c\u1ea3m x\u00fac?",
    answers: ["A. 1740", "B. 1750", "C. 1760", "D. 1770"],
    correct: 1
  },
  {
    question: "Gi\u1eefa th\u1ebf k\u1ef7 XIX, Tr\u00e9cneexpkki coi \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a m\u1ef9 h\u1ecdc l\u00e0 g\u00ec?",
    answers: ["A. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a thi\u00ean nhi\u00ean v\u1edbi hi\u1ec7n th\u1ef1c", "B. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a x\u00e3 h\u1ed9i v\u1edbi hi\u1ec7n th\u1ef1c", "C. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi v\u1edbi ch\u1ee7 ngh\u0129a", "D. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi v\u1edbi hi\u1ec7n th\u1ef1c"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: \u2026\u2026nh\u01b0 ph\u01b0\u01a1ng th\u1ee9c v\u00e0 k\u1ebft qu\u1ea3 cao nh\u1ea5t c\u1ee7a s\u1ef1 t\u00e1c \u0111\u1ed9ng qua l\u1ea1i l\u1eabn nhau gi\u1eefa kh\u00e1ch th\u1ec3 th\u1ea9m m\u1ef9 v\u00e0 ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9?",
    answers: ["A. V\u0103n h\u1ecdc", "B. Ngh\u1ec7 thu\u1eadt", "C. M\u1ef9 h\u1ecdc", "D. Tri\u1ebft h\u1ecdc"],
    correct: 1
  },
  {
    question: "M\u1ef9 h\u1ecdc M\u00e1c \u2013 L\u00eanin l\u00e0 m\u1ed9t h\u1ec7 th\u1ed1ng tri th\u1ee9c ho\u00e0n ch\u1ec9nh v\u1edbi ba m\u1ea3ng ch\u00ednh n\u00e0o?",
    answers: ["A. L\u1ecbch s\u1eed s\u1ef1 ph\u00e1t tri\u1ec3n t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc, l\u00fd lu\u1eadn c\u01a1 b\u1ea3n v\u00e0 nghi\u00ean c\u1ee9u m\u1ef9 h\u1ecdc", "B. L\u1ecbch s\u1eed s\u1ef1 ph\u00e1t tri\u1ec3n t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc, l\u00fd lu\u1eadn c\u01a1 b\u1ea3n v\u00e0 tri\u1ebft h\u1ecdc ngo\u00e0i m\u00e1cx\u00edt", "C. L\u1ecbch s\u1eed s\u1ef1 ph\u00e1t tri\u1ec3n t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc, l\u00fd lu\u1eadn c\u01a1 b\u1ea3n v\u00e0 nghi\u00ean c\u1ee9u m\u1ef9 h\u1ecdc \u2013 tri\u1ebft h\u1ecdc ngo\u00e0i m\u00e1cx\u00edt", "D. L\u1ecbch s\u1eed s\u1ef1 ph\u00e1t tri\u1ec3n t\u01b0 t\u01b0\u1edfng khoa h\u1ecdc, l\u00fd lu\u1eadn c\u01a1 b\u1ea3n v\u00e0 nghi\u00ean c\u1ee9u m\u1ef9 h\u1ecdc \u2013 tri\u1ebft h\u1ecdc ngo\u00e0i m\u00e1cx\u00edt"],
    correct: 2
  },
  {
    question: "T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc C\u1ed5 \u0111\u1ea1i \u0111\u1ea1t \u0111\u1ebfn \u0111\u1ed9 c\u1ef1c th\u1ecbnh v\u00e0o th\u1ebf k\u1ef7 IV (TCN) v\u00e0 k\u1ebft th\u00fac v\u00e0o th\u1ebf k\u1ef7 n\u00e0o?",
    answers: ["A. \u0110\u1ea7u th\u1ebf k\u1ef7 th\u1ee9 VI sau c\u00f4ng nguy\u00ean", "B. \u0110\u1ea7u th\u1ebf k\u1ef7 th\u1ee9 VII sau c\u00f4ng nguy\u00ean", "C. N\u1eeda \u0111\u1ea7u th\u1ebf k\u1ef7 th\u1ee9 VIII sau c\u00f4ng nguy\u00ean", "D. N\u1eeda \u0111\u1ea7u th\u1ebf k\u1ef7 th\u1ee9 VI sau c\u00f4ng nguy\u00ean"],
    correct: 0
  },
  {
    question: "M\u1ef9 h\u1ecdc Hy L\u1ea1p c\u1ed5 \u0111\u1ea1i ph\u00e1t tri\u1ec3n r\u1ef1c r\u1ee1 nh\u1ea5t \u1edf \u0111\u00e2u?",
    answers: ["A. \u0110\u1ea3o Sisin", "B. Nam b\u00e1n \u0111\u1ea3o Italia", "C. Aten", "D. \u0110\u1ecba Trung H\u1ea3i"],
    correct: 2
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau Theo Pitago (580 \u2013 500 TCN) cho r\u1eb1ng\u2026?",
    answers: ["A. C\u00e1i \u0111\u1eb9p l\u00e0 s\u1ef1 t\u01b0\u01a1ng ph\u1ea3n trong quan h\u1ec7 s\u1ed1 l\u01b0\u1ee3ng", "B. C\u00e1i \u0111\u1eb9p l\u00e0 s\u1ef1 h\u00e0i h\u00f2a trong quan h\u1ec7 ch\u1ea5t l\u01b0\u1ee3ng", "C. C\u00e1i \u0111\u1eb9p l\u00e0 s\u1ef1 trung h\u00f2a trong quan h\u1ec7 s\u1ed1 l\u01b0\u1ee3ng", "D. C\u00e1i \u0111\u1eb9p l\u00e0 s\u1ef1 h\u00e0i h\u00f2a trong quan h\u1ec7 s\u1ed1 l\u01b0\u1ee3ng"],
    correct: 3
  },
  {
    question: "H\u00earaclit (530 \u2013 470 TCN) \u2013 nh\u00e0 th\u01a1 v\u00e0 nh\u00e0 tri\u1ebft gia v\u0129 \u0111\u1ea1i theo xu h\u01b0\u1edbng duy v\u1eadt, xem x\u00e9t s\u1ef1 v\u1eadt theo quan \u0111i\u1ec3m n\u00e0o?",
    answers: ["A. Bi\u1ec7n ch\u1ee9ng kh\u1edfi \u0111\u1ea7u", "B. Bi\u1ec7n ch\u1ee9ng khoa h\u1ecdc", "C. Bi\u1ec7n ch\u1ee9ng s\u01a1 khai", "D. Bi\u1ec7n ch\u1ee9ng l\u00fd t\u01b0\u1edfng"],
    correct: 2
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi \u0111\u01b0\u1ee3c coi l\u00e0 m\u1ed9t trong nh\u1eefng \u0111\u1ea1i bi\u1ec3u s\u1edbm nh\u1ea5t gi\u1ea3i th\u00edch c\u00e1c kh\u00e1i ni\u1ec7m th\u1ea9m m\u1ef9 theo xu h\u01b0\u1edbng duy v\u1eadt v\u00e0 c\u00f3 t\u00ednh ch\u1ea5t bi\u1ec7n ch\u1ee9ng s\u01a1 khai?",
    answers: ["A. H\u00earaclit", "B. Kant", "C. M\u00e1c \u2013 L\u00eanin", "D. Tr\u00e9cnexepxki"],
    correct: 0
  },
  {
    question: "\u0110\u00eam\u00f4crit n\u00eau l\u00ean t\u00ednh ch\u1ea5t v\u1ec1 m\u1ee9c \u0111\u1ed9 c\u1ee7a v\u1ebb \u0111\u1eb9p l\u00e0 g\u00ec?",
    answers: ["A. S\u1ef1 v\u1eeba ph\u1ea3i, kh\u00f4ng th\u1eeba, kh\u00f4ng thi\u1ebfu", "B. S\u1ef1 trung b\u00ecnh, kh\u00f4ng th\u1eeba, kh\u00f4ng thi\u1ebfu", "C. S\u1ef1 trung b\u00ecnh, v\u1eeba ph\u1ea3i, kh\u00f4ng th\u1eeba", "D. S\u1ef1 trung b\u00ecnh, v\u1eeba ph\u1ea3i, kh\u00f4ng th\u1eeba, kh\u00f4ng thi\u1ebfu"],
    correct: 3
  },
  {
    question: "Tri\u1ebft h\u1ecdc X\u00f4crat cho r\u1eb1ng con ng\u01b0\u1eddi xem x\u00e9t \u1edf c\u00e1c g\u00f3c \u0111\u1ed9 ho\u1ea1t \u0111\u1ed9ng n\u00e0o?",
    answers: ["A. Th\u1ef1c ti\u1ec5n, h\u00e0nh vi, ph\u1ea9m ch\u1ea5t", "B. Th\u1ef1c ti\u1ec5n, h\u00e0nh \u0111\u1ed9ng, ph\u1ea9m h\u1ea1nh", "C. Th\u1ef1c ti\u1ec5n, h\u00e0nh vi, ph\u1ea9m h\u1ea1nh", "D. Th\u1ef1c h\u00e0nh, h\u00e0nh vi, ph\u1ea9m h\u1ea1nh"],
    correct: 2
  },
  {
    question: "Tri\u1ebft h\u1ecdc X\u00f4crat kh\u1eb3ng \u0111\u1ecbnh \u0111i\u1ec1u g\u00ec?",
    answers: ["A. S\u1ef1 v\u1eadt n\u00e0o c\u0169ng c\u00f3 th\u1ec3 l\u00e0 \u0111\u1eb9p v\u00e0 c\u0169ng c\u00f3 th\u1ec3 kh\u00f4ng \u0111\u1eb9p trong nh\u1eefng t\u00ecnh hu\u1ed1ng kh\u00e1c nhau", "B. S\u1ef1 v\u1eadt n\u00e0o c\u0169ng c\u00f3 th\u1ec3 l\u00e0 \u0111\u1eb9p v\u00e0 c\u0169ng c\u00f3 th\u1ec3 kh\u00f4ng \u0111\u1eb9p trong nh\u1eefng t\u00ecnh hu\u1ed1ng gi\u1ed1ng nhau", "C. S\u1ef1 v\u1eadt n\u00e0o c\u0169ng c\u00f3 th\u1ec3 l\u00e0 \u0111\u1eb9p", "D. S\u1ef1 v\u1eadt n\u00e0o c\u0169ng c\u00f3 th\u1ec3 kh\u00f4ng \u0111\u1eb9p trong nh\u1eefng t\u00ecnh hu\u1ed1ng kh\u00e1c nhau"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Theo X\u00f4crat ngh\u1ec7 thu\u1eadt kh\u00f4ng nh\u1eefng t\u00e1i hi\u1ec7n thi\u00ean nhi\u00ean \u1edf c\u00e1i c\u00f3 \u2026 m\u00e0 n\u00f3 c\u00f2n c\u00f3 kh\u1ea3 n\u0103ng di\u1ec5n t\u1ea3 c\u00e1c tr\u1ea1ng th\u00e1i tinh th\u1ea7n con ng\u01b0\u1eddi?",
    answers: ["A. T\u1ea1o h\u00ecnh, m\u00e0u s\u1eafc, h\u00ecnh kh\u1ed1i", "B. \u0110\u01b0\u1eddng n\u00e9t, m\u00e0u s\u1eafc, \u00e1nh s\u00e1ng", "C. \u00c2m thanh, m\u00e0u s\u1eafc, h\u00ecnh kh\u1ed1i", "D. \u0110\u01b0\u1eddng n\u00e9t, m\u00e0u s\u1eafc, h\u00ecnh kh\u1ed1i"],
    correct: 3
  },
  {
    question: "Theo X\u00f4crat ngh\u1ec7 thu\u1eadt kh\u00f4ng nh\u1eefng t\u00e1i hi\u1ec7n thi\u00ean nhi\u00ean \u1edf c\u00e1i c\u00f3 \u0111\u01b0\u1eddng n\u00e9t, m\u00e0u s\u1eafc, h\u00ecnh kh\u1ed1i m\u00e0 n\u00f3 c\u00f2n c\u00f3 kh\u1ea3 n\u0103ng di\u1ec5n t\u1ea3 g\u00ec?",
    answers: ["A. C\u00e1c tr\u1ea1ng th\u00e1i tinh th\u1ea7n con ng\u01b0\u1eddi", "B. C\u00e1c tr\u1ea1ng th\u00e1i tinh th\u1ea7n con v\u1eadt", "C. Tinh th\u1ea7n con ng\u01b0\u1eddi", "D. C\u00e1c tr\u1ea1ng th\u00e1i con ng\u01b0\u1eddi"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: M\u1ef9 h\u1ecdc th\u1eddi Trung c\u1ed5 b\u1eaft \u0111\u1ea7u \u2026 v\u00e0 k\u1ebft th\u00fac v\u00e0o \u2026?",
    answers: ["A. V\u00e0o th\u1ebf k\u1ef7 II / cu\u1ed1i th\u1ebf k\u1ef7 III", "B. V\u00e0o th\u1ebf k\u1ef7 IV / cu\u1ed1i th\u1ebf k\u1ef7 XIII", "C. V\u00e0o th\u1ebf k\u1ef7 II / cu\u1ed1i th\u1ebf k\u1ef7 XI", "D. V\u00e0o th\u1ebf k\u1ef7 III / cu\u1ed1i th\u1ebf k\u1ef7 XIII"],
    correct: 3
  },
  {
    question: "Ai l\u00e0 nh\u00e0 t\u01b0 t\u01b0\u1edfng \u0111i\u1ec3n h\u00ecnh c\u00f3 nhi\u1ec1u quan \u0111i\u1ec3m m\u1ef9 h\u1ecdc trong giai \u0111o\u1ea1n \u0111\u1ea7u c\u1ee7a th\u1eddi k\u1ef3 Trung c\u1ed5?",
    answers: ["A. \u00d4gu\u00fdtxtanh", "B. Arixstot", "C. X\u00f4crat", "D. \u0110\u00eam\u00f4crit"],
    correct: 0
  },
  {
    question: "Tomat \u0110acanh coi ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. S\u1ee9 m\u1ec7nh c\u01a1 b\u1ea3n c\u1ee7a ngh\u1ec7 thu\u1eadt", "B. S\u1ef1 m\u00f4 ph\u1ecfng c\u01a1 b\u1ea3n c\u1ee7a ngh\u1ec7 thu\u1eadt", "C. S\u1ef1 m\u00f4 ph\u1ecfng, s\u1ee9 m\u1ec7nh c\u01a1 b\u1ea3n c\u1ee7a ngh\u1ec7 thu\u1eadt", "D. S\u1ef1 m\u00f4 ph\u1ecfng, s\u1ee9 m\u1ec7nh c\u01a1 b\u1ea3n c\u1ee7a m\u1ef9 h\u1ecdc"],
    correct: 2
  },
  {
    question: "Tomat \u0110acan xem c\u00e1i \u0111\u1eb9p ch\u00ednh l\u00e0 g\u00ec?",
    answers: ["A. H\u00ecnh t\u01b0\u1ee3ng ph\u1ea3n \u00e1nh m\u1ed9t s\u1ef1 v\u1eadt, th\u1eadm ch\u00ed trong tr\u01b0\u1eddng h\u1ee3p ch\u00ednh b\u1ea3n th\u00e2n s\u1ef1 v\u1eadt \u1ea5y kh\u00f4ng \u0111\u1eb9p", "B. Ph\u1ea3n \u00e1nh m\u1ed9t c\u00e1ch \u0111\u1ea7y \u0111\u1ee7, tr\u1ecdn v\u1eb9n nh\u1ea5t c\u1ee7a m\u1ed9t s\u1ef1 v\u1eadt", "C. H\u00ecnh t\u01b0\u1ee3ng ph\u1ea3n \u00e1nh m\u1ed9t c\u00e1ch \u0111\u1ea7y \u0111\u1ee7, th\u1eadm ch\u00ed trong tr\u01b0\u1eddng h\u1ee3p ch\u00ednh b\u1ea3n th\u00e2n s\u1ef1 v\u1eadt \u1ea5y kh\u00f4ng \u0111\u1eb9p", "D. H\u00ecnh t\u01b0\u1ee3ng ph\u1ea3n \u00e1nh m\u1ed9t c\u00e1ch \u0111\u1ea7y \u0111\u1ee7, tr\u1ecdn v\u1eb9n nh\u1ea5t c\u1ee7a m\u1ed9t s\u1ef1 v\u1eadt, th\u1eadm ch\u00ed trong tr\u01b0\u1eddng h\u1ee3p ch\u00ednh b\u1ea3n th\u00e2n s\u1ef1 v\u1eadt \u1ea5y kh\u00f4ng \u0111\u1eb9p"],
    correct: 3
  },
  {
    question: "L\u00ea\u00f4na \u0111\u01a1 Vanhxi \u0111\u1eb7c bi\u1ec7t quan t\u00e2m \u0111\u1ebfn quan h\u1ec7 l\u00fd thuy\u1ebft v\u00e0 th\u1ef1c ti\u1ec5n, \u00f4ng kh\u1eb3ng \u0111\u1ecbnh nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. \u201cNg\u01b0\u1eddi ham m\u00ea th\u1ef1c ti\u1ec5n m\u00e0 thi\u1ebfu khoa h\u1ecdc ch\u1eb3ng kh\u00e1c n\u00e0o thuy\u1ec1n tr\u01b0\u1edfng \u0111i t\u00e0u m\u00e0 kh\u00f4ng c\u00f3 tay l\u00e1i\u201d", "B. \u201cNg\u01b0\u1eddi ham m\u00ea th\u1ef1c ti\u1ec5n m\u00e0 kh\u00f4ng thi\u1ebfu khoa h\u1ecdc ch\u1eb3ng kh\u00e1c n\u00e0o thuy\u1ec1n tr\u01b0\u1edfng \u0111i t\u00e0u m\u00e0 kh\u00f4ng c\u00f3 tay l\u00e1i ho\u1eb7c thi\u1ebfu \u0111\u1ecba b\u00e0n\u201d", "C. \u201cNg\u01b0\u1eddi ham m\u00ea th\u1ef1c ti\u1ec5n m\u00e0 thi\u1ebfu khoa h\u1ecdc ch\u1eb3ng kh\u00e1c n\u00e0o thuy\u1ec1n tr\u01b0\u1edfng \u0111i t\u00e0u m\u00e0 kh\u00f4ng c\u00f3 tay l\u00e1i ho\u1eb7c thi\u1ebfu \u0111\u1ecba b\u00e0n\u201d", "D. \u201cNg\u01b0\u1eddi ham m\u00ea th\u1ef1c ti\u1ec5n m\u00e0 thi\u1ebfu khoa h\u1ecdc ch\u1eb3ng kh\u00e1c n\u00e0o thuy\u1ec1n tr\u01b0\u1edfng \u0111i t\u00e0u m\u00e0 thi\u1ebfu \u0111\u1ecba b\u00e0n\u201d"],
    correct: 2
  },
  {
    question: "Kant lu\u1eadn gi\u1ea3i kh\u00e1 s\u00e2u v\u1ec1 thi\u00ean t\u00e0i, \u00f4ng ph\u00e2n \u0111\u1ecbnh c\u00e1i \u0111\u1eb9p nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. C\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean l\u00e0 con ng\u01b0\u1eddi \u0111\u1eb9p, trong ngh\u1ec7 thu\u1eadt l\u00e0 c\u1ea3m gi\u00e1c \u0111\u1eb9p v\u1ec1 v\u1eadt", "B. C\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean l\u00e0 v\u0169 tr\u1ee5, trong ngh\u1ec7 thu\u1eadt l\u00e0 c\u1ea3m gi\u00e1c \u0111\u1eb9p v\u1ec1 v\u1eadt", "C. C\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean l\u00e0 v\u1eadt \u0111\u1eb9p, trong ngh\u1ec7 thu\u1eadt l\u00e0 c\u1ea3m gi\u00e1c \u0111\u1eb9p v\u1ec1 th\u1ea7n linh", "D. C\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean l\u00e0 v\u1eadt \u0111\u1eb9p, trong ngh\u1ec7 thu\u1eadt l\u00e0 c\u1ea3m gi\u00e1c \u0111\u1eb9p v\u1ec1 v\u1eadt"],
    correct: 3
  },
  {
    question: "H\u1ec7 th\u1ed1ng tri\u1ebft h\u1ecdc \u2013 m\u1ef9 h\u1ecdc c\u1ee7a Kant mang t\u00ednh nh\u00e2n v\u0103n s\u00e2u s\u1eafc, n\u00f3 h\u01b0\u1edbng t\u1edbi vi\u1ec7c g\u00ec?",
    answers: ["A. Th\u00fac \u0111\u1ea9y c\u00e1 nh\u00e2n con ng\u01b0\u1eddi v\u00e0 t\u1ef1 do l\u00fd tr\u00ed", "B. Gi\u1ea3i ph\u00f3ng c\u00e1 nh\u00e2n con ng\u01b0\u1eddi v\u00e0 t\u1ef1 do l\u00fd tr\u00ed", "C. Gi\u1ea3i ph\u00f3ng c\u00e1 nh\u00e2n con ng\u01b0\u1eddi", "D. T\u1ef1 do l\u00fd tr\u00ed"],
    correct: 1
  },
  {
    question: "M\u1ef9 h\u1ecdc c\u1ed5 \u0111i\u1ec3n \u0110\u1ee9c \u0111\u1ec9nh cao c\u1ee7a n\u00f3 l\u00e0 g\u00ec?",
    answers: ["A. M\u1ef9 h\u1ecdc", "B. Tri\u1ebft h\u1ecdc", "C. Khoa h\u1ecdc", "D. V\u0103n h\u00f3a h\u1ecdc"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Th\u1ebf k\u1ef7 XVIII, tri\u1ebft h\u1ecdc khai s\u00e1ng l\u00e0 \u2026\u2026 v\u00ec ti\u1ebfn b\u1ed9 x\u00e3 h\u1ed9i, v\u00ec t\u1ef1 do c\u1ee7a con ng\u01b0\u1eddi?",
    answers: ["A. C\u01a1 s\u1edf l\u00fd lu\u1eadn cho xu h\u01b0\u1edbng ngh\u1ec7 thu\u1eadt truy\u1ec1n th\u1ed1ng", "B. C\u01a1 s\u1edf l\u00fd lu\u1eadn cho xu h\u01b0\u1edbng ngh\u1ec7 thu\u1eadt hi\u1ec7n \u0111\u1ea1i", "C. C\u01a1 s\u1edf l\u00fd lu\u1eadn cho xu h\u01b0\u1edbng ngh\u1ec7 thu\u1eadt th\u01b0\u1eddng th\u1ee9c", "D. C\u01a1 s\u1edf l\u00fd lu\u1eadn cho xu h\u01b0\u1edbng ngh\u1ec7 thu\u1eadt \u0111\u1ea5u tranh"],
    correct: 3
  },
  {
    question: "\u0110eni \u0110i\u0111r\u00f4 kh\u1eb3ng \u0111\u1ecbnh m\u1ee5c \u0111\u00edch ch\u00ednh c\u1ee7a ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Gi\u00e1o d\u1ee5c \u0111\u1ea1o \u0111\u1ee9c cho qu\u1ea7n ch\u00fang nh\u00e2n d\u00e2n, t\u1ed1 c\u00e1o c\u00e1i x\u1ea5u, c\u00e1i \u00e1c, t\u1ed1 c\u00e1o s\u1ef1 suy \u0111\u1ed3i", "B. Ph\u1ee5c v\u1ee5 nh\u00e2n d\u00e2n, gi\u00e1o d\u1ee5c \u0111\u1ea1o \u0111\u1ee9c cho qu\u1ea7n ch\u00fang nh\u00e2n d\u00e2n", "C. Ph\u1ee5c v\u1ee5 nh\u00e2n d\u00e2n, t\u1ed1 c\u00e1o c\u00e1i x\u1ea5u, c\u00e1i \u00e1c, t\u1ed1 c\u00e1o s\u1ef1 suy \u0111\u1ed3i", "D. Ph\u1ee5c v\u1ee5 nh\u00e2n d\u00e2n, gi\u00e1o d\u1ee5c \u0111\u1ea1o \u0111\u1ee9c cho qu\u1ea7n ch\u00fang nh\u00e2n d\u00e2n, t\u1ed1 c\u00e1o c\u00e1i x\u1ea5u, c\u00e1i \u00e1c, t\u1ed1 c\u00e1o s\u1ef1 suy \u0111\u1ed3i"],
    correct: 3
  },
  {
    question: "C\u00e1i \u0111\u1eb9p \u0111\u01b0\u1ee3c Letxing quan ni\u1ec7m b\u1ed9c l\u1ed9 nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Trong ho\u1ea1t \u0111\u1ed9ng, trong kh\u00e1t v\u1ecdng ch\u1ed1ng l\u1ea1i b\u1ea5t c\u00f4ng v\u00e0 t\u1ed9i \u00e1c", "B. Trong cu\u1ed9c \u0111\u1ea5u tranh, trong kh\u00e1t v\u1ecdng ch\u1ed1ng l\u1ea1i b\u1ea5t c\u00f4ng v\u00e0 t\u1ed9i \u00e1c", "C. Trong cu\u1ed9c \u0111\u1ea5u tranh, trong ho\u1ea1t \u0111\u1ed9ng, trong kh\u00e1t v\u1ecdng ch\u1ed1ng l\u1ea1i b\u1ea5t c\u00f4ng v\u00e0 t\u1ed9i \u00e1c", "D. Trong cu\u1ed9c \u0111\u1ea5u tranh, trong ho\u1ea1t \u0111\u1ed9ng, trong kh\u00e1t v\u1ecdng ch\u1ed1ng l\u1ea1i b\u1ea5t c\u00f4ng"],
    correct: 2
  },
  {
    question: "B\u1ea3n ch\u1ea5t x\u00e3 h\u1ed9i c\u1ee7a ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i do c\u01a1 s\u1edf kinh t\u1ebf sinh ra v\u00e0 b\u1ecb c\u01a1 s\u1edf \u0111\u1ecba ph\u01b0\u01a1ng quy\u1ebft \u0111\u1ecbnh", "B. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i do c\u01a1 s\u1edf kinh t\u1ebf quy\u1ebft \u0111\u1ecbnh", "C. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i do c\u01a1 s\u1edf kinh t\u1ebf sinh ra v\u00e0 b\u1ecb c\u01a1 s\u1edf kinh t\u1ebf quy\u1ebft \u0111\u1ecbnh", "D. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i do c\u01a1 s\u1edf kinh t\u1ebf sinh ra"],
    correct: 2
  },
  {
    question: "B\u1ea3n ch\u1ea5t nh\u1eadn th\u1ee9c ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t trong nh\u1eefng bi\u1ec7n ph\u00e1p ph\u1ea3n \u00e1nh hi\u1ec7n th\u1ef1c", "B. Ngh\u1ec7 thu\u1eadt l\u00e0 m\u1ed9t h\u00ecnh th\u1ee9c nh\u1eadn th\u1ee9c c\u00f3 \u00fd ngh\u0129a to l\u1edbn", "C. B\u1ea5t k\u1ef3 m\u1ed9t nh\u1eadn th\u1ee9c n\u00e0o v\u1ec1 hi\u1ec7n th\u1ef1c c\u0169ng l\u00e0 m\u1ed9t s\u1ef1 ph\u1ea3n \u00e1nh hi\u1ec7n th\u1ef1c v\u00e0o \u0111\u1ea7u \u00f3c con ng\u01b0\u1eddi", "D. L\u00e0 m\u1ed9t s\u1ef1 ph\u1ea3n \u00e1nh hi\u1ec7n th\u1ef1c v\u00e0o \u0111\u1ea7u \u00f3c con ng\u01b0\u1eddi. L\u00e0 m\u1ed9t trong nh\u1eefng bi\u1ec7n ph\u00e1p ph\u1ea3n \u00e1nh hi\u1ec7n th\u1ef1c. L\u00e0 m\u1ed9t h\u00ecnh th\u1ee9c nh\u1eadn th\u1ee9c c\u00f3 \u00fd ngh\u0129a to l\u1edbn"],
    correct: 3
  },
  {
    question: "C\u01a1 s\u1edf l\u00fd lu\u1eadn ch\u1ee7 ngh\u0129a M\u00e1c \u2013 Ch\u1ee7 ngh\u0129a duy v\u1eadt bi\u1ec7n ch\u1ee9ng v\u00e0 Ch\u1ee7 ngh\u0129a duy v\u1eadt l\u1ecbch s\u1eed xu\u1ea5t hi\u1ec7n nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. M\u1edf \u0111\u1ea7u cho m\u1ed9t th\u1eddi \u0111\u1ea1i m\u1edbi trong qu\u00e1 tr\u00ecnh ph\u00e1t tri\u1ec3n nh\u1eadn th\u1ee9c nh\u00e2n lo\u1ea1i", "B. M\u1edf \u0111\u1ea7u cho m\u1ed9t th\u1eddi \u0111\u1ea1i m\u1edbi", "C. M\u1edf \u0111\u1ea7u cho m\u1ed9t qu\u00e1 tr\u00ecnh ph\u00e1t tri\u1ec3n nh\u1eadn th\u1ee9c nh\u00e2n lo\u1ea1i", "D. Qu\u00e1 tr\u00ecnh ph\u00e1t tri\u1ec3n nh\u1eadn th\u1ee9c nh\u00e2n lo\u1ea1i"],
    correct: 0
  },
  {
    question: "Nh\u1eefng \u0111\u00f3ng g\u00f3p tr\u1ef1c ti\u1ebfp c\u1ee7a L\u00eanin trong m\u1ef9 h\u1ecdc l\u00e0 g\u00ec?",
    answers: ["A. Nguy\u00ean l\u00fd t\u00ednh \u0111\u1ea3ng trong ngh\u1ec7 thu\u1eadt v\u00e0 v\u1ea5n \u0111\u1ec1 k\u1ebf th\u1eeba v\u00e0 s\u00e1ng t\u1ea1o c\u1ee7a ngh\u1ec7 thu\u1eadt", "B. Ph\u1ea3n \u00e1nh lu\u1eadn v\u00e0 v\u1ea5n \u0111\u1ec1 k\u1ebf th\u1eeba v\u00e0 s\u00e1ng t\u1ea1o c\u1ee7a ngh\u1ec7 thu\u1eadt", "C. Nguy\u00ean l\u00fd t\u00ednh \u0111\u1ea3ng trong ngh\u1ec7 thu\u1eadt, ph\u1ea3n \u00e1nh lu\u1eadn v\u00e0 v\u1ea5n \u0111\u1ec1 k\u1ebf th\u1eeba v\u00e0 s\u00e1ng t\u1ea1o c\u1ee7a ngh\u1ec7 thu\u1eadt", "D. V\u1ea5n \u0111\u1ec1 k\u1ebf th\u1eeba v\u00e0 s\u00e1ng t\u1ea1o c\u1ee7a ngh\u1ec7 thu\u1eadt"],
    correct: 2
  },
  {
    question: "Ph\u1ea3n \u00e1nh lu\u1eadn l\u00e0 c\u1ed1ng hi\u1ebfn quan tr\u1ecdng th\u1ee9 m\u1ea5y c\u1ee7a L\u00eanin v\u00e0o kho t\u00e0ng l\u00fd lu\u1eadn ngh\u1ec7 thu\u1eadt M\u00e1c-x\u00edt?",
    answers: ["A. Th\u1ee9 m\u1ed9t", "B. Th\u1ee9 hai", "C. Th\u1ee9 ba", "D. Th\u1ee9 t\u01b0"],
    correct: 1
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi \u0111\u00e3 l\u00e0m phong ph\u00fa, \u0111\u00e0o s\u00e2u v\u00e0 ph\u00e1t tri\u1ec3n th\u00eam nh\u1eefng v\u1ea5n \u0111\u1ec1 c\u01a1 b\u1ea3n c\u1ee7a m\u1ef9 h\u1ecdc M\u00e1c-x\u00edt?",
    answers: ["A. C. M\u00e1c v\u00e0 Ph. \u0102ngghen", "B. A. Potebnia", "C. L\u00eanin", "D. T. Benfei"],
    correct: 2
  },
  {
    question: "T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc v\u00e0 l\u00fd lu\u1eadn ngh\u1ec7 thu\u1eadt \u0110\u1ee9c cu\u1ed1i XVIII \u0111\u1ea7u XIX nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc nh\u00e2n lo\u1ea1i \u0111\u1ea1t t\u1edbi m\u1ee9c ph\u00e1t tri\u1ec3n th\u1ea5p", "B. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc nh\u00e2n lo\u1ea1i \u0111\u1ea1t t\u1edbi m\u1ee9c ph\u00e1t tri\u1ec3n trung b\u00ecnh", "C. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc nh\u00e2n lo\u1ea1i \u0111\u1ea1t t\u1edbi m\u1ee9c ph\u00e1t tri\u1ec3n kh\u00f4ng cao", "D. T\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc nh\u00e2n lo\u1ea1i \u0111\u1ea1t t\u1edbi m\u1ee9c ph\u00e1t tri\u1ec3n cao"],
    correct: 3
  },
  {
    question: "Hegel xem c\u00e1i \u0111\u1eb9p l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 hi\u1ec7n th\u00e2n c\u1ee7a \u00fd ni\u1ec7m t\u01b0\u01a1ng \u0111\u1ed1i", "B. L\u00e0 th\u1ec3 hi\u1ec7n c\u1ee7a \u00fd ni\u1ec7m tuy\u1ec7t \u0111\u1ed1i", "C. L\u00e0 hi\u1ec7n th\u00e2n c\u1ee7a \u00fd ni\u1ec7m tuy\u1ec7t \u0111\u1ed1i", "D. L\u00e0 hi\u1ec7n th\u00e2n c\u1ee7a \u00fd ni\u1ec7m"],
    correct: 2
  },
  {
    question: "Bielinski coi ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec? CH\u01af\u01a0NG 2: KH\u00c1CH TH\u1ec2 TH\u1ea8M M\u1ef8",
    answers: ["A. C\u00e1i t\u00e1i hi\u1ec7n hi\u1ec7n th\u1ef1c; cu\u1ed9c s\u1ed1ng l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a th\u1ea9m m\u1ef9", "B. C\u00e1i cu\u1ed9c s\u1ed1ng l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a ngh\u1ec7 thu\u1eadt", "C. C\u00e1i t\u00e1i hi\u1ec7n hi\u1ec7n th\u1ef1c; cu\u1ed9c s\u1ed1ng l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a ngh\u1ec7 thu\u1eadt", "D. C\u00e1i t\u00e1i hi\u1ec7n hi\u1ec7n th\u1ef1c ho\u1eb7c cu\u1ed9c s\u1ed1ng l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a tri\u1ebft h\u1ecdc"],
    correct: 2
  },
  {
    question: "H\u1ecdc thuy\u1ebft n\u00e0o \u0111\u00e3 g\u00f3p ph\u1ea7n b\u1ed5 sung, l\u00e0m cho ho\u00e0n ch\u1ec9nh v\u00e0 v\u1eefng ch\u1eafc h\u01a1n v\u1ec1 nh\u1eefng \u0111\u1ecbnh ngh\u0129a c\u00e1i \u0111\u1eb9p?",
    answers: ["A. C\u1ed5 \u0111i\u1ec3n \u0110\u1ee9c", "B. Hy L\u1ea1p", "C. Mac", "D. Nga"],
    correct: 2
  },
  {
    question: "H\u1ecdc thuy\u1ebft Mac c\u00f3 cho r\u1eb1ng c\u00e1i \u0111\u1eb9p kh\u00f4ng xu\u1ea5t ph\u00e1t t\u1eeb th\u1ea7n linh, t\u1eeb \u00fd ni\u1ec7m tuy\u1ec7t \u0111\u1ed1i, m\u00e0 xu\u1ea5t ph\u00e1t t\u1eeb \u0111\u00e2u?",
    answers: ["A. Lao \u0111\u1ed9ng \u0111\u1ea5u tranh sinh t\u1ed3n, con ng\u01b0\u1eddi t\u1ef1 ho\u00e0n thi\u1ec7n m\u00ecnh t\u1eebng b\u01b0\u1edbc v\u1ec1 th\u1ec3 ch\u1ea5t v\u00e0 tinh th\u1ea7n, nh\u1eefng gi\u00e1c quan, nh\u1eefng c\u1ea3m quan v\u1ec1 c\u00e1i \u0111\u1eb9p \u0111\u01b0\u1ee3c n\u1ea3y sinh v\u00e0 ph\u00e1t tri\u1ec3n", "B. Con ng\u01b0\u1eddi t\u1ef1 ho\u00e0n thi\u1ec7n m\u00ecnh t\u1eebng b\u01b0\u1edbc v\u1ec1 th\u1ec3 ch\u1ea5t v\u00e0 tinh th\u1ea7n v\u00e0 nh\u1eefng gi\u00e1c quan, nh\u1eefng c\u1ea3m quan v\u1ec1 c\u00e1i \u0111\u1eb9p \u0111\u01b0\u1ee3c n\u1ea3y sinh v\u00e0 ph\u00e1t tri\u1ec3n", "C. Lao \u0111\u1ed9ng \u0111\u1ea5u tranh sinh t\u1ed3n v\u00e0 nh\u1eefng gi\u00e1c quan, nh\u1eefng c\u1ea3m quan v\u1ec1 c\u00e1i \u0111\u1eb9p \u0111\u01b0\u1ee3c n\u1ea3y sinh v\u00e0 ph\u00e1t tri\u1ec3n", "D. Lao \u0111\u1ed9ng \u0111\u1ea5u tranh sinh t\u1ed3n, con ng\u01b0\u1eddi t\u1ef1 ho\u00e0n thi\u1ec7n m\u00ecnh t\u1eebng b\u01b0\u1edbc v\u1ec1 th\u1ec3 ch\u1ea5t v\u00e0 tinh th\u1ea7n"],
    correct: 0
  },
  {
    question: "Lao \u0111\u1ed9ng l\u00e0 \u2026 l\u00e0m cho \u0111\u1eddi s\u1ed1ng, nhu c\u1ea7u tinh th\u1ea7n phong ph\u00fa th\u00eam, trong \u0111\u00f3 c\u00f3 nhu c\u1ea7u s\u00e1ng t\u1ea1o ngh\u1ec7 thu\u1eadt?",
    answers: ["A. Ho\u1ea1t \u0111\u1ed9ng th\u1ef1c ti\u1ec5n", "B. Ho\u1ea1t \u0111\u1ed9ng th\u1ec3 thao", "C. Ho\u1ea1t \u0111\u1ed9ng vui ch\u01a1i", "D. Ho\u1ea1t \u0111\u1ed9ng gi\u1ea3i tr\u00ed"],
    correct: 0
  },
  {
    question: "M\u1ed9t c\u00e1ch ti\u1ebfp c\u1eadn kh\u00e1c \u0111\u1ebfn c\u00e1i \u0111\u1eb9p l\u00e0 do n\u00f3 b\u1eb1ng \u2026 c\u1ee7a ng\u01b0\u1eddi xem?",
    answers: ["A. C\u1ea3m x\u00fac", "B. C\u1ea3m nh\u1eadn", "C. Gi\u00e1c quan", "D. \u00dd t\u01b0\u1edfng"],
    correct: 0
  },
  {
    question: "Kant cho r\u1eb1ng c\u00e1i \u0111\u1eb9p l\u00e0 g\u00ec?",
    answers: ["A. C\u00e1i \u0111\u1eb9p l\u00e0 c\u00e1i g\u00ec \u0111\u00f3 kh\u00f4ng c\u00f3 b\u1ea5t k\u1ef3 m\u1ed9t ch\u1ee9c n\u0103ng n\u00e0o kh\u00e1c ngo\u00e0i ch\u1ee9c n\u0103ng l\u00e0m c\u00e1i \u0111\u1eb9p", "B. C\u00e1i g\u00ec \u0111\u00f3 kh\u00f4ng c\u00f3 b\u1ea5t k\u1ef3 hai ch\u1ee9c n\u0103ng n\u00e0o kh\u00e1c ngo\u00e0i ch\u1ee9c n\u0103ng l\u00e0m c\u00e1i \u0111\u1eb9p", "C. C\u00e1i g\u00ec \u0111\u00f3 kh\u00f4ng c\u00f3 b\u1ea5t k\u1ef3 ba ch\u1ee9c n\u0103ng n\u00e0o kh\u00e1c ngo\u00e0i ch\u1ee9c n\u0103ng l\u00e0m c\u00e1i \u0111\u1eb9p", "D. C\u00e1i g\u00ec \u0111\u00f3 kh\u00f4ng c\u00f3 b\u1ea5t k\u1ef3 b\u1ed1n ch\u1ee9c n\u0103ng n\u00e0o kh\u00e1c ngo\u00e0i ch\u1ee9c n\u0103ng l\u00e0m c\u00e1i \u0111\u1eb9p"],
    correct: 0
  },
  {
    question: "M\u1ed9t hi\u1ec7n t\u01b0\u1ee3ng c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c xem l\u00e0 \u0111\u1eb9p khi v\u1edbi t\u00ednh to\u00e0n v\u1eb9n c\u1ee5 th\u1ec3 c\u1ea3m t\u00ednh c\u1ee7a ng\u01b0\u1eddi n\u00e0o?",
    answers: ["A. Ti\u1ebfp nh\u1eadn", "B. C\u1ea3m nh\u1eadn", "C. \u0110\u1ed3ng c\u1ea3m", "D. Ti\u1ebfp thu"],
    correct: 0
  },
  {
    question: "Trong m\u1ef9 h\u1ecdc v\u00e0 l\u1ecbch s\u1eed ngh\u1ec7 thu\u1eadt, c\u00e1i \u0111\u1eb9p v\u00e0 s\u1ef1 ti\u1ebfp nh\u1eadn c\u00e1i \u0111\u1eb9p \u0111\u01b0\u1ee3c nghi\u00ean c\u1ee9u \u1edf b\u00ecnh di\u1ec7n quan h\u1ec7 gi\u1eefa c\u00e1c y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. V\u1eadt ch\u1ea5t v\u00e0 tinh th\u1ea7n, kh\u00e1ch quan v\u00e0 ch\u1ee7 quan, t\u1ef1 nhi\u00ean v\u00e0 x\u00e3 h\u1ed9i", "B. V\u1eadt ch\u1ea5t v\u00e0 tinh th\u1ea7n, t\u1ef1 nhi\u00ean v\u00e0 x\u00e3 h\u1ed9i, h\u00ecnh th\u1ee9c v\u00e0 n\u1ed9i dung", "C. Kh\u00e1ch quan v\u00e0 ch\u1ee7 quan, t\u1ef1 nhi\u00ean v\u00e0 x\u00e3 h\u1ed9i, h\u00ecnh th\u1ee9c v\u00e0 n\u1ed9i dung", "D. V\u1eadt ch\u1ea5t v\u00e0 tinh th\u1ea7n, kh\u00e1ch quan v\u00e0 ch\u1ee7 quan, t\u1ef1 nhi\u00ean v\u00e0 x\u00e3 h\u1ed9i, h\u00ecnh th\u1ee9c v\u00e0 n\u1ed9i dung"],
    correct: 3
  },
  {
    question: "\u0110\u1eb7c tr\u01b0ng c\u1ee7a c\u00e1i \u0111\u1eb9p \u0111\u01b0\u1ee3c x\u00e1c \u0111\u1ecbnh th\u00f4ng qua m\u1ed1i quan h\u1ec7 c\u1ee7a n\u00f3 v\u1edbi c\u00e1c lo\u1ea1i h\u00ecnh gi\u00e1 tr\u1ecb kh\u00e1c n\u00e0o?",
    answers: ["A. Gi\u00e1 tr\u1ecb th\u1ef1c d\u1ee5ng (l\u1ee3i \u00edch), gi\u00e1 tr\u1ecb nh\u1eadn th\u1ee9c (ch\u00e2n l\u00fd), gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c (ch\u00e2n, thi\u1ec7n)", "B. Gi\u00e1 tr\u1ecb nh\u1eadn th\u1ee9c (ch\u00e2n l\u00fd), gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c (ch\u00e2n, thi\u1ec7n)", "C. Gi\u00e1 tr\u1ecb th\u1ef1c d\u1ee5ng (l\u1ee3i \u00edch), gi\u00e1 tr\u1ecb \u0111\u1ea1o \u0111\u1ee9c (ch\u00e2n, thi\u1ec7n)", "D. Gi\u00e1 tr\u1ecb th\u1ef1c d\u1ee5ng (l\u1ee3i \u00edch), gi\u00e1 tr\u1ecb nh\u1eadn th\u1ee9c (ch\u00e2n l\u00fd)"],
    correct: 0
  },
  {
    question: "M\u1ef9 h\u1ecdc duy v\u1eadt t\u00ecm c\u00e1i g\u00ec?",
    answers: ["A. Ngu\u1ed3n g\u1ed1c c\u1ee7a kh\u00f4ng ti\u1ebfp nh\u1eadn v\u00e0 tr\u1ea3i nghi\u1ec7m c\u00e1i \u0111\u1eb9p \u1edf th\u1ef1c t\u1ea1i v\u1eadt ch\u1ea5t", "B. Ngu\u1ed3n g\u1ed1c c\u1ee7a ti\u1ebfp nh\u1eadn v\u00e0 kh\u00f4ng tr\u1ea3i nghi\u1ec7m c\u00e1i \u0111\u1eb9p \u1edf th\u1ef1c t\u1ea1i v\u1eadt ch\u1ea5t", "C. Ngu\u1ed3n g\u1ed1c c\u1ee7a ti\u1ebfp nh\u1eadn v\u00e0 tr\u1ea3i nghi\u1ec7m c\u00e1i \u0111\u1eb9p \u1edf th\u1ef1c t\u1ea1i v\u1eadt ch\u1ea5t", "D. Ngu\u1ed3n g\u1ed1c c\u1ee7a ti\u1ebfp thu v\u00e0 kh\u00f4ng tr\u1ea3i nghi\u1ec7m c\u00e1i \u0111\u1eb9p \u1edf th\u1ef1c t\u1ea1i v\u1eadt ch\u1ea5t"],
    correct: 2
  },
  {
    question: "M\u1ef9 h\u1ecdc duy v\u1eadt th\u1ec3 hi\u1ec7n c\u00e1c xu h\u01b0\u1edbng nh\u00ecn nh\u1eadn c\u00e1i g\u00ec?",
    answers: ["A. C\u00e1i th\u1ea9m m\u1ef9", "B. C\u00e1i cu\u1ed9c s\u1ed1ng", "C. C\u00e1i \u0111\u1eb9p", "D. C\u00e1i n\u1ed3ng n\u1ed7i"],
    correct: 2
  },
  {
    question: "Tchernyshevski cho r\u1eb1ng c\u00e1i \u0111\u1eb9p l\u00e0 g\u00ec?",
    answers: ["A. L\u00fd t\u01b0\u1edfng", "B. T\u1ef1 do", "C. Cu\u1ed9c s\u1ed1ng", "D. S\u1ef1 s\u1ed1ng"],
    correct: 3
  },
  {
    question: "C\u00e1c \u0111\u1ea1i bi\u1ec3u c\u1ee7a m\u1ef9 h\u1ecdc theo ch\u1ee7 thuy\u1ebft n\u00e0o n\u00eau l\u00ean s\u1ef1 li\u00ean h\u1ec7 c\u00f3 t\u00ednh quy lu\u1eadt gi\u1eefa c\u00e1i \u0111\u1eb9p v\u1edbi lao \u0111\u1ed9ng c\u1ee7a con ng\u01b0\u1eddi?",
    answers: ["A. Ch\u1ee7 thuy\u1ebft Roma", "B. Ch\u1ee7 thuy\u1ebft Marx", "C. Ch\u1ee7 thuy\u1ebft Tcherny", "D. Ch\u1ee7 thuy\u1ebft Marry"],
    correct: 1
  },
  {
    question: "M\u1ef9 h\u1ecdc theo ch\u1ee7 thuy\u1ebft Marx c\u0169ng nh\u1ea5n m\u1ea1nh \u0111\u1eb7c bi\u1ec7t m\u1ed1i li\u00ean h\u1ec7 bi\u1ec7n ch\u1ee9ng gi\u1eefa c\u00e1i g\u00ec?",
    answers: ["A. C\u00e1i kh\u00f4ng \u0111\u1eb9p v\u00e0 c\u00e1i c\u00f3 \u00edch, c\u00e1i \u0111\u1eb9p v\u00e0 ch\u00e2n l\u00fd", "B. C\u00e1i \u0111\u1eb9p v\u00e0 c\u00e1i c\u00f3 \u00edch, c\u00e1i \u0111\u1eb9p v\u00e0 ch\u00e2n l\u00fd", "C. C\u00e1i \u0111\u1eb9p v\u00e0 c\u00e1i kh\u00f4ng c\u00f3 \u00edch, c\u00e1i \u0111\u1eb9p v\u00e0 ch\u00e2n l\u00fd", "D. C\u00e1i kh\u00f4ng \u0111\u1eb9p v\u00e0 c\u00e1i kh\u00f4ng c\u00f3 \u00edch, c\u00e1i \u0111\u1eb9p v\u00e0 ch\u00e2n l\u00fd"],
    correct: 1
  },
  {
    question: "Th\u1eddi Hy L\u1ea1p c\u1ed5 \u0111\u1ea1i, xu\u1ea5t ph\u00e1t t\u1eeb th\u1ebf gi\u1edbi quan cho r\u1eb1ng th\u1ebf gi\u1edbi c\u00e1c v\u1eadt th\u1ee5 c\u1ea3m l\u00e0 c\u00e1i g\u00ec?",
    answers: ["A. C\u00e1i bi c\u1ee7a th\u1ebf gi\u1edbi \u00fd ni\u1ec7m", "B. C\u00e1i t\u00e2m c\u1ee7a th\u1ebf gi\u1edbi \u00fd ni\u1ec7m", "C. C\u00e1i h\u00ecnh c\u1ee7a th\u1ebf gi\u1edbi \u00fd ni\u1ec7m", "D. C\u00e1i b\u00f3ng c\u1ee7a th\u1ebf gi\u1edbi \u00fd ni\u1ec7m"],
    correct: 3
  },
  {
    question: "H\u00eaghen \u2013 nh\u00e0 duy t\u00e2m kh\u00e1ch quan ng\u01b0\u1eddi \u0110\u1ee9c quan ni\u1ec7m c\u00e1i \u0111\u1eb9p nh\u01b0 l\u00e0 m\u1ed9t s\u1ef1 th\u1ec3 hi\u1ec7n \u0111\u1eb7c bi\u1ec7t c\u1ee7a \u00fd ni\u1ec7m g\u00ec?",
    answers: ["A. \u00dd ni\u1ec7m t\u01b0\u01a1ng \u0111\u1ed1i d\u01b0\u1edbi h\u00ecnh th\u1ee9c c\u1ee5 th\u1ec3 th\u1ee5 t\u00ednh", "B. \u00dd ni\u1ec7m tuy\u1ec7t \u0111\u1ed1i d\u01b0\u1edbi h\u00ecnh th\u1ee9c c\u1ee5 th\u1ec3 nh\u00e2n t\u00ednh", "C. \u00dd ni\u1ec7m tuy\u1ec7t \u0111\u1ed1i d\u01b0\u1edbi h\u00ecnh th\u1ee9c c\u1ee5 th\u1ec3 b\u1ea3n t\u00ednh", "D. \u00dd ni\u1ec7m tuy\u1ec7t \u0111\u1ed1i d\u01b0\u1edbi h\u00ecnh th\u1ee9c c\u1ee5 th\u1ec3 c\u1ea3m t\u00ednh"],
    correct: 3
  },
  {
    question: "Ai l\u00e0 nh\u00e0 t\u01b0 t\u01b0\u1edfng duy v\u1eadt c\u00f3 t\u00ednh bi\u1ec7n ch\u1ee9ng ch\u1ea5t ph\u00e1c \u0111\u1ed3ng nh\u1ea5t c\u00e1i \u0111\u1eb9p v\u1edbi s\u1ef1 h\u00e0i h\u00f2a, c\u00f2n b\u1ea3n th\u00e2n s\u1ef1 h\u00e0i h\u00f2a l\u00e0 th\u1ed1ng nh\u1ea5t gi\u1eefa c\u00e1c m\u1eb7t m\u00e2u thu\u1eabn?",
    answers: ["A. H\u00earaclit", "B. Plat\u00f4n", "C. H\u00eaghen", "D. Kant"],
    correct: 0
  },
  {
    question: "Nh\u00e0 nguy\u00ean t\u1eed lu\u1eadn \u0110\u00eam\u00f4crit ph\u00e1t hi\u1ec7n v\u1ebb \u0111\u1eb9p c\u00f3 quy m\u00f4 g\u00ec?",
    answers: ["A. Quy m\u00f4 v\u1eeba ph\u1ea3i, c\u00f3 ch\u1eebng m\u1ef1c gi\u1eefa c\u00e1c b\u1ed9 ph\u1eadn trong m\u1ed9t ch\u1ec9nh th\u1ec3", 
      "B. Quy m\u00f4 v\u1eeba ph\u1ea3i, n\u00f3 t\u1ed3n t\u1ea1i trong s\u1ef1 c\u00e2n x\u1ee9ng", 
      "C. Quy m\u00f4 v\u1eeba ph\u1ea3i, n\u00f3 t\u1ed3n t\u1ea1i trong s\u1ef1 c\u00e2n x\u1ee9ng, c\u00f3 ch\u1eebng m\u1ef1c gi\u1eefa c\u00e1c b\u1ed9 ph\u1eadn trong m\u1ed9t ch\u1ec9nh th\u1ec3", 
      "D. T\u1ed3n t\u1ea1i trong s\u1ef1 c\u00e2n x\u1ee9ng, c\u00f3 ch\u1eebng m\u1ef1c gi\u1eefa c\u00e1c b\u1ed9 ph\u1eadn trong m\u1ed9t ch\u1ec9nh th\u1ec3"],
    correct: 3
  },
  {
    question: "Trecxn\u01b0xepxki, nh\u00e0 d\u00e2n ch\u1ee7 c\u00e1ch m\u1ea1ng Nga cho c\u00e1i \u0111\u1eb9p l\u00e0 g\u00ec?",
    answers: ["A. \u00dd ni\u1ec7m", "B. Th\u1ea7n linh", "C. V\u1eadt ch\u1ea5t", "D. Cu\u1ed9c s\u1ed1ng"],
    correct: 3
  },
  {
    question: "Trong s\u1ed1 c\u00e1c ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc, ph\u1ea1m tr\u00f9 c\u00e1i \u0111\u1eb9p gi\u1eef v\u1ecb tr\u00ed nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Ch\u00ednh di\u1ec7n", "B. Trung t\u00e2m", "C. T\u1ed5ng th\u1ec3", "D. \u0110\u1ea7u ti\u00ean"],
    correct: 1
  },
  {
    question: "Trong s\u1ed1 c\u00e1c ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc, ph\u1ea1m tr\u00f9 c\u00e1i \u0111\u1eb9p gi\u1eef v\u1ecb tr\u00ed trung t\u00e2m \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n \u1edf m\u1ea5y ph\u01b0\u01a1ng di\u1ec7n?",
    answers: ["A. 2", "B. 3", "C. 4", "D. 5"],
    correct: 1
  },
  {
    question: "C\u00e1i g\u00ec \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1eb9p ph\u1ea3i di\u1ec5n ra ho\u1eb7c \u0111\u01b0\u1ee3c ph\u1ea3n \u00e1nh l\u1ea1i m\u1ed9t c\u00e1ch ch\u00e2n th\u1ef1c, ngh\u0129a l\u00e0 n\u00f3 kh\u00f4ng th\u1ec3 gi\u1ea3 d\u1ed1i?",
    answers: ["A. S\u1ef1 v\u1eadt, hi\u1ec7n t\u01b0\u1ee3ng", "B. Hi\u1ec7n t\u01b0\u1ee3ng", "C. S\u1ef1 v\u1eadt", "D. S\u1ef1 v\u1eadt ho\u1eb7c hi\u1ec7n t\u01b0\u1ee3ng"],
    correct: 0
  },
  {
    question: "Nh\u1eefng con ng\u01b0\u1eddi x\u00e3 h\u1ed9i, nh\u1eefng hi\u1ec7n t\u01b0\u1ee3ng x\u00e3 h\u1ed9i ch\u1ec9 \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1eb9p khi n\u00f3 nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. G\u00f3p ph\u1ea7n mang l\u1ea1i l\u1ee3i \u00edch cho x\u00e3 h\u1ed9i", "B. G\u00f3p ph\u1ea7n mang l\u1ea1i l\u1ee3i \u00edch cho t\u1eadp th\u1ec3, cho x\u00e3 h\u1ed9i", "C. G\u00f3p ph\u1ea7n mang l\u1ea1i l\u1ee3i \u00edch cho c\u00e1 nh\u00e2n, cho x\u00e3 h\u1ed9i", "D. G\u00f3p ph\u1ea7n mang l\u1ea1i l\u1ee3i \u00edch cho con ng\u01b0\u1eddi, cho x\u00e3 h\u1ed9i"],
    correct: 3
  },
  {
    question: "Bi\u1ec3u hi\u1ec7n c\u1ee7a c\u00e1i \u0111\u1eb9p l\u00e0 n\u00f3i \u0111\u1ebfn c\u00e1c s\u1ef1 v\u1eadt hi\u1ec7n t\u01b0\u1ee3ng nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. C\u00e1c s\u1ef1 v\u1eadt, hi\u1ec7n t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1eb9p", "B. Hi\u1ec7n t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1eb9p, c\u00e1c v\u1ebb \u0111\u1eb9p c\u1ee5 th\u1ec3", "C. C\u00e1c s\u1ef1 v\u1eadt, hi\u1ec7n t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c \u0111\u00e1nh gi\u00e1 l\u00e0 \u0111\u1eb9p, c\u00e1c v\u1ebb \u0111\u1eb9p c\u1ee5 th\u1ec3", "D. C\u00e1c s\u1ef1 v\u1eadt, c\u00e1c v\u1ebb \u0111\u1eb9p c\u1ee5 th\u1ec3"],
    correct: 2
  },
  {
    question: "V\u1ebb \u0111\u1eb9p \u0111\u01b0\u1ee3c c\u1ea3m nh\u1eadn ch\u1ee7 y\u1ebfu qua \u0111\u00e2u?",
    answers: ["A. Th\u1ecb gi\u00e1c v\u00e0 v\u1ecb gi\u00e1c", "B. Th\u1ecb gi\u00e1c v\u00e0 th\u00ednh gi\u00e1c", "C. Kh\u1ee9u gi\u00e1c v\u00e0 th\u00ednh gi\u00e1c", "D. V\u1ecb gi\u00e1c v\u00e0 th\u00ednh gi\u00e1c"],
    correct: 1
  },
  {
    question: "L\u0129nh v\u1ef1c bi\u1ec3u hi\u1ec7n c\u1ee7a c\u00e1i \u0111\u1eb9p c\u00f3 th\u1ec3 ph\u00e2n ra m\u1ea5y l\u0129nh v\u1ef1c bi\u1ec3u hi\u1ec7n?",
    answers: ["A. 5", "B. 4", "C. 3", "D. 2"],
    correct: 2
  },
  {
    question: "N\u00eau ra ba l\u0129nh v\u1ef1c bi\u1ec3u hi\u1ec7n c\u1ee7a c\u00e1i \u0111\u1eb9p?",
    answers: ["A. Trong t\u1ef1 nhi\u00ean, trong x\u00e3 h\u1ed9i, trong ngh\u1ec7 thu\u1eadt", "B. Trong thi\u00ean nhi\u00ean, trong x\u00e3 h\u1ed9i, trong ngh\u1ec7 thu\u1eadt", "C. Trong t\u1ef1 nhi\u00ean, trong cu\u1ed9c s\u1ed1ng, trong ngh\u1ec7 thu\u1eadt", "D. Trong t\u1ef1 nhi\u00ean, trong x\u00e3 h\u1ed9i ho\u1eb7c trong ngh\u1ec7 thu\u1eadt"],
    correct: 0
  },
  {
    question: "C\u00e1i cao c\u1ea3 c\u00f3 th\u1ec3 t\u00ecm th\u1ea5y \u1edf \u0111\u00e2u?",
    answers: ["A. Trong thi\u00ean nhi\u00ean, trong x\u00e3 h\u1ed9i, trong con ng\u01b0\u1eddi v\u00e0 trong ngh\u1ec7 thu\u1eadt", "B. Trong x\u00e3 h\u1ed9i, trong con ng\u01b0\u1eddi v\u00e0 trong ngh\u1ec7 thu\u1eadt", "C. Trong thi\u00ean nhi\u00ean, trong con ng\u01b0\u1eddi v\u00e0 trong ngh\u1ec7 thu\u1eadt", "D. Trong thi\u00ean nhi\u00ean, trong x\u00e3 h\u1ed9i, trong con ng\u01b0\u1eddi"],
    correct: 0
  },
  {
    question: "C\u00f3 m\u1ea5y ki\u1ec3u cao c\u1ea3?",
    answers: ["A. 1", "B. 2", "C. 3", "D. 4"],
    correct: 1
  },
  {
    question: "M\u1ef9 h\u1ecdc M\u00e1c \u2013 L\u00eanin x\u00e1c \u0111\u1ecbnh r\u1eb1ng hi\u1ec7n t\u01b0\u1ee3ng th\u1ea9m m\u1ef9 \u0111\u01b0\u1ee3c xem l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a c\u00e1i cao c\u1ea3 bao g\u1ed3m hai ph\u01b0\u01a1ng di\u1ec7n n\u00e0o?",
    answers: ["A. Ph\u01b0\u01a1ng di\u1ec7n to\u00e0n di\u1ec7n v\u00e0 ph\u01b0\u01a1ng di\u1ec7n c\u00e1 nh\u00e2n", "B. Ph\u01b0\u01a1ng di\u1ec7n x\u00e3 h\u1ed9i v\u00e0 ph\u01b0\u01a1ng di\u1ec7n c\u00e1 nh\u00e2n", "C. Ph\u01b0\u01a1ng di\u1ec7n kh\u00e1ch th\u1ec3 v\u00e0 ph\u01b0\u01a1ng di\u1ec7n ch\u1ee7 th\u1ec3", "D. Ph\u01b0\u01a1ng di\u1ec7n t\u00e2m linh v\u00e0 ph\u01b0\u01a1ng di\u1ec7n t\u00edn ng\u01b0\u1ee1ng"],
    correct: 2
  },
  {
    question: "C\u00e1i cao c\u1ea3 \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n ra trong ngh\u1ec7 thu\u1eadt th\u00f4ng th\u01b0\u1eddng qua c\u00e1c h\u00ecnh th\u1ee9c \u0111i\u1ec3n h\u00ecnh n\u00e0o?",
    answers: ["A. T\u00ednh trung b\u00ecnh, ho\u00e0nh tr\u00e1ng", "B. T\u00ednh \u0111\u1ed3 s\u1ed9, ho\u00e0nh tr\u00e1ng", "C. T\u00ednh nh\u1ecf b\u00e9, ho\u00e0nh tr\u00e1ng", "D. T\u00ednh \u0111\u1ed3 s\u1ed9, qu\u00e1 kh\u1ed5"],
    correct: 1
  },
  {
    question: "M\u1ef9 h\u1ecdc M\u00e1c \u2013 L\u00eanin kh\u1eb3ng \u0111\u1ecbnh bi k\u1ecbch l\u00e0 g\u00ec?",
    answers: ["A. M\u1ed9t lo\u1ea1i hi\u1ec7n t\u01b0\u1ee3ng x\u00e3 h\u1ed9i", "B. M\u1ed9t lo\u1ea1i hi\u1ec7n t\u01b0\u1ee3ng t\u1ef1 nhi\u00ean", "C. M\u1ed9t lo\u1ea1i hi\u1ec7n t\u01b0\u1ee3ng khoa h\u1ecdc", "D. M\u1ed9t lo\u1ea1i hi\u1ec7n t\u01b0\u1ee3ng tri\u1ebft h\u1ecdc"],
    correct: 0
  },
  {
    question: "Bi h\u00f9ng ph\u1ea3n \u00e1nh c\u00e1i g\u00ec?",
    answers: ["A. S\u1ef1 hy sinh cho c\u00e1i m\u1edbi m\u1ed9t c\u00e1ch th\u1ea5p h\u00e8n", "B. S\u1ef1 hy sinh cho c\u00e1i m\u1edbi m\u1ed9t c\u00e1ch cao c\u1ea3", "C. S\u1ef1 hy sinh cho c\u00e1i m\u1edbi m\u1ed9t c\u00e1ch", "D. S\u1ef1 hy sinh cho c\u00e1i m\u1edbi m\u1ed9t c\u00e1ch cao c\u1ea3"],
    correct: 3,
    correct: 3
  },
  {
    question: "C\u00e1i h\u00e0i l\u00e0 m\u1ed9t ph\u1ea1m tr\u00f9 m\u1ef9 h\u1ecdc ph\u1ea3n \u00e1nh m\u1ed9t thu\u1ed9c t\u00ednh th\u1ea9m m\u1ef9 c\u1ee7a nh\u1eefng hi\u1ec7n t\u01b0\u1ee3ng v\u00e0 kh\u00e1ch th\u1ec3 c\u00f3 t\u00ednh ch\u1ea5t n\u00e0o?",
    answers: ["A. Tr\u00e1i ng\u01b0\u1ee3c, m\u00e2u thu\u1eabn, t\u1ea1o ra ti\u1ebfng c\u01b0\u1eddi", "B. M\u00e2u thu\u1eabn, t\u1ea1o ra ti\u1ebfng c\u01b0\u1eddi", "C. Tr\u00e1i ng\u01b0\u1ee3c, t\u1ea1o ra ti\u1ebfng c\u01b0\u1eddi", "D. Tr\u00e1i ng\u01b0\u1ee3c, m\u00e2u thu\u1eabn"],
    correct: 0
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi cho h\u00e0i k\u1ecbch l\u00e0 c\u00e1i b\u1eaft ch\u01b0\u1edbc c\u00e1i x\u1ea5u nh\u01b0ng kh\u00f4ng ph\u1ea3i to\u00e0n b\u1ed9 s\u1ef1 x\u1ea5u xa, bi \u0111\u1ee1i m\u00e0 ch\u1ec9 l\u00e0 m\u1ed9t sai l\u1ea7m, m\u1ed9t s\u1ef1 k\u1ef3 qu\u1eb7c n\u00e0o \u0111\u00f3?",
    answers: ["A. Arixtot", "B. Kant xet", "C. H\u00eaghen", "D. Tr\u00e9cnex\u00e9p\u00acxki"],
    correct: 0
  },
  {
    question: "M\u1ef9 h\u1ecdc M\u00e1c \u2013 L\u00eanin x\u00e1c \u0111\u1ecbnh c\u01a1 s\u1edf kh\u00e1ch quan c\u1ee7a c\u00e1i h\u00e0i l\u00e0 g\u00ec?",
    answers: ["A. S\u1ef1 th\u1ec3 hi\u1ec7n b\u1ec1 ngo\u00e0i c\u1ee7a n\u00f3, l\u00e0 s\u1ef1 kh\u00f4ng ph\u00f9 h\u1ee3p gi\u1eefa m\u1ed9t s\u1ef1 v\u1eadt, hi\u1ec7n t\u01b0\u1ee3ng n\u00e0o \u0111\u00f3 v\u1edbi m\u00f4i tr\u01b0\u1eddng, v\u1edbi xu th\u1ebf v\u1eadn \u0111\u1ed9ng c\u1ee7a ngo\u1ea1i c\u1ea3nh", "B. S\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa ph\u1ea9m ch\u1ea5t b\u00ean trong c\u1ee7a hi\u1ec7n t\u01b0\u1ee3ng h\u00e0i, l\u00e0 s\u1ef1 kh\u00f4ng ph\u00f9 h\u1ee3p gi\u1eefa m\u1ed9t s\u1ef1 v\u1eadt, hi\u1ec7n t\u01b0\u1ee3ng n\u00e0o \u0111\u00f3 v\u1edbi m\u00f4i tr\u01b0\u1eddng, v\u1edbi xu th\u1ebf v\u1eadn \u0111\u1ed9ng c\u1ee7a ngo\u1ea1i c\u1ea3nh", "C. S\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa ph\u1ea9m ch\u1ea5t b\u00ean trong c\u1ee7a hi\u1ec7n t\u01b0\u1ee3ng h\u00e0i v\u00e0 s\u1ef1 th\u1ec3 hi\u1ec7n b\u1ec1 ngo\u00e0i c\u1ee7a n\u00f3, l\u00e0 s\u1ef1 kh\u00f4ng ph\u00f9 h\u1ee3p gi\u1eefa m\u1ed9t s\u1ef1 v\u1eadt", "D. S\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa ph\u1ea9m ch\u1ea5t b\u00ean trong c\u1ee7a hi\u1ec7n t\u01b0\u1ee3ng h\u00e0i v\u00e0 s\u1ef1 th\u1ec3 hi\u1ec7n b\u1ec1 ngo\u00e0i c\u1ee7a n\u00f3, l\u00e0 s\u1ef1 kh\u00f4ng ph\u00f9 h\u1ee3p gi\u1eefa m\u1ed9t s\u1ef1 v\u1eadt, hi\u1ec7n t\u01b0\u1ee3ng n\u00e0o \u0111\u00f3 v\u1edbi m\u00f4i tr\u01b0\u1eddng, v\u1edbi xu th\u1ebf v\u1eadn \u0111\u1ed9ng c\u1ee7a ngo\u1ea1i c\u1ea3nh"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: D\u1ea1ng h\u00e0i l\u1ecbch s\u1eed \u2013 x\u00e3 h\u1ed9i c\u00f3 c\u01a1 s\u1edf l\u00e0 \u2026\u2026 gi\u1eefa xu h\u01b0\u1edbng ph\u00e1t tri\u1ec3n c\u1ee7a ti\u1ebfn b\u1ed9 x\u00e3 h\u1ed9i, c\u1ee7a c\u00e1c l\u1ef1c l\u01b0\u1ee3ng c\u00e1ch m\u1ea1ng v\u1edbi c\u00e1c l\u1ef1c l\u01b0\u1ee3ng x\u00e3 h\u1ed9i l\u1ea1c h\u1eadu?",
    answers: ["A. M\u00e2u thu\u1eabn", "B. H\u00f2a thu\u1eadn", "C. H\u1ed7 tr\u1ee3", "D. M\u1eadt thi\u1ebft"],
    correct: 0
  },
  {
    question: "Ti\u1ebfng c\u01b0\u1eddi trong c\u00e1i h\u00e0i kh\u00e1c ti\u1ebfng c\u01b0\u1eddi sinh l\u00fd \u0111\u01a1n thu\u1ea7n v\u00ec sao?",
    answers: ["A. M\u1ed9t d\u1ea1ng mang \u00fd ngh\u0129a kh\u00f4ng nh\u1eadn th\u1ee9c, kh\u00e1m ph\u00e1", "B. M\u1ed9t d\u1ea1ng mang \u00fd ngh\u0129a nh\u1eadn th\u1ee9c, t\u00ecm hi\u1ec3u", "C. M\u1ed9t d\u1ea1ng mang \u00fd ngh\u0129a nh\u1eadn th\u1ee9c, kh\u00e1m ph\u00e1", "D. M\u1ed9t d\u1ea1ng mang \u00fd ngh\u0129a kh\u00e1m ph\u00e1"],
    correct: 2
  },
  {
    question: "Bi k\u1ecbch n\u00e0o kh\u1eafc h\u1ecda s\u00e2u v\u00e0o s\u1ef1 bi quan, m\u1ea5t ni\u1ec1m tin ho\u1eb7c c\u1ea3m nh\u1eadn phi l\u00fd v\u1ec1 \u0111\u1eddi s\u1ed1ng hi\u1ec7n th\u1ef1c, ho\u1eb7c c\u00e1i nh\u00ecn u \u00e1m v\u1ec1 t\u01b0\u01a1ng lai c\u1ee7a nh\u00e2n lo\u1ea1i? CH\u01af\u01a0NG 3: CH\u1ee6 TH\u1ec2 TH\u1ea8M M\u1ef8",
    answers: ["A. Bi k\u1ecbch l\u1ea1c quan", "B. Bi k\u1ecbch x\u00e3 h\u1ed9i ch\u1ee7 ngh\u0129a", "C. Bi k\u1ecbch t\u01b0 s\u1ea3n hi\u1ec7n \u0111\u1ea1i", "D. Bi k\u1ecbch c\u1ed5 \u0111\u1ea1i"],
    correct: 2
  },
  {
    question: "Ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9 l\u00e0 ph\u01b0\u01a1ng di\u1ec7n th\u1ee9 m\u1ea5y c\u1ee7a quan h\u1ec7 th\u1ea9m m\u1ef9?",
    answers: ["A. Hai", "B. Ba", "C. B\u1ed1n", "D. N\u0103m"],
    correct: 0
  },
  {
    question: "Ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9 l\u00e0 ph\u01b0\u01a1ng di\u1ec7n th\u1ee9 hai c\u1ee7a quan h\u1ec7 th\u1ea9m m\u1ef9, \u0111\u00f3 ch\u00ednh l\u00e0 g\u00ec?",
    answers: ["A. C\u00e1c t\u1eadp \u0111o\u00e0n x\u00e3 h\u1ed9i, c\u00e1c t\u1eadp \u0111o\u00e0n x\u00e3 h\u1ed9i c\u00e1c ho\u1ea1t \u0111\u1ed9ng ng\u01b0\u1eddi trong ho\u1ea1t \u0111\u1ed9ng th\u01b0\u1eddng th\u1ee9c, \u0111\u00e1nh gi\u00e1", "B. Con ng\u01b0\u1eddi x\u00e3 h\u1ed9i, c\u00e1c t\u1eadp \u0111o\u00e0n x\u00e3 h\u1ed9i c\u00e1c ho\u1ea1t \u0111\u1ed9ng ng\u01b0\u1eddi trong ho\u1ea1t \u0111\u1ed9ng \u0111\u00e1nh gi\u00e1, s\u00e1ng t\u1ea1o c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9", "C. Con ng\u01b0\u1eddi x\u00e3 h\u1ed9i, c\u00e1c t\u1eadp \u0111o\u00e0n x\u00e3 h\u1ed9i c\u00e1c ho\u1ea1t \u0111\u1ed9ng ng\u01b0\u1eddi trong ho\u1ea1t \u0111\u1ed9ng th\u01b0\u1eddng th\u1ee9c, s\u00e1ng t\u1ea1o c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9", "D. Con ng\u01b0\u1eddi x\u00e3 h\u1ed9i, c\u00e1c t\u1eadp \u0111o\u00e0n x\u00e3 h\u1ed9i c\u00e1c ho\u1ea1t \u0111\u1ed9ng ng\u01b0\u1eddi trong ho\u1ea1t \u0111\u1ed9ng th\u01b0\u1eddng th\u1ee9c, \u0111\u00e1nh gi\u00e1, s\u00e1ng t\u1ea1o c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9"],
    correct: 3
  },
  {
    question: "\u00dd th\u1ee9c th\u1ea9m m\u1ef9 l\u00e0 kh\u00e1i ni\u1ec7m \u0111i li\u1ec1n v\u1edbi kh\u00e1i ni\u1ec7m ho\u1ea1t \u0111\u1ed9ng g\u00ec?",
    answers: ["A. Th\u1ea9m \u0111\u1ecbnh", "B. Th\u1ea9m quy\u1ec1n", "C. Th\u1ea9m m\u1ef9", "D. Th\u1ea9m th\u1ea5u"],
    correct: 2
  },
  {
    question: "\u00dd th\u1ee9c th\u1ea9m m\u1ef9 kh\u00f4ng ch\u1ec9 ph\u1ea3n \u00e1nh t\u1ed3n t\u1ea1i x\u00e3 h\u1ed9i m\u1ed9t c\u00e1ch th\u1ee5 \u0111\u1ed9ng, m\u00e0 c\u00f2n nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. T\u00edch c\u1ef1c c\u00f9ng v\u1edbi s\u1ef1 ph\u00e1t tri\u1ec3n c\u1ee7a t\u1ed3n t\u1ea1i x\u00e3 h\u1ed9i", "B. T\u00e1c \u0111\u1ed9ng t\u00edch c\u1ef1c v\u1edbi s\u1ef1 t\u1ed3n t\u1ea1i x\u00e3 h\u1ed9i", "C. T\u00e1c \u0111\u1ed9ng t\u00edch c\u1ef1c tr\u1edf l\u1ea1i v\u1edbi s\u1ef1 ph\u00e1t tri\u1ec3n c\u1ee7a t\u1ed3n t\u1ea1i x\u00e3 h\u1ed9i", "D. T\u00e1c \u0111\u1ed9ng kh\u00f4ng t\u00edch c\u1ef1c tr\u1edf l\u1ea1i v\u1edbi s\u1ef1 ph\u00e1t tri\u1ec3n c\u1ee7a t\u1ed3n t\u1ea1i x\u00e3 h\u1ed9i"],
    correct: 2
  },
  {
    question: "C\u1ea3m x\u00fac th\u1ea9m m\u1ef9 l\u00e0 m\u1ed9t trong nh\u1eefng th\u00e0nh t\u1ed1 th\u1ee9 m\u1ea5y c\u1ee7a \u00fd th\u1ee9c th\u1ea9m m\u1ef9?",
    answers: ["A. \u0110\u1ea7u ti\u00ean", "B. Th\u1ee9 hai", "C. Th\u1ee9 ba", "D. Th\u1ee9 t\u01b0"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Nhu c\u1ea7u th\u1ea9m m\u1ef9 l\u00e0 m\u1ed9t trong nh\u1eefng th\u00e0nh t\u1ed1 \u2026. c\u1ee7a \u00fd th\u1ee9c th\u1ea9m m\u1ef9?",
    answers: ["A. Ch\u1ee7 y\u1ebfu", "B. \u0110\u1ea7u ti\u00ean", "C. C\u01a1 b\u1ea3n", "D. Tr\u1ecdng t\u00e2m"],
    correct: 2
  },
  {
    question: "Nhu c\u1ea7u th\u1ea9m m\u1ef9 thu\u1ed9c v\u1ec1 tuy\u1ebfn x\u00e3 h\u1ed9i, n\u00f3 mang t\u00ednh ch\u1ea5t g\u00ec?",
    answers: ["A. Tinh th\u1ea7n", "B. V\u1eadt ch\u1ea5t", "C. Giai c\u1ea5p", "D. X\u00e3 h\u1ed9i"],
    correct: 0
  },
  {
    question: "Nhu c\u1ea7u th\u1ea9m m\u1ef9 \u1edf con ng\u01b0\u1eddi \u0111\u01b0\u1ee3c b\u1ed9c l\u1ed9 qua m\u1ea5y xu h\u01b0\u1edbng?",
    answers: ["A. Hai", "B. Ba", "C. B\u1ed1n", "D. N\u0103m"],
    correct: 0
  },
  {
    question: "Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 th\u00e1i \u0111\u1ed9 t\u00ecnh c\u1ea3m c\u1ee7a con ng\u01b0\u1eddi tr\u01b0\u1edbc c\u00e1i \u0111\u1eb9p, c\u00e1i x\u1ea5u", "B. L\u00e0 s\u1edf th\u00edch c\u1ee7a con ng\u01b0\u1eddi v\u1ec1 ph\u01b0\u01a1ng di\u1ec7n th\u1ea9m m\u1ef9", "C. S\u1edf th\u00edch c\u1ee7a con ng\u01b0\u1eddi v\u1ec1 ph\u01b0\u01a1ng di\u1ec7n th\u1ea9m m\u1ef9", "D. S\u1edf th\u00edch c\u1ee7a con ng\u01b0\u1eddi v\u1ec1 ph\u01b0\u01a1ng di\u1ec7n th\u1ea9m \u0111\u1ecbnh"],
    correct: 1
  },
  {
    question: "Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 \u1ed5n \u0111\u1ecbnh v\u00e0 b\u1ec1n v\u1eefng h\u01a1n, n\u00f3 l\u00e0 s\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. Gi\u1eefa t\u00ecnh c\u1ea3m th\u1ea9m m\u1ef9 v\u00e0 b\u1ea3n ch\u1ea5t", "B. Gi\u1eefa t\u00ecnh c\u1ea3m th\u1ea9m m\u1ef9 v\u00e0 c\u00e1i \u0111\u1eb9p", "C. Gi\u1eefa t\u00ecnh c\u1ea3m th\u1ea9m m\u1ef9 v\u00e0 l\u00fd tr\u00ed", "D. Gi\u1eefa t\u00ecnh c\u1ea3m v\u00e0 l\u00fd tr\u00ed"],
    correct: 2
  },
  {
    question: "Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 nghi\u00eang v\u1ec1 ph\u00eda n\u00e0o th\u00ec s\u1ebd b\u1ec1n v\u1eefng, \u1ed5n \u0111\u1ecbnh h\u01a1n?",
    answers: ["A. Tinh c\u1ea3m", "B. L\u00fd tr\u00ed", "C. C\u1ea3m x\u00fac", "D. X\u00e3 h\u1ed9i"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Gi\u1eefa \u2026.. kh\u00f4ng c\u00f3 ranh gi\u1edbi c\u1ee9ng nh\u1eafc, ch\u00fang ch\u1ecbu s\u1ef1 chi ph\u1ed1i c\u1ee7a quan \u0111i\u1ec3m ch\u00ednh tr\u1ecb c\u1ee7a m\u1ed9t x\u00e3 h\u1ed9i nh\u1ea5t \u0111\u1ecbnh n\u00e0o \u0111\u00f3?",
    answers: ["A. Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 v\u00e0 th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 \u0111\u1ed9c h\u1ea1i", "B. Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 l\u00e0nh m\u1ea1nh v\u00e0 th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 hi\u1ec7n \u0111\u1ea1i", "C. Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 l\u00e0nh m\u1ea1nh v\u00e0 th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 \u0111\u1ed9c h\u1ea1i", "D. Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 l\u00e0nh m\u1ea1nh v\u00e0 th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 kh\u00f4ng l\u00e0nh m\u1ea1nh"],
    correct: 3
  },
  {
    question: "M\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng th\u1ea9m m\u1ef9 c\u00f3 th\u1ec3 l\u00e0 l\u00e0nh m\u1ea1nh, kh\u00f4ng l\u00e0nh m\u1ea1nh t\u00f9y thu\u1ed9c v\u00e0o g\u00ec??",
    answers: ["A. Ng\u01b0\u1eddi c\u1ea3m nh\u1eadn v\u00e0 m\u1ee9c \u0111\u1ed9 ti\u1ebfp x\u00fac c\u1ee7a ng\u01b0\u1eddi \u0111\u00f3 v\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng", "B. Ng\u01b0\u1eddi c\u1ea3m th\u1ee5 v\u00e0 m\u1ee9c \u0111\u1ed9 ti\u1ebfp x\u00fac c\u1ee7a ng\u01b0\u1eddi \u0111\u00f3 v\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng", "C. Ng\u01b0\u1eddi c\u1ea3m nh\u1eadn v\u00e0 m\u1ee9c \u0111\u1ed9 c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng", "D. M\u1ee9c \u0111\u1ed9 ti\u1ebfp x\u00fac c\u1ee7a ng\u01b0\u1eddi \u0111\u00f3 v\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: M\u1ed1t \u2013 xem x\u00e9t d\u01b0\u1edbi g\u00f3c \u0111\u1ed9 m\u1ef9 h\u1ecdc \u2013 Tri\u1ebft h\u1ecdc \u2013 l\u00e0\u2026.?",
    answers: ["A. S\u1ef1 thay \u0111\u1ed5i m\u1ed9t c\u00e1ch c\u1ee5c b\u1ed9 c\u00e1c h\u00ecnh th\u1ee9c b\u1ec1 ngo\u00e0i, x\u1ea3y ra d\u01b0\u1edbi s\u1ef1 \u1ea3nh h\u01b0\u1edfng c\u1ee7a nhi\u1ec1u y\u1ebfu t\u1ed1 x\u00e3 h\u1ed9i", "B. S\u1ef1 thay \u0111\u1ed5i m\u1ed9t c\u00e1ch th\u01b0\u1eddng xuy\u00ean, c\u1ee5c b\u1ed9 c\u00e1c h\u00ecnh th\u1ee9c b\u1ec1 ngo\u00e0i", "C. S\u1ef1 thay \u0111\u1ed5i m\u1ed9t c\u00e1ch th\u01b0\u1eddng xuy\u00ean, x\u1ea3y ra d\u01b0\u1edbi s\u1ef1 \u1ea3nh h\u01b0\u1edfng c\u1ee7a nhi\u1ec1u y\u1ebfu t\u1ed1 x\u00e3 h\u1ed9i", "D. S\u1ef1 thay \u0111\u1ed5i m\u1ed9t c\u00e1ch th\u01b0\u1eddng xuy\u00ean, c\u1ee5c b\u1ed9 c\u00e1c h\u00ecnh th\u1ee9c b\u1ec1 ngo\u00e0i, x\u1ea3y ra d\u01b0\u1edbi s\u1ef1 \u1ea3nh h\u01b0\u1edfng c\u1ee7a nhi\u1ec1u y\u1ebfu t\u1ed1 x\u00e3 h\u1ed9i"],
    correct: 3
  },
  {
    question: "Trong m\u1ef9 h\u1ecdc, m\u1ed1t c\u00f3 th\u1ec3 l\u00e0m cho nh\u1eefng y\u1ebfu t\u1ed1 truy\u1ec1n th\u1ed1ng tr\u1edf n\u00ean nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. L\u1ed7i th\u1eddi, kh\u00f4ng ph\u00f9 h\u1ee3p v\u1edbi cu\u1ed9c s\u1ed1ng hi\u1ec7n t\u1ea1i", "B. Kh\u00f4ng ph\u00f9 h\u1ee3p v\u1edbi cu\u1ed9c s\u1ed1ng hi\u1ec7n t\u1ea1i", "C. L\u1ed7i th\u1eddi, kh\u00f4ng ph\u00f9 h\u1ee3p v\u1edbi cu\u1ed9c s\u1ed1ng", "D. L\u1ed7i th\u1eddi, ph\u00f9 h\u1ee3p v\u1edbi cu\u1ed9c s\u1ed1ng hi\u1ec7n t\u1ea1i"],
    correct: 0
  },
  {
    question: "L\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 \u0111\u00f3ng vai tr\u00f2 nh\u01b0 th\u1ebf n\u00e0o cho c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 c\u1ea7n thi\u1ebft v\u00e0 mong mu\u1ed1n?",
    answers: ["A. H\u00ecnh t\u01b0\u1ee3ng", "B. H\u00ecnh \u1ea3nh", "C. H\u00ecnh th\u00e1i", "D. H\u00ecnh m\u1eabu"],
    correct: 3
  },
  {
    question: "\u0110\u00e1nh gi\u00e1 n\u00e0o bao gi\u1edd c\u0169ng ph\u1ea3i tu\u00e2n theo c\u00e1c chu\u1ea9n m\u1ef1c?",
    answers: ["A. \u0110\u00e1nh gi\u00e1 th\u1ea9m \u0111\u1ecbnh", "B. \u0110\u00e1nh gi\u00e1 th\u1ea9m m\u1ef9", "C. \u0110\u00e1nh gi\u00e1 c\u1ea3m x\u00fac", "D. \u0110\u00e1nh gi\u00e1 cu\u1ed9c s\u1ed1ng"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp n\u1ed9i dung c\u00f2n thi\u1ebfu sau: L\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 \u0111\u01b0\u1ee3c bi\u1ec3u hi\u1ec7n ra th\u00f4ng qua \u2026.. mang t\u00ednh to\u00e0n v\u1eb9n v\u00e0 c\u1ee5 th\u1ec3 c\u1ea3m t\u00ednh?",
    answers: ["A. Th\u1ef1c v\u1eadt", "B. Con ng\u01b0\u1eddi", "C. Nh\u00e2n v\u1eadt", "D. H\u00ecnh t\u01b0\u1ee3ng"],
    correct: 3
  },
  {
    question: "L\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 trong ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. S\u1ef1 th\u1ec3 hi\u1ec7n m\u1ed9t c\u00e1ch t\u1eadp trung s\u00e2u s\u1eafc l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 ngo\u00e0i \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i, n\u00f3 c\u00f3 kh\u1ea3 n\u0103ng d\u1eabn d\u1eaft l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 ngo\u00e0i hi\u1ec7n th\u1ef1c", "B. S\u1ef1 th\u1ec3 hi\u1ec7n m\u1ed9t c\u00e1ch t\u1eadp trung s\u00e2u s\u1eafc l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 ngo\u00e0i \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i", "C. T\u1eadp trung s\u00e2u s\u1eafc th\u1ea9m m\u1ef9 ngo\u00e0i \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i, n\u00f3 c\u00f3 kh\u1ea3 n\u0103ng kh\u00f4ng d\u1eabn d\u1eaft l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 ngo\u00e0i hi\u1ec7n th\u1ef1c", "D. D\u1eabn d\u1eaft l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 ngo\u00e0i hi\u1ec7n th\u1ef1c"],
    correct: 0
  },
  {
    question: "Nh\u00f3m n\u00e0o \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 nh\u00f3m c\u1ea3m th\u1ee5 c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9?",
    answers: ["A. Ch\u1ee7 th\u1ec3 th\u1ea9m \u0111\u1ecbnh", "B. Ch\u1ee7 th\u1ec3 th\u01b0\u1edfng th\u1ee9c", "C. Ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9", "D. Ch\u1ee7 th\u1ec3 \u0111\u1ecbnh c\u01b0"],
    correct: 2
  },
  {
    question: "Gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 bao gi\u1edd c\u0169ng nh\u1eb1m l\u00e0m h\u00ecnh th\u00e0nh m\u1ed9t ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9 bi\u1ebft \u0111\u00e1nh gi\u00e1 v\u00e0 s\u00e1ng t\u1ea1o c\u00e1i g\u00ec?",
    answers: ["A. \u0110\u00e1nh gi\u00e1 v\u00e0 s\u00e1ng t\u1ea1o tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p", "B. H\u01b0\u1edfng th\u1ee5, s\u00e1ng t\u1ea1o tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p", "C. S\u00e1ng t\u1ea1o tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p", "D. H\u01b0\u1edfng th\u1ee5, \u0111\u00e1nh gi\u00e1 v\u00e0 s\u00e1ng t\u1ea1o tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p"],
    correct: 3
  },
  {
    question: "B\u1ea3n ch\u1ea5t c\u1ee7a gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 theo quan \u0111i\u1ec3m c\u1ee7a m\u1ef9 h\u1ecdc M\u00e1c \u2013 L\u00eanin g\u1eafn li\u1ec1n v\u1edbi c\u00e1c ho\u1ea1t \u0111\u1ed9ng n\u00e0o?",
    answers: ["A. S\u00e1ng t\u1ea1o", "B. Nh\u1eadn th\u1ee9c", "C. Ch\u1ee7 ngh\u0129a hi\u1ec7n th\u1ef1c", "D. X\u00e3 h\u1ed9i t\u01b0 b\u1ea3n"],
    correct: 0
  },
  {
    question: "C\u00e1c y\u1ebfu t\u1ed1 n\u00e0o c\u1ee7a giai c\u1ea5p \u0111\u1ec1u ph\u1ee5 thu\u1ed9c v\u00e0o \u0111i\u1ec1u ki\u1ec7n sinh s\u1ed1ng v\u00e0 m\u1ee5c ti\u00eau gi\u00e1o d\u1ee5c c\u1ee7a giai c\u1ea5p \u0111\u00f3?",
    answers: ["A. Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 v\u00e0 l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9", "B. T\u00ecnh c\u1ea3m th\u1ea9m m\u1ef9 v\u00e0 l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9", "C. T\u00ecnh c\u1ea3m th\u1ea9m m\u1ef9, th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 v\u00e0 l\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9", "D. T\u00ecnh c\u1ea3m th\u1ea9m m\u1ef9, th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9"],
    correct: 2
  },
  {
    question: "T\u00ednh x\u00e3 h\u1ed9i c\u1ee7a gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 c\u00f2n g\u1eafn li\u1ec1n v\u1edbi t\u00ednh g\u00ec?",
    answers: ["A. T\u00ednh th\u1eddi \u0111\u1ea1i", "B. T\u00ednh hi\u1ec7n \u0111\u1ea1i", "C. T\u00ednh c\u00f4ng ch\u00fang", "D. T\u00ednh giai c\u1ea5p"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: M\u1ef9 h\u1ecdc \u2026.. kh\u1eb3ng \u0111\u1ecbnh gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 g\u1eafn b\u00f3 ch\u1eb7t ch\u1ebd v\u1edbi gi\u00e1o d\u1ee5c lao \u0111\u1ed9ng?",
    answers: ["A. M\u00e1c", "B. Kant", "C. M\u00e1c \u2013 L\u00eanin", "D. L\u00eanin"],
    correct: 2
  },
  {
    question: "Gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 b\u1eb1ng c\u00e1c t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc l\u00e0 h\u00ecnh th\u1ee9c gi\u00e1o d\u1ee5c nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Gi\u00e1o d\u1ee5c th\u1ea5p nh\u1ea5t", "B. Gi\u00e1o d\u1ee5c cao nh\u1ea5t", "C. Gi\u00e1o d\u1ee5c v\u1eeba ph\u1ea3i", "D. Gi\u00e1o d\u1ee5c c\u00e1 nh\u00e2n"],
    correct: 1
  },
  {
    question: "Kh\u1ea3 n\u0103ng ti\u1ebfp nh\u1eadn, c\u1ea3m th\u1ee5 c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 ph\u1ee5 thu\u1ed9c v\u00e0o m\u1ea5y y\u1ebfu t\u1ed1?",
    answers: ["A. M\u1ed9t", "B. Hai", "C. Nhi\u1ec1u", "D. \u00cdt"],
    correct: 2
  },
  {
    question: "Nh\u00f3m \u0111\u1ecbnh h\u01b0\u1edbng c\u00f2n c\u00f3 ch\u1ee9c n\u0103ng li\u00ean k\u1ebft n\u00e0o?",
    answers: ["A. Kh\u1ea3 n\u0103ng ki\u1ec3m so\u00e1t chung", "B. Kh\u1ea3 n\u0103ng s\u00e1ng t\u1ea1o chung", "C. Kh\u1ea3 n\u0103ng h\u1ecdc h\u00e0nh chung", "D. Kh\u1ea3 n\u0103ng h\u00ecnh th\u00e0nh chung"],
    correct: 1
  },
  {
    question: "Nh\u00f3m ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o th\u1ea9m m\u1ef9 l\u00e0 g\u00ec?",
    answers: ["A. Nh\u1eefng ch\u1ee7 th\u1ec3 ti\u1ebfp n\u1ed1i qu\u00e1 tr\u00ecnh ti\u00eau th\u1ee5, quan s\u00e1t c\u1ee7a nh\u00f3m ch\u1ee7 th\u1ec3 th\u01b0\u1edfng th\u1ee9c \u0111\u1ec3 chuy\u1ec3n sang m\u1ed9t qu\u00e1 tr\u00ecnh m\u1edbi \u2013 qu\u00e1 tr\u00ecnh s\u1ea3n xu\u1ea5t", "B. Quan s\u00e1t c\u1ee7a nh\u00f3m ch\u1ee7 th\u1ec3 th\u01b0\u1edfng th\u1ee9c \u0111\u1ec3 chuy\u1ec3n sang m\u1ed9t qu\u00e1 tr\u00ecnh m\u1edbi \u2013 qu\u00e1 tr\u00ecnh s\u1ea3n xu\u1ea5t", "C. Nh\u1eefng ch\u1ee7 th\u1ec3 ti\u1ebfp n\u1ed1i qu\u00e1 tr\u00ecnh ti\u00eau th\u1ee5, quan s\u00e1t c\u1ee7a nh\u00f3m ch\u1ee7 th\u1ec3 th\u01b0\u1edfng th\u1ee9c \u0111\u1ec3 chuy\u1ec3n sang m\u1ed9t qu\u00e1 tr\u00ecnh m\u1edbi", "D. Ti\u1ebfp n\u1ed1i qu\u00e1 tr\u00ecnh ti\u00eau th\u1ee5, quan s\u00e1t c\u1ee7a nh\u00f3m ch\u1ee7 th\u1ec3 th\u01b0\u1edfng th\u1ee9c \u0111\u1ec3 chuy\u1ec3n sang m\u1ed9t qu\u00e1 tr\u00ecnh m\u1edbi \u2013 qu\u00e1 tr\u00ecnh s\u1ea3n xu\u1ea5t"],
    correct: 0
  },
  {
    question: "Vi\u1ec7c quan s\u00e1t c\u1ee7a ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o kh\u00f4ng ph\u1ea3i l\u00e0 nh\u1eadn th\u1ee9c \u0111\u01a1n thu\u1ea7n. \u0110\u00f3 l\u00e0 g\u00ec?",
    answers: ["A. Qu\u00e1 tr\u00ecnh nh\u1eadn th\u1ee9c s\u00e2u h\u01a1n v\u1ec1 b\u1ea3n ch\u1ea5t \u0111\u1ed1i t\u01b0\u1ee3ng", "B. Qu\u00e1 tr\u00ecnh th\u01b0\u1edfng th\u1ee9c s\u00e2u h\u01a1n v\u1ec1 b\u1ea3n ch\u1ea5t \u0111\u1ed1i t\u01b0\u1ee3ng", "C. Qu\u00e1 tr\u00ecnh c\u1ea3m nh\u1eadn s\u00e2u h\u01a1n v\u1ec1 b\u1ea3n ch\u1ea5t \u0111\u1ed1i t\u01b0\u1ee3ng", "D. Qu\u00e1 tr\u00ecnh h\u00ecnh th\u00e0nh s\u00e2u h\u01a1n v\u1ec1 b\u1ea3n ch\u1ea5t \u0111\u1ed1i t\u01b0\u1ee3ng"],
    correct: 0
  },
  {
    question: "Ngh\u1ec7 s\u0129 \u0111\u01b0\u1ee3c coi l\u00e0 ch\u1ee7 th\u1ec3 n\u00e0o khi h\u1ecd ph\u1ea3n \u00e1nh l\u1ea1i hi\u1ec7n t\u01b0\u1ee3ng th\u1ea9m m\u1ef9?",
    answers: ["A. Ch\u1ee7 th\u1ec3 nh\u00e2n t\u1ea1o", "B. Ch\u1ee7 th\u1ec3 c\u00e1 nh\u00e2n", "C. Ch\u1ee7 th\u1ec3 th\u01b0\u1edfng th\u1ee9c", "D. Ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o"],
    correct: 3
  },
  {
    question: "B\u1ea3n ch\u1ea5t c\u1ee7a qu\u00e1 tr\u00ecnh s\u00e1ng t\u1ea1o l\u00e0 g\u00ec?",
    answers: ["A. Qu\u00e1 tr\u00ecnh ph\u1ea3n \u00e1nh", "B. Qu\u00e1 tr\u00ecnh h\u00ecnh th\u00e0nh", "C. Qu\u00e1 tr\u00ecnh nh\u1eadn th\u1ee9c", "D. Qu\u00e1 tr\u00ecnh c\u1ea3m nh\u1eadn"],
    correct: 0
  },
  {
    question: "S\u00e1ng t\u1ea1o th\u1ea9m m\u1ef9 l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 s\u00e1ng t\u1ea1o theo quy lu\u1eadt c\u00e1i kh\u00f4ng \u0111\u1eb9p, \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n trong s\u00e1ng t\u1ea1o ngh\u1ec7 thu\u1eadt", "B. L\u00e0 s\u00e1ng t\u1ea1o theo quy lu\u1eadt c\u00e1i \u0111\u1eb9p, \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n cao nh\u1ea5t trong s\u00e1ng t\u1ea1o ngh\u1ec7 thu\u1eadt", "C. L\u00e0 \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n cao nh\u1ea5t trong s\u00e1ng t\u1ea1o ngh\u1ec7 thu\u1eadt", "D. L\u00e0 s\u00e1ng t\u1ea1o theo quy lu\u1eadt c\u00e1i \u0111\u1eb9p, \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n trong s\u00e1ng t\u1ea1o"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: \u0110\u1eb7c tr\u01b0ng c\u1ee7a nh\u00f3m ch\u1ee7 th\u1ec3 bi\u1ec3u hi\u1ec7n th\u1ea9m m\u1ef9 l\u00e0 \u2026 c\u00e1i b\u1ea3n ch\u1ea5t c\u1ee7a to\u00e0n b\u1ed9 s\u1ea3n ph\u1ea9m s\u00e1ng t\u1ea1o \u0111\u1ebfn ng\u01b0\u1eddi ti\u00eau th\u1ee5?",
    answers: ["A. Nh\u1eb1m truy\u1ec1n \u0111\u1ea1t m\u1ed9t c\u00e1ch trung th\u00e0nh", "B. Nh\u1eb1m truy\u1ec1n \u0111\u1ea1t m\u1ed9t c\u00e1ch trung th\u00e0nh", "C. Nh\u1eb1m truy\u1ec1n \u0111\u1ea1t m\u1ed9t c\u00e1ch trung th\u00e0nh", "D. Nh\u1eb1m truy\u1ec1n \u0111\u1ea1t m\u1ed9t c\u00e1ch trung th\u00e0nh"],
    correct: 0
  },
  {
    question: "Nh\u00f3m ch\u1ee7 th\u1ec3 t\u1ed5ng h\u1ee3p c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 l\u00e0 nh\u00f3m n\u00e0o?",
    answers: ["A. L\u00e0 nh\u00f3m v\u1eeba l\u00e0 ng\u01b0\u1eddi s\u00e1ng t\u1ea1o, v\u1eeba l\u00e0 ng\u01b0\u1eddi bi\u1ec3u hi\u1ec7n v\u00e0 c\u0169ng l\u00e0 nh\u00e0 ph\u00ea b\u00ecnh", "B. L\u00e0 nh\u00f3m v\u1eeba c\u00f3 th\u1ec3 l\u00e0 ng\u01b0\u1eddi th\u1ee5 c\u1ea3m, v\u1eeba l\u00e0 ng\u01b0\u1eddi s\u00e1ng t\u1ea1o, v\u1eeba l\u00e0 ng\u01b0\u1eddi bi\u1ec3u hi\u1ec7n v\u00e0 c\u0169ng l\u00e0 nh\u00e0 ph\u00ea b\u00ecnh", "C. L\u00e0 nh\u00f3m v\u1eeba c\u00f3 th\u1ec3 l\u00e0 ng\u01b0\u1eddi th\u1ee5 c\u1ea3m, v\u1eeba l\u00e0 ng\u01b0\u1eddi s\u00e1ng t\u1ea1o v\u00e0 c\u0169ng l\u00e0 nh\u00e0 ph\u00ea b\u00ecnh", "D. L\u00e0 nh\u00f3m v\u1eeba c\u00f3 th\u1ec3 l\u00e0 ng\u01b0\u1eddi th\u1ee5 c\u1ea3m, v\u1eeba l\u00e0 ng\u01b0\u1eddi s\u00e1ng t\u1ea1o"],
    correct: 1
  },
  {
    question: "Kh\u00e1i ni\u1ec7m gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 trong m\u1ef9 h\u1ecdc M\u00e1c \u2013 L\u00eanin \u0111\u01b0\u1ee3c x\u00e1c \u0111\u1ecbnh \u1edf m\u1ea5y \u0111\u1ecbnh ngh\u0129a?",
    answers: ["A. 1", "B. 2", "C. 3", "D. 4"],
    correct: 1
  },
  {
    question: "Gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 bao gi\u1edd c\u0169ng nh\u1eb1m h\u00ecnh th\u00e0nh m\u1ed9t ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9 bi\u1ebft nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. H\u01b0\u1edfng th\u1ee5, \u0111\u00e1nh gi\u00e1 tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p", "B. H\u01b0\u1edfng th\u1ee5 v\u00e0 s\u00e1ng t\u1ea1o tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p", "C. \u0110\u00e1nh gi\u00e1 v\u00e0 s\u00e1ng t\u1ea1o tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p", "D. H\u01b0\u1edfng th\u1ee5, \u0111\u00e1nh gi\u00e1 v\u00e0 s\u00e1ng t\u1ea1o tr\u00ean m\u1ecdi m\u1eb7t c\u1ee7a cu\u1ed9c s\u1ed1ng theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p"],
    correct: 3
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt ch\u1ecbu s\u1ef1 chi ph\u1ed1i c\u1ee7a quy lu\u1eadt n\u00e0o?",
    answers: ["A. C\u00e1c quy lu\u1eadt x\u00e3 h\u1ed9i", "B. C\u00e1c quy lu\u1eadt cu\u1ed9c s\u1ed1ng", "C. C\u00e1c quy lu\u1eadt l\u1ecbch s\u1eed", "D. C\u00e1c quy lu\u1eadt khoa h\u1ecdc"],
    correct: 1
  },
  {
    question: "M\u1ee5c \u0111\u00edch c\u1ee7a s\u1ef1 ho\u00e0n thi\u1ec7n, ho\u00e0n m\u1ef9 trong ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. M\u1ee5c \u0111\u00edch kh\u00f4ng v\u01b0\u01a1n t\u1edbi c\u1ee7a ngh\u1ec7 thu\u1eadt", "B. M\u1ee5c \u0111\u00edch v\u01b0\u01a1n t\u1edbi c\u1ee7a ngh\u1ec7 thu\u1eadt", "C. M\u1ee5c ti\u00eau v\u01b0\u01a1n t\u1edbi c\u1ee7a ngh\u1ec7 s\u0129", "D. M\u1ee5c \u0111\u00edch v\u01b0\u01a1n t\u1edbi c\u1ee7a c\u00e1 nh\u00e2n v\u00e0 t\u1eadp th\u1ec3"],
    correct: 1
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt gi\u00e1o d\u1ee5c con ng\u01b0\u1eddi m\u1ed9t c\u00e1ch nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. L\u00e3ng m\u1ea1n, t\u1ef1 gi\u00e1c, kh\u1ea3 n\u0103ng gi\u00e1o d\u1ee5c l\u00e2u d\u00e0i", "B. L\u00e3ng m\u1ea1n, t\u1ef1 gi\u00e1c, kh\u1ea3 n\u0103ng gi\u00e1o d\u1ee5c l\u00e2u d\u00e0i t\u1eeb th\u1ebf h\u1ec7 n\u00e0y \u0111\u1ebfn th\u1ebf h\u1ec7 kh\u00e1c", "C. T\u1ef1 gi\u00e1c, kh\u1ea3 n\u0103ng gi\u00e1o d\u1ee5c l\u00e2u d\u00e0i t\u1eeb th\u1ebf h\u1ec7 n\u00e0y \u0111\u1ebfn th\u1ebf h\u1ec7 kh\u00e1c", "D. Kh\u1ea3 n\u0103ng gi\u00e1o d\u1ee5c l\u00e2u d\u00e0i t\u1eeb th\u1ebf h\u1ec7 n\u00e0y \u0111\u1ebfn th\u1ebf h\u1ec7 kh\u00e1c"],
    correct: 1
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt gi\u00e1o d\u1ee5c v\u00e0 c\u1ea3m h\u00f3a con ng\u01b0\u1eddi b\u1eb1ng c\u00e1ch n\u00e0o?",
    answers: ["A. N\u00eau g\u01b0\u01a1ng th\u00f4ng qua h\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt", "B. Th\u00f4ng qua h\u00ecnh t\u01b0\u1ee3ng con ng\u01b0\u1eddi", "C. Th\u00f4ng qua h\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt", "D. N\u00eau g\u01b0\u01a1ng th\u00f4ng qua h\u00ecnh t\u01b0\u1ee3ng v\u0103n h\u00f3a"],
    correct: 0
  },
  {
    question: "T\u1ea5t c\u1ea3 c\u00e1c ch\u1ee9c n\u0103ng x\u00e3 h\u1ed9i c\u01a1 b\u1ea3n c\u1ee7a ngh\u1ec7 thu\u1eadt suy cho c\u00f9ng ch\u1ec9 l\u00e0 m\u1ed9t, \u0111\u00f3 l\u00e0 ch\u1ee9c n\u0103ng g\u00ec?",
    answers: ["A. Con ng\u01b0\u1eddi th\u1ea5y v\u00e0 v\u01b0\u01a1n t\u1edbi c\u00e1c gi\u00e1 tr\u1ecb t\u00edch c\u1ef1c c\u1ee7a x\u00e3 h\u1ed9i, thi\u1ec7n, m\u1ef9 m\u00e0 th\u00f4i", "B. H\u01b0\u1edbng con ng\u01b0\u1eddi th\u1ea5y v\u00e0 v\u01b0\u01a1n t\u1edbi c\u00e1c gi\u00e1 tr\u1ecb t\u00edch c\u1ef1c c\u1ee7a x\u00e3 h\u1ed9i, gi\u00e1 tr\u1ecb ch\u00e2n, thi\u1ec7n, m\u1ef9", "C. V\u01b0\u01a1n t\u1edbi c\u00e1c gi\u00e1 tr\u1ecb t\u00edch c\u1ef1c c\u1ee7a x\u00e3 h\u1ed9i, gi\u00e1 tr\u1ecb ch\u00e2n, m\u1ef9 m\u00e0 th\u00f4i", "D. H\u01b0\u1edbng \u0111\u01b0a con ng\u01b0\u1eddi th\u1ea5y v\u00e0 v\u01b0\u01a1n t\u1edbi c\u00e1c gi\u00e1 tr\u1ecb t\u00edch c\u1ef1c c\u1ee7a x\u00e3 h\u1ed9i"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: \u2026.. \u0111\u1ec1u l\u00e0 th\u1ec3 hi\u1ec7n quan h\u1ec7 ch\u1ee7 th\u1ec3 v\u1edbi kh\u00e1ch th\u1ec3?",
    answers: ["A. Tri\u1ebft h\u1ecdc v\u00e0 ngh\u1ec7 thu\u1eadt", "B. M\u1ef9 h\u1ecdc v\u00e0 ngh\u1ec7 thu\u1eadt", "C. Tri\u1ebft h\u1ecdc v\u00e0 khoa h\u1ecdc", "D. V\u0103n h\u1ecdc v\u00e0 ngh\u1ec7 thu\u1eadt"],
    correct: 0
  },
  {
    question: "Tri\u1ebft h\u1ecdc v\u00e0 ngh\u1ec7 thu\u1eadt c\u00f3 quan h\u1ec7 nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. G\u1eafn b\u00f3", "B. V\u1eadn \u0111\u1ed9ng", "C. H\u1ed7 tr\u1ee3", "D. C\u1ea1nh tranh"],
    correct: 2
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Ngh\u1ec7 thu\u1eadt mang d\u1ea5u \u1ea5n\u2026., mang l\u1ea1i kho\u00e1i c\u1ea3m\u2026.?",
    answers: ["A. C\u00e1 th\u1ec3/ Nh\u00e2n lo\u1ea1i", "B. C\u00e1 nh\u00e2n/ Th\u1ea9m m\u1ef9", "C. H\u00ecnh th\u1ee9c/ Th\u1ea9m m\u1ef9", "D. C\u00e1 nh\u00e2n/ Th\u1ea9m \u0111\u1ecbnh"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Ngh\u1ec7 thu\u1eadt kh\u00f4ng ch\u1ec9 \u0111\u01b0a l\u1ea1i t\u01b0 li\u1ec7u \u0111\u1ed3 s\u1ed9 v\u1ec1\u2026., m\u00e0 c\u00f2n g\u1ee3i m\u1edf k\u00edch th\u00edch tr\u00ed t\u01b0\u1edfng t\u01b0\u1ee3ng phong ph\u00fa s\u00e1ng t\u1ea1o \u0111\u1ed1i v\u1edbi khoa h\u1ecdc?",
    answers: ["A. Nh\u1eadn th\u1ee9c x\u00e3 h\u1ed9i", "B. Nh\u1eadn th\u1ee9c v\u0103n h\u00f3a", "C. Nh\u1eadn th\u1ee9c tr\u00ed tu\u1ec7", "D. Nh\u1eadn th\u1ee9c cu\u1ed9c s\u1ed1ng"],
    correct: 3
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt c\u00f3 s\u1ee9c m\u1ea1nh ti\u1ec1m t\u00e0ng trong vi\u1ec7c t\u00e1c \u0111\u1ed9ng \u0111\u1ebfn nh\u1eefng y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. Tinh th\u1ea7n, quan \u0111i\u1ec3m l\u00fd lu\u1eadn c\u1ee7a con ng\u01b0\u1eddi th\u00f4ng qua ch\u1ee9c n\u0103ng gi\u00e1o d\u1ee5c", "B. Tinh th\u1ea7n, quan \u0111i\u1ec3m ch\u00ednh tr\u1ecb c\u1ee7a con ng\u01b0\u1eddi th\u00f4ng qua ch\u1ee9c n\u0103ng gi\u00e1o d\u1ee5c", "C. Tinh th\u1ea7n, quan \u0111i\u1ec3m ch\u00ednh tr\u1ecb c\u1ee7a con ng\u01b0\u1eddi kh\u00f4ng th\u00f4ng qua ch\u1ee9c n\u0103ng gi\u00e1o d\u1ee5c", "D. Tinh th\u1ea7n ho\u1eb7c quan \u0111i\u1ec3m ch\u00ednh tr\u1ecb c\u1ee7a con ng\u01b0\u1eddi th\u00f4ng qua ch\u1ee9c n\u0103ng gi\u00e1o d\u1ee5c"],
    correct: 1
  },
  {
    question: "\u0110\u1ea1o \u0111\u1ee9c th\u01b0\u1eddng xuy\u00ean c\u00f3 m\u1eb7t trong c\u00e1c t\u00e1c ph\u1ea9m n\u00e0o?",
    answers: ["A. T\u00e1c ph\u1ea9m ca nh\u1ea1c", "B. T\u00e1c ph\u1ea9m v\u0103n h\u1ecdc", "C. T\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt", "D. T\u00e1c ph\u1ea9m h\u00e0i k\u1ecbch"],
    correct: 2
  },
  {
    question: "V\u1edbi \u0111\u1ea1o \u0111\u1ee9c t\u1ed1t, ng\u01b0\u1eddi ta s\u00e1ng t\u1ea1o v\u00e0 s\u1eed d\u1ee5ng nh\u1eefng t\u00e1c ph\u1ea9m c\u00f3 n\u1ed9i dung nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. T\u1ed1t", "B. X\u1ea5u", "C. B\u00ecnh th\u01b0\u1eddng", "D. Th\u1ea5p h\u00e8n"],
    correct: 0
  },
  {
    question: "S\u1ef1 th\u1ed1ng nh\u1ea5t v\u00e0 m\u1ed1i li\u00ean h\u1ec7 h\u1eefu c\u01a1 n\u00e0y c\u00f3 c\u01a1 s\u1edf t\u1eeb s\u1ef1 th\u1ed1ng nh\u1ea5t c\u1ee7a c\u00e1i g\u00ec?",
    answers: ["A. Ch\u00e2n, thi\u1ec7n, m\u1ef9", "B. \u0110\u1eb9p, x\u1ea5u, h\u00e0i", "C. Cao c\u1ea3, bao dung, r\u1ed9ng l\u01b0\u1ee3ng", "D. Bi, h\u00e0i, cao c\u1ea3"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: \u2026.. c\u1ed5 v\u0169 cu\u1ed9c \u0111\u1ea5u tranh cho t\u1ef1 do, cho h\u1ea1nh ph\u00fac tr\u1ea7n gian \u0111\u00edch th\u1ef1c. C\u00f2n \u2026\u2026 khuy\u00ean nh\u1ee7 s\u1ef1 nh\u1eabn nh\u1ee5c, ch\u1ecbu \u0111\u1ef1ng \u0111\u1ec3 h\u1ee9a h\u1eb9n h\u1ea1nh ph\u00fac \u1edf th\u1ebf gi\u1edbi kh\u00e1c?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt/ M\u1ef9 h\u1ecdc", "B. Ngh\u1ec7 thu\u1eadt/ \u0110\u1ea1o \u0111\u1ee9c", "C. Ngh\u1ec7 thu\u1eadt/ Khoa h\u1ecdc", "D. Ngh\u1ec7 thu\u1eadt/ T\u00f4n gi\u00e1o"],
    correct: 3
  },
  {
    question: "Gi\u1eefa ngh\u1ec7 thu\u1eadt v\u00e0 t\u00f4n gi\u00e1o c\u00f3 s\u1ef1 chi ph\u1ed1i, \u1ea3nh h\u01b0\u1edfng l\u1eabn nhau hay kh\u00f4ng?",
    answers: ["A. Kh\u00f4ng", "B. C\u00f3", "C. Kh\u00f4ng ch\u1eafc ch\u1eafn", "D. Kh\u00f4ng bi\u1ebft"],
    correct: 1
  },
  {
    question: "Ai vi\u1ebft: \u201c\u00fd ni\u1ec7m ch\u1eb3ng qua ch\u1ec9 l\u00e0 c\u00e1i v\u1eadt ch\u1ea5t \u0111\u01b0\u1ee3c \u0111em chuy\u1ec3n v\u00e0o trong \u00f3c con ng\u01b0\u1eddi v\u00e0 \u0111\u01b0\u1ee3c c\u1ea3i bi\u1ebfn \u0111i \u1edf trong \u0111\u00f3\u201d?",
    answers: ["A. Kant", "B. M\u00e1c", "C. Arix t\u00f3t", "D. Tsecnu sepxki"],
    correct: 1
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt c\u00f3 vai tr\u00f2 quan tr\u1ecdng trong ho\u1ea1t \u0111\u1ed9ng n\u00e0o?",
    answers: ["A. Th\u1ebf gi\u1edbi nh\u1eadn th\u1ee9c", "B. Tr\u1ea1ng th\u00e1i nh\u1eadn th\u1ee9c", "C. H\u00e0nh \u0111\u1ed9ng nh\u1eadn th\u1ee9c", "D. Ho\u1ea1t \u0111\u1ed9ng nh\u1eadn th\u1ee9c"],
    correct: 3
  },
  {
    question: "Khi di\u1ec5n \u0111\u1ea1t t\u01b0 t\u01b0\u1edfng c\u1ee7a m\u00ecnh v\u1ec1 \u201cThuy\u1ebft b\u1eaft ch\u01b0\u1edbc\", Arixt\u1ed1t c\u0169ng kh\u1eb3ng \u0111\u1ecbnh m\u1ea5y \u0111i\u1ec1u?",
    answers: ["A. M\u1ed9t", "B. Hai", "C. Ba", "D. B\u1ed1n"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Arixtot kh\u1eb3ng \u0111\u1ecbnh r\u1eb1ng: \u2026.?",
    answers: ["A. M\u1ed9t c\u00e1i g\u00ec m\u01a1 h\u1ed3 \u1edf th\u1ebf gi\u1edbi c\u00e1c \u00fd ni\u1ec7m hay \u1edf th\u1ebf gi\u1edbi si\u00eau nghi\u1ec7m", "B. S\u1ef1 th\u00edch th\u00fa th\u1ea9m m\u1ef9 kh\u00f4ng ph\u1ea3i l\u00e0 m\u1ed9t c\u00e1i g\u00ec m\u01a1 h\u1ed3 \u1edf th\u1ebf gi\u1edbi c\u00e1c \u00fd ni\u1ec7m", "C. S\u1ef1 th\u00edch th\u00fa th\u1ea9m m\u1ef9 kh\u00f4ng ph\u1ea3i l\u00e0 m\u1ed9t c\u00e1i g\u00ec m\u01a1 h\u1ed3 \u1edf th\u1ebf gi\u1edbi si\u00eau nghi\u1ec7m", "D. S\u1ef1 th\u00edch th\u00fa th\u1ea9m m\u1ef9 kh\u00f4ng ph\u1ea3i l\u00e0 m\u1ed9t c\u00e1i g\u00ec m\u01a1 h\u1ed3 \u1edf th\u1ebf gi\u1edbi c\u00e1c \u00fd ni\u1ec7m v\u00e0 th\u1ebf gi\u1edbi si\u00eau nghi\u1ec7m"],
    correct: 3
  },
  {
    question: "Mac \u0111\u00e3 kh\u1eb3ng \u0111\u1ecbnh ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. M\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i \u0111\u1eb7c th\u00f9", "B. M\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i \u0111\u1eb7c tr\u01b0ng", "C. M\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i \u0111\u1eb7c s\u1eafc", "D. M\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i \u0111\u1eb7c c\u00f4ng"],
    correct: 0
  },
  {
    question: "Lu\u1eadn \u0111i\u1ec3m c\u01a1 b\u1ea3n c\u1ee7a tri\u1ebft h\u1ecdc M\u00e1c \u2013 L\u00eanin l\u00e0 g\u00ec?",
    answers: ["A. Ph\u01b0\u01a1ng th\u1ee9c s\u1ea3n xu\u1ea5t v\u1eadt ch\u1ea5t quy \u0111\u1ecbnh c\u00e1c qu\u00e1 tr\u00ecnh x\u00e3 h\u1ed9i", "B. Ph\u01b0\u01a1ng th\u1ee9c s\u1ea3n xu\u1ea5t v\u1eadt ch\u1ea5t quy \u0111\u1ecbnh c\u00e1c qu\u00e1 tr\u00ecnh ch\u00ednh tr\u1ecb v\u00e0 tinh th\u1ea7n c\u1ee7a to\u00e0n b\u1ed9 \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i n\u00f3i chung", "C. Ph\u01b0\u01a1ng th\u1ee9c s\u1ea3n xu\u1ea5t v\u1eadt ch\u1ea5t kh\u00f4ng quy \u0111\u1ecbnh c\u00e1c qu\u00e1 tr\u00ecnh tinh th\u1ea7n c\u1ee7a to\u00e0n b\u1ed9 \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i n\u00f3i chung", "D. C\u1ea3 A, B \u0111\u1ec1u \u0111\u00fang"],
    correct: 3
  },
  {
    question: "B\u1ea3n ch\u1ea5t c\u1ee7a ho\u1ea1t \u0111\u1ed9ng nh\u1eadn th\u1ee9c c\u1ee7a ngh\u1ec7 thu\u1eadt v\u1edbi t\u01b0 c\u00e1ch l\u00e0 s\u1ef1 t\u00e1i hi\u1ec7n th\u1ebf gi\u1edbi hi\u1ec7n th\u1ef1c m\u1ed9t c\u00e1ch \u0111\u1eb7c th\u00f9 c\u00f3 th\u1ec3 xem nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. M\u1ed9t lo\u1ea1i ho\u1ea1t \u0111\u1ed9ng b\u1eb1ng c\u00e1ch nh\u00e2n h\u00f3a \u00fd t\u01b0\u1edfng", "B. M\u1ed9t lo\u1ea1i ph\u1ea3n \u00e1nh", "C. M\u1ed9t lo\u1ea1i ho\u1ea1t \u0111\u1ed9ng b\u1eb1ng c\u00e1ch m\u00f4 h\u00ecnh ho\u00e1 \u00fd t\u01b0\u1edfng", "D. C\u1ea3 A, B, C \u0111\u1ec1u \u0111\u00fang"],
    correct: 3
  },
  {
    question: "Trong l\u00fd lu\u1eadn ph\u1ea3n \u00e1nh, L\u00eanin kh\u1eb3ng \u0111\u1ecbnh?",
    answers: ["A. Nh\u1eadn th\u1ee9c l\u00e0 m\u1ed9t qu\u00e1 tr\u00ecnh t\u1eeb tr\u1ef1c quan sinh \u0111\u1ed9ng \u0111\u1ebfn t\u01b0 duy tr\u1eebu t\u01b0\u1ee3ng v\u00e0 t\u1eeb t\u01b0 duy tr\u1eebu t\u01b0\u1ee3ng \u0111\u1ebfn th\u1ef1c ti\u1ec5n", "B. Nh\u1eadn th\u1ee9c l\u00e0 m\u1ed9t qu\u00e1 tr\u00ecnh t\u1eeb tr\u1ef1c quan sinh \u0111\u1ed9ng \u0111\u1ebfn t\u01b0 duy tr\u1eebu t\u01b0\u1ee3ng", "C. Nh\u1eadn th\u1ee9c l\u00e0 m\u1ed9t qu\u00e1 tr\u00ecnh t\u1eeb tr\u1ef1c quan sinh \u0111\u1ed9ng \u0111\u1ebfn t\u01b0 duy tr\u1eebu t\u01b0\u1ee3ng", "D. Nh\u1eadn th\u1ee9c l\u00e0 m\u1ed9t qu\u00e1 tr\u00ecnh t\u1eeb t\u01b0 duy tr\u1eebu t\u01b0\u1ee3ng v\u00e0 t\u1eeb t\u01b0 duy tr\u1eebu t\u01b0\u1ee3ng \u0111\u1ebfn th\u1ef1c ti\u1ec5n"],
    correct: 0
  },
  {
    question: "C\u1ea5u tr\u00fac c\u1ee7a h\u00ecnh t\u01b0\u1ee3ng n\u00e0o h\u01b0\u1edbng v\u00e0o c\u1ea3m quan c\u1ee7a ng\u01b0\u1eddi c\u1ea3m th\u1ee5 \u0111\u1ec3 th\u1ec3 hi\u1ec7n, di\u1ec5n c\u1ea3m l\u00e0m rung \u0111\u1ed9ng t\u00e2m h\u1ed3n ng\u01b0\u1eddi c\u1ea3m th\u1ee5?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt", "B. M\u1ef9 h\u1ecdc", "C. Tri\u1ebft h\u1ecdc", "D. Khoa h\u1ecdc"],
    correct: 0
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Trong h\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt c\u00e1i l\u00fd tr\u00ed ph\u1ea3i \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n b\u1eb1ng\u2026, c\u00f2n t\u00ecnh c\u1ea3m ph\u1ea3i lu\u00f4n \u0111\u01b0\u1ee3c ki\u1ec3m tra b\u1eb1ng\u2026.?",
    answers: ["A. T\u00ecnh c\u1ea3m / l\u00fd tr\u00ed", "B. C\u1ea3m x\u00fac / l\u00fd tr\u00ed", "C. Tinh c\u1ea3m / c\u00e1i \u0111\u1eb9p", "D. T\u00ecnh c\u1ea3m / cu\u1ed9c s\u1ed1ng"],
    correct: 0
  },
  {
    question: "N\u1ed9i dung ngh\u1ec7 thu\u1eadt c\u00f3 \u0111\u1ed3ng nh\u1ea5t v\u1edbi \u0111\u1ed1i t\u01b0\u1ee3ng ph\u1ea3n \u00e1nh hay kh\u00f4ng?",
    answers: ["A. Kh\u00f4ng \u0111\u1ed3ng nh\u1ea5t", "B. C\u00f3 \u0111\u1ed3ng nh\u1ea5t", "C. V\u1eeba kh\u00f4ng \u0111\u1ed3ng nh\u1ea5t, v\u1eeba c\u00f3 \u0111\u1ed3ng nh\u1ea5t", "D. C\u1ea3 A, B \u0111\u1ec1u \u0111\u00fang"],
    correct: 0
  },
  {
    question: "H\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt l\u00e0 ph\u01b0\u01a1ng th\u1ee9c, ph\u01b0\u01a1ng ti\u1ec7n bi\u1ec3u hi\u1ec7n v\u00e0 t\u1ed3n t\u1ea1i y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. C\u1ee7a n\u1ed9i dung", "B. C\u1ee7a h\u00ecnh th\u1ee9c", "C. C\u1ee7a cu\u1ed9c s\u1ed1ng", "D. C\u1ee7a th\u1ea9m m\u1ef9"],
    correct: 0
  },
  {
    question: "C\u00e1i g\u00ec l\u00e0 t\u1ed5ng h\u00f2a c\u00e1c s\u1ef1 ki\u1ec7n c\u00f3 li\u00ean h\u1ec7 li\u00ean nhau theo th\u1eddi gian v\u00e0 kh\u00f4ng gian, \u0111\u01b0\u1ee3c mi\u00eau t\u1ea3 trong t\u00e1c ph\u1ea9m?",
    answers: ["A. V\u0103n h\u1ecdc", "B. C\u1ed1t truy\u1ec7n", "C. Ngh\u1ec7 thu\u1eadt", "D. V\u0103n h\u00f3a"],
    correct: 1
  },
  {
    question: "Ng\u00f4n ng\u1eef ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. H\u1ec7 th\u1ed1ng c\u00e1c ph\u01b0\u01a1ng ti\u1ec7n thi\u00ean nhi\u00ean bi\u1ec3u hi\u1ec7n", "B. Ph\u01b0\u01a1ng ti\u1ec7n x\u00e3 h\u1ed9i bi\u1ec3u hi\u1ec7n \u1edf m\u1ed9t lo\u1ea1i h\u00ecnh ngh\u1ec7 thu\u1eadt nh\u1ea5t \u0111\u1ecbnh", "C. H\u1ec7 th\u1ed1ng c\u00e1c ph\u01b0\u01a1ng ti\u1ec7n v\u1eadt ch\u1ea5t bi\u1ec3u hi\u1ec7n \u1edf m\u1ed9t lo\u1ea1i h\u00ecnh ngh\u1ec7 thu\u1eadt kh\u00f4ng nh\u1ea5t \u0111\u1ecbnh", "D. H\u1ec7 th\u1ed1ng c\u00e1c ph\u01b0\u01a1ng ti\u1ec7n v\u1eadt ch\u1ea5t bi\u1ec3u hi\u1ec7n \u1edf m\u1ed9t lo\u1ea1i h\u00ecnh ngh\u1ec7 thu\u1eadt nh\u1ea5t \u0111\u1ecbnh"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: Gi\u1eefa \u2026 c\u00f3 s\u1ef1 th\u1ed1ng nh\u1ea5t bi\u1ec7n ch\u1ee9ng?",
    answers: ["A. N\u1ed9i dung v\u00e0 h\u00ecnh th\u1ee9c ngh\u1ec7 thu\u1eadt", "B. V\u1eadt ch\u1ea5t v\u00e0 h\u00ecnh th\u1ee9c ngh\u1ec7 thu\u1eadt", "C. T\u01b0 t\u01b0\u1edfng v\u00e0 h\u00ecnh th\u1ee9c ngh\u1ec7 thu\u1eadt", "D. Th\u00e0nh ph\u1ea7n v\u00e0 h\u00ecnh th\u1ee9c ngh\u1ec7 thu\u1eadt"],
    correct: 0
  },
  {
    question: "N\u1ed9i dung \u2013 H\u00ecnh th\u1ee9c trong ngh\u1ec7 thu\u1eadt c\u00f3 xu h\u01b0\u1edbng thay \u0111\u1ed5i nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Kh\u00f4ng m\u1edbi th\u01b0\u1eddng xuy\u00ean", "B. M\u1edbi th\u01b0\u1eddng xuy\u00ean", "C. C\u0169 th\u01b0\u1eddng xuy\u00ean", "D. Kh\u00f4ng th\u01b0\u1eddng xuy\u00ean"],
    correct: 1
  },
  {
    question: "Trong ngh\u1ec7 thu\u1eadt h\u00ecnh th\u1ee9c c\u00f3 \u1ea3nh h\u01b0\u1edfng nh\u01b0 th\u1ebf n\u00e0o \u0111\u1ebfn n\u1ed9i dung?",
    answers: ["A. Ti\u00eau c\u1ef1c", "B. T\u00edch c\u1ef1c", "C. T\u00edch c\u1ef1c ho\u1eb7c ti\u00eau c\u1ef1c", "D. Kh\u00f4ng t\u00edch c\u1ef1c ho\u1eb7c kh\u00f4ng ti\u00eau c\u1ef1c"],
    correct: 2
  },
  {
    question: "N\u00eau c\u00e1c lo\u1ea1i h\u00ecnh ngh\u1ec7 thu\u1eadt?",
    answers: ["A. Ki\u1ebfn tr\u00fac, \u0111i\u00eau kh\u1eafc, h\u1ed9i h\u1ecda", "B. V\u0103n h\u1ecdc, k\u1ecbch, \u00e2m nh\u1ea1c", "C. M\u00faa, \u0111i\u1ec7n \u1ea3nh, phim truy\u1ec1n h\u00ecnh, s\u00e2n kh\u1ea5u truy\u1ec1n h\u00ecnh", "D. C\u1ea3 A, B, C \u0111\u1ec1u \u0111\u00fang"],
    correct: 3
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt ki\u1ebfn tr\u00fac l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 m\u1ed9t ngh\u1ec7 thu\u1eadt nh\u1eb1m k\u1ebft h\u1ee3p c\u00e1i \u0111\u1eb9p v\u1edbi c\u00e1i th\u1ef1c d\u1ee5ng \u0111\u1ec3 s\u00e1ng t\u1ea1o kh\u00f4ng gian sinh t\u1ed3n c\u1ee7a con ng\u01b0\u1eddi", "B. L\u00e0 hai ngh\u1ec7 thu\u1eadt nh\u1eb1m k\u1ebft h\u1ee3p c\u00e1i \u0111\u1eb9p v\u1edbi c\u00e1i kh\u00f4ng th\u1ef1c d\u1ee5ng \u0111\u1ec3 s\u00e1ng t\u1ea1o kh\u00f4ng gian sinh t\u1ed3n c\u1ee7a con ng\u01b0\u1eddi", "C. L\u00e0 m\u1ed9t ngh\u1ec7 thu\u1eadt nh\u1eb1m k\u1ebft h\u1ee3p c\u00e1i \u0111\u1eb9p v\u1edbi c\u00e1i th\u1ef1c d\u1ee5ng", "D. L\u00e0 m\u1ed9t ngh\u1ec7 thu\u1eadt nh\u1eb1m k\u1ebft h\u1ee3p c\u00e1i th\u1ef1c d\u1ee5ng \u0111\u1ec3 s\u00e1ng t\u1ea1o kh\u00f4ng gian sinh t\u1ed3n c\u1ee7a con ng\u01b0\u1eddi"],
    correct: 0
  },
  {
    question: "\u0110i\u00eau kh\u1eafc l\u00e0 g\u00ec?",
    answers: ["A. L\u00e0 ngh\u1ec7 thu\u1eadt t\u1ea1o h\u00ecnh b\u1eb1ng c\u00e1ch ph\u1ed1i m\u1ea3ng, kh\u1ed1i, n\u00e9t trong kh\u00f4ng gian kh\u00f4ng \u0111a chi\u1ec1u", "B. L\u00e0 ngh\u1ec7 thu\u1eadt t\u1ea1o h\u00ecnh b\u1eb1ng c\u00e1ch ph\u1ed1i m\u1ea3ng, kh\u1ed1i trong kh\u00f4ng gian \u0111a chi\u1ec1u", "C. L\u00e0 ngh\u1ec7 thu\u1eadt t\u1ea1o h\u00ecnh b\u1eb1ng c\u00e1ch ph\u1ed1i n\u00e9t trong kh\u00f4ng gian \u0111a chi\u1ec1u", "D. L\u00e0 ngh\u1ec7 thu\u1eadt t\u1ea1o h\u00ecnh b\u1eb1ng c\u00e1ch ph\u1ed1i m\u1ea3ng, kh\u1ed1i, n\u00e9t trong kh\u00f4ng gian \u0111a chi\u1ec1u"],
    correct: 3
  },
  {
    question: "H\u1ed9i h\u1ecda l\u00e0 ngh\u1ec7 thu\u1eadt ph\u00e1t tri\u1ec3n kh\u1ea3 n\u0103ng g\u00ec?",
    answers: ["A. Th\u01b0\u1eddng ngo\u1ea1n t\u1ed1i \u0111a c\u1ee7a th\u1ecb gi\u00e1c tr\u1ef1c ti\u1ebfp v\u00e0 c\u1ea3m quan c\u1ee5 th\u1ec3 \u0111\u1ed1i v\u1edbi nh\u00e2n v\u1eadt l\u00e0 hi\u1ec7n t\u01b0\u1ee3ng t\u00e1i hi\u1ec7n trong tranh", "B. Th\u01b0\u1eddng ngo\u1ea1n t\u1ed1i thi\u1ec3u c\u1ee7a th\u1ecb gi\u00e1c tr\u1ef1c ti\u1ebfp v\u00e0 c\u1ea3m quan c\u1ee5 th\u1ec3 \u0111\u1ed1i v\u1edbi nh\u00e2n v\u1eadt l\u00e0 hi\u1ec7n t\u01b0\u1ee3ng t\u00e1i hi\u1ec7n trong tranh", "C. Th\u01b0\u1eddng ngo\u1ea1n t\u1ed1i \u0111a c\u1ee7a kh\u1ee9u gi\u00e1c tr\u1ef1c ti\u1ebfp v\u00e0 c\u1ea3m quan c\u1ee5 th\u1ec3 \u0111\u1ed1i v\u1edbi nh\u00e2n v\u1eadt l\u00e0 hi\u1ec7n t\u01b0\u1ee3ng t\u00e1i hi\u1ec7n trong tranh", "D. Th\u01b0\u1eddng ngo\u1ea1n t\u1ed1i \u0111a c\u1ee7a v\u1ecb gi\u00e1c tr\u1ef1c ti\u1ebfp v\u00e0 c\u1ea3m quan c\u1ee5 th\u1ec3 \u0111\u1ed1i v\u1edbi nh\u00e2n v\u1eadt l\u00e0 hi\u1ec7n t\u01b0\u1ee3ng t\u00e1i hi\u1ec7n trong tranh"],
    correct: 0
  },
  {
    question: "\u00c2m nh\u1ea1c l\u00e0 ngh\u1ec7 thu\u1eadt g\u00ec?",
    answers: ["A. Kh\u1ee9u gi\u00e1c", "B. Th\u00ednh gi\u00e1c", "C. V\u1ecb gi\u00e1c", "D. Ng\u0169 gi\u00e1c"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: K\u1ecbch l\u00e0 ngh\u1ec7 thu\u1eadt t\u00e1i hi\u1ec7n \u2026?",
    answers: ["A. C\u00e1c c\u1ea3nh hu\u1ed1ng c\u1ee7a cu\u1ed9c \u0111\u1eddi, c\u00e1c t\u00ednh c\u00e1ch, c\u00e1c s\u1ed1 ph\u1eadn con ng\u01b0\u1eddi", "B. C\u00e1c c\u1ea3nh hu\u1ed1ng c\u1ee7a cu\u1ed9c \u0111\u1eddi, c\u00e1c s\u1ed1 ph\u1eadn con ng\u01b0\u1eddi", "C. C\u00e1c c\u00e1c t\u00ednh c\u00e1ch, c\u00e1c s\u1ed1 ph\u1eadn con ng\u01b0\u1eddi", "D. C\u00e1c c\u1ea3nh hu\u1ed1ng c\u1ee7a cu\u1ed9c \u0111\u1eddi, c\u00e1c t\u00ednh c\u00e1ch"],
    correct: 0
  },
  {
    question: "M\u1ef9 h\u1ecdc nghi\u00ean c\u1ee9u c\u00e1i g\u00ec?",
    answers: ["A. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a th\u1ebf gi\u1edbi v\u1edbi hi\u1ec7n th\u1ef1c", "B. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi v\u1edbi hi\u1ec7n th\u1ef1c", "C. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a con ng\u01b0\u1eddi", "D. Quan h\u1ec7 th\u1ea9m m\u1ef9 c\u1ee7a hi\u1ec7n th\u1ef1c"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: M\u1ef9 h\u1ecdc l\u00e0 b\u1ed9 m\u00f4n khoa h\u1ecdc c\u00f3 t\u00ednh l\u00fd thuy\u1ebft g\u00ec?",
    answers: ["A. S\u1ef1 th\u01b0\u1edfng th\u1ee9c v\u00e0 nh\u1eadn th\u1ee9c v\u1ec1 c\u00e1i \u0111\u1eb9p", "B. S\u1ef1 nh\u1eadn th\u1ee9c ho\u1eb7c th\u01b0\u1edfng th\u1ee9c c\u00e1i \u0111\u1eb9p", "C. S\u1ef1 nh\u1eadn th\u1ee9c v\u00e0 th\u01b0\u1edfng th\u1ee9c c\u00e1i \u0111\u1eb9p", "D. S\u1ef1 nh\u1eadn th\u1ee9c, th\u1ee5 h\u01b0\u1edfng v\u00e0 th\u01b0\u1edfng th\u1ee9c c\u00e1i \u0111\u1eb9p"],
    correct: 2
  },
  {
    question: "T\u1eeb khi h\u00ecnh th\u00e0nh khoa h\u1ecdc tri\u1ebft h\u1ecdc cho \u0111\u1ebfn th\u1ebf k\u1ef7 th\u1ee9 XVIII, t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc c\u00f3 ph\u1ea3i l\u00e0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng nghi\u00ean c\u1ee9u ri\u00eang kh\u00f4ng hay ch\u1ec9 nh\u01b0 m\u1ed9t ph\u1ea7n c\u1ee7a tri\u1ebft h\u1ecdc?",
    answers: ["A. C\u00f3", "B. Kh\u00f4ng", "C. Kh\u00f4ng bi\u1ebft", "D. T\u1ea5t c\u1ea3 c\u00e1c \u00fd tr\u00ean"],
    correct: 0
  },
  {
    question: "L\u00e0 m\u1ed9t khoa h\u1ecdc tri\u1ebft h\u1ecdc, m\u1ef9 h\u1ecdc c\u00f3 quan h\u1ec7 tr\u01b0\u1edbc nh\u1ea5t v\u1edbi g\u00ec?",
    answers: ["A. S\u1eed h\u1ecdc", "B. Khoa h\u1ecdc", "C. Tri\u1ebft h\u1ecdc", "D. M\u1ef9 h\u1ecdc"],
    correct: 2
  },
  {
    question: "M\u1ef9 h\u1ecdc c\u00f3 quan h\u1ec7 m\u1eadt thi\u1ebft v\u1edbi c\u00e1c m\u00f4n khoa h\u1ecdc kh\u00e1c hay kh\u00f4ng?",
    answers: ["A. C\u00f3", "B. Kh\u00f4ng", "C. T\u01b0\u01a1ng \u0111\u1ed1i", "D. Ho\u00e0n to\u00e0n kh\u00f4ng"],
    correct: 0
  },
  {
    question: "C\u00e1c t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc Hy L\u1ea1p c\u1ed5 \u0111\u1ea1i ban \u0111\u1ea7u h\u00ecnh th\u00e0nh \u1edf \u0111\u00e2u?",
    answers: ["A. D\u1ea3i \u0111\u1ea5t I\u00f4ni, ph\u00eda t\u00e2y \u0110\u1ecba Trung H\u1ea3i", "B. D\u1ea3i \u0111\u1ea5t I\u00f4ni, ph\u00eda \u0111\u00f4ng \u0110\u1ecba Trung H\u1ea3i", "C. D\u1ea3i \u0111\u1ea5t I\u00f4ni, ph\u00eda nam \u0110\u1ecba Trung H\u1ea3i", "D. D\u1ea3i \u0111\u1ea5t I\u00f4ni, ph\u00eda b\u1eafc \u0110\u1ecba Trung H\u1ea3i"],
    correct: 1
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi \u0111\u00e3 ch\u1ee9ng minh b\u1eb1ng hi\u1ec7n t\u01b0\u1ee3ng ch\u1ea5t l\u01b0\u1ee3ng \u00e2m thanh ph\u1ee5 thu\u1ed9c v\u00e0o chi\u1ec1u d\u00e0i d\u00e2y \u0111\u00e0n v\u00e0 t\u00ecm ra quan h\u1ec7 s\u1ed1 l\u01b0\u1ee3ng trong \u00e2m nh\u1ea1c nh\u01b0 qu\u00e3ng t\u00e1m: 1:2; qu\u00e3ng n\u0103m: 2:3; qu\u00e3ng b\u1ed1n: 3:4?",
    answers: ["A. Pitago", "B. Trecneexpkki", "C. Platon", "D. Kant"],
    correct: 0
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi cho r\u1eb1ng l\u1eeda l\u00e0 kh\u1edfi nguy\u00ean c\u1ee7a v\u0169 tr\u1ee5, th\u1ebf gi\u1edbi t\u1ed3n t\u1ea1i l\u00e0 do ng\u1ecdn l\u1eeda v\u1eadn \u0111\u1ed9ng v\u0129nh c\u1eedu?",
    answers: ["A. Trecneexpkki", "B. Platon", "C. Kant", "D. H\u00earaclit"],
    correct: 3
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: H\u00earaclit \u0111\u01b0\u1ee3c coi l\u00e0 m\u1ed9t trong nh\u1eefng \u2026.. gi\u1ea3i th\u00edch c\u00e1c kh\u00e1i ni\u1ec7m th\u1ea9m m\u1ef9 theo xu h\u01b0\u1edbng duy v\u1eadt v\u00e0 c\u00f3 t\u00ednh ch\u1ea5t bi\u1ec7n ch\u1ee9ng s\u01a1 khai?",
    answers: ["A. \u0110\u1ea1i bi\u1ec3u trung gian", "B. \u0110\u1ea1i bi\u1ec3u g\u01b0\u01a1ng m\u1eabu", "C. \u0110\u1ea1i bi\u1ec3u s\u1edbm nh\u1ea5t", "D. \u0110\u1ea1i bi\u1ec3u sau c\u00f9ng"],
    correct: 2
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi coi ngh\u1ec7 thu\u1eadt nh\u01b0 m\u1ed9t ph\u01b0\u01a1ng di\u1ec7n quan tr\u1ecdng c\u1ee7a \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i?",
    answers: ["A. X\u1ed1c Xocratpyyp", "B. Xocrattpor", "C. X\u00f4crat", "D. Xitp\u00f4crat"],
    correct: 2
  },
  {
    question: "Plat\u00f4n cho r\u1eb1ng, c\u00e1c v\u1eadt th\u1ee5 c\u1ea3m thay \u0111\u1ed5i, tho\u00e1ng qua, n\u00f3 xu\u1ea5t hi\u1ec7n r\u1ed3i ti\u00eau bi\u1ebfn, v\u00ec th\u1ebf n\u00f3 c\u00f3 t\u1ed3n t\u1ea1i \u0111\u00edch th\u1ef1c hay kh\u00f4ng?",
    answers: ["A. Kh\u00f4ng", "B. C\u00f3", "C. Kh\u00f4ng ch\u1eafc ch\u1eafn", "D. Kh\u00f4ng bi\u1ebft"],
    correct: 0
  },
  {
    question: "Tri\u1ebft h\u1ecdc c\u1ed5 \u0111i\u1ec3n \u0110\u1ee9c, ai l\u00e0 nh\u00e0 tri\u1ebft h\u1ecdc v\u0129 \u0111\u1ea1i nh\u1ea5t c\u1ee7a l\u1ecbch s\u1eed tri\u1ebft h\u1ecdc tr\u01b0\u1edbc M\u00e1c?",
    answers: ["A. Xecvantec (1547\u20131616)", "B. Uyliam S\u1ebfchxpia (1564\u20131616)", "C. Kant (1724\u20131804)", "D. L\u00ea\u00f4na \u0111\u01a1 Vanhxi (1452\u20131529)"],
    correct: 2
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi ph\u00e2n bi\u1ec7t ngh\u1ec7 thu\u1eadt l\u00e0 ho\u1ea1t \u0111\u1ed9ng t\u1ef1 do, th\u1ee7 c\u00f4ng l\u00e0 ho\u1ea1t \u0111\u1ed9ng \u0111\u1ec3 ki\u1ebfm s\u1ed1ng?",
    answers: ["A. Arixtot", "B. X\u00f4crat", "C. Kant", "D. \u0110\u00ea-m\u00f4-cr\u00edt"],
    correct: 2
  },
  {
    question: "M\u00e1c \u2013 \u0102ngghen \u0111\u01b0a ra m\u1ea5y b\u1ea3n ch\u1ea5t c\u1ee7a ngh\u1ec7 thu\u1eadt?",
    answers: ["A. 2", "B. 3", "C. 4", "D. 5"],
    correct: 0
  },
  {
    question: "S\u1ef1 c\u1ed1ng hi\u1ebfn c\u01a1 b\u1ea3n c\u1ee7a c\u00e1c nh\u00e0 tri\u1ebft h\u1ecdc n\u00e0o m\u00e0 h\u1ecd \u0111\u00e3 t\u00ecm c\u00e1ch l\u00fd gi\u1ea3i b\u1eb1ng ph\u00e9p bi\u1ec7n ch\u1ee9ng nh\u1eefng v\u1ea5n \u0111\u1ec1 ch\u1ee7 y\u1ebfu nh\u1ea5t c\u1ee7a m\u1ef9 h\u1ecdc?",
    answers: ["A. Duy t\u00e2m Ph\u00e1p", "B. Duy v\u1eadt \u0110\u1ee9c", "C. Duy t\u00e2m \u0110\u1ee9c", "D. Duy t\u00e2m Nga"],
    correct: 2
  },
  {
    question: "C\u00e2u \u0111\u1ecbnh ngh\u0129a n\u1ed5i ti\u1ebfng n\u00e0o l\u00e0 \u0111\u1ec9nh cao c\u1ee7a t\u01b0 t\u01b0\u1edfng m\u1ef9 h\u1ecdc th\u1ebf k\u1ef7 XIX?",
    answers: ["A. \u201cC\u00e1i \u0111\u1eb9p l\u00e0 l\u00fd t\u01b0\u1edfng\u201d", "B. \u201cC\u00e1i \u0111\u1eb9p l\u00e0 cu\u1ed9c s\u1ed1ng\u201d", "C. \u201cC\u00e1i \u0111\u1eb9p l\u00e0 thi\u00ean nhi\u00ean\u201d", "D. \u201cC\u00e1i \u0111\u1eb9p l\u00e0 x\u00e3 h\u1ed9i\u201d"],
    correct: 1
  },
  {
    question: "Lao \u0111\u1ed9ng c\u00f3 y\u1ebfu t\u1ed1 n\u00e0o c\u1ee7a con ng\u01b0\u1eddi \u0111\u00e3 g\u1eafn li\u1ec1n v\u1edbi quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p? E. Ho\u1ea1t \u0111\u1ed9ng gi\u1ea3i tr\u00ed",
    answers: ["A. M\u1ee5c ti\u00eau, c\u00f3 s\u00e1ng t\u1ea1o", "B. M\u1ee5c \u0111\u00edch, c\u00f3 s\u00e1ng t\u1ea1o", "C. M\u1ee5c \u0111\u00edch, kh\u00f4ng s\u00e1ng t\u1ea1o", "D. M\u1ee5c \u0111\u00edch ho\u1eb7c c\u00f3 s\u00e1ng t\u1ea1o"],
    correct: 1
  },
  {
    question: "Lao \u0111\u1ed9ng gi\u00fap con ng\u01b0\u1eddi \u0111\u01b0\u1ee3c t\u1ef1 do v\u1ec1 kinh t\u1ebf, v\u1ec1 ch\u00ednh tr\u1ecb, m\u1edbi c\u00f3 th\u1ec3 t\u1ef1 do v\u1ec1 g\u00ec?",
    answers: ["A. T\u1ef1 do v\u1ec1 kinh t\u1ebf m\u1edbi c\u00f3 th\u1ec3 t\u1ef1 do v\u1ec1 s\u00e1ng t\u1ea1o", "B. T\u1ef1 do v\u1ec1 kinh t\u1ebf, v\u1ec1 ch\u00ednh tr\u1ecb", "C. T\u1ef1 do v\u1ec1 ch\u00ednh tr\u1ecb, m\u1edbi c\u00f3 th\u1ec3 t\u1ef1 do v\u1ec1 s\u00e1ng t\u1ea1o", "D. T\u1ef1 do v\u1ec1 s\u00e1ng t\u1ea1o v\u00e0 h\u01b0\u1edfng th\u1ee5 c\u00e1i \u0111\u1eb9p v\u00e0 ngh\u1ec7 thu\u1eadt"],
    correct: 3
  },
  {
    question: "\u201c\u0110\u1eb9p l\u00e0 coi c\u00e1i \u0111\u1eb9p nh\u01b0 s\u1ef1 b\u1eaft ch\u01b0\u1edbc t\u1ef1 nhi\u00ean\u201d l\u00e0 l\u00fd thuy\u1ebft \u0111\u01a1n gi\u1ea3n v\u1ec1 c\u00e1i g\u00ec trong m\u1ef9 h\u1ecdc?",
    answers: ["A. C\u00e1i cao c\u1ea3", "B. C\u00e1i \u0111\u1eb9p", "C. C\u00e1i h\u00e0i", "D. C\u00e1i bi"],
    correct: 1
  },
  {
    question: "L\u00fd thuy\u1ebft n\u00e0o v\u1ec1 c\u00e1i \u0111\u1eb9p th\u00ec cho r\u1eb1ng m\u1ed9t v\u1eadt ch\u1ec9 \u0111\u1eb9p khi c\u00f3 h\u00ecnh th\u1ee9c ph\u00f9 h\u1ee3p v\u1edbi c\u00f4ng d\u1ee5ng c\u1ee7a n\u00f3?",
    answers: ["A. \u201cHi\u1ec7n \u0111\u1ea1i\u201d", "B. \u201cC\u1ed5 \u0111i\u1ec3n\u201d", "C. \u201cPh\u1ee5c h\u01b0ng\u201d", "D. \u201cGiai c\u1ea5p\u201d"],
    correct: 0
  },
  {
    question: "L\u00fd thuy\u1ebft n\u00e0o ho\u00e0n to\u00e0n tr\u00e1i ng\u01b0\u1ee3c v\u1edbi quan \u0111i\u1ec3m c\u1ee7a Oscar Wilde?",
    answers: ["A. L\u00fd thuy\u1ebft \u201chi\u1ec7n \u0111\u1ea1i\u201d v\u1ec1 c\u00e1i h\u00e0i", "B. L\u00fd thuy\u1ebft \u201chi\u1ec7n \u0111\u1ea1i\u201d v\u1ec1 c\u00e1i bi", "C. L\u00fd thuy\u1ebft \u201chi\u1ec7n \u0111\u1ea1i\u201d v\u1ec1 c\u00e1i x\u1ea5u", "D. L\u00fd thuy\u1ebft \u201chi\u1ec7n \u0111\u1ea1i\u201d v\u1ec1 c\u00e1i \u0110\u1eb9p"],
    correct: 3
  },
  {
    question: "C\u00f3 m\u1ea5y b\u00ecnh di\u1ec7n trong c\u00e1i \u0111\u1eb9p c\u1ee7a m\u1ef9 h\u1ecdc?",
    answers: ["A. 2", "B. 3", "C. 4", "D. 5"],
    correct: 2
  },
  {
    question: "M\u1ef9 h\u1ecdc n\u00e0o gi\u1ea3i th\u00edch t\u00e1c \u0111\u1ed9ng c\u1ee7a c\u00e1i \u0111\u1eb9p \u0111\u1ebfn con ng\u01b0\u1eddi b\u1eb1ng quan ni\u1ec7m cho r\u1eb1ng \u1edf c\u00e1i \u0111\u1eb9p b\u1ed9c l\u1ed9 nh\u1eefng s\u1ee9c m\u1ea1nh t\u00e2m linh si\u00eau nhi\u00ean?",
    answers: ["A. Duy v\u1eadt bi\u1ec7n ch\u1ee9ng", "B. Duy v\u1eadt", "C. Duy \u00fd ch\u00ed", "D. Duy t\u00e2m"],
    correct: 3
  },
  {
    question: "Trong th\u1ef1c t\u1ebf l\u1ecbch s\u1eed m\u1ef9 h\u1ecdc n\u00f3i ri\u00eang v\u00e0 tri\u1ebft h\u1ecdc n\u00f3i chung, quan ni\u1ec7m v\u1ec1 c\u00e1i \u0111\u1eb9p c\u00f3 th\u1ed1ng nh\u1ea5t hay kh\u00f4ng?",
    answers: ["A. Th\u1ed1ng nh\u1ea5t", "B. Kh\u00f4ng th\u1ed1ng nh\u1ea5t", "C. Kh\u00f4ng quan \u0111i\u1ec3m", "D. Kh\u00f4ng \u0111\u1ed3ng nh\u1ea5t"],
    correct: 1
  },
  {
    question: "M\u1ef9 h\u1ecdc duy v\u1eadt th\u1ec3 hi\u1ec7n m\u1ea5y xu h\u01b0\u1edbng nh\u00ecn nh\u1eadn c\u00e1i \u0111\u1eb9p?",
    answers: ["A. 2", "B. 3", "C. 4", "D. 5"],
    correct: 0
  },
  {
    question: "Ai l\u00e0 ng\u01b0\u1eddi n\u00eau \u0111\u1ecbnh \u0111\u1ec1 n\u1ed5i ti\u1ebfng \u201ccon ng\u01b0\u1eddi c\u0169ng s\u00e1ng t\u1ea1o theo quy lu\u1eadt c\u1ee7a c\u00e1i \u0111\u1eb9p\u201d?",
    answers: ["A. Kal - Marx", "B. Marx", "C. Karl", "D. Karl Marx"],
    correct: 3
  },
  {
    question: "V\u00ec sao H\u00eaghen \u2013 nh\u00e0 duy t\u00e2m kh\u00e1ch quan ng\u01b0\u1eddi \u0110\u1ee9c m\u1eb7c d\u00f9 th\u1eeba nh\u1eadn c\u00e1i \u0111\u1eb9p c\u1ee7a t\u1ef1 nhi\u00ean, nh\u01b0ng \u00f4ng l\u1ea1i lo\u1ea1i tr\u1eeb n\u00f3 ra kh\u1ecfi \u0111\u1ed1i t\u01b0\u1ee3ng nghi\u00ean c\u1ee9u c\u1ee7a m\u1ef9 h\u1ecdc?",
    answers: ["A. V\u00ec cho r\u1eb1ng c\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean kh\u00f4ng ph\u1ea3n \u00e1nh c\u00e1i \u0111\u1eb9p thu\u1ed9c v\u1ec1 tinh th\u1ea7n", "B. V\u00ec cho r\u1eb1ng c\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean ch\u1ec9 l\u00e0 ph\u1ea3n \u00e1nh c\u00e1i \u0111\u1eb9p thu\u1ed9c v\u1ec1 tinh th\u1ea7n", "C. V\u00ec cho r\u1eb1ng c\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean ch\u1ec9 l\u00e0 ph\u1ea3n \u00e1nh c\u00e1i \u0111\u1eb9p thu\u1ed9c v\u1ec1 v\u1eadt ch\u1ea5t", "D. V\u00ec cho r\u1eb1ng c\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean ch\u1ec9 l\u00e0 ph\u1ea3n \u00e1nh c\u00e1i \u0111\u1eb9p thu\u1ed9c v\u1ec1 nhu c\u1ea7u s\u1eed d\u1ee5ng"],
    correct: 1
  },
  {
    question: " Ai l\u00e0 ng\u01b0\u1eddi kh\u1eb3ng \u0111\u1ecbnh c\u00e1i \u0111\u1eb9p trong t\u1ef1 nhi\u00ean h\u1ea5p d\u1eabn h\u01a1n c\u00e1i \u0111\u1eb9p trong ngh\u1ec7 thu\u1eadt?",
    answers: ["A. H\u00earaclit", "B. Platon", "C. H\u00eaghen", "D. Kant"],
    correct: 2
  },
  {
    question: "Arixxtot \u0111\u00e3 b\u1ed5 sung c\u00e1c d\u1ea5u hi\u1ec7u c\u1ee7a c\u00e1i \u0111\u1eb9p bao g\u1ed3m nh\u1eefng y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. H\u00f2a nh\u1ecbp, c\u00e2n x\u1ee9ng, x\u00e1c \u0111\u1ecbnh", "B. H\u00f2a nh\u1ecbp, x\u00e1c \u0111\u1ecbnh, ch\u00ednh th\u1ec3", "C. C\u00e2n x\u1ee9ng, x\u00e1c \u0111\u1ecbnh, ch\u00ednh th\u1ec3", "D. H\u00f2a nh\u1ecbp, c\u00e2n x\u1ee9ng, x\u00e1c \u0111\u1ecbnh, ch\u00ednh th\u1ec3"],
    correct: 3
  },
  {
    question: "Tr\u01b0\u1edbc \u0111\u1ed1i t\u01b0\u1ee3ng h\u00e0i, t\u00f9y quy m\u00f4 v\u00e0 m\u1ee9c \u0111\u1ed9 vi ph\u1ea1m c\u1ee7a n\u00f3 v\u00e0o chu\u1ea9n m\u1ef1c th\u1ea9m m\u1ef9 t\u00edch c\u1ef1c, ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9 x\u1eed l\u00fd b\u1eb1ng c\u00e1c h\u00ecnh th\u1ee9c n\u00e0o?",
    answers: ["A. \u0110\u1ea3 k\u00edch; M\u1ec9a mai, ch\u00e2m bi\u1ebfm; B\u00f4ng \u0111\u00f9a h\u00e0i h\u01b0\u1edbc", "B. M\u1ec9a mai, ch\u00e2m bi\u1ebfm; B\u00f4ng \u0111\u00f9a h\u00e0i h\u01b0\u1edbc", "C. \u0110\u1ea3 k\u00edch; B\u00f4ng \u0111\u00f9a h\u00e0i h\u01b0\u1edbc", "D. \u0110\u1ea3 k\u00edch; M\u1ec9a mai, ch\u00e2m bi\u1ebfm"],
    correct: 0
  },
  {
    question: "\u0110\u1ec3 tr\u1edf th\u00e0nh ch\u1ee7 th\u1ec3 th\u1ea9m m\u1ef9, th\u00f4ng th\u01b0\u1eddng ch\u1ee7 th\u1ec3 x\u00e3 h\u1ed9i ph\u1ea3i v\u01b0\u1ee3t qua tr\u1ea1ng th\u00e1i g\u00ec?",
    answers: ["A. \u1ee8ng d\u1ee5ng", "B. Th\u1ef1c thi", "C. Th\u1ef1c d\u1ee5ng", "D. Th\u1ef1c v\u1eadt"],
    correct: 2
  },
  {
    question: "C\u01a1 s\u1edf kh\u00e1ch quan c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng th\u1ea9m m\u1ef9 l\u00e0 g\u00ec?",
    answers: ["A. Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9", "B. C\u1ea3m x\u00fac th\u1ea9m m\u1ef9", "C. Nhu c\u1ea7u th\u1ea9m m\u1ef9", "D. C\u1ea3m t\u00ednh th\u1ea9m m\u1ef9"],
    correct: 1
  },
  {
    question: "So v\u1edbi c\u1ea3m x\u00fac th\u1ea9m m\u1ef9, th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Kh\u00f4ng \u1ed5n \u0111\u1ecbnh v\u00e0 b\u1ec1n v\u1eefng h\u01a1n", "B. Ki\u00ean \u0111\u1ecbnh v\u00e0 b\u1ec1n v\u1eefng h\u01a1n", "C. \u1ed4n \u0111\u1ecbnh v\u00e0 ch\u1eb7t ch\u1ebd h\u01a1n", "D. \u1ed4n \u0111\u1ecbnh v\u00e0 b\u1ec1n v\u1eefng h\u01a1n"],
    correct: 3
  },
  {
    question: "Th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 nghi\u00eang v\u1ec1 ph\u00eda t\u00ednh c\u1ea3m s\u1ebd nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. Thay \u0111\u1ed5i nhanh", "B. Thay \u0111\u1ed5i v\u1eeba", "C. Thay \u0111\u1ed5i ch\u1eadm", "D. Thay \u0111\u1ed5i c\u1ef1c nhanh"],
    correct: 0
  },
  {
    question: "Ng\u01b0\u1eddi c\u00f3 th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 ph\u00e1t tri\u1ec3n cao, m\u1ed9t m\u1eb7t do xu\u1ea5t ph\u00e1t t\u1eeb \u0111\u00e2u?",
    answers: ["A. B\u1ea3n n\u0103ng nh\u1ea1y c\u1ea3m kh\u00e1c nhau \u0111\u1ed1i v\u1edbi th\u1ebf gi\u1edbi", "B. B\u1ea3n n\u0103ng nh\u1ea1y c\u1ea3m kh\u00e1c nhau \u0111\u1ed1i v\u1edbi th\u1ebf gi\u1edbi h\u00f2a b\u00ecnh", "C. B\u1ea3n n\u0103ng nh\u1ea1y c\u1ea3m kh\u00e1c nhau \u0111\u1ed1i v\u1edbi th\u1ebf gi\u1edbi xung quanh", "D. B\u1ea3n n\u0103ng kh\u00f4ng nh\u1ea1y c\u1ea3m kh\u00e1c nhau \u0111\u1ed1i v\u1edbi th\u1ebf gi\u1edbi xung quanh"],
    correct: 2
  },
  {
    question: "S\u1ef1 th\u1ea5p k\u00e9m v\u1ec1 th\u1ecb hi\u1ebfu th\u1ea9m m\u1ef9 c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c kh\u1eafc ph\u1ee5c m\u1ed9t m\u1ee9c \u0111\u1ed9 l\u1edbn b\u1edfi s\u1ef1 thay \u0111\u1ed5i nh\u1eefng \u0111i\u1ec1u ki\u1ec7n n\u00e0o?",
    answers: ["A. Ch\u00ednh tr\u1ecb \u2013 x\u00e3 h\u1ed9i", "B. Kinh t\u1ebf \u2013 x\u00e3 h\u1ed9i", "C. Kinh t\u1ebf \u2013 cu\u1ed9c s\u1ed1ng", "D. X\u00e3 h\u1ed9i \u2013 cu\u1ed9c s\u1ed1ng"],
    correct: 1
  },
  {
    question: "Trong m\u1ef9 h\u1ecdc m\u1ed1t c\u00f3 li\u00ean h\u1ec7 ch\u1eb7t ch\u1ebd v\u1edbi g\u00ec?",
    answers: ["A. Truy\u1ec1n th\u1ed1ng v\u0103n ngh\u1ec7", "B. Truy\u1ec1n th\u1ed1ng v\u0103n h\u00f3a", "C. Truy\u1ec1n th\u1ed1ng c\u1ed5 x\u01b0a", "D. Truy\u1ec1n th\u1ed1ng m\u1ef9 h\u1ecdc"],
    correct: 1
  },
  {
    question: "H\u00e3y \u0111i\u1ec1n ti\u1ebfp v\u00e0o n\u1ed9i dung c\u00f2n thi\u1ebfu sau: \u0110\u00e1nh gi\u00e1 th\u1ea9m m\u1ef9 c\u00f3 c\u00e1c chu\u1ea9n m\u1ef1c \u0111\u00e1nh gi\u00e1 c\u00f3 th\u1ec3 \u2026., c\u00f3 th\u1ec3 \u2026.?",
    answers: ["A. N\u1eb7ng v\u1ec1 c\u1ea3m t\u00ednh/ N\u1eb7ng v\u1ec1 l\u00fd t\u00ednh", "B. N\u1eb7ng v\u1ec1 suy ngh\u0129/ N\u1eb7ng v\u1ec1 tinh th\u1ea7n", "C. N\u1eb7ng v\u1ec1 t\u00ecnh c\u1ea3m/ N\u1eb7ng v\u1ec1 c\u1ea3m x\u00fac", "D. N\u1eb7ng v\u1ec1 c\u1ea3m nh\u1eadn/ N\u1eb7ng v\u1ec1 c\u1ea3m t\u00ednh"],
    correct: 0
  },
  {
    question: "Trong c\u00e1c chu\u1ea9n m\u1ef1c c\u1ee7a m\u1ef9 h\u1ecdc, chu\u1ea9n m\u1ef1c n\u00e0o cao nh\u1ea5t?",
    answers: ["A. L\u00fd t\u01b0\u1edfng c\u00e1 nh\u00e2n", "B. L\u00fd t\u01b0\u1edfng m\u1ef9 h\u1ecdc", "C. L\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9", "D. L\u00fd t\u01b0\u1edfng cu\u1ed9c s\u1ed1ng"],
    correct: 2
  },
  {
    question: "L\u00fd t\u01b0\u1edfng th\u1ea9m m\u1ef9 \u1edf m\u1ed7i th\u1eddi \u0111\u1ea1i, m\u1ed7i x\u00e3 h\u1ed9i th\u1ec3 hi\u1ec7n r\u00f5 r\u1ec7t nh\u1ea5t qua h\u00ecnh th\u1ee9c n\u00e0o?",
    answers: ["A. \u00c2m nh\u1ea1c", "B. Ngh\u1ec7 thu\u1eadt", "C. H\u1ed9i h\u1ecda", "D. V\u0103n h\u1ecdc"],
    correct: 1
  },
  {
    question: "Nh\u00f3m n\u00e0o bao g\u1ed3m c\u00e1c th\u00e0nh vi\u00ean nh\u01b0 c\u00e1c nh\u00e0 qu\u1ea3n l\u00fd v\u0103n h\u00f3a ngh\u1ec7 thu\u1eadt, gi\u1edbi nghi\u00ean c\u1ee9u m\u1ef9 h\u1ecdc, c\u00e1c nh\u00e0 ph\u00ea b\u00ecnh v\u00e0 l\u00fd lu\u1eadn ngh\u1ec7 thu\u1eadt?",
    answers: ["A. Nh\u00f3m \u0111\u1ecbnh h\u01b0\u1edbng c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9", "B. Nh\u00f3m th\u01b0\u1edfng th\u1ee9c c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9", "C. Nh\u00f3m c\u1ea3m nh\u1eadn c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9", "D. Nh\u00f3m th\u1ea9m \u0111\u1ecbnh c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9"],
    correct: 0
  },
  {
    question: "\u0110\u1eb7c \u0111i\u1ec3m c\u01a1 b\u1ea3n th\u1ee9 m\u1ea5y c\u1ee7a s\u1ef1 th\u1ee5 c\u1ea3m bi\u1ebfn \u0111\u1ed5i trong ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o l\u00e0 bi\u1ebft r\u00fat ra t\u1eeb \u0111\u1ed1i t\u01b0\u1ee3ng nh\u1eefng n\u00e9t b\u1ea3n ch\u1ea5t?",
    answers: ["A. \u0110\u1ea7u ti\u00ean", "B. Th\u1ee9 hai", "C. Th\u1ee9 ba", "D. Th\u1ee9 t\u01b0"],
    correct: 0
  },
  {
    question: "Vi\u1ec7c quan s\u00e1t c\u1ee7a ch\u1ee7 th\u1ec3 s\u00e1ng t\u1ea1o c\u00f3 ph\u1ea3i l\u00e0 nh\u1eadn th\u1ee9c \u0111\u01a1n thu\u1ea7n hay kh\u00f4ng?",
    answers: ["A. Ph\u1ea3i", "B. Kh\u00f4ng ph\u1ea3i", "C. G\u1ea7n nh\u01b0", "D. H\u00ecnh nh\u01b0"],
    correct: 1
  },
  {
    question: "Ph\u01b0\u01a1ng ti\u1ec7n th\u1ef1c hi\u1ec7n v\u00e0 th\u1ec3 hi\u1ec7n c\u00e1c ho\u1ea1t \u0111\u1ed9ng th\u1ea9m m\u1ef9 c\u1ee7a nh\u00f3m ch\u1ee7 th\u1ec3 t\u1ed5ng h\u1ee3p c\u00e1c gi\u00e1 tr\u1ecb th\u1ea9m m\u1ef9 r\u1ed9ng l\u1edbn hay kh\u00f4ng?",
    answers: ["A. C\u00f3", "B. Kh\u00f4ng", "C. V\u1eeba", "D. Nh\u1ecf"],
    correct: 0
  },
  {
    question: "T\u00ednh g\u00ec trong gi\u00e1o d\u1ee5c th\u1ea9m m\u1ef9 mang n\u1ed9i dung x\u00e3 h\u1ed9i s\u00e2u s\u1eafc tr\u01b0\u1edbc ti\u00ean?",
    answers: ["A. T\u00ednh d\u00e2n ch\u1ee7", "B. T\u00ednh giai c\u1ea5p", "C. T\u00ednh d\u00e2n t\u1ed9c", "D. T\u00ednh x\u00e3 h\u1ed9i"],
    correct: 2
  },
  {
    question: "Ch\u1ee9c n\u0103ng x\u00e3 h\u1ed9i c\u01a1 b\u1ea3n \u0111\u1ea7u ti\u00ean c\u1ee7a ngh\u1ec7 thu\u1eadt l\u00e0 g\u00ec?",
    answers: ["A. Ch\u1ee9c n\u0103ng th\u1ecfa m\u00e3n nhu c\u1ea7u l\u00e0m \u0111\u1eb9p", "B. Ch\u1ee9c n\u0103ng th\u1ecfa m\u00e3n nhu c\u1ea7u th\u1ea9m \u0111\u1ecbnh", "C. Ch\u1ee9c n\u0103ng th\u1ecfa m\u00e3n nhu c\u1ea7u \u0111\u00e1nh gi\u00e1", "D. Ch\u1ee9c n\u0103ng th\u1ecfa m\u00e3n nhu c\u1ea7u th\u1ea9m m\u1ef9"],
    correct: 3
  },
  {
    question: "H\u00ecnh th\u00e1i n\u00e0o c\u00f9ng ph\u1ea3n \u00e1nh hi\u1ec7n th\u1ef1c kh\u00e1ch quan, nh\u01b0ng khoa h\u1ecdc l\u00e0 h\u00ecnh th\u1ee9c ho\u1ea1t \u0111\u1ed9ng l\u00fd lu\u1eadn cao nh\u1ea5t \u0111\u1ed3ng th\u1eddi c\u0169ng l\u00e0 k\u1ebft qu\u1ea3 c\u1ee7a h\u00ecnh th\u00e1i \u0111\u00f3?",
    answers: ["A. Ngh\u1ec7 thu\u1eadt v\u00e0 m\u1ef9 h\u1ecdc", "B. Ngh\u1ec7 thu\u1eadt v\u00e0 tri\u1ebft h\u1ecdc", "C. Ngh\u1ec7 thu\u1eadt v\u00e0 \u0111\u1ea1o \u0111\u1ee9c", "D. Ngh\u1ec7 thu\u1eadt v\u00e0 khoa h\u1ecdc"],
    correct: 3
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt v\u00e0 ch\u00ednh tr\u1ecb l\u00e0 hai l\u0129nh v\u1ef1c tinh th\u1ea7n kh\u00e1c nhau c\u1ee7a \u0111\u1eddi s\u1ed1ng x\u00e3 h\u1ed9i nh\u01b0ng n\u00f3 c\u00f3 s\u1ef1 t\u00e1c \u0111\u1ed9ng l\u1eabn nhau nh\u01b0 th\u1ebf n\u00e0o?",
    answers: ["A. M\u1ed9t c\u00e1ch t\u00edch c\u1ef1c", "B. M\u1ed9t c\u00e1ch ti\u00eau c\u1ef1c", "C. M\u1ed9t c\u00e1ch \u0111a d\u1ea1ng", "D. M\u1ed9t c\u00e1ch l\u00fd t\u01b0\u1edfng"],
    correct: 0
  },
  {
    question: "Nh\u1eefng nguy\u00ean t\u1eafc n\u00e0o m\u00e0 ng\u01b0\u1eddi ngh\u1ec7 s\u0129 th\u1ea5m \u0111\u01b0\u1ee3m s\u1ebd gi\u00fap \u0111i s\u00e2u, m\u1ed5 x\u1ebb t\u00e2m l\u00fd h\u00e0nh vi nh\u00e2n v\u1eadt c\u1ee7a m\u00ecnh \u0111\u01b0\u1ee3c s\u00e2u s\u1eafc h\u01a1n?",
    answers: ["A. Khoa h\u1ecdc", "B. C\u00e1i \u0111\u1eb9p", "C. Cu\u1ed9c s\u1ed1ng", "D. \u0110\u1ea1o \u0111\u1ee9c"],
    correct: 3
  },
  {
    question: "Ngh\u1ec7 thu\u1eadt ph\u1ea3n \u00e1nh th\u1ea9m m\u1ef9 t\u1eeb cu\u1ed9c s\u1ed1ng hi\u1ec7n th\u1ef1c qua h\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt. Ng\u01b0\u1ee3c l\u1ea1i, t\u00f4n gi\u00e1o l\u1ea1i ph\u1ea3n \u00e1nh c\u00e1i g\u00ec?",
    answers: ["A. Th\u1ef1c tr\u1ea1ng m\u1ed9t c\u00e1ch h\u01b0 \u1ea3o hoang \u0111\u01b0\u1eddng", "B. Hi\u1ec7n th\u1ef1c m\u1ed9t c\u00e1ch h\u01b0 \u1ea3o hoang \u0111\u01b0\u1eddng", "C. X\u00e3 h\u1ed9i m\u1ed9t c\u00e1ch h\u01b0 \u1ea3o hoang \u0111\u01b0\u1eddng", "D. Tr\u00e0o l\u01b0u m\u1ed9t c\u00e1ch h\u01b0 \u1ea3o hoang \u0111\u01b0\u1eddng"],
    correct: 1
  },
  {
    question: "Nguy\u00ean l\u00fd n\u00e0o \u0111\u00e3 l\u00e0m c\u01a1 s\u1edf cho ch\u1ee7 ngh\u0129a duy v\u1eadt c\u1ee7a m\u1ef9 h\u1ecdc?",
    answers: ["A. Nguy\u00ean l\u00fd b\u1eaft ch\u01b0\u1edbc", "B. Nguy\u00ean l\u00fd m\u1ef9 h\u1ecdc", "C. Nguy\u00ean l\u00fd cu\u1ed9c s\u1ed1ng", "D. Nguy\u00ean l\u00fd x\u00e3 h\u1ed9i"],
    correct: 0
  },
  {
    question: "H\u00eaghen trong \u2026 c\u1ee7a m\u00ecnh c\u0169ng \u0111\u00e3 b\u00e1o tr\u01b0\u1edbc r\u1eb1ng: ngh\u1ec7 thu\u1eadt hi\u1ec7n th\u1ef1c ch\u1ee7 ngh\u0129a c\u1ea7n ph\u1ea3i \u0111\u1ec1 ph\u00f2ng s\u1ef1 t\u00ecm t\u00f2i h\u00ecnh th\u1ee9c ch\u1ee7 ngh\u0129a \u201cc\u00e1i thi\u00ean t\u00e0i th\u1ea7n linh\u201d?",
    answers: ["A. \u201cNh\u1eefng b\u00e0i gi\u1ea3ng v\u0103n h\u1ecdc\u201d", "B. \u201cNh\u1eefng b\u00e0i gi\u1ea3ng tri\u1ebft h\u1ecdc\u201d", "C. \u201cNh\u1eefng b\u00e0i gi\u1ea3ng khoa h\u1ecdc\u201d", "D. \u201cNh\u1eefng b\u00e0i gi\u1ea3ng m\u1ef9 h\u1ecdc\u201d"],
    correct: 3
  },
  {
    question: "L\u00e0 m\u1ed9t h\u00ecnh th\u00e1i \u00fd th\u1ee9c x\u00e3 h\u1ed9i \u0111\u1eb7c th\u00f9, ngh\u1ec7 thu\u1eadt ph\u1ea3n \u00e1nh th\u1ebf gi\u1edbi hi\u1ec7n th\u1ef1c b\u1eb1ng c\u00e1c h\u00ecnh t\u01b0\u1ee3ng g\u00ec?",
    answers: ["A. C\u00e1c h\u00ecnh t\u01b0\u1ee3ng trong t\u00ednh to\u00e0n v\u1eb9n, b\u1ea3o \u0111\u1ea3m s\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa n\u1ed9i dung v\u00e0 h\u00ecnh th\u1ee9c, v\u1edbi h\u00ecnh th\u00e1i \u0111\u1eb7c tr\u01b0ng l\u00e0 t\u00ednh c\u1ea3m t\u00ednh", "B. C\u00e1c h\u00ecnh t\u01b0\u1ee3ng trong t\u00ednh to\u00e0n v\u1eb9n, h\u00ecnh th\u00e1i \u0111\u1eb7c tr\u01b0ng l\u00e0 t\u00ednh c\u1ea3m t\u00ednh", "C. C\u00e1c h\u00ecnh t\u01b0\u1ee3ng trong t\u00ednh to\u00e0n v\u1eb9n v\u00e0 h\u00ecnh th\u00e1i \u0111\u1eb7c tr\u01b0ng l\u00e0 t\u00ednh c\u1ea3m t\u00ednh", "D. B\u1ea3o \u0111\u1ea3m s\u1ef1 th\u1ed1ng nh\u1ea5t gi\u1eefa n\u1ed9i dung v\u00e0 h\u00ecnh th\u1ee9c, v\u1edbi h\u00ecnh th\u00e1i \u0111\u1eb7c tr\u01b0ng l\u00e0 t\u00ednh c\u1ea3m t\u00ednh"],
    correct: 0
  },
  {
    question: "H\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt l\u00e0 s\u1ef1 t\u1ed5ng h\u1ee3p c\u1ee7a c\u00e1c y\u1ebfu t\u1ed1 n\u00e0o?",
    answers: ["A. C\u1ea3 l\u00fd tr\u00ed, c\u1ea3m t\u00ednh v\u00e0 l\u00fd t\u00ednh", "B. C\u1ea3 t\u00ecnh c\u1ea3m, c\u1ea3m t\u00ednh v\u00e0 l\u00fd t\u00ednh", "C. C\u1ea3 c\u1ea3m t\u00ednh v\u00e0 l\u00fd t\u00ednh", "D. C\u1ea3 t\u00ecnh c\u1ea3m v\u00e0 l\u00fd tr\u00ed"],
    correct: 1
  },
  {
    question: "H\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt d\u1ef1a tr\u00ean hai ph\u1ea9m ch\u1ea5t quan tr\u1ecdng n\u00e0o?",
    answers: ["A. T\u00ednh x\u00e3 h\u1ed9i v\u00e0 t\u00ednh v\u0103n h\u00f3a", "B. T\u00ednh nh\u00e2n v\u0103n v\u00e0 t\u00ednh th\u1ea9m m\u1ef9", "C. T\u00ednh t\u1ed5ng th\u1ec3 v\u00e0 t\u00ednh c\u1ee5 th\u1ec3 c\u1ea3m t\u00ednh", "D. T\u00ednh tr\u1eebu t\u01b0\u1ee3ng v\u00e0 t\u00ednh c\u1ee5 th\u1ec3 c\u1ea3m t\u00ednh"],
    correct: 3
  },
  {
    question: "H\u00ecnh t\u01b0\u1ee3ng ngh\u1ec7 thu\u1eadt sau khi h\u00ecnh th\u00e0nh n\u00f3 l\u1ea1i t\u1ed3n t\u1ea1i nh\u01b0 th\u1ebf n\u00e0o \u0111\u1ed1i v\u1edbi ng\u01b0\u1eddi s\u00e1ng t\u1ea1o?",
    answers: ["A. T\u1ed5ng th\u1ec3 kh\u00e1ch quan", "B. T\u1ef1 ch\u1ee7 kh\u00e1ch quan", "C. C\u00e1 nh\u00e2n kh\u00e1ch quan", "D. \u0110\u1ed9c l\u1eadp kh\u00e1ch quan"],
    correct: 3
  },
  {
    question: "T\u01b0 t\u01b0\u1edfng c\u1ee7a c\u00e1i g\u00ec \u0111\u01b0\u1ee3c to\u00e1t l\u00ean m\u1ed9t c\u00e1ch kh\u00e1ch quan t\u1eeb b\u1ea3n th\u00e2n t\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt ch\u1ee9 kh\u00f4ng ph\u1ea3i \u00fd \u0111\u1ed3 hay t\u01b0 t\u01b0\u1edfng ch\u1ee7 quan c\u1ee7a t\u00e1c gi\u1ea3?",
    answers: ["A. T\u00e1c ph\u1ea9m \u0111\u1ed3 h\u1ecda", "B. T\u00e1c ph\u1ea9m th\u1eddi trang", "C. T\u00e1c ph\u1ea9m v\u0103n h\u1ecdc", "D. T\u00e1c ph\u1ea9m ngh\u1ec7 thu\u1eadt"],
    correct: 3
  },
  {
    question: "Trong c\u00e1c lo\u1ea1i h\u00ecnh ngh\u1ec7 thu\u1eadt th\u1eddi gian (v\u0103n ch\u01b0\u01a1ng, \u00e2m nh\u1ea1c), y\u1ebfu t\u1ed1 g\u00ec chuy\u1ec3n h\u00f3a th\u00e0nh n\u1ed9i dung gi\u00e1n ti\u1ebfp?",
    answers: ["A. Th\u1eddi gian", "B. Trung gian", "C. Kh\u00f4ng gian", "D. C\u1ea3 A, B \u0111\u1ec1u \u0111\u00fang"],
    correct: 2
  },
  {
    question: "Vi\u1ec7c s\u1eed d\u1ee5ng ch\u1ea5t li\u1ec7u ngh\u1ec7 thu\u1eadt ph\u1ee5 thu\u1ed9c v\u00e0o \u0111\u00e2u?",
    answers: ["A. Thi\u00ean h\u01b0\u1edbng, phong c\u00e1ch c\u1ee7a ngh\u1ec7 s\u0129", "B. V\u00e0o \u00fd \u0111\u1ed3, phong c\u00e1ch c\u1ee7a ngh\u1ec7 s\u0129", "C. V\u00e0o \u00fd \u0111\u1ed3, thi\u00ean h\u01b0\u1edbng", "D. V\u00e0o \u00fd \u0111\u1ed3, thi\u00ean h\u01b0\u1edbng, phong c\u00e1ch c\u1ee7a ngh\u1ec7 s\u0129"],
    correct: 3
  },
  {
    question: "N\u1ed9i dung ngh\u1ec7 thu\u1eadt \u0111\u00f3ng vai tr\u00f2 g\u00ec, quy\u1ebft \u0111\u1ecbnh \u0111\u1ed1i v\u1edbi h\u00ecnh th\u1ee9c ngh\u1ec7 thu\u1eadt?",
    answers: ["A. Thi\u1ebft y\u1ebfu", "B. Quan tr\u1ecdng", "C. Ch\u1ee7 \u0111\u1ea1o", "D. Th\u00e0nh ph\u1ea7n"],
    correct: 2
  },
];
