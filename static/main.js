var windowWidth = $(window).width();
layer.config({
  extend: 'kzhomepage/style.css', //加载您的扩展样式
  skin: 'layer-ext-kzhomepage'
});
// layer.open({
//   type: 2,
//   title: 'Blog',
//   shadeClose: true,
//   anim:5,
//   closeBtn: 2,
//   area: ['80%', '90%'],
//   content: '//www.kezez.com/'
// });
console.log(
    "\n" +
      " %c KZHomePage by kaygb " +
      " %c https://blog.170601.xyz/archives/25.html " +
      "\n" +
      "\n",
    "color: #fff; background: #fd79a8; padding:5px 0;",
    "background: #FFF; padding:5px 0;"
  );  

  console.log(
    "\n" +
      " %c HomePage Modify by Coikea " +
      " %c https://citruscat.cn " +
      "\n" +
      "\n",
    "color: #fff; background: #ff9900; padding:5px 0;",
    "background: #fcdea1; padding:5px 0;"
  );  

if(meting_music_api===""){
    meting_api = "https://api.mizore.cn/meting/api.php";
}
var meting_api =
  "https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id";

$.ajax({
//   url: "https://api.mizore.cn/meting/api.php?server=netease&type=playlist&id=20173709",
  url: meting_music_api,
  data:{
    server: music_server,
    type: music_type,
    id: music_id
  },
  dataType: "json",
  success: function (audio) {

    const ap = new APlayer({
        container: music_fixed === false ? document.getElementById('aplayer-inner') : document.getElementById('aplayer-fixed') ,
        audio: audio,
        fixed: music_fixed === false ? false : true,
        autoplay: music_autoplay,
        order: music_order,
        listFolded :true,
        volum: music_volume,
        mini: music_fixed === true ? true:music_mini,
        lrcType: 3,
        preload:"auto",
        loop: music_loop

        
    });
    // if(music_autoplay){
    //     ap.play();
    // }
  },
});

/*
  一言API
  使用方法 </p align="right" id="hitoko_text"></p>  
  align="right" 居右显示
*/
fetch('https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=e&c=h')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      const hitokotoFormWho = document.getElementById('hitokoto_fromWho')
      if (data.from_who == null){
        hitokotoFormWho.innerText = ""
      }
      else
      {
      hitokotoFormWho.innerText = "——" + data.from_who
      }
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)