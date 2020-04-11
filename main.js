// Remove Ads from Youtube
if (/https?:\/\/(\w*.)?youtube.com/i.test(window.location.href.toLowerCase())) {
	var player = document.querySelector('#player');
	if(player){
		player.addEventListener('DOMSubtreeModified', () =>{

			var videoAdContainer = document.getElementsByClassName('video-ads')[0];
			if (videoAdContainer) {
				player.removeEventListener('DOMSubtreeModified', removevideoads);
				videoAdContainer.addEventListener('DOMSubtreeModified', (e) => {
					if (e.target.innerHTML.length > 0) {
						if (document.getElementsByClassName('videoAdUi').length > 0) {
							document.getElementsByClassName('video-stream html5-main-video')[0].src = '';
						}
						var overlayAdContainer = document.getElementsByClassName('ad-container ad-container-single-media-element-annotations')[0];
						if (overlayAdContainer && overlayAdContainer.style.display !== 'none') {
							overlayAdContainer.style.display = 'none';
						}
					}
				});
			}
		});
	}
}