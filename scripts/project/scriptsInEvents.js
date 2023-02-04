


const scriptsInEvents = {

	async 事件表1_Event2_Act6(runtime, localVars)
	{
		console.log("UserID : "+runtime.globalVars.UserID);
	},

	async 事件表1_Event3_Act6(runtime, localVars)
	{
		if(runtime.globalVars.MyData == "null") return;
		var js = JSON.parse(runtime.globalVars.MyData); //JSON.parse 將JSON格式轉回物件型態 才能使用Object.keys
		console.log("JSON:"+js);
		if(js != null)
		{
			var allkeys = Object.keys(js);
			console.log("Get Object.keys count:" + allkeys.length); //length 數量
			console.log("Get Object.keys:" + allkeys);
		
			for(var i = 0;i<allkeys.length;i++)
			{
				//取得Value方法 json物件型態[key]
				console.log("key : " + allkeys[i] + ", value : " + js[allkeys[i]]);
			}
		}
	},

	async 事件表1_Event25_Act2(runtime, localVars)
	{
		console.log("Add new player data!");
		var js = JSON.parse(runtime.globalVars.UserID);
		runtime.globalVars.UserID = js["name"];
	},

	async 事件表1_Event26_Act2(runtime, localVars)
	{
		console.log("Get Ranking");
		var js = JSON.parse(runtime.globalVars.Debug);
		console.log(js);
		
		var keys = Object.keys(js);
		var values = Object.values(js);
		console.log("原Values : "+values);
		//第一步 排序分數
		//自定義排序方法
		function compare(a, b) {
		  if(a > b) {
		    return -1 // 如果 a 大於 b ，就把 a 排在 b 前面
		  }
		
		  if (a < b) {
		    return 11 // 如果 a 大於 b ，就把 a 排在 b 後面
		  }
		
		  return 0 // a = b ，就不動
		}
		
		// 把 compare function 傳進去 numbers.sort()
		values.sort(compare)
		
		console.log("排序後Values : "+values);
		var rank="";
		//第二步 對照Key值
		for(var i = 0;i < values.length;i++)
		{
			for(var j = 0;j < keys.length;j++)
			{
				if(js[keys[j]]==values[i])
				{
					console.log(keys[j]);
					
					rank+=(keys[j]+" : "+values[i]+"\n");
					break;
				}
			}
		}
		//rank = rank.slice(0,-2);
		console.log(rank);
		
		runtime.globalVars.Debug = rank;
	},

	async 事件表1_Event42_Act1(runtime, localVars)
	{
		console.log("Grow Time up");
	},

	async 事件表1_Event46_Act1(runtime, localVars)
	{
		console.log("GameTime up");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

