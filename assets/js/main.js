$(function () {

  $(".top-to-js").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });


  // 隠れるテキスト
  const itemHeights = [];
  let returnHeight;

  $(function () {
    $(".js-accordion-text").each(function () {
      // 隠す要素
      const thisHeight = $(this).height(); // 隠す要素の高さを取得
      itemHeights.push(thisHeight); // それぞれの高さを配列に入れる
      $(this).addClass("is-hide"); // CSSで指定した高さにする(見えてる高さ)
      returnHeight = $(this).height(); // 見えてる高さを取得
    });
  });

  $(".js-accordion-btn").click(function () {
    // ボタンをクリックしたら
    if (!$(this).hasClass("is-show")) {
      const index = $(this).index(".js-accordion-btn");
      const addHeight = itemHeights[index]; // 要素の高さを取得
      $(this)
        .addClass("is-show") // 閉じるボタンに表示変更
        .next()
        .animate({
          height: addHeight
        }, 300) // 隠されてる要素をアニメーションで表示
    } else {
      $(this)
        .removeClass("is-show") // 閉じるボタン表示解除
        .next()
        .animate({
          height: returnHeight
        }, 300) // 要素を初期の高さにアニメーションで戻す
    }
  });


  // よくある質問
  $(document).ready(function () {
    $(".question").click(function () {
      $(this).next(".answer").slideToggle();
      $(this).toggleClass("active");
    });
  });
})