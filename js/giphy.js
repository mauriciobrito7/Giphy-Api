class Giphy{
	constructor(keyword){
		this.keyword= keyword;
		this.endpoint= "http://api.giphy.com/v1/gifs";
		this.api_key="dc6zaTOxFJmzC";
	}
	getGifUrl(callback){
		var xhr= new XMLHttpRequest();
		xhr.open("GET",this.endpoint+"/translate?api_key="+this.api_key+"&s="+this.keyword);
		xhr.responseType= "json";
		xhr.onload=function(){
			callback(this.response.data.images.original.mp4);
		};
		xhr.send();
	}
	//en translate podría ser search para que retorne un
	//arreglo de gifs
	static getUrlAsync(keyword, callback){
		return new Giphy(keyword).getGifUrl(callback);
	}
}