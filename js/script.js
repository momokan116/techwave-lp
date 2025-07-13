// jQueryの読み込みが終わったら実行
$(function () {
  // ハンバーガーメニューの開閉処理
  $('.hamburger').click(function () {
    $('.menu').toggleClass('open');
    $(this).toggleClass('active');
  });

  // フォームバリデーション処理
  $('#contact-form').on('submit', function (e) {
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    // 空欄チェック
    if (!name || !email || !message) {
      alert('すべての項目を入力してください。');
      e.preventDefault(); // 送信キャンセル
      return;
    }

    // 簡易メールチェック（@があるかどうか）
    if (!email.includes('@')) {
      alert('正しいメールアドレスを入力してください。');
      e.preventDefault(); // 送信キャンセル
    }
  });
});
