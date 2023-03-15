


const scriptsInEvents = {

	async 事件表1_Event52_Act3(runtime, localVars)
	{
		var js = JSON.parse(runtime.globalVars.Debug);
		
		if(js[0]!=runtime.globalVars.MyName)
		{
			runtime.globalVars.Debug="False";
		}
	},

	async 事件表1_Event55_Act2(runtime, localVars)
	{
		console.log("Get Ranking");
		var js = JSON.parse(runtime.globalVars.Debug);
		console.log(js);
		
		var keys = Object.keys(js);
		var values = [];
		
		for(var i = 0;i<keys.length;i++)
		{
			values[i] = (js[keys[i]]["MaxPoint"]);
		}
		console.log("原Values : "+values);
		
		//第一步 排序分數
		//自定義排序方法
		function compare(a, b) {
		  return b - a;
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
				if(js[keys[j]]["MaxPoint"]==values[i])
				{
					if(js[keys[j]]["Name"] == runtime.globalVars.MyName)
					{
						if(runtime.globalVars.TotalPoint >= runtime.globalVars.MaxPoint)
							runtime.globalVars.MyRank = i+1;
						else
							runtime.globalVars.MyRank = 11;
					}
					firstArray.setAt(js[keys[j]]["Name"],i,0);
					firstArray.setAt(values[i],i,1);
					console.log("Array : "+i +"，"+js[keys[j]]["Name"]);
		
					rank+=(keys[j]+" : "+values[i]+"\n");
					break;
				}
			}
		}
		
		runtime.globalVars.Debug = rank;
	},

	async 事件表1_Event102_Act1(runtime, localVars)
	{
		console.log("Grow Time up");
	},

	async 事件表1_Event107_Act1(runtime, localVars)
	{
		console.log("GameTime up");
	},

	async 事件表1_Event227_Act2(runtime, localVars)
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

