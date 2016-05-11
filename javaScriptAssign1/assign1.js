		var fs = require("fs");
		var list=[];
		// var header=[];
		var result = [];
		var result1 = [];

		var p1a = [];
		var p1b = [];
		var p1c = [];
		var p2a = [];
		var p2b = [];
		var p3a = [];
		var newobj = [];
		var newobj2 = [];

		var count=1;
		var data = fs.readFileSync('Table1.3_g20_2013.csv');
		var nxt= data.toString().split('\r\n');

		var header =nxt[0].split(",");

		for(var i=1;i<nxt.length-1;i++){

			  var obj = {};
			  var currentline=nxt[i].split(",");

			  for(var j=0;j<header.length;j++){

				  obj[header[j]] = currentline[j];

			  }

			  result.push(obj);
		  }


			function mod(obj,a,b,arr,file,str,d)
			{

		  for(var i=1;i<nxt.length-3;i++){

		      var obj1 = {};

		      var currentline=nxt[i].split(",");
		  	  for(var j=0;j<header.length;j++){

		        obj[a] = currentline[0];
		        obj[b] = parseFloat(currentline[d]);

		  	  }


		      arr.sort(function(a, b){
		        return b.value-a.value;
		        });

		        arr.push(obj);


		    }



		    var str =  JSON.stringify(p1a);
		    fs.writeFile(file,str,function(err) {
		       if (err) {
		           return console.error(err);
		         }
		      console.log('written');
		       });

}

				var obj1 = {};
				mod(obj1,"CountryName","value",p1a,"json1a.json",str1,5);
				var obj2 = {};
				mod(obj2,"CountryName","value",p1b,"json1b.json",str2,9);
				var obj3 = {};
				mod(obj3,"CountryName","value",p1c,"json1c.json",str3,17);





		  for(var i=1;i<nxt.length-1;i++){

		      var obj4 = {};
		      var obj5 = {};
		      var obj6 = {};
		      var obj7 = {};

		      var currentline=nxt[i].split(",");
		          if(currentline[0]=="World")
		          {
		            obj4["year"] = "2010";
		            obj4["Population"] = parseFloat(currentline[2]);
								obj4["Power"] = parseFloat(currentline[14]);
		            obj5["year"] = "2011";
		            obj5["Population"] = parseFloat(currentline[3]);
								obj5["Power"] = parseFloat(currentline[15]);
		            obj6["year"] = "2012";
		            obj6["Population"] = parseFloat(currentline[4]);
								obj6["Power"] = parseFloat(currentline[16]);
		            obj7["year"] = "2013";
		            obj7["Population"] = parseFloat(currentline[5]);
								obj7["Power"] = parseFloat(currentline[17]);

		            p2a.push(obj4);
		            p2a.push(obj5);
		            p2a.push(obj6);
		            p2a.push(obj7);

		          }

		    }
		    var str4 =  JSON.stringify(p2a);
		    fs.writeFile("assign2a.json",str4,function(err) {
		       if (err) {
		           return console.error(err);
		         }
		      console.log('written');
		       });




		var data1 = fs.readFileSync('continent.csv');
		var nxt1= data1.toString().split('\r\n');

		var header1 =nxt1[0].split(",");

		for(var i=1;i<nxt1.length-1;i++){

			  var obj8 = {};
			  var currentline1=nxt1[i].split(",");

			  for(var j=0;j<header1.length;j++){

				  obj8[header1[j]] = currentline1[j];

			  }

			  result1.push(obj8);
		  }


				for(var i=1;i<nxt.length-3;i++)
				{
						var newobj1 = {};
						var currentline=nxt[i].split(",");

						for(var j=1;j<nxt1.length-1;j++)
						{
							var currentline1=nxt1[j].split(",");

							if((currentline1[0])===(currentline[0]))
								{

									newobj1[currentline1[1]] = currentline[0];
									p3a.push(newobj1);

								}

						}

				}
				// console.log(p3a);

				var key1 = [];
				var p3 = [];
				obj9 = {};


			var flags = [], output = [], l = result1.length, i;
		for( i=0; i<l; i++) {
		    if( flags[result1[i].continentName]) continue;
		    flags[result1[i].continentName] = true;
		    output.push(result1[i].continentName);
		}

		// console.log(output);

				for(var i=1;i<nxt.length-3;i++)
				{
          ctr=0;
						var currentline=nxt[i].split(",");

						for(var j=1;j<nxt1.length-1;j++)
						{
							var currentline1=nxt1[j].split(",");

							if((currentline1[0])===(currentline[0]))
								{
									for(k=0;k<newobj.length;k++)
									{
									if(newobj[k].continent===currentline1[1])
										{
											newobj[k].value = parseFloat(newobj[k].value) + parseFloat(currentline[2]) ;

										ctr++;
										break;
										}

									}
										if(ctr===0)
										{

											 newobj.push({"continent":currentline1[1],"value":parseFloat(currentline[2])});

										}

								}


								}

						}

						var str5 =  JSON.stringify(newobj);
				    fs.writeFile("assign3a.json",str5,function(err) {
				       if (err) {
				           return console.error(err);
				         }
				      console.log('written');
				       });



							 for(var i=1;i<nxt.length-3;i++)
							 {
							 	ctr=0;
							 		var currentline=nxt[i].split(",");

							 		for(var j=1;j<nxt1.length-1;j++)
							 		{
							 			var currentline1=nxt1[j].split(",");

							 			if((currentline1[0])===(currentline[0]))
							 				{
							 					for(k=0;k<newobj2.length;k++)
							 					{
							 					if(newobj2[k].continent===currentline1[1])
							 						{
							 							newobj2[k].value = parseFloat(newobj2[k].value) + parseFloat(currentline[6]) ;

							 						ctr++;
							 						break;
							 						}

							 					}
							 						if(ctr===0)
							 						{

							 							 newobj2.push({"continent":currentline1[1],"value":parseFloat(currentline[6])});

							 						}

							 				}


							 				}

							 		}

							 		var str6 =  JSON.stringify(newobj2);
							 		fs.writeFile("assign3b.json",str6,function(err) {
							 			 if (err) {
							 					 return console.error(err);
							 				 }
							 			console.log('written');
							 			 });
