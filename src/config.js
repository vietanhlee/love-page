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
      image:
        "https://images.unsplash.com/photo-1518199266791-5375a83df4d8?w=700&q=80",
      date: "Ngày đầu tiên gặp nhau...",
      message:
        "Còn nhớ lần đầu tiên mình gặp nhau không? Anh đã chẳng ngủ được suốt đêm hôm đó, cứ nghĩ mãi về nụ cười của em. Khoảnh khắc ấy, anh biết rằng em sẽ là người đặc biệt nhất trong cuộc đời anh.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6d8e98?w=700&q=80",
      date: "Khi yêu nhau...",
      message:
        "Cảm ơn em đã chọn anh. Mỗi buổi sáng thức dậy biết rằng có em trong cuộc sống này là điều hạnh phúc nhất mà anh từng có. Em là ánh nắng sưởi ấm ngay cả những ngày mưa lạnh nhất.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=700&q=80",
      date: "Những chuyến đi cùng nhau...",
      message:
        "Mỗi con đường chúng mình đi qua, mỗi bữa ăn chia sẻ, mỗi cơn mưa cùng trú... Tất cả đều trở thành những kỷ niệm đẹp nhất mà anh sẽ giữ mãi trong tim. Bên em, ở đâu cũng là nhà.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=80",
      date: "Những lúc khó khăn...",
      message:
        "Cảm ơn em đã ở lại khi mọi thứ không hoàn hảo. Cảm ơn em đã tin tưởng anh khi anh chưa tin tưởng vào bản thân. Có em bên cạnh, mọi khó khăn đều trở nên nhẹ nhàng hơn biết bao.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&q=80",
      date: "Hiện tại và tương lai...",
      message:
        "Hôm nay, ngày 08 tháng 03, anh muốn nói với em rằng: anh yêu em hơn hết thảy. Anh muốn tiếp tục viết câu chuyện này cùng em, thêm nhiều kỷ niệm, thêm nhiều nụ cười, thêm nhiều yêu thương.",
    },
  ],

  // --- ẢNH TO CUỐI TRANG ---
  // Thay link ảnh bên dưới bằng ảnh đẹp nhất của hai người
  finalPhoto: {
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1400&q=90",
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
