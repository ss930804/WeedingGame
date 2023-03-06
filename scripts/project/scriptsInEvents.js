


const scriptsInEvents = {

	async 事件表1_Event43_Act2(runtime, localVars)
	{
		var js = JSON.parse(runtime.globalVars.Debug);
		
		if(js[0]!=runtime.globalVars.MyName)
		{
			runtime.globalVars.Debug="False";
		}
	},

	async 事件表1_Event46_Act2(runtime, localVars)
	{
		console.log("Get Ranking");
		var js = JSON.parse(runtime.globalVars.Debug);
		console.log(js);
		
		var keys = Object.keys(js);
		var values = [];
		
		for(var i = 0;i<keys.length;i++)
		{
			console.log("keys[i][Point] : " + js[keys[i]]["Point"]);
			values[i] = (js[keys[i]]["Point"]);
		}
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
		let firstArray = runtime.objects.Array.getFirstInstance();
		firstArray.setSize(values.length,2);
		//第二步 對照Key值
		for(var i = 0;i < values.length;i++)
		{
			for(var j = 0;j < keys.length;j++)
			{
				if(js[keys[j]]["Point"]==values[i])
				{
					if(keys[j] == runtime.globalVars.MyPhone)
						runtime.globalVars.MyRank = i+1;
					firstArray.setAt(js[keys[j]]["Name"],i,0);
					firstArray.setAt(values[i],i,1);
					rank+=(keys[j]+" : "+values[i]+"\n");
					break;
				}
			}
		}
		
		runtime.globalVars.Debug = rank;
	},

	async 事件表1_Event70_Act1(runtime, localVars)
	{
		console.log("Grow Time up");
	},

	async 事件表1_Event74_Act1(runtime, localVars)
	{
		console.log("GameTime up");
	},

	async 事件表1_Event161_Act2(runtime, localVars)
	{
		var phone=runtime.globalVars.Debug;
		var js = JSON.parse(runtime.globalVars.MyData);
		
		console.log(js);
		
		var keys = Object.keys(js);
		for(var i = 0;i<keys.length;i++)
		{
			if(keys[i]==phone)
			{
				runtime.globalVars.Debug=js[phone]["Name"];
				runtime.globalVars.MyCounty=js[phone]["County"];
				runtime.globalVars.MyStore=js[phone]["Store"];
				break;
			}
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

