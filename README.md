# Mây Gõ Phím

Ứng dụng học gõ bàn phím dành cho bé, có lộ trình 10 chặng từ một ngón đến đủ mười ngón.

## Chạy ứng dụng

Mở trực tiếp `index.html`, hoặc chạy một web server nhỏ trong thư mục dự án:

```bash
python3 -m http.server 4173
```

Sau đó truy cập `http://localhost:4173`.

Ứng dụng không cần cài thư viện. Tiến độ, huy hiệu, số sao và mục tiêu hằng ngày được lưu trong `localStorage` của trình duyệt.

## Tính năng chính

- 10 chặng tăng dần từ 1 đến 10 ngón.
- Bàn phím ảo chỉ đúng phím và đúng ngón cần dùng.
- Theo dõi WPM, độ chính xác và chuỗi phím đúng.
- Ba lượt luyện cho mỗi chặng, mở khóa tuần tự.
- Huy hiệu, sao thưởng, mục tiêu hằng ngày và hiệu ứng chúc mừng.
- Ba trò chơi gõ phím: săn mây chữ, bóng bay tí hon và khủng long về đích.
- Ba mức phím cho game, kèm combo, cơ hội, đồng hồ, kỷ lục và sao thưởng.
- Bảng hai bàn tay luôn chỉ đúng phím và tô sáng ngón cần dùng trong từng game.
- Âm thanh có thể tắt, hỗ trợ bàn phím ảo trên thiết bị cảm ứng.
- Giao diện responsive cho desktop, tablet và mobile.
