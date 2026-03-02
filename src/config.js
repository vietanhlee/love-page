// ============================================================
//  FILE CẤU HÌNH - Chỉnh sửa nội dung tại đây!
// ============================================================

export const config = {
  // --- TÊN NGƯỜI ĐƯỢC TẶNG ---
  recipientName: "Khánh Trang",
  senderName: "Anh", // tên hoặc cách xưng hô của bạn

  // --- PHẦN HERO (màn hình đầu tiên) ---
  hero: {
    eyebrow: "Hôm nay là ngày 08 / 03 🌸",
    title: "Gửi đến em", // hiển thị trước tên
    subtitle:
      "Mỗi kỷ niệm chúng mình có cùng nhau là một trang sách mà anh sẽ giữ mãi trong lòng.",
    poem: "Và hôm nay, anh muốn dành cả thế giới này cho em.",
  },

  // --- CÁC PHẦN ẢNH & THÔNG ĐIỆP ---
  // Mỗi mục gồm: image (link ảnh), message (thông điệp), date (ngày kỷ niệm - tuỳ chọn)
  // Layout sẽ tự động xen kẽ trái/phải
  sections: [
    {
      image: "/images/rap.jpg",
      date: "Ngày đầu tiên gặp nhau...",
      message:
        "Còn nhớ lần đầu tiên mình gặp nhau không? Anh đã chẳng ngủ được suốt đêm hôm đó, cứ nghĩ mãi về nụ cười của em. Khoảnh khắc ấy, anh biết rằng em sẽ là người đặc biệt nhất trong cuộc đời anh.",
    },
    {
      image: "/images/kt2.jpg",
      date: "Khi yêu nhau...",
      message:
        "Cảm ơn em đã chọn anh. Mỗi buổi sáng thức dậy biết rằng có em trong cuộc sống này là điều hạnh phúc nhất mà anh từng có. Em là ánh nắng sưởi ấm ngay cả những ngày mưa lạnh nhất.",
    },
    {
      image: "/images/va1.jpg",
      date: "Những chuyến đi cùng nhau...",
      message:
        "Mỗi con đường chúng mình đi qua, mỗi bữa ăn chia sẻ, mỗi cơn mưa cùng trú... Tất cả đều trở thành những kỷ niệm đẹp nhất mà anh sẽ giữ mãi trong tim. Bên em, ở đâu cũng là nhà.",
    },
    {
      image: "/images/qua.png",
      date: "Những lúc khó khăn...",
      message:
        "Cảm ơn em đã ở lại khi mọi thứ không hoàn hảo. Cảm ơn em đã tin tưởng anh khi anh chưa tin tưởng vào bản thân. Có em bên cạnh, mọi khó khăn đều trở nên nhẹ nhàng hơn biết bao.",
    },
    {
      image: "/images/thu_em_2.png",
      date: "Hiện tại và tương lai...",
      message:
        "Hôm nay, ngày 08 tháng 03, anh muốn nói với em rằng: anh yêu em hơn hết thảy. Anh muốn tiếp tục viết câu chuyện này cùng em, thêm nhiều kỷ niệm, thêm nhiều nụ cười, thêm nhiều yêu thương.",
    },
    {
      image: "/images/anh_chung.jpg",
      date: "Hiện tại và tương lai...",
      message:
        "Hôm nay, ngày 08 tháng 03, anh muốn nói với em rằng: anh yêu em hơn hết thảy. Anh muốn tiếp tục viết câu chuyện này cùng em, thêm nhiều kỷ niệm, thêm nhiều nụ cười, thêm nhiều yêu thương.",
    },
  ],

  // --- ẢNH TO CUỐI TRANG ---
  // Thay link ảnh bên dưới bằng ảnh đẹp nhất của hai người
  finalPhoto: {
    image: "/images/nhan.jpg",
    caption: "Mãi mãi bên nhau ❤️", // Để "" nếu không muốn caption
  },

  // --- PHẦN KẾT ---
  footer: {
    lines: [
      "Em là điều tuyệt vời nhất xảy ra trong cuộc đời anh.",
      "Chúc em luôn vui vẻ, hạnh phúc và xinh đẹp mãi mãi.",
    ],
    signature: "Với tất cả tình yêu của anh",
  },
};
