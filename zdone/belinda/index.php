<html>
<?php include 'html/head.html'; ?>

<body>
	<?php include 'html/index.html'; ?>

	<form style='display:none;' method="post" name="myform" action="php/savedb.php">
		<textarea id="myarea" name="myarea"></textarea>
	</form>

	<?php $UseLiveServer = false;if (!$UseLiveServer) {
  include 'php/loadassets.php';
}
?>
	<script type="text/javascript">
	USELIVESERVER = false;
	START_IN_MENU = true; //!USELIVESERVER;
	DEFAULTUSERNAME = USELIVESERVER ? 'nil' : 'gul';
	window.onload = loadassets;
	async function loadassets() {
		if (USELIVESERVER) {
			C52 = await localOrRoute('C52', '../assets/c52.yaml');
			symbolDict = Syms = await localOrRoute('syms', '../assets/allSyms.yaml');
			SymKeys = Object.keys(Syms);
			ByGroupSubgroup = await localOrRoute('gsg', '../assets/symGSG.yaml');
			WordP = await route_path_yaml_dict('../assets/allWP.yaml');
			DB = await route_path_yaml_dict('./DB.yaml');
			let fens = await route_path_text('../assets/fens.csv');
			console.log('fens', fens);
			FenPositionList = csv2list(fens);
			//console.log('Fens', FenPositionList);
		}
		start();
	}

	function db_save() {} //dummy function need to be eliminated all calls!
	function savedb() {
		if (USELIVESERVER) {
			console.log('not saving on liveserver!');
			return;
		}
		let s = jsyaml.dump(DB);
		document.myform.myarea.value = s;
		document.myform.submit();
	}
	</script>

	<script src='start.js'></script>
</body>

</html>
