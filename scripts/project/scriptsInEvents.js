


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

	async 事件表1_Event41_Act1(runtime, localVars)
	{
		console.log("Grow Time up");
	},

	async 事件表1_Event45_Act1(runtime, localVars)
	{
		console.log("GameTime up");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

