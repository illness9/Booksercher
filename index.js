var myfunc = function () {

  
  
  
  let search = document.inputform.q.value;
  let url = "https://www.googleapis.com/books/v1/volumes?q="+search ;
  console.log(url)
  console.log(search)

  fetch(url + search)
    .then(response =>  {
      return response.json();
    }).then( res => {
      for(let i=0; i<10; i++){
          var title = "書籍名:" + res.items[i].volumeInfo.title;
          var authors = "著者:" + res.items[i].volumeInfo.authors;
          var description ="内容:" + res.items[i].volumeInfo.description;
          var thumbnail = res.items[i].volumeInfo.imageLinks.thumbnail;
          var infolink = res.items[i].volumeInfo.infoLink;

          //表示用DOMの変数作成

          var searchURL = "url" + i;
          var results = "results" + i;
          var imageLinks ="imageLinks" + i;


          //要素の取得
          var ContentArea = document.getElementById('items');

          var CreateArea = document.createElement('div');
          CreateArea.id = 'area' + i ;
          var CreateUrl = document.createElement('a');
          CreateUrl.id = searchURL;
          var CreateImg =document.createElement('img');
          CreateImg.id= imageLinks;
          var CreateSpan =document.createElement('span');
          CreateSpan.id= results;

          //変数の配置
          ContentArea.appendChild(CreateArea);
          CreateArea.appendChild(CreateUrl);
          CreateUrl.appendChild(CreateImg);
          CreateImg.after(CreateSpan);



          //文字情報の表記
          var list = document.getElementById(results);
          list.innerHTML=title + '<br>' + authors +'<br>' + description +'<br>' ;
          
          //リンク先URLの設定
          var getURL =document.getElementById(searchURL);
          getURL.href = infolink;
          console.log(searchURL)

          //サムネイルの設定
          var getimageLinks =document.getElementById(imageLinks);
          getimageLinks.src=thumbnail;
        console.log(thumbnail)
      }
      
    })
}



$('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); 
	return false;
});

